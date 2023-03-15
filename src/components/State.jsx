import { Component } from "react";
import Props from "./Props";

class State extends Component {
    constructor(props) {
        super(props)
        this.state = {
            makanan: 'Bakso'
        }
    }
    
    setMakanan = (makanan) => this.setState({
        makanan
    })

    render = () => (
        <div>
            <div>Makanan dari state : {this.state.makanan}</div>
            <button
                onClick={() => this.setMakanan('Mie Ayam')}
            >Ganti makanan dengan state</button>

            <hr />
            {/* props */}
            <Props
                makanan={this.state.makanan}
                setMakanan={this.setMakanan}
            />
        </div>
    )
}

export default State