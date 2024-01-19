import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography } from '@mui/material';
import SelectPackage from './selectPackage';
import AddIcon from '@mui/icons-material/Add';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

const options = [
    'Add Product',
    'View Product'
];

const ITEM_HEIGHT = 48;

export default function LongMenu({ viewProduct, packs }) {

    const navigate = useNavigate();
    const [dialogOpen, setDialogOpen] = React.useState(false);
    const [packPrice, setPackPrice] = React.useState([packs[0]?.price])
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const onChangePack = (price) => {
        setPackPrice(price)
    }
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const openDialog = () => {
        setDialogOpen(!dialogOpen)
    }
    const handleClose = (content) => {
        console.log("content", content)
        if (content == 'View Product') {
            console.log("contentssssss", viewProduct)
            navigate(viewProduct)
        }
        else if (content == 'Add Product') {
            openDialog();
        }
        setAnchorEl(null);
    };
    const addProductHandler = () => {
        setDialogOpen(!dialogOpen)
    }

    return (
        <div>
            <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreVertIcon />
            </IconButton>
            <Menu
                id="long-menu"
                MenuListProps={{
                    'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '20ch',
                    },
                }}
            >
                {options.map((option) => (
                    <MenuItem style={{ background: 'transparent' }} key={option} selected={option === 'Pyxis'} onClick={(e) => handleClose(option)}>
                        <Button style={{color:'black'}} startIcon={option == 'Add Product'?< AddIcon/>:<RemoveRedEyeIcon/>}>
                            {option}
                        </Button>
                    </MenuItem>
                ))}
            </Menu>
            <Dialog
                open={dialogOpen}
                onClose={openDialog}
            >
                <DialogTitle>Select Packs</DialogTitle>
                <DialogContent>
                    <SelectPackage packs={packs} onChangePack={onChangePack} width={150} />
                    <Typography variant="subtitle1" component="div">
                        Pack Price: {packPrice}
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={openDialog}>Cancel</Button>
                    <Button onClick={addProductHandler}>Add Product</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}