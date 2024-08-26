import { Box, TextareaAutosize, Typography } from "@mui/material"


const Response = () => {
  return (
  <Box>
    <Typography mt={2} mb={2}>
        JSON
    </Typography>
    <TextareaAutosize
    className="textarea"
      minRows={8}
      disabled = "disabled"
    />
  </Box>
  )
}

export default Response
