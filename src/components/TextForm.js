import React, { useState } from 'react';
import PropTypes from 'prop-types';

let time =0.0008;

export default function TextForm(props) {
    const [text, setText] = useState("Enter Text Here");
    const [isUpperCase, setIsUpperCase] = useState(true); // State to track if text is in upper case


    
    const handleCaseToggle = () => {
        setIsUpperCase(!isUpperCase); // Toggle the state between upper and lower case
        if (isUpperCase) {
            setText(text.toLowerCase()); 
            // Convert text to lower case if it was originally upper case
        } else {
            setText(text.toUpperCase()); 
            // Convert text to upper case if it was originally lower case
        }
    }

    const handleLowCase = () => {
        setText(text.toLowerCase());
        setIsUpperCase(false);
    };
    const handleUpCase = () => {
        setText(text.toUpperCase());
        setIsUpperCase(false);
    };

    const handelOnChange = (event) => {
        setText(event.target.value);
    }


    return (
        <>
        <div className='container'>
            <h1 className='heading'>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handelOnChange}></textarea>
            </div>
            <button className="btn mx-2" onClick={handleCaseToggle} >Convert Uppper and Lower</button>
            <button className="btn mx-2" onClick={handleUpCase}>Convert to upperCase</button>
            <button className="btn mx-2" onClick={handleLowCase}>Convert to lowerCase</button>

        
        
        </div>
        <div className="childcontainer my-5">
            <h1>Yout Text Summary</h1>
            <p>{text.split(" ").length} word, {text.length} characters</p>

            <p>{time * text.split(" ").length} minuts read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>

        </>
    )
}

TextForm.propTypes = {
    heading: PropTypes.string
}