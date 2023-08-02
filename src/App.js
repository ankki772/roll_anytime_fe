import { useRoutes } from "react-router-dom";
import { routes } from "./routes";
import UserProvider from "./Contexts/userContext";
function App() {
  const route = useRoutes(routes);
  return (
    <>
      <UserProvider>{route}</UserProvider>
    </>
  );
}

export default App;
