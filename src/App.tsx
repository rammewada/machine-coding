"use no memo";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "./lib/store/store";
import { Provider as ReduxProvider } from "react-redux";
import Folders from "./pages/folder-tree/Folders";
import Form from "./pages/form";
import Home from "./pages/home/page";
import Search from "./pages/seach/page";
import Context from "./pages/context";
import { AuthProvider } from "./context/userContext";
import Counter from "./pages/counter";
import Progress from "./pages/progress-bar/page";
function App() {
  return (
    <>
      <ReduxProvider store={store}>
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route index element={<Home />} />
              <Route path="folder" element={<Folders />} />
              <Route path="form" element={<Form />} />
              <Route path="search" element={<Search />} />
              <Route path="context" element={<Context />} />
              <Route path="counter" element={<Counter />} />
              <Route path="progress" element={<Progress />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </ReduxProvider>
    </>
  );
}

export default App;
