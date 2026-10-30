/// historia y escenarios///

const gameStory = [

   {

      id: 0,

      type: "start",

      icon: "🌌",

      title: "El Despertar en el Valle Nevado",

      desc:

         "Amaneces en un valle envuelto por una niebla densa. " +

         "Frente a ti hay un camino ascendente que conduce hacia " +

         "el Faro de la Serenidad. Para completar tu viaje debes " +

         "tomar decisiones sabias con los recursos de tu mente.",

      options: [

         {

            text: "Iniciar la travesía hacia la cima",

            next: 1

         }

      ]

   },

   {

      id: 1,

      icon: "🎒",

      title: "El Peso en la Mochila",

      desc:

         "Comienzas a subir la colina. Notas que llevas una mochila " +

         "pesada llena de rocas que representan las entregas de " +

         "proyectos, exámenes y expectativas de la semana. " +

         "¿Cómo avanzas?",

      options: [

         {

            text:

               "Organizo el peso, tiro lo innecesario y avanzo a mi ritmo paso a paso.",

            category: "calm",

            glow: "rgba(0, 242, 254, 0.35)",

            accent: "#00f2fe",

            next: 2

         },

         {

            text:

               "Aprieto el paso sin descansar, aunque sienta que me falta el aire.",

            category: "warning",

            glow: "rgba(255, 193, 7, 0.35)",

            accent: "#ffc107",

            next: 2

         },

         {

            text:

               "Me siento en el suelo, abrumado/a, y pienso en dejar la mochila ahí tirada.",

            category: "alert",

            glow: "rgba(255, 87, 34, 0.35)",

            accent: "#ff5722",

            next: 2

         }

      ]

   },

   {

      id: 2,

      icon: "🌧️",

      title: "La Tormenta Repentina",

      desc:

         "El cielo se oscurece y cae una lluvia fría. Sientes que " +

         "la motivación desaparece y la frustración empieza a aparecer. " +

         "¿Qué haces para protegerte?",

      options: [

         {

            text:

               "Me refugio en una cueva cercana y tomo un momento de pausa consciente.",

            category: "calm",

            glow: "rgba(0, 242, 254, 0.35)",

            accent: "#00f2fe",

            next: 3

         },

         {

            text:

               "Soporto la lluvia en silencio, esperando que pase sola aunque me congele.",

            category: "warning",

            glow: "rgba(156, 39, 176, 0.35)",

            accent: "#9c27b0",

            next: 3

         },

         {

            text:

               "Me molesto con el clima y camino a ciegas sin ver por dónde voy.",

            category: "alert",

            glow: "rgba(244, 67, 54, 0.35)",

            accent: "#f44336",

            next: 3

         }

      ]

   },

   {

      id: 3,

      icon: "🧗",

      title: "El Acantilado Interminable",

      desc:

         "Llegas a un tramo muy empinado. Miras hacia arriba y " +

         "el camino parece demasiado largo y cansado, justo como " +

         "cuando sientes que la escuela se vuelve abrumadora.",

      options: [

         {

            text:

               "Miro únicamente el siguiente paso, dividiendo el ascenso en metas pequeñas.",

            category: "calm",

            glow: "rgba(76, 175, 80, 0.35)",

            accent: "#4caf50",

            next: 4

         },

         {

            text:

               "Miro constantemente la cima, sintiendo desesperación por lo lejos que está.",

            category: "warning",

            glow: "rgba(255, 193, 7, 0.35)",

            accent: "#ffc107",

            next: 4

         },

         {

            text:

               "Me paralizo por el miedo a caer o tropezar y no vuelvo a avanzar.",

            category: "alert",

            glow: "rgba(244, 67, 54, 0.35)",

            accent: "#f44336",

            next: 4

         }

      ]

   },

   {

      id: 4,

      icon: "🏕️",

      title: "El Encuentro en el Campamento",

      desc:

         "Encuentras a otros viajeros descansando en una fogata. " +

         "Se ven cansados igual que tú. ¿Cómo interactúas con la comunidad?",

      options: [

         {

            text:

               "Me acerco, comparto lo que siento y escucho sus historias.",

            category: "calm",

            glow: "rgba(0, 242, 254, 0.35)",

            accent: "#00f2fe",

            next: 5

         },

         {

            text:

               "Me siento cerca a observar, pero prefiero no hablar de mis problemas.",

            category: "warning",

            glow: "rgba(156, 39, 176, 0.35)",

            accent: "#9c27b0",

            next: 5

         },

         {

            text:

               "Paso de largo rápidamente; creo que nadie entendería lo que me pasa.",

            category: "alert",

            glow: "rgba(255, 87, 34, 0.35)",

            accent: "#ff5722",

            next: 5

         }

      ]

   },

   {

      id: 5,

      icon: "🌫️",

      title: "El Bosque de las Voces Dudosas",

      desc:      "El sendero cruza un bosque donde escuchas ecos que dicen: " +
      "'No vas a poder', 'No eres lo suficientemente bueno', " +
      "'Es mejor rendirse'.",

    options: [

      {
        text:
          "Respiro profundo, reconozco esos pensamientos negativos y los dejo ir.",

        category: "calm",

        glow: "rgba(76, 175, 80, 0.35)",

        accent: "#4caf50",

        next: 6
      },

      {
        text:
          "Trato de ignorarlos tapándome los oídos, aunque la duda se me queda adentro.",

        category: "warning",

        glow: "rgba(255, 193, 7, 0.35)",

        accent: "#ffc107",

        next: 6
      },

      {
        text:
          "Les creo a las voces y comienzo a dudar seriamente de mi capacidad.",

        category: "alert",

        glow: "rgba(244, 67, 54, 0.35)",

        accent: "#f44336",

        next: 6
      }

    ]
  },

  {
    id: 6,

    icon: "🌉",

    title: "El Puente Inestable",

    desc:
      "Frente a ti hay un puente colgante sobre un abismo. " +
      "Para cruzar necesitas confianza y estabilidad. " +
      "¿Cómo das el primer paso?",

    options: [

      {
        text:
          "Avanzo firmemente sujetándome del pasamanos y manteniendo el equilibrio.",

        category: "calm",

        glow: "rgba(0, 242, 254, 0.35)",

        accent: "#00f2fe",

        next: 7
      },

      {
        text:
          "Cruzo corriendo a toda velocidad con los ojos medio cerrados por la ansiedad.",

        category: "warning",

        glow: "rgba(255, 193, 7, 0.35)",

        accent: "#ffc107",

        next: 7
      },

      {
        text:
          "Me quedo atascado/a en la entrada sin atreverme a dar el paso.",

        category: "alert",

        glow: "rgba(244, 67, 54, 0.35)",

        accent: "#f44336",

        next: 7
      }

    ]
  },

  {
    id: 7,

    icon: "🧭",

    title: "La Encrucijada de los Caminos",

    desc:
      "El mapa se ha borrado con la humedad y hay tres caminos " +
      "frente a ti. Te sientes desorientado respecto al rumbo " +
      "de tu año escolar.",

    options: [

      {
        text:
          "Busco a un guía o profesor de la zona para pedir ayuda con la ruta.",

        category: "calm",

        glow: "rgba(76, 175, 80, 0.35)",

        accent: "#4caf50",

        next: 8
      },

      {
        text:
          "Elijo un camino al azar, deseando tener suerte sin revisar bien.",

        category: "warning",

        glow: "rgba(156, 39, 176, 0.35)",

        accent: "#9c27b0",

        next: 8
      },

      {
        text:
          "Me quedo ahí sentado/a esperando a que alguien venga a rescatarme.",

        category: "alert",

        glow: "rgba(255, 87, 34, 0.35)",

        accent: "#ff5722",

        next: 8
      }

    ]
  },

  {
    id: 8,

    icon: "🕊️",

    title: "El Refugio de los Sabios",

    desc:
      "Llegas a una pequeña posada atendida por un anciano tutor. " +
      "Te ofrece un té caliente y te pregunta: " +
      "'¿Qué haces cuando sientes que la carga es insoportable?'",

    options: [

      {
        text:
          "Pido ayuda a las personas que me quieren y me cuido a mí mismo/a.",

        category: "calm",

        glow: "rgba(0, 242, 254, 0.35)",

        accent: "#00f2fe",

        next: 9
      },

      {
        text:
          "Intento aguantar la presión a solas hasta que ya no puedo más.",

        category: "warning",

        glow: "rgba(255, 193, 7, 0.35)",

        accent: "#ffc107",

        next: 9
      },

      {
        text:
          "Me exploto emocionalmente o me desconecto de todos mis compromisos.",

        category: "alert",

        glow: "rgba(244, 67, 54, 0.35)",

        accent: "#f44336",

        next: 9
      }

    ]
  },

  {
    id: 9,

    icon: "🌟",

    title: "La Puerta del Faro",

    desc:
      "Finalmente estás en la base del Faro. La puerta requiere " +
      "una última llave interior para abrirse. ¿Cuál es tu filosofía de vida actual?",

    options: [

      {
        text:
          "Mi bienestar mental es prioridad; puedo pedir ayuda y superar retos.",

        category: "calm",

        glow: "rgba(0, 242, 254, 0.35)",

        accent: "#00f2fe",

        next: 10
      },

      {
        text:
          "Siento mucha presión diaria, pero intento seguir aunque me cueste.",

        category: "warning",

        glow: "rgba(255, 193, 7, 0.35)",

        accent: "#ffc107",

        next: 10
      },

      {
        text:
          "Siento que todo me supera y con frecuencia pierdo el sentido de avanzar.",

        category: "alert",

        glow: "rgba(244, 67, 54, 0.35)",

        accent: "#f44336",

        next: 10
      }

    ]
  }

];

