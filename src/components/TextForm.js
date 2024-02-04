import React,{useState} from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("Uppercase button clicked "+ text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case","success");
        //props.onChange('up')
    }
    const handleLowClick=()=>{
        console.log("Uppercase button clicked "+ text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case","success");
        //props.onChange('up')
    }
    const handleClearClick=()=>{
        console.log("Clear button clicked "+ text);
        let newText=("");
        setText(newText);
        props.showAlert("Cleared Text","success");
        //props.onChange('up')
    }
    const handleOnChange=(event)=>{
        console.log("On Change");
        setText(event.target.value);
        //props.onChange('up')
    }
    const [text, setText]=useState("");
   // setText("welcome to text monster");
  return (
    <>
<div className='container' style={{color: props.mode==="dark"?"white":"black"}}>
<h1>{props.head1}</h1>
<div className="mb-3">
<label for="myBox" className="form-label">{props.heading} </label>
<textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==="dark"?"#0f1228":"white", color: props.mode==="dark"?"white":"black"}} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase letters</button>

<button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lower letters</button>
<button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear </button>
</div>
<div className="container my-3" style={{color: props.mode==="dark"?"white":"black"}}>
    <h2>Your text summary</h2>
    <p>{text.split(" ").length} words and {text.length} chars</p>
    <p>{0.008 * text.split(" ").length} minutes to read the given text</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter text to preview!"}</p>
</div>
</>
  )
}
TextForm.propTypes={ heading: PropTypes.string ,
head1 : PropTypes.string
}

TextForm.defaultProps={ heading: "Enter Text Here: ",
head1: "Text Analysis"

}                