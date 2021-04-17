import { Component } from "react";
import "../Styles/Pantalla.css";

class Pantalla extends Component {
  render() {
    return <div className="Pantalla">{this.props.data}</div>;
  }
}

export default Pantalla;
