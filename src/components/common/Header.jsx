import { useState } from 'react';

import { AppBar, Toolbar, styled, Box, Typography, InputBase } from '@mui/material';
import { Menu, BookmarkAdd, ExpandMore } from '@mui/icons-material';


import { logoURL } from '../../constants/constant';
import { useNavigate } from 'react-router-dom';
import { routhPath } from '../../constants/Route';


//components
import HeaderMenu from './HeaderMenu';

const StyledToolBar = styled(Toolbar)`
background: #121212;
min-height: 56px !important;
padding: 0 300px !important;
justify-content: space-between;
& > * {
    padding: 0 16px;
}
& > div {
    display: flex;
    align-items: center;
    cursor: pointer;
    & > p {
        font-size: 16px;
        font-weight: 600;
    }
}
`;

const InputSearchField = styled(InputBase)`
background: #FFFFFF;
height: 30px;
width: 50%;
border-radius: 5px;
placeholder: "Hello";
`;

const Logo = styled('img')({
    width: 64,
    cursor: 'pointer'
})

const Header = () => {

    const [open, setOpen] = useState(null);

    const navigate = useNavigate();

    const handleClick = (e) => {
        setOpen(e.currentTarget);
    }

    const handleClose = () => {
        setOpen(null);
    }

    return (
        <AppBar position='static'>
            <StyledToolBar>
                <Logo src={logoURL} alt='logo' onClick={() => navigate(routhPath.home)} />
                <Box onClick={handleClick}>
                    <Menu />
                    <Typography>Menu</Typography>
                </Box>
                <HeaderMenu open={open} handleClose={handleClose} />
                <InputSearchField placeholder='Search IMDb..!!' />
                <Typography style={{ fontSize: 17, fontWeight: 900 }}>IMDb<Box component="span" color='#57B6CD' style={{ fontSize: 17, fontWeight: 900 }}>Pro</Box></Typography>
                <Box>
                    <BookmarkAdd />
                    <Typography>Watchlist</Typography>
                </Box>
                <Typography style={{ fontSize: 15, fontWeight: 600 }}>Sign In</Typography>
                <Box>
                    <Typography>EN</Typography>
                    <ExpandMore />
                </Box>
            </StyledToolBar>
        </AppBar>
    )
}

export default Header; 