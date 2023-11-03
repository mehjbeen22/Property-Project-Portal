import React from "react";
import { AddDetailPage } from "./pages/addDetails/AddDetailPage";
import { SigninPage } from "./pages/auth/SigninPage";
import { Navbar } from "./component/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import { AddPhotos } from "./pages/addPhotos/AddPhotosPage";
import { ExploreProperties } from "./pages/explore/ExploreProperties";
import { DisplayDetail } from "./pages/displayDetail/DispalyDetail";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<SigninPage />} />
        <Route path="/photos" element={<AddPhotos />} />
        <Route path="/detail" element={<AddDetailPage />} />
        <Route path="/explore" element={<ExploreProperties />} />
        <Route path="/explore/page-detail/:propertyID" element={<DisplayDetail/>}/>
      </Routes>
    </div>
  );
};

export default App;
