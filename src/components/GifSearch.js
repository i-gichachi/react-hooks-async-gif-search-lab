import React, { Component } from "react";

class GifSearch extends Component {
  state = {
    searchTerm: ""
  }

  handleChange = event => {
    this.setState({ searchTerm: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.fetchGifs(this.state.searchTerm)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.searchTerm}
          onChange={this.handleChange}
          placeholder="Search GIFs"
        />
        <button type="submit">Search</button>
      </form>
    )
  }
}

export default GifSearch
