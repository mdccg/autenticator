import { renderSignUpUserForm } from './components/CreateUserForm';
import './stylesheets/styles.css';

const $ = document.querySelector.bind(document);

const app = <HTMLDivElement>$('#app');
renderSignUpUserForm(app);