import './App.css';
import Login from './Components/Login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtetctedRoutes from './Components/ProtectedRoutes/ProtetctedRoutes';
import Dashboard from './Components/Dashboard/dashboard';
import Layout from './Components/Layout/Layout';
import { Navigate } from 'react-router-dom';
import Todo from './Components/Todo/Todo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path='/' element={<Login />} />
          <Route path='/admin' element={<Layout />}>
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="todo" element={<Todo />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
