import React from 'react'

const Search = () => {

  const handleSubmit = e => {
    e.preventDefault();

    console.log("search submit");
  }

  return (
    <form onSubmit={ handleSubmit }>
      <label htmlFor="search-bar">City:</label>
      <input
        type="text"
        id="search-bar"
        placeholder=""
        name="search"
      />
      <button type="submit">Search</button>
    </form>
  )
}

export default Search

