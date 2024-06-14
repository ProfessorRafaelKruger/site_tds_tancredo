const section_videos_others = document.getElementById("section_videos_others");

let videos_others = [
  [
    "https://www.youtube.com/embed/qnLq50AM9Rk?si=IQjthHFT48S7nlFD",
    "10 Dicas de SEO para utilizar no seu Site e dominar o Google",
  ],
  [
    "https://www.youtube.com/embed/4wEMbHNZW6o",
    "Sobrevivendo no mercado - front end",
  ],
  [
    "https://www.youtube.com/embed/J4BVaXkwmM8",
    "A Primeira Aula de Flutter Que Todo Mundo Deveria Ter",
  ],
  [
    "https://www.youtube.com/embed/FAv3Bo84NXk",
    "Angular: Você acha DIFÍCIL por causa disso! (DICAS)",
  ],
  ["https://www.youtube.com/embed/Zqz_76JYPSc", "Seu primeiro App em Flutter"],
  [
    "https://www.youtube.com/embed/zSl_n-9yGRs",
    "LocalStorage + NextJS DA PRA USAR?? Cookies ou LocalStorage? | Salvando preferências de usuário",
  ],
  [
    "https://www.youtube.com/embed/M4mHkuQ0mqQ",
    "Mensageria com Apache Kafka: O mínimo que um desenvolvedor precisa saber",
  ],
  [
    "https://www.youtube.com/embed/EhnXaybirdA",
    "Criando um projeto do zero para seu portfólio | Masterclass #14",
  ],
  [
    "https://www.youtube.com/embed/fNTJnJB3eDI",
    "Testes Automatizados - Aprenda 4 tipos na Prática",
  ],
  [
    "https://www.youtube.com/embed/RSZoz3reh9M",
    "Vamos Criar um WebApp de Aposta para Criptomoedas - Tutorial FullStack Web3 & Solidity",
  ],
  [
    "https://www.youtube.com/embed/FYgIpVf9TBI",
    "HTML e CSS a partir do Figma 1/2: Preparação para Semana Spring React",
  ],
  [
    "https://www.youtube.com/embed/EsQ07Og1yFM",
    "HTML e CSS a partir do Figma 2/2: Preparação para Semana Spring React",
  ],
  ["https://www.youtube.com/embed/E1jRjGhohpA", "Dev 360º - Dia 01"],
  ["https://www.youtube.com/embed/9U12uvALuhU", "Dev 360º - Dia 02"],
];

for (let i = 0; i < videos_others.length; i++) {
  section_videos_others.innerHTML += `
          <section class="video">
            <h2 class="video_title">
              ${videos_others[i][1]}
            </h2>
            <iframe
              class="video_player"
              src="${videos_others[i][0]}"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </section>
          `;
}
