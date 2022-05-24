import './styles.css';

const renderWelcomePanel = (container: HTMLElement) => {
  const htmlContent = `
    <div id="welcome" class="screen">
      <div>
        <h1>Bem-vindo!</h1>
      </div>
      
      <div id="buttons">
        <a id="about-link" href="sobre.html" class="botao">Conheça a equipe</a>
        <a id="logout-button" href="logout.html" class="botao">Sair</a>
      </div>
    </div>
  `

  container.innerHTML = htmlContent
}

export default renderWelcomePanel
