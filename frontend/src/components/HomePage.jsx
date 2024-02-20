import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h1>Phones Page</h1>
      <Link to="/phones">See all phones</Link>
    </div>
  );
}
