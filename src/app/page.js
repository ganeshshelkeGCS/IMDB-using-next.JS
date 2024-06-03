const API_KEY = "a1ce8760a33940f3d3e370ce44394505";
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
