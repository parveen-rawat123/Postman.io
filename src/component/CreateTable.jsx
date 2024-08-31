import { Box, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material"
import Addrow from "./Addrow";
import { useState } from "react";

const CreateTable = ({ text, Data, setData }) => {

    const [rows, addrows] = useState([0])
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
                    {rows.map((index) => (
                        <Addrow addrows={addrows}
                            key={index}
                            rowId={index}
                            Data = {Data}
                            setData = {setData}
                        />
                    ))}

                </TableBody>
            </Table>
        </Box>
    )
}

export default CreateTable;