// 1. Datos de KUPI
const kupiItems = [
  {
    title: "Interface Overview",
    categoryName: "KUPI UI/UX",
    src: "bocetos/paginas web/Kupi/Interface.svg",
    desc: "Vista general y arquitectura de los componentes clave de la aplicación móvil.",
    aspect: "tall"
  },
  {
    title: "Pantalla Principal (Dashboard)",
    categoryName: "KUPI UI/UX",
    src: "bocetos/paginas web/Kupi/default 1.svg",
    desc: "Diseño central de la pantalla principal con accesos rápidos e interfaz depurada.",
    aspect: "tall"
  },
  {
    title: "Flujo de Usuario - Navegación 1",
    categoryName: "KUPI UI/UX",
    src: "bocetos/paginas web/Kupi/default 2.svg",
    desc: "Módulos interactivos y estados activos de navegación.",
    aspect: "tall"
  },
  {
    title: "Flujo de Usuario - Navegación 2",
    categoryName: "KUPI UI/UX",
    src: "bocetos/paginas web/Kupi/default 3.svg",
    desc: "Estructura de tarjetas e interacción de listados.",
    aspect: "tall"
  },
  {
    title: "Módulo de Acciones & Filtros",
    categoryName: "KUPI UI/UX",
    src: "bocetos/paginas web/Kupi/default 4.svg",
    desc: "Diseño de controles de filtrado y selectores rápidos.",
    aspect: "tall"
  },
  {
    title: "Vista de Detalle & Exploración",
    categoryName: "KUPI UI/UX",
    src: "bocetos/paginas web/Kupi/default 5.svg",
    desc: "Despliegue de información extendida con jerarquía visual óptima.",
    aspect: "tall"
  },
  {
    title: "Gestión de Servicios & Procesos",
    categoryName: "KUPI UI/UX",
    src: "bocetos/paginas web/Kupi/default 6.svg",
    desc: "Pantallas de gestión operativa y seguimiento en tiempo real.",
    aspect: "tall"
  },
  {
    title: "Perfil de Usuario & Ajustes",
    categoryName: "KUPI UI/UX",
    src: "bocetos/paginas web/Kupi/default 7.svg",
    desc: "Configuración de cuenta, seguridad y preferencias del usuario.",
    aspect: "tall"
  },
  {
    title: "Centro de Notificaciones",
    categoryName: "KUPI UI/UX",
    src: "bocetos/paginas web/Kupi/default 8.svg",
    desc: "Historial de alertas y notificaciones push organizadas cronológicamente.",
    aspect: "tall"
  },
  {
    title: "Ventanas Modales & Confirmación",
    categoryName: "KUPI UI/UX",
    src: "bocetos/paginas web/Kupi/default 9.svg",
    desc: "Flujo de diálogos de confirmación y microinteracciones de seguridad.",
    aspect: "tall"
  },
  {
    title: "Métricas & Análisis de Datos",
    categoryName: "KUPI UI/UX",
    src: "bocetos/paginas web/Kupi/default 10.svg",
    desc: "Representación visual de estadísticas, resúmenes y balances.",
    aspect: "tall"
  },
  {
    title: "Resumen Operativo & Cierre",
    categoryName: "KUPI UI/UX",
    src: "bocetos/paginas web/Kupi/default 11.svg",
    desc: "Verificación de pasos completados y comprobantes de proceso.",
    aspect: "tall"
  }
];

