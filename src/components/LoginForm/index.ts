import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

import { firebaseApp } from '../../config/firebase'

const $ = document.querySelector.bind(document)

const authStatuses = [
  'auth/wrong-password',
  'auth/user-not-found',
  'auth/invalid-email',
]

const onSubmitLoginForm = (event: Event) => {
  event.preventDefault()
  const email = (<HTMLInputElement>$('#email')).value
  const password = (<HTMLInputElement>$('#password')).value

  const auth = getAuth(firebaseApp)
  signInWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      const { user } = userCredential
      const idToken = await user.getIdToken()
      localStorage.setItem('token', idToken)
      window.location.href = 'index.html'
    })
    .catch((error) => {
      const { code } = error

      if (authStatuses.includes(code)) {
        let errorParagraph = <HTMLParagraphElement>$('#error-message')
        if (!errorParagraph) {
          errorParagraph = <HTMLParagraphElement>document.createElement('p')
          errorParagraph.innerText = 'Credenciais inválidas'
          errorParagraph.id = 'error-message'

          const app = <HTMLDivElement>$('#app')
          app.insertAdjacentElement('beforeend', errorParagraph)
        }
      } else {
        console.log(code)
      }
    })
}

const renderLoginForm = (container: HTMLElement) => {
  const htmlContent = `
    <div id="login" class="screen">
      <form id="form">
        <h2>Há quanto tempo!</h2>
        
        <div class="form-input">
          <label for="email">E-mail</label>
          <input placeholder="Digite seu e-mail" type="email" id="email" name="email" required />
        </div>

        <div class="form-input">
          <label for="password">Senha</label>
          <input placeholder="Digite sua senha" type="password" id="password" name="password" required />
          <span id="suspicious-message">Cuidado com quem olha por cima dos seus ombros&hellip;</span>
        </div>

        <button class="botao">Entrar</button>
      </form>
    </div>
  `

  container.innerHTML = htmlContent
  const loginForm = <HTMLFormElement>$('#form')
  loginForm.onsubmit = onSubmitLoginForm
}

export default renderLoginForm