/// definicion de variables y constantes por default///

let currentSceneIndex = 0;

let isTransitioning = false;

const playerStats = {

  calm: 0,

  warning: 0,

  alert: 0,

  resilience: 100,

  stress: 0,

  social: 50

};

const sceneContainer =
  document.getElementById("sceneContainer");

const glowBg =
  document.getElementById("glowBg");

const gameCard =
  document.getElementById("gameCard");

const statsBar =
  document.getElementById("statsBar");

const valCalm =
  document.getElementById("valCalm");

const valStress =
  document.getElementById("valStress");

const valSocial =
  document.getElementById("valSocial");

const progressBar =
  document.getElementById("progressBar");

const DEFAULT_GLOW =
  "rgba(0, 242, 254, 0.3)";

const DEFAULT_ACCENT =
  "#00f2fe";

/// las 9 funciones (parte funcional)///

function updateStats() {

  /*
    Resiliencia:
    Las decisiones calmadas la aumentan.
    Las decisiones de alerta la reducen.
  */

  playerStats.resilience =
    Math.max(
      0,
      Math.min(
        100,
        100 +
        (playerStats.calm * 5) -
        (playerStats.alert * 8) -
        (playerStats.warning * 2)
      )
    );

  /*
    Tensión:
    Las decisiones de advertencia aumentan tensión.
    Las decisiones de alerta aumentan bastante más.
    Las decisiones calmadas ayudan a mantenerla baja.
  */

  playerStats.stress =
    Math.max(
      0,
      Math.min(
        100,
        (playerStats.warning * 8) +
        (playerStats.alert * 15) -
        (playerStats.calm * 4)
      )
    );

  /*
    Red de apoyo:
    Las decisiones calmadas aumentan apoyo.
    Las decisiones de alerta lo reducen.
  */

  playerStats.social =
    Math.max(
      0,
      Math.min(
        100,
        50 +
        (playerStats.calm * 6) -
        (playerStats.warning * 2) -
        (playerStats.alert * 7)
      )
    );

  valCalm.textContent =
    Math.round(playerStats.resilience);

  valStress.textContent =
    Math.round(playerStats.stress);

  valSocial.textContent =
    Math.round(playerStats.social);

}

