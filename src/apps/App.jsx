import { Outlet } from "react-router-dom"

const App = () => (
    <>
    <main style={{padding: '20px', paddingTop: '10px', border: 'solid 1px'}}>
        <Outlet />
    </main>
    </>
)

export default App