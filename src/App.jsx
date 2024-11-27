import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute ";
import HomePage from "./pages/HomePage";
import Signuppage from "./pages/Signuppage";
import Loginpage from "./pages/Loginpage";
import ProfilePage from "./pages/Profilepage";
import Layout from "./components/Layout";
import TestPage from "./pages/TestPage";
import TestResultPage from "./pages/TestResultPage ";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/loginpage" element={<Loginpage />} />
        <Route path="/signuppage" element={<Signuppage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/profilepage" element={<ProfilePage />} />
          <Route path="/testpage" element={<TestPage />} />
          <Route path="/testResultpage" element={<TestResultPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
