import HeroSection from "./components/HeroSection";
import HomeCards from "./components/HomeCards";
import JobListings from "./components/JobListings";
import Navbar from "./components/Navbar"
import Test from "./components/test";
import ViewAllJobs from "./components/ViewAllJobs";


const App = () => {

  return (
    <>
      <Navbar />
      <Test />
      <HeroSection />
      <HomeCards />
      <JobListings/>
      <ViewAllJobs/>
    </>
  )
}

export default App;