import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./screens/LandingPage/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./screens/NotFound/NotFound";
import Login from "./screens/Login/Login";
import Register from "./screens/Register/Register";
import MyNotes from "./screens/MyNotes/MyNotes";
import CreateNote from "./screens/CreateNote/CreateNote";
import UpdateNote from "./screens/UpdateNote/UpdateNote";
import UpdateProfile from "./screens/Updateprofile/UpdateProfile";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/my-notes" element={<MyNotes />} />
          <Route path="/create-note" element={<CreateNote />} />
          <Route path="/update-note" element={<UpdateNote />} />
          <Route path="/update-profile" element={<UpdateProfile />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
