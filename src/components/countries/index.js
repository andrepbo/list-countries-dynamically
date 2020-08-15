import React, { Component } from "react";

import Country from "../country";
import { CountriesContainer } from "./styles";

export default class Countries extends Component {
  render() {
    const { countries } = this.props;
    return (
      <CountriesContainer>
        <ul>
          {countries.map((country) => {
            return <Country country={country} />;
          })}
        </ul>
      </CountriesContainer>
    );
  }
}
