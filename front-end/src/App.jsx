import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './form';
import HomePage from './pages/HomePage';
import Home from './Home';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
