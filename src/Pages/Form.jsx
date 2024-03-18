import React, { useState } from 'react';
import CustomSelect from "../Components/CustomSelect";
import CustomInput from "../Components/Input/CustomInput";
import "../Styles/FormPage.css";
import { FaHeart } from "react-icons/fa6";
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Link } from 'react-router-dom';
import Header from '../Components/Header/Header';
const countryOptions = [
    { label: "Australia", value: "AU" },
    { label: "United States", value: "US" },
    { label: "Canada", value: "CA" },
    { label: "United Kingdom", value: "UK" },
    { label: "Germany", value: "DE" },
    { label: "France", value: "FR" },
    { label: "Japan", value: "JP" },
    { label: "China", value: "CN" },
    { label: "India", value: "IN" },
    { label: "Brazil", value: "BR" }
  ];

function Form() {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

  return (
    <>
    <Header />
    <div className="form-page">
      {/* <header className="form-header">
        <div className="header-content">
          <h3 className="logo">SendWish</h3>
          <p className="help">HELP</p>
        </div>
      </header> */}
      <div className="container form-content">
        <p className="title">Elen & Ben</p>
        <CustomInput
          label="Name"
          type="text"
          placeholder="Name"
        />
        <p className="text">We are so excited to celebrate with you!</p>
        <p className="text">If you would like to give us a gift, we would be grateful for a contribution to our wishingwell - this will help make our house a home!</p>
        <p className="text">We would also love if you could leave a message below in lieu of a card.</p>
        <p className="text">Can't wait to see you soon!</p>
        <p className="text"><FaHeart className="heart" /> Elie & Ben</p>
        <hr />
        <Editor
            editorState={editorState}
            onEditorStateChange={setEditorState}
            toolbar={{
            options: ['inline', 'emoji'],
            inline: {
                inDropdown: false,
                options: ['bold', 'italic', 'underline'],
            },
            emoji: true,
            }}
        />
        <div className="inputs-wrapper">
            <CustomInput
            label="Gift"
            type="number"
            placeholder="$"
            />
            <CustomInput
            label="From"
            type="text"
            placeholder=""
            />
        </div>
        <CustomInput
          label="Email"
          type="email"
          placeholder=""
        />
        <CustomSelect label="Country" options={countryOptions} />
       <Link to="/price-page">
       <button className="custom-button">Next</button>
       </Link> 
      </div>
    </div>
    </>
  );
}

export default Form;
