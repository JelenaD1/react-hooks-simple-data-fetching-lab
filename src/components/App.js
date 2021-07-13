import { data } from "browserslist";
import React, { useEffect, useState} from "react"

const App = () => {
    const [image, setImage] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)


    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
          .then((response) => response.json())
          .then((data) => {
              console.log(data)
            setImage(data.message);
            setIsLoaded(true);
          });
      }, []);
       // if the data hasn't been loaded, show a loading indicator
  if (!isLoaded) return <p>Loading...</p>;

  return <img src={image} alt="A Random Dog"/>;
}











export default App