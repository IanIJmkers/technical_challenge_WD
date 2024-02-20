import React, { useEffect, useState } from "react";
import axios from "axios";
import { dotWave } from "ldrs";

dotWave.register();

export default function PhoneLibrary() {
  const [phones, setPhones] = useState();
  const [selectedPhone, setSelectedPhone] = useState();
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await axios.get(`${API_URL}/phones`);
        setTimeout(() => {
          setPhones(response.data);
          setLoading(false);
        }, 1500);
      } catch (err) {
        console.error("Error fetching phones data", err);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleClick = (phone) => {
    setSelectedPhone(phone);
  };
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {phones &&
              phones.map((phone) => (
                <div key={phone._id} onClick={() => handleClick(phone.id)}>
                  <img src={`/images/${phone.imageFileName}`}></img>
                </div>
              ))}
          </div>
        )}
      </div>
      {selectedPhone && (
        <div>
          <h1>{selectedPhone.name}</h1>
          <h2>{selectedPhone.manufacturer}</h2>
          <h3>{selectedPhone.price}</h3>
          <h4>{selectedPhone.description}</h4>
        </div>
      )}
    </div>
  );
}
