import './styles.css';

export const renderAboutPanel = (container: HTMLDivElement) => {
  const htmlContent = `
    <div id="about" class="screen">
      <hgroup>
        <h2>Este site foi criado para exemplificar o uso de autenticação de usuários via e-mail e senha, utilizando a API do Firebase.</h2>
        <h1>IFMS câmpus Aquidauana, TSI</h1>
      </hgroup>

      <div id="buttons">
        <a id="home-button" href="index.html" class="botao">Home</a>
        <a id="logout-button" href="logout.html" class="botao">Sair</a>
      </div>
    </div>
  `;
  container.innerHTML = htmlContent;
}