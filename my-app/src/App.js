import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import Discover from "./component/Discover";
import CardTop from "./component/CardTop";
import Home from "./component/Home";
import Box from "./component/Box";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Header />
      <Discover />
      <CardTop />
      <Box />
      {/* <Home /> */}
      <Footer />
    </>
  );
}

export default App;
