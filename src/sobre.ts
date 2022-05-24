import { renderAboutPanel } from './components/About';
import './stylesheets/styles.css';

const $ = document.querySelector.bind(document);

const app = <HTMLDivElement>$('#app');
const token = localStorage.getItem('token');

if (token) {
  renderAboutPanel(app);
} else {
  window.location.href = 'login.html';
}
