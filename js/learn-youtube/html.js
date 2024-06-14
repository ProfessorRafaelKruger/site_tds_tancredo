const section_videos_html = document.getElementById("section_videos_html");
let videos_html = [
  [
    "https://www.youtube.com/embed/xarRciYWT5Q",
    "Aplicação JavaScript: Como desenvolver um controle financeiro",
  ],
  [
    "https://www.youtube.com/embed/VCsNIRXNsmY",
    "APRENDA como criar um FORMULÁRIO com HTML e CSS",
  ],
  [
    "https://www.youtube.com/embed/UftSB4DaRU4",
    "Manipulação de DOM com JavaScript, do zero, na prática | Masterclass #18",
  ],
  [
    "https://www.youtube.com/embed/YcTkoIAi0Bg",
    "Como fazer VALIDAÇÃO de FORMULÁRIOS com JavaScript",
  ],
  [
    "https://www.youtube.com/embed/0bNeKAzVvlE",
    "Crie Uma LISTA DE TAREFAS com HTML, CSS & JavaScript",
  ],
  [
    "https://www.youtube.com/embed/93wPYo1pjic",
    "Crie Uma CALCULADORA com HTML, CSS & JavaScript",
  ],
  [
    "https://www.youtube.com/embed/7kEW5wbhhdA",
    "Será este o fim do JavaScript? | DIO Deploy #Setembro",
  ],
  [
    "https://www.youtube.com/embed/gkW1S6-aSTQ",
    "🔥 VAMOS RECRIAR O SITE DA AMAZON COM HTML5, CSS3 E JAVASCRIPT PURO",
  ],
  [
    "https://www.youtube.com/embed/9eXoi__T02Y",
    "Como Criar um Website Moderno com HTML & CSS | TEMPLATE PARA ACADEMIA / ESPORTES / FITNESS",
  ],
  [
    "https://www.youtube.com/embed/ctx2h60FUIY",
    "Crie um WebSite Moderno Utilizando HTML & CSS (PURO)",
  ],
  [
    "https://www.youtube.com/embed/dlevRfhwv3E",
    "💥 ANIMAÇÕES COM JAVASCRIPT PURO: TUTORIAL COMPLETO COM PROJETO PRÁTICO",
  ],
  [
    "https://www.youtube.com/embed/vZlVnxEPhw0",
    "Aprenda Criar um FORMULÁRIO DE PAGAMENTO com Javascript PURO E Converta para ReactJS",
  ],
  [
    "https://www.youtube.com/embed/6lbBaM18X3g",
    "Você PRECISA ENTENDER o conteúdo DESSE | Callbacks, Sincrono, Assíncrono e Event Loop no JavaScript",
  ],
  [
    "https://www.youtube.com/embed/q28lfkBd9F4",
    "Como usar Async/Await? Promises no JavaScript? Você NUNCA MAIS VAI ERRAR",
  ],
];
for (let i = 0; i < videos_html.length; i++) {
  section_videos_html.innerHTML += `
          <section class="video">
            <h2 class="video_title">
              ${videos_html[i][1]}
            </h2>
            <iframe
              class="video_player"
              src="${videos_html[i][0]}"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </section>
          `;
}
