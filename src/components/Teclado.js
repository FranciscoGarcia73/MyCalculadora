import {Component} from 'react';
import "../Styles/Teclado.css";

class Teclado extends Component {
    render(){
        return(
            <div className="Teclado">
                {this.props.children}
            </div>
        );
    }
}

export default Teclado;