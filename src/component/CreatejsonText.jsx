import {TextareaAutosize,   Typography } from "@mui/material";

const CreatejsonText = () => {
  return (
    <>
    <Typography mt={2} mb={2}>
        JSON
    </Typography>
    <TextareaAutosize
    className="textarea"
      minRows={5}
    />
    </>
  )
}

export default CreatejsonText
