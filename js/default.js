const btnMenu = document.getElementById("btnMenu");
let heightHeader = header.style.height;
const footer = document.getElementById("footer");

//
//
//

menu.style.top = heightHeader;
btnMenu.addEventListener("click", () => {
  if (menu.style.left == "0px") {
    //fechar menu
    menu.style.left = "-100vw";
  } else {
    //abrir menu
    menu.style.left = "0px";
  }
});

//
//
//

footer.innerHTML = `
  <div id="footer_left">
          <h2 class="footer_title">Colégio Estadual Tancredo Neves</h2>
          <p class="footer_content">Diretora: Lucia Tânia Neves da Rocha</p>
          <p class="footer_content">
            <i class="fa-regular fa-envelope"></i> fnbtancredo@seed.pr.gov.br
          </p>
          <a href="https://wa.me/+554635271526"
            ><i class="footer_content fa-brands fa-whatsapp"></i>
            <span class="hover_gray">Whatsapp Colégio</span></a
          >
          <p class="footer_content">
            <i class="fa-solid fa-location-dot"></i>
            Rua Barra Mansa, 525 - Bairro Pinheirinho - CEP 85603-260
          </p>
          <p class="footer-content">Francisco Beltrão - Paraná - Brasil</p>
        </div>
        <div id="footer_right">
          <h2 class="footer_title">
            Curso Técnico em Desenvolvimento de Sistemas
          </h2>
          <p class="footer_content">Coordenador de Curso: Rafael Lucas Krüger</p>
          <p class="footer_content">
            <i class="fa-regular fa-envelope"></i> rafael.kruger@escola.pr.gov.br
          </p>
          <a href="https://wa.me/+5546991402909"
            ><i class="footer_content fa-brands fa-whatsapp"></i>
            <span class="hover_gray">Whatsapp</span></a
          >
        </div>
  `;
