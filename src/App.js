import './App.css';
import Button from './Helpers/buttons/button';
import Nav from './NavBar/nav';
import { header } from './Header/header';
import {contacts} from './Contacts/contacts';
import { about } from './about_vr/about';
import { study } from './study/study';
import { technologies } from './Technoliges_used_by_hydra/technologies';
import { joinForm } from './Join_form/join';
import { footer } from './Fotter/footer';

function App() {
  return (
    <div className="App">
      <div className='container'>
      <Nav />
      {header()}
      {contacts()}
      {about()}
      {study()}
      {technologies()}
      {joinForm()}
      {footer()}
      </div>
    </div>
  );
}

export default App;
