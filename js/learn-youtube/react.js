const section_videos_react = document.getElementById("section_videos_react");

let videos_react = [
    [
      "https://www.youtube.com/embed/37SwqREHRGI",
      "TUDO que você deve estudar de JavaScript antes do React",
    ],
    [
      "https://www.youtube.com/embed/QzDjdlF1BQI",
      "O que estudar antes de tentar aprender um Framework JavaScript? (React, Angular, Vue) #ImersaoReact",
    ],
    [
      "https://www.youtube.com/embed/6IuQUgeDPg0",
      "O que é React JS? #HipstersPontoTube",
    ],
    [
      "https://www.youtube.com/embed/CKguR0K8UJg",
      "5 Coisas que Você Precisa DOMINAR para Entrar no Mundo do REACT JS",
    ],
    [
      "https://www.youtube.com/embed/tBweoUiMsDg",
      "🔥 Clone do NETFLIX em REACTJS para Iniciantes",
    ],
    [
      "https://www.youtube.com/embed/iIQOtwsWXqU",
      "React para Iniciantes - 19:00h quinta (28/11)",
    ],
    [
      "https://www.youtube.com/embed/ErjWNvP6mko",
      "Curso de React Para Completos Iniciantes",
    ],
    [
      "https://www.youtube.com/embed/609SbFcAueA",
      "Semana Front-end Inter - Reconstrua o Super App Inter na prática com React.",
    ],
    [
      "https://www.youtube.com/embed/kCpca2z2cls",
      "O ERRO mais comum no React (você já fez isso)",
    ],
    [
      "https://www.youtube.com/embed/oy4cbqE1_qc",
      "CRIANDO PROJETO DO ZERO COM REACTJS 🚀",
    ],
    [
      "https://www.youtube.com/embed/x7jm93Mrvtc",
      "Manipulando States com useState - React Hooks #00",
    ],
    [
      "https://www.youtube.com/embed/oPOKpSFqy-I",
      "Crie componentes DESSA FORMA no React (Pattern de composição)",
    ],
    [
      "https://www.youtube.com/embed/tG3Uwvuqzuk",
      "Typescript com REACTJS - Do Iniciante ao Avançado",
    ],
    [
      "https://www.youtube.com/embed/lrot_otx2tA",
      "Scroll infinito? Animação no Scroll? Como usar o Intersection Observer do JavaScript com React!",
    ],
    [
      "https://www.youtube.com/embed/cMq6k7ymv2s",
      "Formulários em React com Engenharia Reversa no Formik | DevSoutinho",
    ],
    [
      "https://www.youtube.com/embed/-nYNd6EuZHU",
      "Como fazer validações de formulário com React? #FailFastValidations | Formik Engenharia Reversa #02",
    ],
    [
      "https://www.youtube.com/embed/5t2gq3xJZ9o",
      "React com CMS via Google Spreadsheets e Nextjs | Top Jogos favoritos DevSoutinho",
    ],
    [
      "https://www.youtube.com/embed/iqv5U0oKQX8",
      "NextJS: 3 Coisas que você deveria saber! E como integrar NextJS com qualquer coisa",
    ],
    [
      "https://www.youtube.com/embed/HGrXz6vHngI",
      "Efeito Stagger com React e Styled Components | Alura e DevSoutinho",
    ],
    [
      "https://www.youtube.com/embed/QdfjWRc4ySA",
      "Styled Components, por onde começar? Os poderes do CSS in JS",
    ],
    [
      "https://www.youtube.com/embed/mJK5oGixSYo",
      "Como começar a estruturar um projeto React? com NextJS, Styled Components",
    ],
    [
      "https://www.youtube.com/embed/5MzOCxSWrrc",
      "Como fazer o React e aprender a ideia do Virtual DOM na prática | Como implementar o ReactJS",
    ],
    [
      "https://www.youtube.com/embed/mTLlCEjlX-4",
      "Aula 1 - Os 5 erros dos devs do mercado que te tiram o emprego em projetos e empresas excelentes",
    ],
    [
      "https://www.youtube.com/embed/4UuMV0ku9tI",
      "Aula 2 - Dominando qualquer mercado com os 5 pilares do método ReactJS pra se tornar um Dev de Elite",
    ],
    ["https://www.youtube.com/embed/Mp1E-PmE1BA", "Aula 3 - Plano dev de elite"],
    [
      "https://www.youtube.com/embed/6TEo2AxW-oQ",
      "Aplicações React do futuro? UI declarativas, design system e frameworks | Code/Drops #48",
    ],
    [
      "https://www.youtube.com/embed/6uixYHh7XEc",
      "Animações no React Native com Reanimated V2 | Code/Drops #45",
    ],
  ];
  for (let i = 0; i < videos_react.length; i++) {
  section_videos_react.innerHTML += `
          <section class="video">
            <h2 class="video_title">
              ${videos_react[i][1]}
            </h2>
            <iframe
              class="video_player"
              src="${videos_react[i][0]}"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </section>
          `;
}