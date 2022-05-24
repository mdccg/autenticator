import renderLoginForm from './components/LoginForm'
import './stylesheets/styles.css'

const app = <HTMLDivElement>document.querySelector('#app')
renderLoginForm(app)

const renderCreateUserInvite = (container: HTMLDivElement) => {
  const createUserInvite = `
    <div id="sign-invite">
      <span>Novo na página?</span>
      <a href="createuser.html">Registre-se</a>
    </div>
  `;
  
  container.insertAdjacentHTML('beforeend', createUserInvite);
}

const login = <HTMLDivElement>document.querySelector('#login');
renderCreateUserInvite(login);