import React, { useState } from "react";
import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getCookies } from "../helpers/cookiehelper";
import { addProduct } from "../Api/Services/products";
 
 

const AddProduct = () => {
  
  const navigate=useNavigate()
  let {token} = getCookies("token");

  const [productDetail, setProductDetail] = useState({
    product_name: "",
    product_category: "",
    product_brand: "",
    product_description: "",
    product_code: "",
    pricing: "",
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

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();

      // Append each field of productDetail to formData
      for (const key in productDetail) {
        formData.append(key, productDetail[key]);
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
            <Grid item xs={12}>
              <TextField
                required
                label="Product Category"
                margin="normal"
                fullWidth
                type="text"
                name="product_category"
                value={productDetail.product_category}
                onChange={handleChange}
              />
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
                label="Cost of the Product"
                margin="normal"
                fullWidth
                type="number"
                name="pricing"
                value={productDetail.pricing}
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
