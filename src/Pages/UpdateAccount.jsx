import React from "react";
import "../Styles/UpdateAccount.css";
import CustomInput from "../Components/Input/CustomInput";
import Header from "../Components/Header/Header";
function UpdateAccount() {
  return (
    <>
    <Header/>
    <h3>Update Bank Account</h3>
    <div className="account-modal">
    
      <div className="accountmodal">
        <CustomInput label="Account Name" type="text" placeholder="$" />
        <CustomInput label="BSB" type="text" placeholder="" />
        <CustomInput label="Account Number" type="text" placeholder="" />
        <button className="custom-button">
            Update
        </button>
      </div>
    </div></>
  );
}

export default UpdateAccount;
