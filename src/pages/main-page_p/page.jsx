import "./main-page.css";
import Navbar from "../../components/navbar";

export default function MainPage() {
  return (
    <div className="main-page">
      <Navbar />
      <div className="main-list">
        <img className="zoro" src="src\images\pngwing.com.png" alt="zoro" />
        <ol>
          <li>naruto</li>
          <li>jujustu kaisen</li>
          <li>bleach</li>
          <li>demon slayer</li>
        </ol>
      </div>
    </div>
  );
}
