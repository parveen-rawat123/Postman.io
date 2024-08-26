import { Box, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material"
import Addrow from "./Addrow";

const CreateTable = ({ text }) => {
    return (
        <Box>
            <Typography mt={2} mb={2}>
                {text}
            </Typography>
            <Table sx={{ minWidth: '100%', border: '1px solid rgba(224, 224,224,1)' }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className="tableCell"></TableCell>
                        <TableCell className="tableCell">KEY</TableCell>
                        <TableCell className="tableCell">VALUE</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <Addrow />
                </TableBody>
            </Table>
        </Box>
    )
}

export default CreateTable;