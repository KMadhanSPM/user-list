import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import UserDetails from "./components/UserDetails";
import UserList from "./components/UserList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/users/:username" element={<UserDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
