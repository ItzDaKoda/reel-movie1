import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";

import Home from "./pages/Home.jsx";
import Discover from "./pages/Discover.jsx";
import MovieDetails from "./pages/MovieDetails.jsx";
import MyLists from "./pages/MyLists.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/my-lists" element={<MyLists />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}