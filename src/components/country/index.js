import React, { Component } from "react";

import { CountryContainer } from "./styles";

export default class Country extends Component {
  render() {
    const { country } = this.props;
    return (
      <CountryContainer>
        <img src={country.flag} alt="flag" />
        <li key={country.id}>{country.name}</li>
      </CountryContainer>
    );
  }
}
