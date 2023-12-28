import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {

  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setError(false);

        await new Promise((resolve, reject) => setTimeout(resolve, 1000));
        const apidata = await axios.get('/api/jokes');
        setJokes(apidata.data);

        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return (
      <div
        id="loading-overlay"
        class="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-60"
      >
        <svg
          class="animate-spin h-8 w-8 text-white mr-3"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>

        <span class="text-white text-3xl font-bold">Loading...</span>
      </div>
    );
  }
  if (error) {
    return <h1 className="text-white">Something went Wrong..</h1>;
  }

  return (
    <>
      <h1 className="text-3xl text-white">FULLSTACK BASIC</h1>
      <h1 className="mt-4 text-white">JOKES: {jokes.length}</h1>

      {Array.isArray(jokes) && jokes.map((joke, index) => (
        <div key={joke.id}>
          <h3 className="text-white">TITLE: {joke.title}</h3>
          <p className="text-white">CONTENT: {joke.content}</p>
        </div>
      ))}
    </>
  );
}


export default App;
