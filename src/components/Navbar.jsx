const Navbar = ({resetMenus}) => (
    <>
    <nav className="navbar navbar-expand py-3 bg-body-secondary-emphasis text-secondary shadow-sm">
        <div className="container-fluid container-md">
            <a className="navbar-brand" href="">Warung Mariadi Menus</a>
            <div className="nav">
                <div className="navbar-nav">
                    <button onClick={() => resetMenus()} className="btn btn-outline-secondary">Reset Menu</button>
                </div>
            </div>
        </div>
    </nav>
    </>
)

export default Navbar