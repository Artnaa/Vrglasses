import './App.css';
import Button from './Helpers/buttons/button';
import Nav from './NavBar/nav';
import { header } from './Header/header';
import {contacts} from './Contacts/contacts';
import { about } from './about_vr/about';
import { study } from './study/study';

function App() {
  return (
    <div className="App">
      <div className='container'>
      <Nav />
      {header()}
      {contacts()}
      {about()}
      {study()}
      </div>
    </div>
  );
}

export default App;
