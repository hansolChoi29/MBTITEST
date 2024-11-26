import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute ";
import HomePage from "./pages/HomePage";
import Loginpage from "./pages/Loginpage";
import Signuppage from "./pages/Signuppage";
import Layout from "./components/Layout";
import TestPage from "./pages/TestPage";
import TestResultPage from "./pages/TestResultPage ";
import Profilepage from "./pages/Profilepage";
// import { useState } from "react";
const App = () => {
  // const [user, setUser] = useState(null);
  // user={user}
  return (
    <BrowserRouter>
      <Routes>
        <Route elemene={<Layout />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/loginpage" element={<Loginpage />} />
        <Route path="/signuppage" element={<Signuppage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/profilepage" element={<Profilepage />} />
          <Route path="/testpage" element={<TestPage />} />
          <Route path="/testResultpage" element={<TestResultPage />} />{" "}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
