
import './App.css';
import Login from './components/Login';

import LogOut from './components/LogOut';
import Profile from './components/Profile';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const {isLoading}=useAuth0();
  if(isLoading)return <div>Fetching User Details.............</div>
  return (
    <div>
      <h1>Welcome To AUTH0 With React</h1>
      <Login/>
      <LogOut />
      <Profile/>
    </div>
  );
}

export default App;