// 2. Datos de KANNA MARKET
const kannaItems = [
  {
    title: "01. Pantalla de Inicio (Home)",
    categoryName: "E-Commerce / Landing",
    src: "bocetos/paginas web/Kannamarket/01_inicio_home.jpg",
    desc: "Primera impresión visual del usuario al ingresar a la plataforma. Incluye barra de búsqueda principal, navegación superior, logotipo de marca y banner promocional 'Dos es mejor que uno (2x1)' enfocado en captación inmediata.",
    aspect: "wide"
  },
  {
    title: "02. Catálogo & Novedades",
    categoryName: "E-Commerce / Exploración",
    src: "bocetos/paginas web/Kannamarket/02_catalogo_novedades.jpg",
    desc: "Sección de productos recién llegados organizada con filtros segmentados por público ('Para Mí' y 'Para Mi Mascota'). Cuadrícula de tarjetas con previsualización, categorización limpia y valores en pesos colombianos.",
    aspect: "wide"
  },
  {
    title: "03. Ficha Detallada del Producto",
    categoryName: "E-Commerce / Conversión",
    src: "bocetos/paginas web/Kannamarket/03_detalle_producto.jpg",
    desc: "Vista individual del artículo seleccionado. Presenta galería fotográfica interactiva, valoración en estrellas (rating), descripción de beneficios y propiedades, disponibilidad de stock, selector de cantidad y botones de compra directa o agregar al carrito.",
    aspect: "wide"
  },
  {
    title: "04. Carrito de Compras & Checkout",
    categoryName: "E-Commerce / Checkout",
    src: "bocetos/paginas web/Kannamarket/04_carrito_compras.jpg",
    desc: "Panel de gestión de pedidos donde el cliente visualiza el desglose de productos seleccionados, subtotales, opción de eliminar ítems, cálculo automático del total y múltiples pasarelas de pago integradas (Mastercard, Visa, PayPal, PSE, GPay, etc.).",
    aspect: "wide"
  },
  {
    title: "05. Portal de Acceso & Registro (Login)",
    categoryName: "E-Commerce / Autenticación",
    src: "bocetos/paginas web/Kannamarket/05_inicio_sesion.png",
    desc: "Módulo de autenticación y registro de clientes. Diseñado para ofrecer una experiencia de usuario personalizada, guardar historial de pedidos, favoritos y agilizar futuras compras de forma segura.",
    aspect: "wide"
  }
];

// 3. Datos de ORION'S JOURNEY
const orionItems = [
  {
    title: "01. Pantalla Principal",
    categoryName: "Orion's Journey / Web UI",
    src: "bocetos/paginas web/Orion´s Journey/Orion´s Journey1.png", // AQUI CAMBIA EL NOMBRE DE LA IMAGEN 1
    desc: "Vista principal y aterrizaje (Landing) del proyecto Orion's Journey, destacando la narrativa inicial.",
    aspect: "wide"
  },
  {
    title: "02. Sección de Exploración",
    categoryName: "Orion's Journey / Web UI",
    src: "bocetos/paginas web/Orion´s Journey/Orion´s Journey2.png", // AQUI CAMBIA EL NOMBRE DE LA IMAGEN 2
    desc: "Área de contenido estructurado donde el usuario interactúa y explora la información visual.",
    aspect: "wide"
  },
  {
    title: "03. Cierre y Pie de página",
    categoryName: "Orion's Journey / Web UI",
    src: "bocetos/paginas web/Orion´s Journey/Orion´s Journey3.png", // AQUI CAMBIA EL NOMBRE DE LA IMAGEN 3
    desc: "Sección inferior de la web, mostrando jerarquía de datos y diseño del footer.",
    aspect: "wide"
  }
];

// 4. Datos de LOGOS & IDENTIDADES VISUALES
const logosItems = [
  {
    title: "Logo Finix — Identidad para Aplicación Móvil",
    categoryName: "Diseño de Marca & App",
    src: "bocetos/logos/Logo Finix.jpg",
    desc: "Diseño de identidad visual y logotipo para la aplicación Finix. Concepto moderno, dinámico y geométrico con isotipo memorable adaptado para icono de app e interfaces digitales.",
    aspect: "square"
  },
  {
    title: "Logo CafeExanet — Identidad Corporativa Café Internet",
    categoryName: "Diseño de Marca & Negocio",
    src: "bocetos/logos/Logo CafeExanet.jpg",
    desc: "Identidad visual y logotipo diseñado para café internet y centro de conectividad tecnológica CafeExanet. Combina elementos tecnológicos y de servicio al cliente con una paleta llamativa.",
    aspect: "square"
  }
];

