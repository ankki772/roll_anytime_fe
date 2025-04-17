import { toast } from "react-toastify";

const toastInfo = (msg) => toast.info(msg);
const toastSuccess = (msg) => toast.success(msg);
const toastWarn = (msg) => toast.warn(msg);
const toastError = (msg) => toast.error(msg);
const toastDark = (msg) => toast.dark(msg);

export {toastSuccess,toastDark,toastError,toastInfo,toastWarn}