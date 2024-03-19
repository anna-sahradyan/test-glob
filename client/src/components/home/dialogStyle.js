import {styled} from "@mui/material/styles";
import {Dialog} from "@mui/material";

 export const BootstrapDialog = styled(Dialog)(({theme}) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
    '& .MuiDialog-paper': {
        padding: '24px',
        width: '500px',
        height: '468px',
    },
}));
