const Form = ({
    data,
    handlerChange,
    saveMenus
}) => (
    <>
    <form onSubmit={(event) => saveMenus(event)}>
        <div className="mb-3">
            <label htmlFor="name" className="form-label">Menu Name</label>
            <input type="text" className="form-control" id="name" name="name" value={data.name} onChange={(event) => handlerChange(event)} autoComplete="off" autoFocus required/>
        </div>
        <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea cols="30" className="form-control" id="description" name="description" value={data.description} onChange={(event) => handlerChange(event)} required/>
        </div>
        <div className="mb-3">
            <label htmlFor="price" className="form-label">Price</label>
            <input type="number" className="form-control" id="price" name="price" value={data.price} onChange={(event) => handlerChange(event)} required/>
        </div>
        <div className="justify-content-end">
            <button type="submit" className="btn btn-outline-primary">Save</button>
        </div>
    </form>
    </>
)

export default Form