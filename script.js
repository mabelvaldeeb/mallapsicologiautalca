const malla = [
  {
    semestre: "1",
    ramos: [
      { id: "historia", nombre: "Historia de la Psicología", creditos: 8 },
      { id: "neuro", nombre: "Neurobiología Aplicada", creditos: 10 },
      { id: "desarrollo", nombre: "Psicología del Desarrollo Humano", creditos: 8 },
      { id: "metodologia", nombre: "Metodología en Psicología", creditos: 8 },
      { id: "filosofia", nombre: "Filosofía y Psicología", creditos: 4 },
      { id: "introduccion", nombre: "Introducción a la Psicología", creditos: 2 },
      { id: "comunicacion1", nombre: "Comunicación Oral y Escrita I", creditos: 2 },
      { id: "idioma1", nombre: "Idioma Extranjero I", creditos: 3 }
    ]
  },
  {
    semestre: "2",
    ramos: [
      { id: "comunicacion2", nombre: "Comunicación Oral y Escrita II", creditos: 4, prerequisitos: ["comunicacion1"] },
      { id: "cognitivos1", nombre: "Procesos Cognitivos I", creditos: 4, prerequisitos: ["filosofia"] },
      { id: "idioma2", nombre: "Idioma Extranjero II", creditos: 3, prerequisitos: ["idioma1"] },
      { id: "estadistica1", nombre: "Técnicas de Análisis Estadístico I", creditos: 4 }
    ]
  }
];

const aprobados = new Set();

function crearMalla() {
  const contenedor = document.getElementById("malla");
  malla.forEach((sem) => {
    const div = document.createElement("div");
    div.classList.add("semestre");

    const titulo = document.createElement("h2");
    titulo.textContent = `Semestre ${sem.semestre}`;
    div.appendChild(titulo);

    sem.ramos.forEach((ramo) => {
      const ramoDiv = document.createElement("div");
      ramoDiv.textContent = `${ramo.nombre} (${ramo.creditos} créditos)`;
      ramoDiv.classList.add("ramo");
      ramoDiv.dataset.id = ramo.id;

      if (ramo.prerequisitos) {
        ramoDiv.classList.add("bloqueado");
        ramoDiv.dataset.bloqueado = "true";
      }

      ramoDiv.addEventListener("click", () => manejarClick(ramo, ramoDiv));
      div.appendChild(ramoDiv);
    });

    contenedor.appendChild(div);
  });

  actualizarBloqueados();
}

function manejarClick(ramo, elemento) {
  if (elemento.classList.contains("bloqueado")) return;

  const aprobado = elemento.classList.toggle("aprobado");

  if (aprobado) {
    aprobados.add(ramo.id);
  } else {
    aprobados.delete(ramo.id);
  }

  actualizarBloqueados();
}

function actualizarBloqueados() {
  document.querySelectorAll(".ramo").forEach((el) => {
    const id = el.dataset.id;
    const ramo = encontrarRamoPorId(id);

    if (ramo.prerequisitos) {
      const habilitado = ramo.prerequisitos.every((pre) => aprobados.has(pre));
      if (habilitado) {
        el.classList.remove("bloqueado");
        el.dataset.bloqueado = "false";
      } else {
        el.classList.add("bloqueado");
        el.classList.remove("aprobado");
        el.dataset.bloqueado = "true";
        aprobados.delete(ramo.id); // evita aprobar un ramo bloqueado
      }
    }
  });
}

function encontrarRamoPorId(id) {
  for (const sem of malla) {
    for (const ramo of sem.ramos) {
      if (ramo.id === id) return ramo;
    }
  }
  return null;
}

crearMalla();
