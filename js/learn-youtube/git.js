const section_videos_git = document.getElementById("section_videos_git");

let videos_git = [
  [
    "https://www.youtube.com/embed/_hZf1teRFNg",
    "Git e Github Tutorial completo - Introdução prática para iniciantes",
  ],
  [
    "https://www.youtube.com/embed/GIEquFr3jcg",
    "Curso de Versionamento com Git",
  ],
  [
    "https://www.youtube.com/embed/32m_dhr3P70",
    "Git dicas - Profissionalize seus commits e entregas",
  ],
];

for (let i = 0; i < videos_git.length; i++) {
    section_videos_git.innerHTML += `
            <section class="video">
              <h2 class="video_title">
                ${videos_git[i][1]}
              </h2>
              <iframe
                class="video_player"
                src="${videos_git[i][0]}"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </section>
            `;
  }