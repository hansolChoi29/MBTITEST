import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loginpage from "./pages/Loginpage.jsx";
import Signuppage from "./pages/Signuppage.jsx";
import Profilepage from "./pages/Profilepage.jsx";
import Home from "./pages/Home.jsx";
import TestPage from "./pages/TestPage.jsx";
import Layout from "./components/Layout.jsx";
import ProtectedRoute from "./components/ProtectedRoute .jsx";
import TestResultPage from "./pages/TestResultPage .jsx";
//데브툴스 여기에.
// const queryClient=new QueryClient();
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* 리덕스 */}
    {/* <Provider store={store}></Provider> */}
    <Routes>
      {/* 로그인 및 회원가입 페이지 */}
      <Route index element={<Home />} />
      {/* 보호된 경로 */}
      <Route>
        <Route path="/loginpage" element={<Loginpage />} />
        <Route path="/signuppage" element={<Signuppage />} />
      </Route>
      <Route
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route path="/profilepage" element={<Profilepage />} />
        <Route path="/testPage" element={<TestPage />} />
        <Route path="/testResultPage" element={<TestResultPage />} />{" "}
      </Route>

      {/* 기본 경로 */}
      <Route path="/*" element={<App />} />
    </Routes>
  </BrowserRouter>
);
