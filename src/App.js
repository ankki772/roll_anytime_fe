import { useRoutes } from "react-router-dom";
import { routes } from "./routes";
import UserProvider from "./Contexts/userContext";
import { ToastContainer } from "react-toastify";
function App() {
  const route = useRoutes(routes);
  return (
    <>
      <UserProvider>{route}</UserProvider>
      
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default App;
