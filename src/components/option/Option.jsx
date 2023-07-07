import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import CreateIcon from '@mui/icons-material/Create';
import Fade from '@mui/material/Fade';
import DialogBox from '../dialogBox/DialogBox';
import { useGlobalPost } from '../../contexts/post-context';
import { useState } from 'react';

export default function FadeMenu({ post }) {
    const [isDelete, setIsDelete] = useState(false)
    const { DeletePost } = useGlobalPost()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
        setIsDelete(false)
    };

    const handleDelete = () => {
        DeletePost(post._id)

    }


    return (
        <div>
            <h1
                className='cursor-pointer'
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}><CreateIcon fontSize='small' /> </h1>

            <Menu
                id="fade-menu"
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <MenuItem > <DialogBox post={post} /></MenuItem>
                <MenuItem onClick={() => DeletePost(post._id)}>Delete</MenuItem>

            </Menu>
        </div>
    );
}