const Table = ({
    menus,
    handlerUpdate,
    handlerDelete
}) => (
    <>
    <table className="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">Price</th>
                <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            {Array.isArray(menus) && menus.map(
                (menu, index) => (
                <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{menu.name}</td>
                    <td>{(menu.description.length >= 20) ? (menu.description.slice(0, 17) + '...') : menu.description}</td>
                    <td>{menu.price}</td>
                    <td>
                        <div className="btn-group btn-group-sm">
                            <button onClick={() => handlerUpdate(menu.id)} className="btn btn-outline-success">Edit</button>
                            <button onClick={() => {
                                confirm(`anda yakin ingin menghapus menu dengan id ${menu.id}`)
                                handlerDelete(menu.id)
                            }} className="btn btn-outline-danger">Hapus</button>
                        </div>
                    </td>
                </tr>
            )
            )}
        </tbody>
    </table>
    </>
)

export default Table