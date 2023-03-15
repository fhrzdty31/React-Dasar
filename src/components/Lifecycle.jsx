import { Component } from "react"
import makanan from '../assets/makanan'

class Lifecycle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            minuman: 'Jus Jeruk',
            makanan: {}
        }
    }

    // mounting
    componentDidMount = () => {
        this.setState({
            makanan: makanan[1]
        })
    }

    render = () => (
        <div>
            <div>Minuman : {this.state.minuman}</div>
            <div>Makanan : {this.state.makanan.nama}</div>
        </div>
    )
}

export default Lifecycle