import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CommonRoutes from './Routes/CommonRoutes';

function App() {
  return (
    <>
        <Router>
          <Routes>
            <Route path="/*" element={<CommonRoutes />} />
          </Routes>
        </Router>
    </>
  );
}

export default App;
