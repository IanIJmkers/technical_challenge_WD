import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import PhoneLibrary from "./components/PhoneLibrary";
import PhoneDetail from "./components/PhoneDetail";
import NotFound from "./components/NotFound";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/phones" element={<PhoneLibrary />} />
        <Route path="/phones/:id" element={<PhoneDetail />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
