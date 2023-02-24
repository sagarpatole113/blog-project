import NavBar from "./components/navBar/NavBar";
import ProfileSetting from "./pages/settings/ProfileSetting";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Login from "./pages/login/Login"
import Signup from "./pages/login/SignUp";
import About from "./pages/about/About"
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom';
import Footer from "./components/footer/Footer";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const {user} = useContext(Context);
  
  return (
    <>
    
         <Router>
         <ToastContainer />
       <NavBar />
       <Routes>
       <Route path="/" element={<Home />}/>
       <Route path="register" element={ user ? <Home /> :<Signup />}/>
       <Route path="login" element={user ? <Home /> :<Login />}/>
       <Route path="post/:postId" element={<Single />}/>
       <Route path="write" element={user?<Write />:<Signup />}/>
       <Route path="settings" element={user?<ProfileSetting />:<Signup />}/>
       <Route path="about" element={<About />}/>
       </Routes>
       <Footer />
   </Router>
   </>

  );
}

export default App;
