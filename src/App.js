// App file where I am invoking React Router and calling all my components and pages. Including the background of Three.js

import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Header/header';
import Footer from './components/Footer/Footer';
import Progress from './components/Progress/Progress';
import About from "./pages/About";
import Home from "./pages/Home";
import Desingwork from "./pages/DesignWork";
import Work from "./pages/Work";
import NoPage from "./pages/Nopage";
import Blog from './pages/Blog';
import SavedPage from './pages/Saved';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="work" element={<Work />} />
          <Route path="blog" element={<Blog />} />
          <Route path="saved" element={<SavedPage />} />
          <Route path="designwork" element={<Desingwork />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
      <Progress/>
      <Footer/>
    </BrowserRouter>
  );
}
