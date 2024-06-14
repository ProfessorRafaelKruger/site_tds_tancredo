const section_tools = document.getElementById("tools");
let tools = [
  [
    "https://asana.com/pt",
    "Asana - Plataforma de gestão de tarefas e projetos",
  ],
  [
    "https://aws.amazon.com/",
    "AWS - Plataforma de serviços em nuvem com uma ampla gama de recursos",
  ],
  [
    "https://animate.style/",
    "Animate.css - Biblioteca de animações CSS prontas para uso",
  ],
  [
    "https://www.atlassian.com/software/jira",
    "Jira - Software de rastreamento de projetos e problemas",
  ],
  ["https://babeljs.io/", "Babel - Compilador JavaScript de última geração"],
  [
    "https://unpkg.com/browse/babel-standalone@6.26.0/",
    "Babel Standalone - Transpilador de JavaScript para compatibilidade com versões antigas",
  ],
  [
    "https://basecamp.com/",
    "Basecamp - Ferramenta de gestão de projetos e colaboração",
  ],
  ["https://carbon.now.sh/", "Carbon - Criador de imagens de código-fonte"],
  [
    "https://clickup.com/",
    "ClickUp - Plataforma de produtividade e gestão de projetos",
  ],
  [
    "https://codepen.io/",
    "CodePen - Ambiente de desenvolvimento front-end online",
  ],
  ["https://codeguide.co/", "Code Guide - Guia de boas práticas de HTML e CSS"],
  [
    "https://codeguide.co/#css-declaration-order",
    "CSS Declaration Order - Guia de ordem das declarações CSS",
  ],
  [
    "https://www.codegrepper.com/?gclid=Cj0KCQjwhY-aBhCUARIsALNIC06qjrDEk-1HYxpH-Iqup7jBm6A6q9_OAUpvjxm2KBkXnjDf380wxpcaApu3EALw_wcB",
    "Codegrepper - Ferramenta de busca de trechos de código",
  ],
  [
    "https://studio.code.org/download/mc",
    "Code.org - Ferramenta de aprendizagem de programação com Minecraft",
  ],
  [
    "https://console.firebase.google.com/u/2/project/project-467919945216249318/database/project-467919945216249318-default-rtdb/data/~2Fformulario_clientes?hl=pt-br",
    "Firebase Database - Gerenciamento de banco de dados em tempo real",
  ],
  [
    "https://console.firebase.google.com/u/2/?hl=pt-br",
    "Firebase Console - Plataforma de desenvolvimento de aplicativos",
  ],
  [
    "https://fonts.google.com/",
    "Google Fonts - Biblioteca de fontes gratuitas",
  ],
  [
    "https://gist.github.com/awkale/ad46e2ade70e833fa178",
    "GitHub Gist - Compartilhamento de trechos de código",
  ],
  [
    "https://glitch.com/",
    "Glitch - Plataforma para criação e hospedagem de aplicativos web",
  ],
  [
    "https://html5up.net/",
    "HTML5 UP - Modelos gratuitos de sites HTML5 responsivos",
  ],
  [
    "https://www.img2go.com/",
    "IMG2Go - Ferramenta online de edição de imagens",
  ],
  [
    "https://illustrations.co/",
    "Illustrations by Storyset - Ilustrações gratuitas para projetos",
  ],
  [
    "https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API",
    "Web Animations API - Guia de uso da API de Animações Web",
  ],
  [
    "https://react-bootstrap.github.io/",
    "React Bootstrap - Biblioteca de componentes Bootstrap para React",
  ],
  [
    "https://www.heroku.com/",
    "Heroku - Plataforma de PaaS para implantação de aplicativos web",
  ],
  [
    "https://stackblitz.com/",
    "StackBlitz - Ambiente de desenvolvimento online para JavaScript",
  ],
  [
    "https://www.zapier.com",
    "Zapier - Automação de fluxos de trabalho entre aplicativos",
  ],
  [
    "https://trello.com/",
    "Trello - Aplicativo de gestão de projetos baseado em Kanban",
  ],
  [
    "https://storybook.js.org/",
    "Storybook - Desenvolvimento de componentes de interface isolados",
  ],
  ["https://undraw.co/", "unDraw - Ilustrações gratuitas para projetos"],
  ["https://tiptap.dev/", "Tiptap - Editor de texto baseado em JavaScript"],
  [
    "https://sweetalert2.github.io/",
    "SweetAlert2 - Biblioteca para modais customizáveis",
  ],
  [
    "https://stackshare.io/",
    "StackShare - Comparação de ferramentas de tecnologia",
  ],
  [
    "https://reactjs.org/docs/getting-started.html",
    "React.js Tutorial - Guia para começar com React no VS Code",
  ],
  [
    "https://developers.google.com/web/tools/lighthouse",
    "Lighthouse - Ferramenta de auditoria de performance web",
  ],
  [
    "https://reactjs.org/docs/add-react-to-a-website.html",
    "Add React to a Website - Documentação para adicionar React a um site",
  ],
  [
    "https://www.microsoft.com/pt-br/cloud",
    "Microsoft Azure - Plataforma de serviços em nuvem da Microsoft",
  ],
  [
    "https://vercel.com/",
    "Vercel - Plataforma de hospedagem e desenvolvimento para projetos de front-end",
  ],
  [
    "https://kubernetes.io/",
    "Kubernetes - Sistema de orquestração de contêineres",
  ],
  [
    "https://netlify.com/",
    "Netlify - Plataforma para implantação de sites estáticos e aplicações modernas",
  ],
  [
    "https://www.newrelic.com/",
    "New Relic - Plataforma de monitoramento de performance de aplicações e infraestrutura",
  ],
  [
    "https://digitalocean.com/",
    "DigitalOcean - Serviço de hospedagem em nuvem para desenvolvedores",
  ],
  [
    "https://about.gitlab.com/",
    "GitLab - Plataforma DevOps que fornece repositório de código, CI/CD e outras ferramentas de desenvolvimento",
  ],
  [
    "https://sentry.io/",
    "Sentry - Ferramenta de monitoramento de erros e desempenho para desenvolvedores",
  ],
  [
    "https://www.postman.com/",
    "Postman - Ferramenta para teste e desenvolvimento de APIs",
  ],
  [
    "https://www.docker.com/",
    "Docker - Plataforma para criação, entrega e execução de aplicativos em contêineres",
  ],
  [
    "https://cloud.google.com/",
    "Google Cloud Platform - Conjunto de serviços de computação em nuvem do Google",
  ],
  ["https://webpack.js.org/", "Webpack - Empacotador de módulos JavaScript"],
  [
    "https://www.w3schools.com/",
    "W3Schools - Tutoriais web e referência para desenvolvedores",
  ],
  [
    "https://fontawesome.com/search?s=solid%2Cbrands",
    "Font Awesome - Ícones gratuitos para uso em websites",
  ],
];

for (let i = 0; i < tools.length; i++) {
  section_tools.innerHTML += `
    <a
    href="${tools[i][0]}"
    class="tool_link"       
    target="_blank"
    rel="noopener noreferrer"
    >
    <div class="tool_inner">
    <h3 class="tool_title">${tools[i][1]}</h3>
    </div>
    </a>
    `;
}
