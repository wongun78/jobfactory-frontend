import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Companies from "./components/Companies/Companies";
import Contact from "./components/Contact/Contact";
import GetStarted from "./components/GetStarted/GetStarted";
import FeatureJobs from "./components/FeatureJobs/FeatureJobs";
import LatestJobs from "./components/LatestJobs/LatestJobs";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <Hero />
      </div>
      <Companies />
      <Contact />
      <GetStarted />
      <FeatureJobs/>
      <LatestJobs/>
      <Footer />
    </div>
  );
}

export default App;
