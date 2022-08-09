export const loginAccount = (token, userType) => ({
    type: "LOGIN",
    payload: {
      token,
      userType,
    },
  });
  
  export const logoutAccount = () => ({
    type: "LOGOUT",
  });