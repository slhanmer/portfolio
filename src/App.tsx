import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home';
import './Styles/Global.scss';
import { GlobalStateProvider } from './Contexts/GlobalStateContext';

function App() {
  return (
    <GlobalStateProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/About-Me" />} />
          <Route path="/About-Me" element={<Home />} />
        </Routes>
      </Router>
    </GlobalStateProvider>
  );
}

export default App;
