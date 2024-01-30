import "./main-page.css";
// import { IoMdMore } from "react-icons/io";
import Navbar from "../../components/navbar";
import { useSelector, useDispatch } from "react-redux";
import { removeanime } from "../../features/animelist/animeSlice";
import { useEffect } from "react";

export default function MainPagenp() {
  const animelist = useSelector((state) => state.animelist);
  const dispatch = useDispatch();

  useEffect(() => {
    // Save list to local storage whenever it changes
    window.localStorage.setItem("yourListKey", JSON.stringify(animelist));
  }, [animelist]);

  return (
    <div className="main-page">
      <Navbar />
      <img className="zoro" src="src\images\pngwing.com.png" alt="zoro" />
      <div className="main-list">
        <ol>
          {animelist.map((item) => (
            <li key={item.id}>
              {item.text}
              <button
                className="deletelogo"
                onClick={() => dispatch(removeanime(item.id))}
              >
                delete
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
