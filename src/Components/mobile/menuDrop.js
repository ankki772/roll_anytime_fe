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
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { getUsercartData } from '../../Api/Services/user';
import { useDispatch, useSelector } from 'react-redux';
import { addDataTocart } from '../../Redux/action';
import { toastError, toastSuccess } from '../../helpers/toastHelper';



const ITEM_HEIGHT = 48;

export default function LongMenu({ viewProduct, packs, product_id }) {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [dialogOpen, setDialogOpen] = React.useState(false);
    const [options, setOptions] = React.useState(['Add Product', 'View Product'])
    const [packPrice, setPackPrice] = React.useState([packs[0]?.price])
    const [selectedPack, setSelectedPack] = React.useState(packs[0])
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const cart = useSelector((state) => state.addcart)
    // console.log("first,cart",cart)
    // let options = [
    //     'Add Product',
    //     'View Product'
    // ];

    React.useEffect(() => {
        setSelectedPack(packs[0])
    }, [packs])



    React.useEffect(() => {
        ; (async () => {
            // console.log("menu drop is rendering")
            let cartResult = await getUsercartData();
            checkFilter(product_id, cartResult)

        })()
    }, [cart.status, packs])

    function checkFilter(keyword, array) {
        // console.log("filteringgggggg", keyword, array)
        let filterArr = array.filter((element) => {
            return element.product_id == keyword;
        })
        if (filterArr.length) {
            setOptions(["Go To Cart", 'View Product'])
        }
        else {
            setOptions(['Add Product', 'View Product'])
        }
    }


    const onChangePack = (price) => {
        setPackPrice(price)
        packs.forEach(element => {
            if (element.price == price) {
                setSelectedPack(element)
            }
        });
    }
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const openDialog = () => {
        setDialogOpen(!dialogOpen)
    }
    const handleClose = (content) => {
        // console.log("content", content)
        if (content == 'View Product') {
            navigate(viewProduct)
        }
        else if (content == 'Add Product') {
            openDialog();
        }
        else if (content == 'Go To Cart') {
            navigate('/cart')
        }
        setAnchorEl(null);
    };
    const addProductHandler = () => {
        let bodyData = {
            product_id,
            product_pack: selectedPack
        }
        try {
            dispatch(addDataTocart(bodyData))
            toastSuccess('Item added to cart!');
          } catch (error) {
            toastError(error.message); // Display error message if adding item fails
          }

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
                        <Button style={{ color: 'black' }} startIcon={option == 'Add Product' ? < AddIcon /> : option == 'Go To Cart' ? <ShoppingCartIcon /> : <RemoveRedEyeIcon />}>
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