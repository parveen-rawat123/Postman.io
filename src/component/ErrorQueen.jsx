import { Box, Typography } from "@mui/material"

const ErrorQueen = () => {
  return (
    <Box>
        <Typography mt={2} mb={2}> Responce
            <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
                <img src="Error.png" alt="error"  className="error"/>
            </Box>
        </Typography>
    </Box>
  )
}

export default ErrorQueen
