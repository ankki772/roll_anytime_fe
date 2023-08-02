const fileTypes = ["image/png", "image/jpeg", "image/PNG", "image/JPEG"];
const uploadImages = (event) => {
  let imageFormatErr = false;
  let previewImagesURLArr = [];
  let uploadImagesArr = [];
  for (let i = 0; i < event.target.files.length; i++) {
    if (!fileTypes.includes(event.target.files[0].type)) {
      imageFormatErr = true;
      break;
    }
    previewImagesURLArr.push(URL.createObjectURL(event.target.files[i]));
    uploadImagesArr.push(event.target.files[i]);
  }
  return {
    imageFormatErr,
    previewImagesURLArr,
    uploadImagesArr,
  };
};

export { uploadImages };
