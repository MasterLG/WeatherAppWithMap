import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions/index";

class SearchBar extends Component {
  state = {
    term: ""
  };
  onInputChange = e => {
    const newState = { ...this.state };
    newState.term = e.target.value;

    this.setState({
      term: newState.term
    });
  };
  onFormSubmit = e => {
    e.preventDefault();
    //We need to go and fetch weather data
    this.props.fetchWeather(this.state.term);
    this.setState({ term: "" });
  };
  render() {
    return (
      <form className="input-group" onSubmit={this.onFormSubmit}>
        <input
          type="text"
          placeholder="Get a five-day weather forecast"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
