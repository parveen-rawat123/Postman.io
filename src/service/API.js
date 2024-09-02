import axios from "axios";
import {getHeaderAndParams}  from "../utils/Commenutils"



export const getData = async (formData, paramsData, headersData, jsonText) =>{
    const apiType =  formData.type.toLowerCase();
    const apiURL = formData.url;
    const apiHeaders = getHeaderAndParams(headersData)
    const apiParams = getHeaderAndParams(paramsData)
    try {
     return await axios({
           method : apiType,
           url :  apiURL,
           body : jsonText,
           headers : apiHeaders,
           params : apiParams
        })        
    } catch (error) {
        console.log("error while calling API")
        return error
    }
}