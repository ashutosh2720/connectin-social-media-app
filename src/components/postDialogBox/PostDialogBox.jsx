import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import IosShareIcon from '@mui/icons-material/IosShare';
import { useGlobalTheme } from '../../contexts/Theme-context';
import { useGlobalPost } from '../../contexts/post-context';
import { useState } from 'react';
import { useGlobalLogin } from '../../contexts/login-context';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
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
                        position: 'absolute',
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

export default function PostDialogBox() {
    const [newPost, setNewPost] = React.useState()
    const [newPostData, setNewPostData] = useState()
    const { userDetail } = useGlobalLogin()


    const { theme } = useGlobalTheme()
    const { NewPost } = useGlobalPost()
    const [open, setOpen] = React.useState(false);

    function handlePost() {
        NewPost({ username: userDetail.username, content: newPost })
        setOpen(false);


    }

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <p onClick={handleClickOpen} className='cursor-pointer' >Post</p>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <div className={`${theme === 'dark-theme' ? 'bg-neutral-900	 text-white' : 'bg-white text-black border-2 border-black-800'} p-6  rounded-lg`}>
                    <h1 className="p-10">post</h1>
                    {/* <input value={newPost} type="text" name="" id="" className='p-10' onChange={(e) => setNewPost(e.target.value)} /> */}
                    <textarea className={`${theme === 'dark-theme' ? 'bg-neutral-900	 text-white' : 'bg-white text-black'} p-3 resize-none outline-none border-none`} placeholder='whats happening' id=" add-post-input-filed" cols="30" rows="10" onChange={(e) => setNewPost(e.target.value)}></textarea>
                    <hr className='w-[100%]' />
                    <DialogActions>

                        <h1 className="bg-cyan-800  text-white border rounded pl-2 pr-2 pb-1 hover:bg-cyan-600 cursor-pointer" onClick={handlePost}

                        >
                            Post
                        </h1>
                    </DialogActions>
                </div>
            </BootstrapDialog >
        </div >
    );
}