import { Component } from "react";
import Boton from "./Boton";
import Pantalla from "./Pantalla";
import Teclado from "./Teclado";
import "../Styles/Calculadora.css";

class Calculadora extends Component {
  constructor(props) {
    super(props);
    this.state = { data: "" };
  }

  calculate = () => {
    const result = eval(this.state.data);
    if (result === undefined) {
      this.setState({ data: "No hay valores" });
    } else {
      this.setState({ data: result });
    }

    // try {
    //     const result = eval(this.state.data);
    //     this.setState({data: result});
    // } catch (e) {
    //     this.setState({data: 'error'})
    // }
  };

  handleClick = (e) => {
    const value = e.target.getAttribute("data-value");
    switch (value) {
      case "clear":
        this.setState({ data: "" });
        break;
      case "equal":
        this.calculate();
        break;
      default:
        this.setState({ data: this.state.data + value });
    }
  };
  render() {
    return (
      <div className="Calculadora">
        <Pantalla data={this.state.data} />
        <Teclado>
          <Boton onClick={this.handleClick} label="1" value="1" />
          <Boton onClick={this.handleClick} label="2" value="2" />
          <Boton onClick={this.handleClick} label="3" value="3" />

          <Boton onClick={this.handleClick} label="4" value="4" />
          <Boton onClick={this.handleClick} label="5" value="5" />
          <Boton onClick={this.handleClick} label="6" value="6" />

          <Boton onClick={this.handleClick} label="7" value="7" />
          <Boton onClick={this.handleClick} label="8" value="8" />
          <Boton onClick={this.handleClick} label="9" value="9" />

          <Boton onClick={this.handleClick} label="0" size="entero" value="0" />

          <Boton
            onClick={this.handleClick}
            label="/"
            size="operacion"
            value="/"
          />
          <Boton
            onClick={this.handleClick}
            label="x"
            size="operacion"
            value="*"
          />
          <Boton
            onClick={this.handleClick}
            label="-"
            size="operacion"
            value="-"
          />
          <Boton
            onClick={this.handleClick}
            label="+"
            size="operacion"
            value="+"
          />

          <Boton
            onClick={this.handleClick}
            label="C"
            size="medioentero"
            value="clear"
          />
          <Boton
            onClick={this.handleClick}
            label="."
            size="medioentero"
            value="."
          />

          {/* <Boton onClick={this.handleClick} label="" value="null" /> */}

          <Boton
            onClick={this.handleClick}
            label="="
            size="entero"
            value="equal"
          />
        </Teclado>
      </div>
    );
  }
}

export default Calculadora;
