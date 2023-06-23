import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import './App.css';
import Header from "./components/Header.js";
import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import Services from "./components/Services.js";
import Booking from "./components/Booking.js";
import Account from "./components/Account.js";
import Footer from "./components/Footer.js";


function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Navbar />
      <br/>
      <Routes>
        <Route exact path="/" exact element={<Home />}/>
        <Route path="/Services" element={<Services />}/>
        <Route path="/Booking" element={<Booking />}/> 
        <Route path="/Account" element={<Account />}/>
      </Routes>
      <Footer />
    </div>
  </Router> 
  );
}

export default App;
