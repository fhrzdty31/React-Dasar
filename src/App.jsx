import Lifecycle from "./components/Lifecycle"
import Map from "./components/Map"
import Navbar from "./components/Navbar"
import State from "./components/State"
import Variable from "./components/Variable"

const App = () => (
    <div>
        {/* componen */}
        <Navbar />

        <hr />
        <div>Main Content!</div>

        <hr />
        {/* variable */}
        <Variable />

        <hr />
        {/* state and props */}
        <State />

        <hr />
        {/* map */}
        <Map />

        <hr />
        {/* lifecycle */}
        <Lifecycle />
    </div>
)

export default App