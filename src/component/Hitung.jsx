import { useEffect, useState } from "react"

const Hitung = ({setPesan}) => {
    
    const [jumlah, setJumlah] = useState(0) // useState Hooks

    useEffect( // useEffect Mounted
        () => {
            setPesan('Jumlah pengunjung ditampilkan!')
        },
        []
    )

    useEffect( // useEffect Updated
        () => {
            if (jumlah) setPesan('Jumlah pengunjung diupdate!')
        },
        [jumlah]
    )

    useEffect( // useEffect Unmounted
        () => {
            return () => {
                setPesan('Jumlah pengunjung disembunyikan!')
            }
        },
        []
    )

    return (
        <>
        <p>Jumlah Pengunjung : {jumlah} pengunjung</p>
        <button onClick={() => setJumlah(jumlah + 1)}>Tambah Pengunjung</button>
        </>
    )
}

export default Hitung