// 5. Datos de OBRA SERIAL: “UNA MEMORIA QUE SE TRANSFORMA”
const serialWorks = [
  {
    stage: "Etapa 1 / 4 — Origen & Estabilidad",
    title: "La Silla Quieta",
    categoryName: "Obra Serial / Ilustración Digital",
    src: "bocetos/diseños/Ilustraciones/Obra serial_Una Memoria Que Se Transforma/Silla Quieta.jpg",
    desc: "Esta obra es el punto de partida de la serie: la silla tal y como es, sin intervenciones ni transformaciones. Representa la memoria, el origen y el objeto que acompaña mi historia personal. La quietud simboliza estabilidad, infancia y el estado inicial antes del cambio. Es la silla que conserva las marcas del tiempo, recordando afectos y momentos que forman parte del crecimiento."
  },
  {
    stage: "Etapa 2 / 4 — Movimiento & Transición",
    title: "La Silla Dinámica",
    categoryName: "Obra Serial / Ilustración Digital",
    src: "bocetos/diseños/Ilustraciones/Obra serial_Una Memoria Que Se Transforma/Silla Dinamica.jpg",
    desc: "Aquí la silla deja de ser un objeto estático y se convierte en un cuerpo en movimiento. La perspectiva inclinada produce la sensación de que está cayendo, girando o flotando. Esta obra refleja las etapas donde la vida deja de ser estable y ocurre una transición: dudas, búsquedas, decisiones y giros inesperados. Es la parte de la historia donde se experimenta el cambio y se cuestiona la estructura que antes parecía firme."
  },
  {
    stage: "Etapa 3 / 4 — Quiebre & Rupturas Internas",
    title: "La Silla Fragmentada",
    categoryName: "Obra Serial / Ilustración Digital",
    src: "bocetos/diseños/Ilustraciones/Obra serial_Una Memoria Que Se Transforma/Silla Fragmentada.jpg",
    desc: "La silla aparece rota en piezas triangulares, como un espejo que ha estallado. Cada fragmento muestra una parte diferente, como si la memoria estuviera dispersa. Esta obra representa las rupturas internas, los duelos, las heridas, las partes de la historia que se quebraron. Sin embargo, también sugiere que todo fragmento conserva un valor, una versión distinta de lo que fuimos. No es destrucción: es relectura, reconstrucción, entender cómo las partes rotas forman."
  },
  {
    stage: "Etapa 4 / 4 — Sanación & Florecimiento",
    title: "La Silla Transformada",
    categoryName: "Obra Serial / Ilustración Digital",
    src: "bocetos/diseños/Ilustraciones/Obra serial_Una Memoria Que Se Transforma/Silla Tansformada.jpg",
    desc: "De la silla crecen plantas, flores y vuelan mariposas. La transformación no busca esconder el daño, sino convertirlo en algo vivo, en algo que florece. Esta obra representa la sanación, el renacer y la posibilidad de crear belleza a partir de lo que antes dolía. Las mariposas simbolizan cambio, libertad y evolución personal. La silla deja de ser un objeto viejo y se convierte en un pequeño ecosistema: metáfora de crecimiento interno."
  }
];

// 6. Datos de CUADROS COMPARATIVOS
const drawingsComparison = [
  {
    id: "robot",
    title: "Bocetos Robot — Exploración & Concepto Mecánico",
    desc: "Diseño conceptual y exploración anatómica de androides y robots bípedos. Estudio de proporciones, articulaciones, armadura y posturas dinámicas.",
    sketchSrc: "bocetos/diseños/Bocetos Robot.png",
    sketchTitle: "Boceto a Lápiz — Robot",
    digitalSrc: null,
    aspect: "wide"
  },
  {
    id: "turbina",
    title: "Turbina — Prop Mecánico & Estructura",
    desc: "Boceto de ingeniería conceptual y prop mecánico. Estudio de hélices, turbina de propulsión, volumen circular y sombreado a mano alzada.",
    sketchSrc: "bocetos/diseños/Turbina.png",
    sketchTitle: "Boceto a Lápiz — Turbina",
    digitalSrc: null,
    aspect: "square"
  },
  {
    id: "tuerca",
    title: "Don Tuerca — Diseño de Personaje Original",
    desc: "Creación de personaje animado con estilo carismático y elementos mecánicos. Boceto a mano alzada enfocado en expresividad facial y silueta distintiva.",
    sketchSrc: "bocetos/diseños/Don Tuerca.png",
    sketchTitle: "Boceto a Lápiz — Don Tuerca",
    digitalSrc: null,
    aspect: "square"
  },
  {
    id: "contenedor",
    title: "Contenedor — Prop & Elemento de Escenario",
    desc: "Boceto estructural de objeto/prop para universo narrativo. Estudio de perspectiva, volumen industrial y textura a lápiz.",
    sketchSrc: "bocetos/diseños/contenedor.png",
    sketchTitle: "Boceto a Lápiz — Contenedor",
    digitalSrc: null,
    aspect: "square"
  }
];

// 7. Datos de FOTOGRAFÍA (Danza)
const fotoDanza = [
  {
    title: "El Trazo Invisible",
    categoryName: "Fotografía / Danza",
    src: "bocetos/fotografia/danza.jpg",
    desc: "Fotografía que explora la libertad del gesto y la ligereza del cuerpo. Como si la cinta fuera una extensión de la respiración, la imagen registra la espontaneidad de la danza dentro del espacio cotidiano, convirtiendo un rincón común en un escenario de vuelo.",
    aspect: "tall"
  }
];

