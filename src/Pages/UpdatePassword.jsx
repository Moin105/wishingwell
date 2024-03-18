import React from "react";
import "../Styles/changepassword.css";
import CustomInput from "../Components/Input/CustomInput";
import Header from "../Components/Header/Header";
function UpdatePassword() {
  return (
    <>
    <Header/>
    <h3>Update  Password</h3>
    <div className="password-modal">
    
      <div className="passwordmodal">
        <CustomInput label="Existing Password" type="text" placeholder="" />
        <CustomInput label="New Password" type="text" placeholder="" />
        <CustomInput label="Confirm New Password" type="text" placeholder="" />
        <button className="custom-button">
            Update
        </button>
      </div>
    </div></>
  );
}

export default UpdatePassword;
