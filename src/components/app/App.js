import Header from "../header/Header";
import Works from "../works/Works";
import AddWork from "../addWork/AddWork";
import Register from "../register/Register";
import Login from "../login/Login";
import Reset from "../reset/Reset";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/works" element={<Works />}></Route>
          <Route path="/addWork" element={<AddWork />}></Route>
          <Route path="/update-work/:id" element={<AddWork />} />
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/password-reset" element={<Reset/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
