import { useEffect, useState } from "react";
import NewsLists from "./components/NewsLists";
import Navbar from "./components/Navbar";

function App() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [category, setCategory] = useState("general");

  const API_KEY = `b7c0fb397efa4db4a87e7d4f8961c2e4`;
  const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`;

  const fetchNews = async () => {
    try {
      setLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      setNews(data.articles);
      setLoading(false);
    } catch (error) {
      console.log("The error is", error);
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [category]);

  return (
    <>
      <Navbar setCategory={setCategory}/>
      <NewsLists news={news} loading={loading} />
    </>
  );
}

export default App;
