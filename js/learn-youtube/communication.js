const section_videos_communication = document.getElementById(
    "section_videos_communication"
  );
  let videos_communication = [
  [
    "https://www.youtube.com/embed/czKcaKkg9ps",
    "10 DICAS para você se COMUNICAR MELHOR no WHATSAPP! | #Comunica",
  ],
  [
    "https://www.youtube.com/embed/IbiZbIH0YMk",
    "10 DICAS para FALAR BEM no seu TCC (e em qualquer APRESENTAÇÃO!) | #Comunica",
  ],
];
for (let i = 0; i < videos_communication.length; i++) {
    section_videos_communication.innerHTML += `
            <section class="video">
              <h2 class="video_title">
                ${videos_communication[i][1]}
              </h2>
              <iframe
                class="video_player"
                src="${videos_communication[i][0]}"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </section>
            `;
  }