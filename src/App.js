import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import { SignUp } from './pages/SignUp';
import { SignIn } from './pages/SignIn';
import { Dashboard } from './Component/Dashboard';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<SignIn />} exact />
          <Route path='/signUp' element={<SignUp />} exact />
          <Route path='/dashboard' element={<Dashboard />} exact />
        </Routes>
      </Router>
    </>
  );
}

export default App;
