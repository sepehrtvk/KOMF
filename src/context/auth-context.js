import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  fname: "",
  lname: "",
  phone: "",
  email: "",
  role: "",
  isLoggedIn: false,
  login: (token) => {},
  setData: () => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const userIsLoggedIn = !!token;

  const loginHandler = (token) => {
    setToken(token);
  };

  const logoutHandler = () => {
    setToken(null);
  };

  const setData = (fname, lname, phone, email, role) => {
    setFname(fname);
    setLname(lname);
    setPhone(phone);
    setEmail(email);
    setRole(role);
  };

  const contextValue = {
    token: token,
    fname: fname,
    lname: lname,
    phone: phone,
    email: email,
    role: role,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    setData: setData,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
