import { TextareaAutosize, Typography } from "@mui/material";
import { useContext } from "react";
import { DataContext } from "../context/DataProvider";


const CreatejsonText = () => {

  const {setjsonText} = useContext(DataContext)

  const onValueChange = (e)  =>{
    setjsonText(e.target.value)
  };

  return (
    <>
      <Typography mt={2} mb={2}>
        JSON
      </Typography>
      <TextareaAutosize
        className="textarea"
        minRows={5}
        onChange={onValueChange}

      />
    </>
  )
}

export default CreatejsonText
