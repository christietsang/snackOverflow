import Layout from "./components/Layout";
import Public from './components/Public';
import {Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import { RegistrationForm } from "./components/RegistrationForm";
import Home from './components/DashLayout';
import Welcome from './features/auth/Welcome'
import NotesList from './features/notes/NotesList'
import UsersList from './features/users/UsersList'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<RegistrationForm />} />
        <Route path="home" element={<Home />}>
          
          <Route index element={<Welcome />} />

          <Route path="notes">
            <Route index element={<NotesList />} />
          </Route>

          <Route path="users">
            <Route index element={<UsersList />} />
          </Route>

        </Route>{/* End Dash */}

      </Route>
    </Routes>
  );
}

export default App;
