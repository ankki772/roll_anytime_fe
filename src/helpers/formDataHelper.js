export const formDataHelper = (values)=>{
let formValues = Object.entries(values)
let formData = new FormData();

for (let [key, val] of formValues){
     formData.append(key,val)
  }
  return  formData;
}