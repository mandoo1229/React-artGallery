import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./main/Main";
import ImageView from "./main/image/ImageView";
import ImageInsert from "./main/image/ImageInsert";
import ImageMain from "./main/image/ImageMain";
import SignUp from "./main/login/SignUp";
import AwsPolly from "./main/AwsPolly";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/imageMain" element={<ImageMain />} />
        <Route path="/view/:id" element={<ImageView />} />
        <Route path="/upload" element={<ImageInsert />} />
        <Route path="/awsPolly" element={<AwsPolly />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
