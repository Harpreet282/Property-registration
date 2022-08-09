import Web3 from "web3"
async function loadWeb3 () {
    // Creating Instance Of Web3
    console.log(Web3,"Web 3");
    if (window.ethereum) {
      web3Provider = new Web3(Web3.givenProvider);
      console.log(web3Provider);
    } else {
      //If Metamask Not Installed Or Not Connected
      window.alert("please connect metamask");
    }
  };

  async function loadAccount () {
    try {
      // Request account access if needed
      account = await ethereum.request({ method: "eth_accounts" });
      console.log(account); 
    } catch (error) {
      console.log("account_error", error);
    }
  };

 const  loadContract =  async () => {
    try {
      const todojson = await fetch("../build/contracts/TodoList.json");
      const todolist = await todojson.json();
      const networkid = Object.keys(todolist.networks)[0];
      const contractAddress = todolist.networks[networkid].address;
      //  Creating Contract Instance For Solidity functions
      App.NewContractt = new App.web3Provider.eth.Contract(
        todolist.abi,
        contractAddress
      );
      console.log(App.NewContractt, "newcontract");
    } catch (error) {
      console.log("load_contract_error", error);
    }
  }


  export {
    loadWeb3,
    loadAccount,
    loadContract

  }