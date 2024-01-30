import { useDispatch } from "react-redux";
import { useState } from "react";
import { addanime } from "../features/animelist/animeSlice";

export default function Searchbar() {
  const [input, setInput] = useState("");
  const [searchList, setSearchList] = useState([]);
  const dispatch = useDispatch();

  const addItemHandler = async (e) => {
    e.preventDefault();
    setSearchList([]);
    try {
      dispatch(addanime(input));

      const response = await fetch(`https://api.jikan.moe/v4/anime?q=${input}`);
      const data = await response.json();

      for (let i = 0; i < 5; i++) {
        const url = data.data[i].url;
        const urlParts = url.split("/");
        const animeName = urlParts[urlParts.length - 1];
        console.log(animeName);

        setSearchList((prev) => [...prev, animeName]);
      }
    } catch (error) {
      console.error("Error fetching anime data:", error);
    }

    setInput("");
    console.log(searchList);
  };

  return (
    <form onSubmit={addItemHandler} className="searchBarandlogo">
      <input
        type="text"
        id="searchBar"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="searchlogo">
        Add
      </button>
      <div></div>
    </form>
  );
}

// export default function Searchbar() {
//   const [input, setInput] = useState("");
//   const [searchList, setSearchList] = useState({});

//   const dispatch = useDispatch();

//   const addItemHandler = (e) => {
//     e.preventDefault();
//     dispatch(addanime(input));
//     setInput("");
//     fetch(`https://api.jikan.moe/v4/anime?q=${input}`)
//       .then((res) => res.json())
//       .then((res) => {
//           for (let i = 0; i < 6; i++) {
//             const url = res.data[i].url;

//             const urlParts = url.split("/");
//             const animeName = urlParts[urlParts.length - 1];
//             console.log(animeName);
//             setSearchList((prev) => ({
//             //    ...prev,
//               [animeName]: res.data[i].images.jpg.image_url,
//             }));
//         }});

//   return (
//     <form onSubmit={addItemHandler} className="searchBarandlogo">
//       <input
//         type="text"
//         id="searchBar"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//       />
//       <button type="submit" className="searchlogo">
//         Add
//       </button>
//       <div></div>
//     </form>
//   );
// }
