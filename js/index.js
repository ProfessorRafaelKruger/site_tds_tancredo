const header = document.getElementById("header");
const menu = document.getElementById("menu");

header.innerHTML = `<nav id="nav_esq">
<a href="#" id="btnMenu">Menu</a>
</nav>
<a href="./index.html"
><img
  src="./images/logo.png"
  alt="Logo TDS, circulo com escrita </TDS> dentro"
  title="Logo TDS"
/></a>
<nav id="nav_dir">
<a href="#footer">Contato</a>
</nav>`;

menu.innerHTML = `
<div>
<ul id="links">
  <a href="./pages/courses.html"><li>Plataformas de Cursos</li></a>
  <a href="./pages/tools.html"><li>Ferramentas Online</li></a>
  <!-- <a href="./pages/extensions.html"><li>Extensões (Chrome e VsCode)</li></a> -->
  <!-- <a href="./pages/learn-playing.html"><li>Aprenda Jogando</li></a> -->
  <a href="./pages/learn-youtube.html"><li>Estude pelo Youtube</li></a>
  <!-- <a href="./pages/get-job.html"><li>Consiga um Emprego</li></a> -->
  <!-- <a href="./pages/projects.html"><li>Projetos para Portfólio</li></a> -->
  <!-- <a href="./pages/practice.html"><li>Praticar/Codar</li></a> -->
  <!-- <a href="./pages/documentations.html"><li>Conteúdos/Documentação</li></a> -->
  <a href="./pages/about.html"><li>Sobre o Curso Técnico</li></a>
  </ul>
  </div>`;
