import React, { useEffect } from "react";

export default function PhoneDetail({ phone }) {
  const [phones, setPhones] = useState();
  const [selectedPhone, setSelectedPhone] = useState();
  const [loading, setLoading] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(`${API_URL}/phones`);
        setTimeout(() => {
          setPhones(data);
          setLoading(false);
        }, 1500);
      } catch (err) {
        console.error("Error fetching phones data", err);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <div>
        <h1>{phone.name}</h1>
        <h2>{phone.manufacturer}</h2>
        <h3>{phone.price}</h3>
        <h4>{phone.description}</h4>
      </div>
    </div>
  );
}
