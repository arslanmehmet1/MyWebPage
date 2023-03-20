import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar";
import BlogDetail from "./components/BlogDetail";
import Footer from "./components/Footer";
import Login from "./components/Login";
import PrivateRouter from "./components/PrivateRouter";
import Register from "./components/Register";
import Blogs from "./pages/Blogs";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import NotFound from './pages/NotFound';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs/" element={<Blogs />} />
        <Route path="/blogs/:id/" element={<BlogDetail />} />
        <Route path="/projects/" element={<Projects />} />
        <Route path="/contact/" element={<PrivateRouter />} />
    

        <Route path="/register/" element={<Register />} />
        <Route path="/login/" element={<Login />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
