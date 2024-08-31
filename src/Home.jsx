import Form from "./component/Form"
import Header from "./component/Header"
import SelecTab from "./component/CustomTabPanel"
import Response from "./component/Response"
import ErrorQueen from "./component/ErrorQueen"
import axios from "axios";
import { useContext, useState } from "react"
import { DataContext } from "./context/DataProvider";
import {checkParams}  from "./utils/Commenutils"
import SnackBaar from "./component/SnackBaar"

const Home = () => {

  const { formData, paramsData, headersData, jsonText } = useContext(DataContext);
  
  const [error, seterror]  = useState(false)
  const [errormessage, seterrormessage] = useState('');

  const onSendClick = () => {
    if(!checkParams(formData, paramsData, headersData, jsonText, seterrormessage )){
      seterror(true)
        return  false;
    }
  };

  return (
    <>
      <Header />
      <div className="w-[60%] mx-auto my-4">
        <Form onClick={onSendClick} />
        <SelecTab />
        {/* <Response/>   */}
        <ErrorQueen/> 
        {error && <SnackBaar error={error} seterror={seterror}  errormessage={errormessage}/>}
        
      </div>
    </>
  )
}

export default Home
