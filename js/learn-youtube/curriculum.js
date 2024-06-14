const section_videos_curriculum = document.getElementById(
  "section_videos_curriculum"
);
let videos_curriculum = [
  [
    "https://www.youtube.com/embed/MIiWvrJoAV4",
    "PONTOS FRACOS - 6 exemplos de como responder sobre os seus pontos fracos na entrevista",
  ],
  [
    "https://www.youtube.com/embed/LyB2tFkqw4s",
    "Aprenda a fazer um currículo que se destaque!",
  ],
  [
    "https://www.youtube.com/embed/XKXh-7G6sAc",
    "Currículo | Processo Seletivo Na Prática",
  ],
  [
    "https://www.youtube.com/embed/W9hbsowZ3fs",
    "Porque seu CURRICULO Não Passa na TRIAGEM do RH",
  ],
  [
    "https://www.youtube.com/embed/wEN3E4LHFfA",
    "COMPETÊNCIAS do FUTURO: mercado de trabalho e o que são HARD SKILLS e SOFT SKILLS 📚",
  ],
  [
    "https://www.youtube.com/embed/jYCD5vUFYvI",
    "6 COMPETÊNCIAS para você MANTER SEU EMPREGO | SOFT SKILLS",
  ],
  [
    "https://www.youtube.com/embed/vD6lQwT0e2k",
    "O que COLOCAR NO OBJETIVO do CURRÍCULO? Dicas Práticas para Todos os Tipos de Profissionais! 🙋",
  ],
  [
    "https://www.youtube.com/embed/0MxvryGnDwc",
    "❌👎9 ERROS que ELIMINAM SEU CURRÍCULO de um PROCESSO SELETIVO",
  ],
  [
    "https://www.youtube.com/embed/jerf-EPTtho",
    "PARE DE SER IGNORADO por RECRUTADORES e CONSIGA SEU EMPREGO no LINKEDIN!",
  ],
  [
    "https://www.youtube.com/embed/8Zqoa-j1GD4",
    "CUIDADOS com Posts no LINKEDIN * o que você deve evitar para não se prejudicar",
  ],
  [
    "https://www.youtube.com/embed/iptinYPg3EQ",
    "Como Adicionar Certificado no Linkedin - Passo a Passo | Na Prática",
  ],
  [
    "https://www.youtube.com/embed/p6KfREqfIvk",
    "O poder do GESTO na comunicação | #Comunica",
  ],
  [
    "https://www.youtube.com/embed/Mk9R_2znaJY",
    "Você quer FALAR MELHOR? Trabalhe sua MODULAÇÃO | #Comunica",
  ],
  [
    "https://www.youtube.com/embed/zaR0dNBkb4s  ",
    "Como fazer VÍDEO APRESENTAÇÃO para PROCESSO SELETIVO",
  ],
];

for (let i = 0; i < videos_curriculum.length; i++) {
  section_videos_curriculum.innerHTML += `
          <section class="video">
            <h2 class="video_title">
              ${videos_curriculum[i][1]}
            </h2>
            <iframe
              class="video_player"
              src="${videos_curriculum[i][0]}"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </section>
          `;
}
