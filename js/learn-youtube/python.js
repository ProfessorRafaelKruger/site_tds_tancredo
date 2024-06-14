const section_videos_python = document.getElementById("section_videos_python");
let videos_python = [
  [
    "https://www.youtube.com/embed/K2ejI4z8Mbg",
    "Como Criar e Publicar um Site em Python com Flask",
  ],
  [
    "https://www.youtube.com/embed/eNpkQOMnF8g",
    "Como Criar Chatbot Inteligente com Python",
  ],
  [
    "https://www.youtube.com/embed/cGSerUmK0CE",
    "Como Transformar Arquivo Python em Arquivo Executável",
  ],
];
for (let i = 0; i < videos_python.length; i++) {
  section_videos_python.innerHTML += `
            <section class="video">
              <h2 class="video_title">
                ${videos_python[i][1]}
              </h2>
              <iframe
                class="video_player"
                src="${videos_python[i][0]}"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </section>
            `;
}
