import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./main/Main";
import ImageView from "./main/image/ImageView";
import ImageInsert from "./main/image/ImageInsert";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/image" element={<ImageView />} />
        <Route path="/imageinsert" element={<ImageInsert />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
