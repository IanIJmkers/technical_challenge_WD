import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./components/HomePage";
import PhoneLibrary from "./components/PhoneLibrary";
import NotFound from "./components/NotFound";
import PhoneDetails from "./components/PhoneDetails";
import ErrorPage from "./components/ErrorPage";
import { useEffect, useState } from "react";
import axios from "axios";
import { dotWave } from "ldrs";

dotWave.register();

export default function App() {
  const [phones, setPhones] = useState();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/phones`
        );
        setTimeout(() => {
          setPhones(response.data);
          setLoading(false);
        }, 1500);
        console.log(response);
      } catch (err) {
        console.error("Error fetching phones data", err);
        setLoading(false);
        navigate("/error");
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="">
        {loading ? (
          <div className="flex justify-center py-40">
            <l-dot-wave
              className=""
              size="47"
              speed="1"
              color="black"
            ></l-dot-wave>
          </div>
        ) : (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/phones" element={<PhoneLibrary />} />
            <Route path="/phones/:id" element={<PhoneDetails />} />

            <Route path="/error" element={<ErrorPage />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        )}
      </div>
    </div>
  );
}
