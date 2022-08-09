// SPDX-License-Identifier: GPL-3.0
pragma solidity >= 0.5.0 < 0.9.0;

contract PropertyRegistration{
 
    uint private landscount;
    address public superAdmin;
    uint public totalAdmins;
    uint public _propertyId = landscount+1001;

struct Admin{
        address adminAddress;
        string name;
        string city;
        string district;
        string state;
        bool transferP;
        bool addP;
    }
    struct UserProfile{
        address userAddr;
        string fullName;
        string email;
        uint256 contact;
        string residentialAddr;
        uint propertyOwned;
        
    }
    struct property{
        uint area_sq;
        address purchasedBy;
        address ownerAddress;
        string areaAddress;
        string ownerName;
        string previousOwner;
        uint mobile;
        uint landPrice;
        uint property_Id;
        uint pincode;
    }

     mapping(address => Admin) private admins;

     mapping(address => UserProfile) private userProfile;

     mapping(uint => property) public userProperty;



 constructor(){
        superAdmin = msg.sender;
    }

//Checks SuperAdmin
modifier onlySuperAdmin(){
        require(superAdmin == msg.sender, "Only Super Admin can Add the Admin");
        _;
    }
//Checks Admin
modifier onlyAdmin(){
        require(admins[msg.sender].adminAddress == msg.sender, "Only admin has the Authorization to Add");
        _;
    }
//Checks Both
modifier SuperOrAdmin(){
        require(admins[msg.sender].adminAddress == msg.sender || superAdmin == msg.sender , "Only admin has the Authorization to Add");
        _;
    }


function addAdmin(address _adminAddr, string memory _state, bool _addP,bool _transP,string memory _name,string memory _district, string memory _city) external onlySuperAdmin{
        Admin storage newAdmin = admins[_adminAddr];
        totalAdmins++;

        newAdmin.adminAddress = _adminAddr;
        newAdmin.name = _name;
        newAdmin.city = _city;
        newAdmin.district = _district;
        newAdmin.state = _state;
        newAdmin.transferP = _transP;
        newAdmin.addP = _addP;
    }
  
    // User_1: set user profile
    function setUserProfile(address userAddress,string memory _fullName, string memory _email, uint256 _contact, string memory _residentialAddr) external onlyAdmin{
        
        UserProfile storage newUserProfile = userProfile[userAddress];
        newUserProfile.userAddr = userAddress;
        newUserProfile.fullName = _fullName;
        newUserProfile.email = _email;
        newUserProfile.contact = _contact;
        newUserProfile.residentialAddr = _residentialAddr;
    }

       // Add property
    function addProperty(string memory _previousOwner, address _ownerAddress,string memory _ownerName,address _purchasedBy,uint _pincode,uint _area, string memory _areaAddress,uint _mobile,uint _landPrice) public onlyAdmin{
        
        

        property storage newproperty = userProperty[_propertyId];

        // UserProfile storage newUserProfile = userProfile[_propertyId];

        // address[] ownArr;
        newproperty.previousOwner = _previousOwner;
        newproperty.ownerAddress = _ownerAddress;
        newproperty.ownerName = _ownerName;
        newproperty.purchasedBy = _purchasedBy;
        newproperty.property_Id= _propertyId;
        newproperty.area_sq = _area;
        newproperty.mobile = _mobile;
        newproperty.landPrice = _landPrice;
        newproperty.areaAddress = _areaAddress;
        newproperty.pincode = _pincode;
        //   ownArr.push(newproperty.ownerAddress);
        //   newUserProfile.propertyOwned = _propertyId;
        _propertyId++;
    }



//Get user Profile
    function getUserProfile(address _address) external view returns(string memory, string memory, uint256, string memory){
        
        string memory fullName = userProfile[_address].fullName;
        string memory email = userProfile[_address].email;
        uint256 contact = userProfile[_address].contact;
        string memory residentialAddr = userProfile[_address].residentialAddr;

        return(fullName, email, contact, residentialAddr);
    }
//Get Property
    function getpropertybyPID(uint Property_id) external view returns(string memory,address,address,uint,uint,string memory){
        string memory ownerName = userProperty[Property_id].ownerName;
        // address ownerAddress = userProperty[Property_id].ownerAddress;
        address ownerAddress = userProperty[Property_id].ownerAddress;
        address purchasedBy = userProperty[Property_id].purchasedBy;
        uint area = userProperty[Property_id].area_sq;
        uint mobile = userProperty[Property_id].mobile;
        string memory areaAddress = userProperty[Property_id].areaAddress;

        return (ownerName,ownerAddress,purchasedBy,area,mobile,areaAddress);
    }



//Property Transfer
    function transferProperty(string memory _previousOwner ,uint Property_id,address _newOwnerAddress,string memory new_ownerName,uint new_mobile,uint new_landPrice) external onlyAdmin{
        property storage newproperty = userProperty[Property_id];
        // newproperty.ownArr.push(new_User);
        newproperty.purchasedBy =newproperty.ownerAddress;
        newproperty.ownerAddress = _newOwnerAddress;
        newproperty.ownerName = new_ownerName;
        newproperty.previousOwner = _previousOwner;
        newproperty.mobile =  new_mobile;
        newproperty.landPrice = new_landPrice;

    }

function bothAdmins() public view returns(string memory,bool){

            if(superAdmin == msg.sender){
                return ("isSuperAdmin",true);
            }else if(admins[msg.sender].adminAddress == msg.sender){
                return ("isAdmin",true);
            }else{
                return ("User is bot Authenticated",false);
            }
}

    
}



