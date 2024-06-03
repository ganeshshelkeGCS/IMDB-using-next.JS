const API_KEY = process.env.API_KEY;
import Result from "../components/Result";

async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";

  const res = await fetch(
    `http://api.themoviedb.org/3${genre === "fetchTopRated" ? `/movie/top_rated` : `/trending/all/week`
    }?api_key=${API_KEY}`
  );

  const data = await res.json();
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const results = data.results;
  //console.log(results);

  return (
    <div>
      <Result results={results} />
    </div>
  );
}

export default Home;
