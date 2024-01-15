import React from "react";
import { useState } from "react";
import { uploadImages } from "../helpers/image.helper";

export default function Uploadimage(props) {
  const [uploadImage, setUploadImage] = useState([]);
  const [previewURL, setPreviewURL] = useState([]);

  //   const { uploadImage, setUploadImage } = props
  const fileTypes = ["image/png", "image/jpeg", "image/PNG", "image/JPEG"];
  const handleUploadd = (e) => {
    let {
      previewImagesURLArr = [],
      uploadImagesArr = [],
      imageFormatErr = false,
    } = uploadImages(e);
    if (imageFormatErr) {
      console.warn("wrong image format");
    } else {
      setUploadImage((prev) => [...prev, ...uploadImagesArr]);
      setPreviewURL((prev) => [...prev, ...previewImagesURLArr]);
    }
  };

  console.log("uploadImage", uploadImage);
  console.log("previewURL", previewURL);
  return (
    <>
      <div className="image-upload">
        <label for="file-input">
          <img
            className="upload-icon"
            src="https://img.icons8.com/office/80/000000/upload--v1.png"
          />
        </label>
        <input
          multiple
          draggable={true}
          id="file-input"
          type="file"
          onChange={handleUploadd}
        />
      </div>
      {previewURL.map((item, id) => (
        <img key={id} src={item} alt="img" width="300px" height="400px" />
      ))}
    </>
  );
}
