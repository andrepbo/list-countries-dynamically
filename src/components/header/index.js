import React, { Component } from "react";
import { formatNumber } from "../../utils/formartHelpers";

export default class Header extends Component {
  handleInputChange = (event) => {
    this.props.onChangeFilter(event.target.value);
  };

  render() {
    const { filter, countryCount, totalPoputarion } = this.props;
    return (
      <div>
        <input
          type="text"
          value={filter}
          onChange={this.handleInputChange}
          placeholder="Search"
        />
        <span>
          Countries: <strong>{countryCount}</strong>
        </span>{" "}
        |{" "}
        <span>
          Population: <strong>{formatNumber(totalPoputarion)}</strong>
        </span>
      </div>
    );
  }
}
