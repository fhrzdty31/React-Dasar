import { Component } from "react"
import random from "random"
import Navbar from "./components/Navbar"
import Table from "./components/Table"
import Form from "./components/Form"

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menus: [],
            data: {
                id: '',
                name: '',
                description: '',
                price: ''
            }
        }
    }

    handlerChange = (event) => {
        this.setState({
            data: {
                ...this.state.data,
                [event.target.name]: event.target.value
            }
        })
    }

    handlerUpdate = (id) => {
        let menu = this.state.menus.filter(menu => menu.id == id)[0]
        this.setState({ data: menu })
    }

    handlerDelete = (id) => {
        let newMenus = this.state.menus.filter(
            menu => menu.id != id
        )
        this.setState({ menus: newMenus })
    }

    saveMenus = (event) => {
        event.preventDefault()
        if (this.state.data.id == '') {
            this.setState({
                menus: [
                    ...this.state.menus,
                    {
                        ...this.state.data,
                        id: random.int(100, 999)
                    }
                ]
            })
        } else {
            let newMenus = this.state.menus.filter(
                menu => menu.id != this.state.data.id
            )
            this.setState({
                menus: [
                    ...newMenus,
                    this.state.data
                ]
            })
        }

        this.setState({
            data: {
                id: '',
                name: '',
                description: '',
                price: ''
            }
        })
    }

    resetMenus = () => {
        this.setState({
            menus: []
        })
    }

    render = () => (
        <>
        <Navbar resetMenus={this.resetMenus}/>
        <div className="container mt-5">
            <div className="row column-gap-3 row-gap-3 d-flex justify-content-center">
                <div className="col-11 col-lg-7">
                    <div className="card">
                        <div className="card-body">
                            <Table menus={this.state.menus} handlerUpdate={this.handlerUpdate} handlerDelete={this.handlerDelete}/>
                        </div>
                    </div>
                </div>
                <div className="col-11 col-lg-4">
                    <div className="card">
                        <div className="card-body">
                            <Form data={this.state.data} handlerChange={this.handlerChange} saveMenus={this.saveMenus}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default App