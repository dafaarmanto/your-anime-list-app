import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { FC } from "react";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home/Home";
import AnimeDetail from "./pages/Anime/AnimeDetail";
import CollectionDetailPage from "./pages/Collections/CollectionDetailPage";
import CollectionListPage from "./pages/Collections/CollectionListPage";

const App: FC = () => {
  return (
    <>
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/anime/:id" element={<AnimeDetail />} />
            <Route path="/collections" element={<CollectionListPage />} />
            <Route path="/collection/:id" element={<CollectionDetailPage />} />
          </Routes>
        </MainLayout>
      </Router>
    </>
  );
};

export default App;
