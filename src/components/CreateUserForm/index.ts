import './styles.css';

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { firebaseApp } from './../../config/firebase';

const $ = document.querySelector.bind(document);

const renderSuccessfulMessage = (container: HTMLDivElement) => {
  container.innerHTML = `
    <p id="successful-message">Parabéns, você conseguiu criar uma conta! :D</p>
    <a href="login.html" id="login-message">Clique aqui para fazer login</a>
  `;
  container.style.display = 'block';
}

const renderErrorMessage = (container: HTMLDivElement) => {
  container.innerHTML = 'Deu errado, burrão D:&lt;';
  container.style.display = 'block';
}

const onSubmitUserForm = (event: Event) => {
  event.preventDefault();

  const email = <HTMLInputElement>$('#email');
  const password = <HTMLInputElement>$('#password');

  const auth = getAuth(firebaseApp);

  const loginMessageArea = <HTMLDivElement>$('#login-message-area');
  const errorMessageParagraph = <HTMLParagraphElement>$('#error-message');

  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((_) => renderSuccessfulMessage(loginMessageArea))
    .catch((_) => renderErrorMessage(errorMessageParagraph));
}

export const renderSignUpUserForm = (container: HTMLDivElement) => {
  const htmlContent = `
    <div id="signup" class="screen">
      <div id="login-message-area"></div>
      <p id="error-message"></p>

      <form id="form">
        <h2>Crie uma conta</h2>

        <div class="form-input">
          <label for="email">E-mail</label>
          <input type="email" id="email" placeholder="Digite seu e-mail" required />
        </div>

        <div class="form-input">
          <label for="password">Senha</label>
          <input type="password" id="password" placeholder="Digite sua senha" required />
          <span id="suspicious-message">Cuidado com quem olha por cima dos seus ombros&hellip;</span>
        </div>
        
        <input class="botao" type="submit" value="Criar uma conta" />
      </form>

      <div id="sign-invite">
        <span>Já tem uma conta?</span>
        <a href="login.html">Faça login</a>
      </div>
    </div>
  `;
  
  container.innerHTML = htmlContent;

  const signUpUserForm = <HTMLFormElement>$('#form');
  signUpUserForm.onsubmit = onSubmitUserForm;
}