// Datos de KUPI
const kupiItems = [
  {
    title: "Interface Overview",
    categoryName: "KUPI UI/UX",
    src: "bocetos/Kupi/Interface.svg",
    desc: "Vista general y arquitectura de los componentes clave de la aplicación móvil.",
    aspect: "tall"
  },
  {
    title: "Pantalla Principal (Dashboard)",
    categoryName: "KUPI UI/UX",
    src: "bocetos/Kupi/default 1.svg",
    desc: "Diseño central de la pantalla principal con accesos rápidos e interfaz depurada.",
    aspect: "tall"
  },
  {
    title: "Flujo de Usuario - Navegación 1",
    categoryName: "KUPI UI/UX",
    src: "bocetos/Kupi/default 2.svg",
    desc: "Módulos interactivos y estados activos de navegación.",
    aspect: "tall"
  },
  {
    title: "Flujo de Usuario - Navegación 2",
    categoryName: "KUPI UI/UX",
    src: "bocetos/Kupi/default 3.svg",
    desc: "Estructura de tarjetas e interacción de listados.",
    aspect: "tall"
  },
  {
    title: "Módulo de Acciones & Filtros",
    categoryName: "KUPI UI/UX",
    src: "bocetos/Kupi/default 4.svg",
    desc: "Diseño de controles de filtrado y selectores rápidos.",
    aspect: "tall"
  },
  {
    title: "Vista de Detalle & Exploración",
    categoryName: "KUPI UI/UX",
    src: "bocetos/Kupi/default 5.svg",
    desc: "Despliegue de información extendida con jerarquía visual óptima.",
    aspect: "tall"
  },
  {
    title: "Gestión de Servicios & Procesos",
    categoryName: "KUPI UI/UX",
    src: "bocetos/Kupi/default 6.svg",
    desc: "Pantallas de gestión operativa y seguimiento en tiempo real.",
    aspect: "tall"
  },
  {
    title: "Perfil de Usuario & Ajustes",
    categoryName: "KUPI UI/UX",
    src: "bocetos/Kupi/default 7.svg",
    desc: "Configuración de cuenta, seguridad y preferencias del usuario.",
    aspect: "tall"
  },
  {
    title: "Centro de Notificaciones",
    categoryName: "KUPI UI/UX",
    src: "bocetos/Kupi/default 8.svg",
    desc: "Historial de alertas y notificaciones push organizadas cronológicamente.",
    aspect: "tall"
  },
  {
    title: "Ventanas Modales & Confirmación",
    categoryName: "KUPI UI/UX",
    src: "bocetos/Kupi/default 9.svg",
    desc: "Flujo de diálogos de confirmación y microinteracciones de seguridad.",
    aspect: "tall"
  },
  {
    title: "Métricas & Análisis de Datos",
    categoryName: "KUPI UI/UX",
    src: "bocetos/Kupi/default 10.svg",
    desc: "Representación visual de estadísticas, resúmenes y balances.",
    aspect: "tall"
  },
  {
    title: "Resumen Operativo & Cierre",
    categoryName: "KUPI UI/UX",
    src: "bocetos/Kupi/default 11.svg",
    desc: "Verificación de pasos completados y comprobantes de proceso.",
    aspect: "tall"
  }
];

// Datos de KANNA MARKET
const kannaItems = [
  {
    title: "Identidad Visual & Logotipo Kanna Market",
    categoryName: "Branding & Web",
    src: "bocetos/Kannamarket/logo_kannamarket.png",
    desc: "Diseño de identidad corporativa y logotipo adaptado para cabecera e interfaces responsive.",
    aspect: "wide"
  },
  {
    title: "Catálogo Online — Gotas CBD Mascotas",
    categoryName: "E-Commerce / Producto",
    src: "bocetos/Kannamarket/cbd_gotas_perros_1(1)-crop-u2921.png",
    desc: "Fotografía y tarjeta de producto optimizada para e-commerce en la categoría veterinaria.",
    aspect: "square"
  },
  {
    title: "Línea Terapéutica — Pomada CBD Salud",
    categoryName: "E-Commerce / Producto",
    src: "bocetos/Kannamarket/cbd_pomada_salud_1-crop-u1067.png",
    desc: "Presentación de producto con enfoque clínico y bienestar corporal.",
    aspect: "square"
  },
  {
    title: "Suplementos — Vitaminas CBD Salud",
    categoryName: "E-Commerce / Producto",
    src: "bocetos/Kannamarket/cbd_vitamina_salud_2-crop-u1074.png",
    desc: "Ficha gráfica de suplementación y vitaminas enriquecidas con CBD.",
    aspect: "square"
  },
  {
    title: "Cosmética Natural — Crema Corporal 14",
    categoryName: "E-Commerce / Cosmética",
    src: "bocetos/Kannamarket/crema_de_cannabis_14.png",
    desc: "Renderizado y exhibición de línea cosmética para el cuidado de la piel.",
    aspect: "square"
  },
  {
    title: "Cosmética Natural — Crema Hidratante 5",
    categoryName: "E-Commerce / Cosmética",
    src: "bocetos/Kannamarket/crema_de_cannabis_5.png",
    desc: "Variación de producto para catálogo de belleza y salud dermatológica.",
    aspect: "square"
  },
  {
    title: "Tintura Medicinal — Aceite Concentrado CBD #3",
    categoryName: "E-Commerce / Aceites",
    src: "bocetos/Kannamarket/cbd_aceite_salud_3.png",
    desc: "Gotero sublingual de alta pureza con especificaciones técnicas en tienda.",
    aspect: "square"
  },
  {
    title: "Tintura Medicinal — Aceite Concentrado CBD #2",
    categoryName: "E-Commerce / Aceites",
    src: "bocetos/Kannamarket/cbd_aceite_salud_2.png",
    desc: "Presentación alternativa de concentrado para dosificación progresiva.",
    aspect: "square"
  },
  {
    title: "Canal de Conversión Directa (WhatsApp CTA)",
    categoryName: "E-Commerce / Conversión",
    src: "bocetos/Kannamarket/whatsapp_link.png",
    desc: "Botón y widget de compra asistida directa para convertir tráfico web en ventas inmediatas.",
    aspect: "wide"
  }
];

// Estado global
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

// Selector de subcarpetas (Tabs)
const tabKupi = document.getElementById("tabKupi");
const tabKannamarket = document.getElementById("tabKannamarket");
const viewKupi = document.getElementById("viewKupi");
const viewKannamarket = document.getElementById("viewKannamarket");

function switchTab(tab) {
  if (tab === "kupi") {
    tabKupi.classList.add("active");
    tabKannamarket.classList.remove("active");
    viewKupi.classList.add("active");
    viewKannamarket.classList.remove("active");
  } else {
    tabKannamarket.classList.add("active");
    tabKupi.classList.remove("active");
    viewKannamarket.classList.add("active");
    viewKupi.classList.remove("active");
  }
}

tabKupi.addEventListener("click", () => switchTab("kupi"));
tabKannamarket.addEventListener("click", () => switchTab("kannamarket"));

// Lightbox / Modal
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
});
