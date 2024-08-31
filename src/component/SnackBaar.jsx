import { Snackbar } from "@mui/material";

const SnackBaar = ({error, seterror, errormessage}) => {

const handleClose = ()=>{
    seterror(false)
}

    return (
        <div>
            <Snackbar
                open={error}
                autoHideDuration={4000}
                onClose={handleClose}
                message={errormessage}
            />
        </div>
    )
}

export default SnackBaar;
