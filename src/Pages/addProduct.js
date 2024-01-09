import React, { useState } from "react";
import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getCookies } from "../helpers/cookiehelper";
 
 

const AddProduct = () => {
  
  const navigate=useNavigate()
  let {token} = getCookies("token");

  const [addProduct, setAddProduct] = useState({
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

    setAddProduct((prevProduct) => ({
      ...prevProduct,
      [name]: type === "file" ? file : value,
    }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();

      // Append each field of addProduct to formData
      for (const key in addProduct) {
        formData.append(key, addProduct[key]);
      }

      console.log("@@@", addProduct);

      // Make sure to use formData instead of addProduct directly
      const response = await axios.post(
        "https://rollanytime.onrender.com/api/RA/api/RA/product/addProduct",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "authorization": `bearer ${token}`,
          },
        }
      );
      console.log(response);
      if (response.status === 200) {
        alert(response.data.message.message);
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
          height: "100vh",
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
                label="product_name"
                margin="normal"
                fullWidth
                type="text"
                name="product_name"
                value={addProduct.product_name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                label="product_category"
                margin="normal"
                fullWidth
                type="text"
                name="product_category"
                value={addProduct.product_category}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                label="product_brand"
                margin="normal"
                fullWidth
                type="text"
                name="product_brand"
                value={addProduct.product_brand}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                label="product_description"
                margin="normal"
                fullWidth
                type="text"
                name="product_description"
                value={addProduct.product_description}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                label="product_code"
                margin="normal"
                fullWidth
                type="number"
                name="product_code"
                value={addProduct.product_code}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                label="pricing"
                margin="normal"
                fullWidth
                type="number"
                name="pricing"
                value={addProduct.pricing}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                label="rating"
                margin="normal"
                fullWidth
                type="number"
                name="rating"
                value={addProduct.rating}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                label="quantity"
                margin="normal"
                fullWidth
                type="number"
                name="quantity"
                value={addProduct.quantity}
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
