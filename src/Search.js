import React from 'react'
import { useGlobalContext } from './context';

const Search = () => {
  const { isError, query, setQuery  } = useGlobalContext();
  return <>
    <section className="search-section">
      <h2>Search Your Favourite Movie</h2>
      <form action="#" onSubmit={(e) => e.preventDefault()}>
        <div>
          <input
            type="text"
            placeholder="Enter movie name..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </form>
      <div>
        <p>{isError.show && isError.msg}</p>
      </div>
    </section>


  </>
};

export default Search
