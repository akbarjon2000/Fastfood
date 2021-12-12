import React, { Component } from "react";
import Navbar from "../GenericNavbar/Navbar"
import FastFood from "./fastFood";
import { Container } from "./styled";
export default class Products extends Component {
  render() {
    return (
      <Container>
        <Navbar />
        <FastFood className="menu" />
        <div className="addd">Add More</div>
      </Container>
    )
  }
}


