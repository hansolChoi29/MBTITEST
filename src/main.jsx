import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// const queryClient=new QueryClient(); 이거 여기에, 절대 App.jsx안됨

createRoot(document.getElementById("root")).render(
  <>
    <App />
  </>
);
