import React, { useEffect, useRef, useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getCookies } from "../helpers/cookiehelper";
import { addProduct } from "../Api/Services/products";
import { getAllCategories } from "../Api/Services/category";
import { capitalizeFirstLetter } from "../helpers/helper";



const AddProduct = () => {
  const categoryref = useRef(null)
  const navigate = useNavigate()
  const [categoryList, setCategoryList] = useState([])
  const [dialogOpen, setDialogOpen] = useState(false)
  let { token } = getCookies("token");


  useEffect(() => {
    ; (async () => {
      const categoriesList = await getAllCategories();
      if (categoriesList?.result) {
        setCategoryList(categoriesList?.result)
      } else {
        setCategoryList([]);
      }
    })()
  }, [])

  const openDialog = () => {
    setDialogOpen(!dialogOpen)
  }
  const [productDetail, setProductDetail] = useState({
    product_name: "",
    product_category: "",
    product_brand: "",
    product_description: "",
    product_code: "",
    product_pack: [{ size: '', price: '' }],
    rating: "",
    productImg: "",
    quantity: "",
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const file = type === "file" ? e.target.files[0] : null;

    setProductDetail((prevProduct) => ({
      ...prevProduct,
      [name]: type === "file" ? file : value,
    }));
  };
  const handlePackChange = (index, e) => {
    const { name, value } = e.target;
    setProductDetail((prevData) => {
      const updatedPack = [...prevData.product_pack];
      updatedPack[index][name] = value;
      return {
        ...prevData,
        product_pack: updatedPack,
      };
    });
  };
  const addPackField = () => {
    setProductDetail((prevData) => ({
      ...prevData,
      product_pack: [...prevData.product_pack, { size: '', price: '' }],
    }));
  };
  const handleCategory = () => {
    setCategoryList((prevProduct) => ([
      ...prevProduct,
      { ['category_name']: categoryref.current.value },
    ]));
    setProductDetail((prevProduct) => ({
      ...prevProduct,
      ['product_category']: categoryref.current.value,
    }));
    setDialogOpen(!openDialog)
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();

      // Append each field of productDetail to formData
      for (const key in productDetail) {
        if (typeof productDetail[key] === 'object' && Array.isArray(productDetail[key])) {
          formData.append(key, JSON.stringify(productDetail[key]));
        }
        else{
          formData.append(key, productDetail[key]);
        }
      }

      console.log("@@@", productDetail);

      // Make sure to use formData instead of productDetail directly

      const response = await addProduct(formData)
      console.log(response);
      if (response?.result.length) {
        alert(response?.message);
        navigate('/listing');
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        <Paper
          elevation={3}
          sx={{ width: "500px", padding: "20px", borderRadius: "20px" }}
        >
          <Typography
            textAlign={"center"}
            variant="h4"
            style={{ fontWeight: "bold" }}
          >
            Add Product
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                label="Product Name"
                margin="normal"
                fullWidth
                type="text"
                name="product_name"
                value={productDetail.product_name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <FormControl sx={{ width: '100%' }} fullWidth>
                <InputLabel id="demo-simple-select-autowidth-label" >Product Category</InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-labe"
                  id="demo-simple-select-helper"
                  value={productDetail.product_category ?? ''}
                  label="Product Category"
                  name="product_category"
                  onChange={handleChange}
                >
                  {categoryList.map((name, id) => (
                    <MenuItem
                      key={`${name?.category_name}${id}`}
                      value={name?.category_name ?? ''}
                    >
                      {capitalizeFirstLetter(name?.category_name)}
                    </MenuItem>
                  ))}
                  <MenuItem style={{ background: 'transparent' }} onClick={openDialog} data-testid="menuQuotesPlaceholderId">
                    <Button data-testid="addVendorId">
                      Add a Category
                    </Button>
                  </MenuItem>
                </Select>
              </FormControl>
              <Dialog
                open={dialogOpen}
                onClose={openDialog}
              >
                <DialogTitle>Product Category</DialogTitle>
                <DialogContent>
                  <TextField
                    required
                    label="Product Category"
                    margin="normal"
                    fullWidth
                    type="text"
                    name="product_category"
                    inputRef={categoryref}
                    value={productDetail.product_category}
                  // onChange={handleChange}
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={openDialog}>Cancel</Button>
                  <Button onClick={handleCategory}>Add a Category</Button>
                </DialogActions>
              </Dialog>
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                label="Product Brand"
                margin="normal"
                fullWidth
                type="text"
                name="product_brand"
                value={productDetail.product_brand}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                label="Product Description"
                margin="normal"
                fullWidth
                type="text"
                name="product_description"
                value={productDetail.product_description}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                label="Product Code"
                margin="normal"
                fullWidth
                type="number"
                name="product_code"
                value={productDetail.product_code}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                label="Rating"
                margin="normal"
                fullWidth
                type="number"
                name="rating"
                value={productDetail.rating}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                label="Quantity"
                margin="normal"
                fullWidth
                type="number"
                name="quantity"
                value={productDetail.quantity}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>Add Pack</Typography>
              <Grid container gap={4}>
                {productDetail?.product_pack.map((pack, index) => (
                  <>
                    <Grid item xs={5}>
                      <TextField
                        required
                        label="Pack Size"
                        margin="normal"
                        fullWidth
                        type="text"
                        name="size"
                        value={pack.size}
                        onChange={(e) => handlePackChange(index, e)}
                      />
                    </Grid>
                    <Grid item xs={5}>
                      <TextField
                        required
                        label="Pack Price"
                        margin="normal"
                        fullWidth
                        type="text"
                        name="price"
                        value={pack.price}
                        onChange={(e) => handlePackChange(index, e)}
                      />
                    </Grid>
                  </>
                ))}
                <Grid item xs={12}>
                  <Button variant="contained" fullWidth onClick={addPackField}>Add </Button>
                </Grid>
              </Grid>

            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                margin="normal"
                fullWidth
                type="file"
                name="productImg"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} mt={3}>
              <Button
                onClick={handleClick}
                variant="contained"
                fullWidth
                margin="normal"
                style={{ padding: "10px" }}
              >
                Add Product
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
};

export default AddProduct;
