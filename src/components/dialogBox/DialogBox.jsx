import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { useGlobalTheme } from "../../contexts/Theme-context";
import { useState } from "react";
import { useGlobalPost } from "../../contexts/post-context";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
        padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
        padding: theme.spacing(1),
    },
}));

function BootstrapDialogTitle(props) {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: "absolute",
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
}

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

export default function DialogBox(post) {
    console.log(post)

    const [open, setOpen] = React.useState(false);
    const [content, setContent] = useState(post.post.content); // Initial content state
    const [isEditing, setIsEditing] = useState(false); // State to track editing mode


    const { theme } = useGlobalTheme()
    const { EditPost } = useGlobalPost()

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleInputChange = (event) => {
        setContent(event.target.value); // Update content state on input change
    };

    const handleEditClick = () => {
        setIsEditing(true); // Enable editing mode
    };

    const handleSaveClick = () => {
        setIsEditing(false); // Disable editing mode
        // Here you can perform additional logic or API calls to save the content
    };

    return (
        <div>
            <p onClick={handleClickOpen} className="cursor-pointer">
                Edit
            </p>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}

            >
                <div className={`${theme === 'dark-theme' ? 'bg-neutral-900	 text-white' : 'bg-white text-black border-2 border-black-800'} p-5  rounded-lg`}>
                    <h1 className="p-10">edit post</h1>
                    <textarea type="text" name="" id="" value={content} className={`${theme === 'dark-theme' ? 'bg-neutral-900	 text-white' : 'bg-white text-black'}p-10 resize-none outline-none border-none`} onChange={handleInputChange} />

                    <DialogActions>
                        <h1 className="bg-cyan-800 text-white border rounded pl-2 pr-2 pb-1 hover:bg-cyan-600 cursor-pointer " onClick={() => EditPost({ username: post.username, content: content })}>
                            update
                        </h1>
                    </DialogActions>
                </div>
            </BootstrapDialog>
        </div>
    );
}
