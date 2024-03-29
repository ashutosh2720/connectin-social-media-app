import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { Link, useNavigate } from "react-router-dom";
import { useGlobalLogin } from '../../contexts/login-context';

export default function AccountMenu() {
    const { userToken, logoutUser, userDetail } = useGlobalLogin()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate()

    const logoutAction = () => {
        logoutUser()

    }
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <React.Fragment>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>

                <Tooltip title="Account settings">
                    <IconButton
                        onClick={handleClick}
                        size="large "
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        {/* <Avatar sx={{ width: 32, height: 32 }}>M</Avatar> */}
                        {
                            userToken ? <div className='border-2 rounded-full'>
                                {userDetail?.avatarUrl ? <img src={userDetail?.avatarUrl} alt="" className='h-[40px] w-[40px] rounded-full' /> : <img src="https://img.freepik.com/free-icon/user_318-159711.jpg" alt="" className='h-[40px] w-[40px] rounded-full' />}
                            </div> : ''
                        }
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem className='p-2 m-2' onClick={() => navigate(`/profile/${userDetail?.username}`)} na>
                    <img src={userDetail?.avatarUrl} alt="" className='h-[40px] w-[40px] rounded-full' /> Profile
                </MenuItem>

                <Divider />


                <MenuItem onClick={logoutAction}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </React.Fragment>
    );
}