const initialState = {
  authenticated: false,
  userType: "",
};

const loginState = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      const { token } = action.payload;
      const { userType } = action.payload;
      // console.log(userType)

      localStorage.setItem("token",token);
      localStorage.setItem("userType",userType);
      // return state=token
      return {
        ...state,
        authenticated: true,
      };

    case "LOGOUT":
      localStorage.removeItem("token");
      localStorage.removeItem("userType");
      return (state = false);
    default:
      return state;
  }
};

export default loginState;
