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

// 2. Datos de KANNA MARKET (Flujo E-Commerce Completo)
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

// 3. Datos de LOGOS & IDENTIDADES VISUALES (Galería directa)
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

// =========================================================================
// ACORDEÓN EXCLUSIVO PARA DISEÑO WEB (KUPI Y KANNAMARKET)
// =========================================================================
function toggleWebProject(targetCardId) {
  const cardKupi = document.getElementById("cardKupi");
  const cardKannamarket = document.getElementById("cardKannamarket");
  const targetCard = document.getElementById(targetCardId);

  const isAlreadyOpen = targetCard.classList.contains("expanded");

  // Cerrar ambas pestañas
  cardKupi.classList.remove("expanded");
  cardKannamarket.classList.remove("expanded");

  // Si no estaba abierta, abrir la seleccionada
  if (!isAlreadyOpen) {
    targetCard.classList.add("expanded");
  }
}

// =========================================================================
// NAVEGACIÓN ENTRE CATEGORÍAS PRINCIPALES
// =========================================================================
const catButtons = document.querySelectorAll(".cat-btn");
const catSections = document.querySelectorAll(".main-category-section");
const navTabs = document.querySelectorAll(".nav-tab");

function selectCategory(targetId) {
  // Actualizar botones principales
  catButtons.forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-target") === targetId);
  });

  // Actualizar secciones
  catSections.forEach(section => {
    section.classList.toggle("active", section.id === targetId);
  });

  // Actualizar nav superior
  const mapNav = {
    "cat-web": "web-ui",
    "cat-logos": "logos",
    "cat-arte": "arte"
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
      "arte": "cat-arte"
    };
    selectCategory(mapCategory[navKey]);
  });
});

// =========================================================================
// LIGHTBOX / MODAL
// =========================================================================
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
  renderGrid("logosGrid", logosItems);
});