function updateProgress(index) {

  const progress =
    Math.max(
      0,
      Math.min(
        100,
        (index / 9) * 100
      )
    );

  progressBar.style.width =
    `${progress}%`;

}

function updateGlow(glowColor, accentColor) {

  const glow =
    glowColor || DEFAULT_GLOW;

  const accent =
    accentColor || DEFAULT_ACCENT;

  document.documentElement.style.setProperty(
    "--accent-neon",
    accent
  );

  document.documentElement.style.setProperty(
    "--accent-glow",
    glow
  );

  glowBg.style.background =
    `radial-gradient(
      circle,
      ${glow} 0%,
      rgba(37, 101, 212, 0) 70%
    )`;

  glowBg.style.transform =
    "translate(-50%, -50%) scale(1.08)";

  setTimeout(() => {

    glowBg.style.transform =
      "translate(-50%, -50%) scale(1)";

  }, 258);

}
function renderScene(index) {

  const scene =
    gameStory.find(
      (item) => item.id === index
    );

  if (!scene) {

    showFinalRelic();

    return;

  }

  currentSceneIndex =
    index;

  if (index > 0) {

    statsBar.classList.remove(
      "d-none"
    );

  } else {

    statsBar.classList.add(
      "d-none"
    );

  }

  updateProgress(index);

  const optionsHtml =
    scene.options
      .map((option) => {

        const category =
          option.category || "";

        const glow =
          option.glow || DEFAULT_GLOW;

        const accent =
          option.accent || DEFAULT_ACCENT;

        return `
          <button
            type="button"
            class="choice-btn"
            data-category="${category}"
            data-glow="${glow}"
            data-accent="${accent}"
            data-next="${option.next}"
          >

            <span>
              ${option.text}
            </span>

            <span
              class="choice-symbol"
            >
              ✦
            </span>

          </button>
        `;

      })
      .join("");

  sceneContainer.innerHTML = `

    <div
      class="scene-icon"
    >
      ${scene.icon}
    </div>

    <h2
      class="fw-bold text-center mb-3 fs-4 scene-title"
    >
      ${scene.title}
    </h2>

    <p
      class="text-center mb-4 fs-6 scene-description"
    >
      ${scene.desc}
    </p>

    <div
      class="d-flex flex-column gap-2"
    >
      ${optionsHtml}
    </div>

  `;

  const buttons =
    sceneContainer.querySelectorAll(
      ".choice-btn"
    );

  buttons.forEach((button) => {

    button.addEventListener(
      "click",
      () => handleOptionClick(button)
    );

  });

}

