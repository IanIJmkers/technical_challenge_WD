import { Link } from "react-router-dom";

export default function PhoneLibrary({ phones }) {
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {phones &&
          phones.map((phone) => (
            <div key={phone._id}>
              <Link to={`/phones/${phone._id}`}>
                <img src={`/images/${phone.imageFileName}`} alt={phone.name} />
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}