// 8. Datos de SERIE FOTOGRÁFICA (Cómplices de Juego)
const fotoSerie = [
  {
    title: "El juego del cosquilleo",
    categoryName: "Cómplices de Juego",
    src: "bocetos/fotografia/complices_juego/foto1.jpg",
    desc: "Un instante de juego descarnado pero inofensivo; la mirada del perro refleja puro entusiasmo mientras finge atrapar el pie de su dueña.",
    aspect: "wide"
  },
  {
    title: "Impulso y Alegría",
    categoryName: "Cómplices de Juego",
    src: "bocetos/fotografia/complices_juego/foto2.jpg",
    desc: "La captura de un brinco lleno de energía, capturando el entusiasmo de la mascota al buscar el contacto físico en medio de las risas.",
    aspect: "wide"
  },
  {
    title: "Risa Canina",
    categoryName: "Cómplices de Juego",
    src: "bocetos/fotografia/complices_juego/foto3.jpg",
    desc: "Vista cenital de un bostezo/juego expansivo que transmite la entrega total y la comodidad de sentirse seguro en casa.",
    aspect: "tall"
  }
];

// Estado global de modal
let activeCollection = kupiItems;
let activeIndex = 0;

function renderGrid(containerId, itemsList) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = "";

  itemsList.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "design-card";
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");

    const aspectClass = item.aspect ? item.aspect : "tall";

    card.innerHTML = `
      <div class="card-img-wrapper ${aspectClass}">
        <img src="${item.src}" alt="${item.title}" loading="lazy" />
      </div>
      <div class="card-info">
        <span class="card-category">${item.categoryName}</span>
        <h3 class="card-title">${item.title}</h3>
      </div>
    `;

    card.addEventListener("click", () => {
      activeCollection = itemsList;
      openModal(index);
    });

    container.appendChild(card);
  });
}

function renderSerialWork() {
  const container = document.getElementById("serialGrid");
  if (!container) return;
  container.innerHTML = "";

  serialWorks.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "serial-card";
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");

    card.innerHTML = `
      <div class="serial-img-wrapper">
        <img src="${item.src}" alt="${item.title}" loading="lazy" />
      </div>
      <div class="serial-card-info">
        <span class="serial-card-stage">${item.stage}</span>
        <h4 class="serial-card-title">${item.title}</h4>
        <p class="serial-card-desc">${item.desc}</p>
      </div>
    `;

    card.addEventListener("click", () => {
      activeCollection = serialWorks;
      openModal(index);
    });

    container.appendChild(card);
  });
}

