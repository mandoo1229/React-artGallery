import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./main/Main";
import ImageView from "./main/image/ImageView";
import ImageInsert from "./main/image/ImageInsert";
import ImageMain from "./main/image/ImageMain";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/imageMain" element={<ImageMain />} />
        <Route path="/view/:id" element={<ImageView />} />
        <Route path="/upload" element={<ImageInsert />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
