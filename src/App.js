import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import { Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import { useState } from "react";
import UploadVideo from "./pages/UploadVideo";

function App() {
  const [showSignIn, setShowSignIn] = useState(false);

  function handleShowSignIn(e) {
    e.preventDefault();
    setShowSignIn(true);
  }
  function handleCloseSignIn(e) {
    e.preventDefault();
    setShowSignIn(false);
  }
  // const handleShowSignIn = () => setShowSignIn(true);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home onShowSignIn={handleShowSignIn} />} />
        <Route
          path="/AboutUs"
          element={<AboutUs onShowSignIn={handleShowSignIn} />}
        />
        <Route
          path="/ContactUs"
          element={<ContactUs onShowSignIn={handleShowSignIn} />}
        />
        <Route path="/SignIn" element={<SignIn />} />
        <Route
          path="/UploadVideo"
          element={<UploadVideo onShowSignIn={handleShowSignIn} />}
        />
      </Routes>
      {showSignIn && <SignIn onCloseSignIn={handleCloseSignIn} />}
      {/* <Profile onShowSignIn={handleShowSignIn}/> */}
    </div>
  );
}

export default App;
