import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ConditionalNav from './components/ConditionalNav';
import RepositoryPage from './RepositoryPage';

function App() {
  return (
    <Router>
      <div className="">
        <ConditionalNav />
        <Routes>
          <Route path="/dashboard" element={<RepositoryPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

