import { useState } from "react"
import Hitung from "../component/Hitung"

const Home = () => {
    const [show, handlerShow] = useState(true)
    const [pesan, setPesan] = useState('')

    return (
        <>
        <header>
            <h2>Pengunjung Mall Apps</h2>
        </header>

        <button onClick={() => handlerShow(!show)}>{show ? 'Sembunyikan' : 'Tampilkan'}</button>

        <hr />
        # <i>{pesan}</i>

        {
            show && (
                <>
                <hr />
                <Hitung setPesan={setPesan}/>
                </>
            )
        }
        
        <hr />
        <footer>
            <p>Created By <a href="https://github.com/fhrzdty31">fhrzdty31</a></p>
        </footer>
        </>
    )
}

export default Home