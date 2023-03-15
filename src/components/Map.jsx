import makanan from "../assets/makanan"

const Map = () => (
    <div>
        <div>Daftar semua menu</div>
        <ul>
            {makanan.map(
                (makanan, index) => (
                    <li key={index}>
                        {makanan.nama} | Rp. {makanan.harga}
                    </li>
                )
            )}
        </ul>

        <div>Daftar menu ramah kantong</div>
        <ul>
            {makanan.filter(
                makanan => makanan.harga <= 10000
            ).map(
                (makanan, index) => (
                    <li key={index}>
                        {makanan.nama} | Rp. {makanan.harga}
                    </li>
                )
            )}
        </ul>
    </div>
)

export default Map