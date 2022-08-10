
import Web3 from "web3";
import React,{Components} from "react";

import propertyRegisterJson from "contracts/PropertyRegistration.json";
const web3Provider = new Web3(Web3.givenProvider);
let selectedAccount;
let NewContract;

const state = {}


    
async function loadContract() {
    

  try {
    console.log(propertyRegisterJson,"propertyRegisterJson")
    // const propertyRegisteration = await propertyRegisterJson.json();
    const networkid = Object.keys(propertyRegisterJson.networks)[0];
    const contractAddress = propertyRegisterJson.networks[networkid].address;
    //  Creating Contract Instance For Solidity functions

     NewContract = new web3Provider.eth.Contract(
      propertyRegisterJson.abi,
      contractAddress
    );
    console.log(NewContract, "newcontract");
  } catch (error) {
    console.log("load_contract_error", error);
  }
}

loadContract();

  async function SignInMetamask() {
  // Creating Instance Of Web3
  try {
    if (window.ethereum) {
      const web3Provider = new Web3(Web3.givenProvider);
      console.log(web3Provider);
       account = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log(account);
      selectedAccount = account[0];



      const AdminCheck = await NewContract.methods.bothAdminsCheck(selectedAccount).call();
      console.log(AdminCheck,"admin checked");

      return AdminCheck
      

    } else {
      //If Metamask Not Installed Or Not Connected
      window.alert("please connect metamask");
    }
  } catch (error) {
    console.log("login_fun_error", error);
  }

};



async function loadWeb3 () {
    // Creating Instance Of Web3
    if (window.ethereum) {
      console.log(web3Provider);
    } else {
      //If Metamask Not Installed Or Not Connected
      window.alert("please connect metamask");
    }
  };





  async function loadAccount () {
    try {
      // Request account access if needed
      const account = await window.ethereum.request({ method: "eth_accounts" });
      await this.UpdateAcc()
      selectedAccount = account[0]
      console.log(account); 
    } catch (error) {
      console.log("account_error", error);
    }
  };
 

  async function UpdateAcc () {
    // If User Change his Account
    try {
      await window.ethereum.on("accountsChanged", async function (accounts) {
        console.log(accounts, "account changed");
        selectedAccount = accounts[0];  
      });
    } catch (error) {
      console.log("Update_Acc_error", error);
    }
  };

//Getter Functions
async function getUserProfile(user_Address) {
  try {
    const response = await NewContract.methods
      .getUserProfile(user_Address)
      .call();
    return response;
  } catch (error) {
    console.log("Get User Profile Error", error);
  }
}


async function getUserProperty(property_Id) {
  try {
    const response = await NewContract.methods
      .getpropertybyPID(property_Id)
      .call();
    return response;
  } catch (error) {
    console.log("Get User Property Error", error);
  }
}
//Set Functions
async function addAdmin(
  adminAddress,
  name,
  city,
  district,
  state,
  addProp,
  transProp
) {
  try {
    await NewContract.methods
      .addAdmin(adminAddress, name, city, district, state, addProp, transProp)
      .send({
        from: selectedAccount,
        gas: 0x93900,
      });
  } catch (error) {
    console.log("Add Admin Error", error);
  }
}

async function addProperty(
  previousOwner,
  newownerAddress,
  ownerName,
  purchasedBy,
  pincode,
  area,
  areaAddress,
  mobile,
  landPrice
) {
  try {
    await NewContract.methods
      .addProperty(
        previousOwner,
        newownerAddress,
        ownerName,
        purchasedBy,
        pincode,
        area,
        areaAddress,
        mobile,
        landPrice
      )
      .send({
        from: selectedAccount,
        gas: 0x93900,
      });
  } catch (error) {
    console.log("Add_property Error", error);
  }
}


async function addUser(userAddress,fullName,email,contact,residentialAddress){
    try {
        await NewContract.methods.addUser(userAddress,fullName,email,contact,residentialAddress).send({
            from : selectedAccount,
            gas : 0x93900
        })
    } catch (error) {
        console.log("adduser Error",error);
    }
}

async function transferProperty(previousOwnerAdd,newOwnerAdd,newOwnerName,newOwnerPhone,newLandPrice){
    try {
        await NewContract.methods.transferProperty(previousOwnerAdd,newOwnerAdd,newOwnerName,newOwnerPhone,newLandPrice).send({
            from : selectedAccount,
            gas : 0x93900
        })

    } catch (error) {
        console.log("transferProperty Error",error);
    }
}




export {
  loadWeb3,
  loadAccount,
  loadContract,
  SignInMetamask,
  UpdateAcc,
  getUserProfile,
  getUserProperty,
  addAdmin,
  addProperty,
  addUser,
  transferProperty
};
