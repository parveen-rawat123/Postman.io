
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
        seterrormessage('Request URL Is Missing')
           return false
      }
      if(!checkValidJson(jsonText)){
        seterrormessage('Text Not Valid Json')
           return false
      }
      return true

};

export const getHeaderAndParams = (objArr) =>{
   let obj = {}
   objArr.forEach(element => {
    if(element.hasOwnProperty('ckeck') && element.check){
        obj = {...obj, [element.key]: element.value}
   }
   });
   return obj;
};

