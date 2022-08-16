import React, { Component } from "react";
import HeaderComponent from "./HeaderComponent";
import BannerComponent from "./BannerComponent";
import ItemComponent from "./ItemComponent";
import FooterComponent from "./FooterComponent";
import "./Ex_layout.module.css";
export default class Ex_Layout extends Component {
  render() {
    return (
      <div>
          <HeaderComponent />
          <BannerComponent />
          <ItemComponent />
          <FooterComponent />
      </div>
    );
  }
}
