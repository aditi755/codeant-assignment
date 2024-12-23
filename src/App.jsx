import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SignIn from './components/SignIn';
import RepositoryPage from './RepositoryPage';

function App() {
  return (
    <Router>
      <div className="">
        <SignIn />
        <Routes>
          <Route path="/dashboard" element={<RepositoryPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

