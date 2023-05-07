import { useRoutes } from "react-router-dom";
import { routes } from "./routes";
import USerProvider from "./Contexts/userContext";
function App() {
  const route = useRoutes(routes);
  return (
    <>
      <USerProvider>{route}</USerProvider>
    </>
  );
}

export default App;
