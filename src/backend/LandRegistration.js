import Web3 from "web3"
const web3Provider = new Web3(Web3.givenProvider);
let selectedAccount;
let NewContract ;

async function SignInMetamask () {
  // Creating Instance Of Web3
  try {
    if (window.ethereum) {
      const web3Provider = new Web3(Web3.givenProvider);
      console.log(web3Provider);
      let account = await window.ethereum.request({ method: "eth_requestAccounts" });
      console.log(account);
      selectedAccount = account[0];
      
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
      console.log(account); 
    } catch (error) {
      console.log("account_error", error);
    }
  };

 async function loadContract (){
    try {
      const todojson = await fetch("/build/contracts/LandRegistration.json");
      const todolist = await todojson.json();
      const networkid = Object.keys(todolist.networks)[0];
      const contractAddress = todolist.networks[networkid].address;
      //  Creating Contract Instance For Solidity functions
       NewContract = new web3Provider.eth.Contract(
        todolist.abi,
        contractAddress
      );
      console.log(NewContract, "newcontract");
    } catch (error) {
      console.log("load_contract_error", error);
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



  export {
    loadWeb3,
    loadAccount,
    loadContract,
    SignInMetamask

  }
  