import "./App.css"
import NavBar from "./components/NavBar"
import Banner from "./components/Banner"
import TrendingMovies from "./components/TrendingMovies"
import UpcomingMovies from "./components/UpcomingMovies"

import "./style/landingPage.css"

function App() {
  return (
    <div>
      <div className="myBG">
        <NavBar />
        <Banner />
      </div>

      <div className="trending">
        <TrendingMovies />
      </div>

      <div className="upcoming">
        <UpcomingMovies />
      </div>
    </div>
  )
}

export default App
