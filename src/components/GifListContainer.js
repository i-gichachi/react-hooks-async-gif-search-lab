import React, { Component } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

class GifListContainer extends Component {
  state = {
    gifs: []
  }

  fetchGifs = searchTerm => {
    const apiKey = "j80qzNsZlp6jnocNVroYFzekyZN9LZdy"
    const apiUrl = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${apiKey}&limit=3`

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const gifs = data.data.map(gif => gif.images.original.url)
        this.setState({ gifs })
      })
      .catch(error => {
        console.error("Error fetching data:", error)
      })
  }

  render() {
    return (
      <div>
        <GifSearch fetchGifs={this.fetchGifs} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default GifListContainer;
