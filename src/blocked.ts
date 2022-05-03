import { LOGIN_TRIES_LIMIT } from './config/firebase'
import { getTries, resetTries } from './utils/block_utils'

const tries = getTries()

if (tries < LOGIN_TRIES_LIMIT) {
  window.location.href = 'index.html'
}

const $ = document.querySelector.bind(document)

const app = <HTMLDivElement>$('#app')

app.innerHTML = `
  <h1>Banido</h1>
  <p>
  Você foi <strong>banido</strong> por falhar
  miseravelmente ${LOGIN_TRIES_LIMIT} vezes seguidas
  </p>
  <button>Vou ser um bom garoto</button>
  <img width="100%" src="/assets/mestre.png" alt="Ednaldo Pereira" />
`

const button = <HTMLButtonElement>$('button')

button.addEventListener('click', () => {
  resetTries()
})