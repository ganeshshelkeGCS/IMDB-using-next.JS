'use client';

import Results from "@/components/Result";

export default async function SearchPage({ params }) {
  const searchTerm = params.searchTerm;

  const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=54470094c5490e0844f2aff5ccd437e7&query=${searchTerm}&language=en-US&page=1&include_adult=false`);
  const data = await res.json();
  const results = data.results;

  return (
    <div>
      {
         !results.length && 
          (<h1 className="text-center pt-6">No results found</h1>)
        }
         {results && <Results results={results} />}
    </div>
  );
}
