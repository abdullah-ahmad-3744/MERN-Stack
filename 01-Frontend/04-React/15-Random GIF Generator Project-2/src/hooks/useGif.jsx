import { useState } from "react";
import { useEffect } from "react";
const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;
import axios from "axios";

function useGif(tag) {
  const [loading, setLoading] = useState(false);
  const [gif, setGif] = useState("");
  const randomUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  const tagUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

  async function fetchData(tag) {
    setLoading(true);

    let output = await axios.get(tag ? tagUrl : randomUrl);
    let imageSource = output.data.data.images.downsized_large.url;
    setGif(imageSource);
    setLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, []);
  function clickHandler() {
    fetchData();
  }
  return {
    gif,
    loading,
    fetchData,
  };
}
export default useGif;
