import "./App.css";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Community from "./components/Community";
import Success from "./components/Success";
import Blog from "./components/Blog";
import Connected from "./components/Connected";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Community />
      <Success />
      <Blog />
      <Connected />
      <Footer />
    </div>
  );
}

export default App;
