import Navbar from "./Navbar/Navbar";
import "./Navbar/navbar.css";

import Footer from "./Footer/Footer";

import Main from "./Main/Main";
function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />

      {/* Main */}
      <Main />

      {/* Fotter */}

      <Footer />
    </div>
  );
}

export default App;