function handleOptionClick(button) {

  if (isTransitioning) {

    return;

  }

  isTransitioning = true;

  const buttons =
    sceneContainer.querySelectorAll(
      ".choice-btn"
    );

  buttons.forEach((item) => {

    item.disabled = true;

  });

  const category =
    button.dataset.category;

  const glowColor =
    button.dataset.glow;

  const accentColor =
    button.dataset.accent;

  const nextId =
    Number(button.dataset.next);

  makeChoice(
    category,
    glowColor,
    accentColor,
    nextId
  );

}

function makeChoice(
  category,
  glowColor,
  accentColor,
  nextId
) {

  if (
    Object.prototype.hasOwnProperty.call(
      playerStats,
      category
    )
  ) {

    playerStats[category]++;

  }

  updateStats();

  updateGlow(
    glowColor,
    accentColor
  );

  gameCard.classList.remove(
    "fade-in"
  );

  gameCard.classList.add(
    "fade-out"
  );

  setTimeout(() => {

    renderScene(nextId);

    gameCard.classList.remove(
      "fade-out"
    );

    void gameCard.offsetWidth;

    gameCard.classList.add(
      "fade-in"
    );

    isTransitioning = false;

  }, 400);

}
function showFinalRelic() {

  statsBar.classList.add(
    "d-none"
  );

  let title = "";

  let desc = "";

  let crystalBg = "";

  let advice = "";

  let finalAccent =
    DEFAULT_ACCENT;

  if (
    playerStats.calm >= playerStats.warning &&
    playerStats.calm >= playerStats.alert
  ) {

    title =
      "Gema del Guardián Resiliente";

    desc =
      "Completaste la travesía hacia el Faro " +
      "con un equilibrio mental destacable. " +
      "Muestras habilidades sólidas para gestionar " +
      "el estrés y buscar apoyo cuando lo necesitas.";

    crystalBg =
      "linear-gradient(135deg, #00f2fe, #4facfe)";

    advice =
      "Tu luz puede guiar a otros. Sé un pilar " +
      "en tu grupo de compañeros y apoya a quienes " +
      "sientan que la carga es muy pesada.";

    finalAccent =
      "#00f2fe";

  }

  else if (
    playerStats.warning >= playerStats.alert
  ) {

    title =
      "Gema del Caminante Cansado";

    desc =
      "Llegaste a la cima, pero tu nivel de tensión " +
      "es elevado. Estás sosteniendo mucha presión " +
      "escolar y personal sin tomar las pausas necesarias.";

    crystalBg =
      "linear-gradient(135deg, #ffc107, #ff9800)";

    advice =
      "Es importante pausar. Habla con tus profesores " +
      "o amigos de confianza para aligerar las rocas " +
      "de tu mochila antes de que se vuelva agotador.";

    finalAccent =
      "#ffc107";

  }

  else {

    title =
      "Gema de la Farola de Auxilio";

    desc =
      "Durante el viaje experimentaste niveles altos " +
      "de desgaste, aislamiento y desesperación. " +
      "Tu mente te está pidiendo un descanso.";

    crystalBg =
      "linear-gradient(135deg, #f44336, #e91e63)";

    advice =
      "No tienes que hacer esta travesía solo/a. " +
      "Acércate a tus tutores o a la red de apoyo " +
      "escolar del proyecto PAEC. Pedir ayuda es " +
      "un acto de gran valentía.";

    finalAccent =
      "#f44336";

  }

  document.documentElement.style.setProperty(
    "--accent-neon",
    finalAccent
  );

  sceneContainer.innerHTML = `

    <div class="text-center">

      <div
        class="relic-crystal"
        style="background: ${crystalBg};"
      ></div>

      <span
        class="paec-badge mb-2 d-inline-block"
      >
        Resultado del Diagnóstico
      </span>

      <h2
        class="fw-bold mb-3 fs-3"
      >
        ${title}
      </h2>

      <p
        class="scene-description mb-4 fs-6"
      >
        ${desc}
      </p>

      <div class="result-box">

        <small
          class="result-label font-monospace"
        >
          CONSEJO COMUNITARIO PAEC:
        </small>

        <p class="mb-0 fs-6">
          ${advice}
        </p>

      </div>

      <div
        class="stats-row mb-4"
      >

        <div class="stat-pill">

          <span>
            🛡️ Resiliencia:
          </span>

          <span class="stat-value">
            ${Math.round(playerStats.resilience)}
          </span>

        </div>

        <div class="stat-pill">

          <span>
            ⚡ Tensión:
          </span>

          <span class="stat-value">
            ${Math.round(playerStats.stress)}
          </span>

        </div>

        <div class="stat-pill">

          <span>
            🤝 Apoyo:
          </span>

          <span class="stat-value">
            ${Math.round(playerStats.social)}
          </span>

        </div>

      </div>

      <button
        type="button"
        class="btn btn-outline-light rounded-pill px-4 py-2 restart-btn"
        id="restartButton"
      >
        Reiniciar Travesía
      </button>

    </div>

  `;

  const restartButton =
    document.getElementById(
      "restartButton"
    );

  restartButton.addEventListener(
    "click",
    restartGame
  );

}

