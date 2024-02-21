import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PhoneDetails({ phones }) {
  const [phoneDetails, setPhoneDetails] = useState({});
  const [loadingDetails, setLoadingDetails] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchPhoneDetails = async () => {
      setLoadingDetails(true);
      try {
        const phoneDetail = phones.find((phone) => phone.id == id);

        setTimeout(() => {
          setPhoneDetails(phoneDetail);
          setLoadingDetails(false);
        }, 1500);
      } catch (err) {
        console.error("Error fetching phones data", err);
        setLoadingDetails(false);
      }
    };
    fetchPhoneDetails();
  }, [id, phones]);
  return (
    <div>
      <div className="">
        {loadingDetails ? (
          <div className="flex justify-center py-40">
            <l-dot-wave
              className=""
              size="47"
              speed="1"
              color="black"
            ></l-dot-wave>
          </div>
        ) : (
          <div>
            <h1>{phoneDetails.name}</h1>
            <h2>{phoneDetails.manufacturer}</h2>
            <h3>{phoneDetails.price}</h3>
            <h4>{phoneDetails.description}</h4>
          </div>
        )}
      </div>
    </div>
  );
}
