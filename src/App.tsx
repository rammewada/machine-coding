import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Folders from "./pages/folder-tree/Folders";
import Form from "./pages/form";
import Home from "./pages/home/page";
import Search from "./pages/seach/page";
import Context from "./pages/context";
import { AuthProvider } from "./context/userContext";
function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="folder" element={<Folders />} />
            <Route path="form" element={<Form />} />
            <Route path="search" element={<Search />} />
            <Route path="context" element={<Context />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