function restartGame() {

  playerStats.calm = 0;

  playerStats.warning = 0;

  playerStats.alert = 0;

  playerStats.resilience = 100;

  playerStats.stress = 0;

  playerStats.social = 50;

  currentSceneIndex = 0;

  isTransitioning = false;

  valCalm.textContent = "100";

  valStress.textContent = "0";

  valSocial.textContent = "50";

  progressBar.style.width =
    "0%";

  document.documentElement.style.setProperty(
    "--accent-neon",
    DEFAULT_ACCENT
  );

  document.documentElement.style.setProperty(
    "--accent-glow",
    DEFAULT_GLOW
  );

  glowBg.style.background =
    `radial-gradient(
      circle,
      ${DEFAULT_GLOW} 0%,
      rgba(7, 10, 15, 0) 70%
    )`;

  glowBg.style.transform =
    "translate(-50%, -50%) scale(1)";

  gameCard.classList.remove(
    "fade-in"
  );

  gameCard.classList.add(
    "fade-out"
  );

  setTimeout(() => {

    renderScene(0);

    gameCard.classList.remove(
      "fade-out"
    );

    void gameCard.offsetWidth;

    gameCard.classList.add(
      "fade-in"
    );

  }, 300);

}
function initializeGame() {

  if (
    !sceneContainer ||
    !glowBg ||
    !gameCard ||
    !statsBar
  ) {

    console.error(
      "Error: No se encontraron los elementos principales del juego."
    );

    return;

  }

  renderScene(0);

  updateStats();

}

initializeGame();

const menuBtn = document.getElementById("menuBtn");

const menuPanel = document.getElementById("menuPanel");

menuBtn.addEventListener("click", () => {

  const isOpen = !menuPanel.hidden;

  menuPanel.hidden = isOpen;

});

document.addEventListener("click", (event) => {

  if (!event.target.closest(".site-menu")) {

    menuPanel.hidden = true;

  }

});


