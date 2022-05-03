import { blockUser } from './utils/block_utils'
import renderLoginForm from './components/LoginForm'
import './style.css'

const app = <HTMLDivElement>document.querySelector('#app')
renderLoginForm(app)

blockUser()