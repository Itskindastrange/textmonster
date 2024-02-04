
import { useState } from 'react';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const[mode,setMode]=useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setAlert(null);
      },1600);
  }
  const toggleMode=()=>{
    if(mode==="light")
    {
      setMode("dark");
      document.body.style.backgroundColor='#0e101e';
      //console.log("dark mode pressed");
      showAlert("Dark mode has been enabled!","success");
    }
    else
    {
      setMode("light");
      document.body.style.backgroundColor='white';
      //console.log("light mode pressed");
      showAlert("Light mode has been enabled!","success");
    }
  }
  return (
    <>

    <Navbar  aboutText="AboutUs" home="Home" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3" >
    <TextForm showAlert={showAlert}heading="Enter Text:" mode={mode}/>
    {/* <About/> */}
    </div>
    
    </>
  );
}

export default App;
