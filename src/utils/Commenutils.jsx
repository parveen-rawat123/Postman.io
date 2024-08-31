
const checkValidJson = (jsonText) =>{
    if (/^[\],:{}\s]*$/.test(jsonText.replace(/\\["\\\/bfnrtu]/g, '@').
        replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
        replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
            return true;
    }else{
        return false;
    }
}

export const checkParams = (formData, paramsData, headersData, jsonText, seterrormessage) => {
      if(!formData.url){
        seterrormessage('request url is missing')
           return false
      }
      if(!checkValidJson(jsonText)){
        seterrormessage('text not valid json')
           return false
      }
       
      return true

}

