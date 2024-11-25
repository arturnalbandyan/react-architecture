import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Example from './pages/example/Example';

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route path="/" element={<Example />} />
      </Routes>
    </Router>
  );
}

export default App;
