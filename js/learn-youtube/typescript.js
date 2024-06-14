const section_videos_typescript = document.getElementById(
  "section_videos_typescript"
);

let videos_typescript = [
  [
    "https://www.youtube.com/embed/G5TOitIft8o",
    "Visão geral | Aprendendo Orientação a Objetos com TS #1",
  ],
  [
    "https://www.youtube.com/embed/rBBlZVUmxsA",
    "Setup, classes, atributos e construtores | Aprendendo Orientação a Objetos com TS #2",
  ],
  [
    "https://www.youtube.com/embed/TPbfo-JX4t8",
    "Métodos, parâmetros e retorno | Aprendendo Orientação a Objetos com TS #3",
  ],
  [
    "https://www.youtube.com/embed/JI_HL9499ZU",
    "Encapsulamento | Aprendendo Orientação a Objetos com TS #4",
  ],
  [
    "https://www.youtube.com/embed/LE6jA_QYOC0",
    "Github Copilot e Ferramentas com TypeScript",
  ],
];

for (let i = 0; i < videos_typescript.length; i++) {
  section_videos_typescript.innerHTML += `
            <section class="video">
              <h2 class="video_title">
                ${videos_typescript[i][1]}
              </h2>
              <iframe
                class="video_player"
                src="${videos_typescript[i][0]}"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </section>
            `;
}
