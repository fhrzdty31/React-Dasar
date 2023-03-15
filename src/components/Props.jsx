import { Component } from "react";

class Props extends Component {
    render = () =>  {
        const { makanan, setMakanan } = this.props
        return (
            <div>
                <div>Makanan dari props : {makanan}</div>
                <button
                    onClick={() => setMakanan('Soto')}
                >Ganti makanan dengan props</button>
            </div>
        )
    }
}

export default Props