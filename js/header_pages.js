const header = document.getElementById("header");
const menu = document.getElementById("menu");

header.innerHTML = `<nav id="nav_esq">
<a href="#" id="btnMenu">Menu</a>
</nav>
<a href="../index.html"
><img
  src="../images/logo.png"
  alt="Logo TDS, circulo com escrita </TDS> dentro"
  title="Logo TDS"
/></a>
<nav id="nav_dir">
<a href="#footer">Contato</a>
</nav>`;

menu.innerHTML = `
<div>
<ul id="links">
  <a href="./courses.html"><li>Plataformas de Cursos</li></a>
  <a href="./tools.html"><li>Ferramentas Online</li></a>
  <!-- <a href="./extensions.html"><li>Extensões (Chrome e VsCode)</li></a> -->
  <!-- <a href="./learn-playing.html"><li>Aprenda Jogando</li></a> -->
  <a href="./learn-youtube.html"><li>Estude pelo Youtube</li></a>
  <!-- <a href="./get-job.html"><li>Consiga um Emprego</li></a> -->
  <!-- <a href="./projects.html"><li>Projetos para Portfólio</li></a> -->
  <!-- <a href="./practice.html"><li>Praticar/Codar</li></a> -->
  <!-- <a href="./documentations.html"><li>Conteúdos/Documentação</li></a> -->
  <a href="./events.html"><li>Eventos | Visitas | Palestras</li></a>
  <a href="./about.html"><li>Sobre o Curso Técnico</li></a>
  </ul>
  </div>`;

//
//
//

let link = document.createElement("link");
link.rel = "icon";
link.type = "image/png";
link.href = "../images/favicon.png";

document.head.appendChild(link);