function renderComparisons() {
  const container = document.getElementById("comparisonList");
  if (!container) return;
  container.innerHTML = "";

  drawingsComparison.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "comparison-card";

    let rightSideContent = "";
    if (item.digitalSrc) {
      rightSideContent = `
        <div class="side-frame" onclick="openDrawingModal(${index}, 'digital')">
          <img src="${item.digitalSrc}" alt="Ilustración final ${item.title}" loading="lazy" />
        </div>
      `;
    } else {
      rightSideContent = `
        <div class="side-frame placeholder-digital">
          <span class="placeholder-icon">🎨</span>
          <h4 class="placeholder-title">Ilustración Digital</h4>
          <p class="placeholder-text">Espacio reservado para la versión final vectorizada, entintada y coloreada.</p>
          <span class="placeholder-tag">En desarrollo</span>
        </div>
      `;
    }

    card.innerHTML = `
      <div class="comparison-header">
        <h3 class="comparison-title">${item.title}</h3>
        <p class="comparison-desc">${item.desc}</p>
      </div>

      <div class="comparison-grid">
        <div class="comparison-side">
          <span class="side-label sketch">✏️ Boceto a Lápiz (Original)</span>
          <div class="side-frame" role="button" tabindex="0" onclick="openDrawingModal(${index}, 'sketch')">
            <img src="${item.sketchSrc}" alt="${item.sketchTitle}" loading="lazy" />
          </div>
        </div>

        <div class="comparison-side">
          <span class="side-label digital">✨ Ilustración Mejorada & Digital</span>
          ${rightSideContent}
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

function openDrawingModal(index, side) {
  const item = drawingsComparison[index];
  if (!item) return;

  const modalItem = {
    title: side === "sketch" ? `${item.title} (Boceto Original)` : `${item.title} (Ilustración Digital)`,
    categoryName: "Bocetos & Dibujos",
    src: side === "sketch" ? item.sketchSrc : item.digitalSrc,
    desc: item.desc
  };

  activeCollection = [modalItem];
  openModal(0);
}

// ACORDEÓN EXCLUSIVO PARA DISEÑO WEB (Se agregó Orion's Journey)
function toggleWebProject(targetCardId) {
  const cardKupi = document.getElementById("cardKupi");
  const cardKannamarket = document.getElementById("cardKannamarket");
  const cardOrion = document.getElementById("cardOrion"); // Nuevo
  const targetCard = document.getElementById(targetCardId);

  const isAlreadyOpen = targetCard.classList.contains("expanded");

  cardKupi.classList.remove("expanded");
  cardKannamarket.classList.remove("expanded");
  if (cardOrion) cardOrion.classList.remove("expanded"); // Nuevo

  if (!isAlreadyOpen) {
    targetCard.classList.add("expanded");
  }
}

// NAVEGACIÓN ENTRE CATEGORÍAS PRINCIPALES
const catButtons = document.querySelectorAll(".cat-btn");
const catSections = document.querySelectorAll(".main-category-section");
const navTabs = document.querySelectorAll(".nav-tab");

function selectCategory(targetId) {
  catButtons.forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-target") === targetId);
  });

  catSections.forEach(section => {
    section.classList.toggle("active", section.id === targetId);
  });

  const mapNav = {
    "cat-web": "web-ui",
    "cat-logos": "logos",
    "cat-arte": "arte",
    "cat-fotografia": "fotografia"
  };
  const activeNavKey = mapNav[targetId];
  navTabs.forEach(link => {
    link.classList.toggle("active", link.getAttribute("data-nav") === activeNavKey);
  });
}

catButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.getAttribute("data-target");
    selectCategory(target);
  });
});

navTabs.forEach(tab => {
  tab.addEventListener("click", (e) => {
    e.preventDefault();
    const navKey = tab.getAttribute("data-nav");
    const mapCategory = {
      "web-ui": "cat-web",
      "logos": "cat-logos",
      "arte": "cat-arte",
      "fotografia": "cat-fotografia"
    };
    selectCategory(mapCategory[navKey]);
  });
});

// LIGHTBOX / MODAL
const modal = document.getElementById("lightboxModal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalCategory = document.getElementById("modalCategory");
const closeModalBtn = document.getElementById("closeModal");
const prevModalBtn = document.getElementById("prevModal");
const nextModalBtn = document.getElementById("nextModal");

function openModal(index) {
  activeIndex = index;
  updateModal();
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
}

function updateModal() {
  const item = activeCollection[activeIndex];
  if (!item) return;
  modalImg.src = item.src;
  modalImg.alt = item.title;
  modalTitle.textContent = item.title;
  modalCategory.textContent = item.categoryName;
  modalDesc.textContent = item.desc;
}

function showNext() {
  activeIndex = (activeIndex + 1) % activeCollection.length;
  updateModal();
}

function showPrev() {
  activeIndex = (activeIndex - 1 + activeCollection.length) % activeCollection.length;
  updateModal();
}

closeModalBtn.addEventListener("click", closeModal);
nextModalBtn.addEventListener("click", (e) => { e.stopPropagation(); showNext(); });
prevModalBtn.addEventListener("click", (e) => { e.stopPropagation(); showPrev(); });

modal.addEventListener("click", (e) => {
  if (e.target === modal || e.target.classList.contains("modal-content") || e.target.classList.contains("modal-img-container")) {
    closeModal();
  }
});

document.addEventListener("keydown", (e) => {
  if (!modal.classList.contains("active")) return;
  if (e.key === "Escape") closeModal();
  if (e.key === "ArrowRight") showNext();
  if (e.key === "ArrowLeft") showPrev();
});

// Inicialización
document.addEventListener("DOMContentLoaded", () => {
  renderGrid("kupiGrid", kupiItems);
  renderGrid("kannaGrid", kannaItems);
  renderGrid("orionGrid", orionItems); // Se agregó el render para Orion's Journey

  renderGrid("logosGrid", logosItems);
  renderSerialWork();
  renderComparisons();

  renderGrid("fotoDanzaGrid", fotoDanza);
  renderGrid("fotoSerieGrid", fotoSerie);
});