import { Checkbox, TableCell, TableRow, TextField } from '@mui/material'

const Addrow = () => {
    return (
        <TableRow>
            <TableCell className="tableCell two">
                <Checkbox className='checkBox'/>
            </TableCell>
            <TableCell className="tableCell two">
                <TextField className='textField'
                InputProps={{style:{height:30, padding:'0 5px'}}}/>
            </TableCell>
            <TableCell className="tableCell two">
            <TextField className='textField'
                InputProps={{style:{height:30, padding:'0 5px'}}}/>
            </TableCell>
        </TableRow>
    )
}

export default Addrow
