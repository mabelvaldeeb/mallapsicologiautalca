// Datos de la malla: semestre, ramo, prerequisitos (por código), créditos
// El código es un id corto único (usado internamente)
const malla = [
  {
    semestre: 1,
    ramos: [
      { codigo: "HPS", nombre: "Historia de la Psicología y Sistemas Psicológicos", creditos: 8, prereq: [] },
      { codigo: "NA", nombre: "Neurobiología Aplicada a la Psicología", creditos: 10, prereq: [] },
      { codigo: "PDH", nombre: "Psicología del Desarrollo Humano", creditos: 8, prereq: [] },
      { codigo: "MI", nombre: "Metodología de la Investigación en Psicología", creditos: 8, prereq: [] },
      { codigo: "FP", nombre: "Filosofía y Psicología", creditos: 4, prereq: [] },
      { codigo: "IP", nombre: "Introducción a la Psicología y su Praxis", creditos: 2, prereq: [] },
      { codigo: "COE1", nombre: "Comunicación Oral y Escrita I", creditos: 2, prereq: [] },
      { codigo: "IE1", nombre: "Idioma Extranjero I", creditos: 3, prereq: [] },
    ],
  },
  {
    semestre: 2,
    ramos: [
      { codigo: "COE2", nombre: "Comunicación Oral y Escrita II", creditos: 4, prereq: ["COE1"] },
      { codigo: "PC1", nombre: "Procesos Cognitivos I", creditos: 4, prereq: ["FP"] },
      { codigo: "IE2", nombre: "Idioma Extranjero II", creditos: 3, prereq: ["IE1"] },
      { codigo: "TAEP1", nombre: "Técnicas de Análisis Estadístico en Psicología I", creditos: 4, prereq: [] },
    ],
  },
  {
    semestre: 3,
    ramos: [
      { codigo: "PP1", nombre: "Psicología de la Personalidad I", creditos: 4, prereq: ["PDH"] },
      { codigo: "MPE", nombre: "Motivación y Procesos Emocionales", creditos: 4, prereq: [] },
      { codigo: "PAB", nombre: "Procesos de Aprendizaje Básico", creditos: 4, prereq: ["PC1"] },
      { codigo: "EIN", nombre: "Evaluación de la Inteligencia y Procesos Neuropsicológicos", creditos: 4, prereq: ["NA"] },
      { codigo: "PS1", nombre: "Psicología Social I: Pensamiento Social", creditos: 4, prereq: ["MI"] },
      { codigo: "AUT", nombre: "Autogestión del Aprendizaje", creditos: 3, prereq: [] },
      { codigo: "IE3", nombre: "Idioma Extranjero III", creditos: 3, prereq: ["IE2"] },
      { codigo: "TAEP2", nombre: "Técnicas de Análisis Estadístico en Psicología II", creditos: 4, prereq: ["TAEP1"] },
    ],
  },
  {
    semestre: 4,
    ramos: [
      { codigo: "PP2", nombre: "Psicología de la Personalidad II", creditos: 4, prereq: ["PDH"] },
      { codigo: "MH", nombre: "Memoria Humana", creditos: 4, prereq: ["PAB"] },
      { codigo: "PS2", nombre: "Psicología Social II: Actitudes y Comportamiento", creditos: 4, prereq: ["PS1"] },
      { codigo: "EPP1", nombre: "Evaluación de la Personalidad I", creditos: 3, prereq: ["PP1"] },
      { codigo: "TII", nombre: "Técnicas de Intervención Individual", creditos: 5, prereq: ["PS1"] },
      { codigo: "TEDH", nombre: "Trabajo en Equipo y Desarrollo de Habilidades Sociales", creditos: 3, prereq: ["AUT"] },
      { codigo: "TCP1", nombre: "Teoría y Construcción de Pruebas Psicológicas I", creditos: 4, prereq: ["TAEP2"] },
    ],
  },
  {
    semestre: 5,
    ramos: [
      { codigo: "PTO1", nombre: "Psicología del Trabajo y las Organizaciones I", creditos: 4, prereq: ["PS2"] },
      { codigo: "PIPJ", nombre: "Psicopatología Infanto Juvenil", creditos: 4, prereq: ["PDH"] },
      { codigo: "EPP2", nombre: "Evaluación de la Personalidad II", creditos: 4, prereq: ["PP2"] },
      { codigo: "PS3", nombre: "Psicología Social III: Grupos, Colectivos y Ambientes", creditos: 4, prereq: ["PS2"] },
      { codigo: "PC2", nombre: "Procesos Cognitivos II", creditos: 4, prereq: ["MH"] },
      { codigo: "TCRCC", nombre: "Técnicas de Recolección y Análisis de Datos Cualitativos", creditos: 3, prereq: ["MI"] },
      { codigo: "CCS", nombre: "Comprensión de Contextos Sociales", creditos: 3, prereq: ["COE2"] },
      { codigo: "TCP2", nombre: "Teoría y Construcción de Pruebas Psicológicas II", creditos: 4, prereq: ["TCP1"] },
    ],
  },
  {
    semestre: 6,
    ramos: [
      { codigo: "TIG", nombre: "Técnicas de Intervención Grupal", creditos: 5, prereq: ["PS3", "TII"] },
      { codigo: "PTO2", nombre: "Psicología del Trabajo y las Organizaciones II", creditos: 4, prereq: ["PTO1"] },
      { codigo: "PPA", nombre: "Psicopatología de Adultos", creditos: 4, prereq: ["PP2"] },
      { codigo: "PE1", nombre: "Psicología Educacional I", creditos: 4, prereq: ["PC2", "PDH"] },
      { codigo: "PCOM", nombre: "Psicología Comunitaria", creditos: 4, prereq: ["PS3"] },
      { codigo: "FPT1", nombre: "Fundamentos de Psicoterapia I", creditos: 4, prereq: ["TII"] },
      { codigo: "MOD1", nombre: "Módulo I Integración Competencias Investigación", creditos: 3, prereq: ["TCP2", "TCRCC"] },
      { codigo: "CCC", nombre: "Comprensión de Contextos Culturales", creditos: 3, prereq: ["CCS"] },
    ],
  },
  {
    semestre: 7,
    ramos: [
      { codigo: "DCO", nombre: "Desarrollo y Cambio Organizacional", creditos: 4, prereq: ["PTO2"] },
      { codigo: "SEP", nombre: "Selección de Personas", creditos: 4, prereq: ["EPP2"] },
      { codigo: "TPSYE", nombre: "Taller de Psicodiagnóstico y Evaluación", creditos: 5, prereq: ["PPA", "PP2"] },
      { codigo: "PE2", nombre: "Psicología Educacional II", creditos: 4, prereq: ["PE1"] },
      { codigo: "IC", nombre: "Intervención Comunitaria", creditos: 5, prereq: ["PCOM"] },
      { codigo: "FPT2", nombre: "Fundamentos de Psicoterapia II", creditos: 4, prereq: ["FPT1"] },
      { codigo: "EDI", nombre: "Electivo Disciplinar I", creditos: 3, prereq: [] },
      { codigo: "ERS", nombre: "Ética y Responsabilidad Social", creditos: 3, prereq: ["CCC", "TEDH"] },
    ],
  },
  {
    semestre: 8,
    ramos: [
      { codigo: "GEP", nombre: "Gestión Estratégica de Personas", creditos: 4, prereq: ["DCO"] },
      { codigo: "NPP", nombre: "Neuropsiquiatría y Psicofarmacología", creditos: 4, prereq: ["PPA", "EIN"] },
      { codigo: "DCP", nombre: "Desarrollo de Competencias Profesionales en el Ámbito Organizacional", creditos: 4, prereq: ["PTO2", "TIG"] },
      { codigo: "PE3", nombre: "Psicología Educacional III", creditos: 4, prereq: ["PE2"] },
      { codigo: "DEP", nombre: "Diseño y Evaluación de Proyectos Sociales", creditos: 4, prereq: ["IC"] },
      { codigo: "PCIJ", nombre: "Psicología Clínica Infanto Juvenil", creditos: 4, prereq: ["PIPJ"] },
      { codigo: "MOD2", nombre: "Módulo II Integración Competencias Intervención", creditos: 3, prereq: [] }, // créditos para electivos
      { codigo: "RES", nombre: "Responsabilidad Social", creditos: 3, prereq: ["ERS"] },
    ],
  },
  {
    semestre: 9,
    ramos: [
      { codigo: "PRM", nombre: "Proyecto de Memoria", creditos: 5, prereq: ["MOD1"] },
      { codigo: "EFPI", nombre: "Electivo Formación Profesional I", creditos: 5, prereq: [] },
      { codigo: "EFPII", nombre: "Electivo Formación Profesional II", creditos: 5, prereq: [] },
      { codigo: "EFPIII", nombre: "Electivo Formación Profesional III", creditos: 5, prereq: [] },
      { codigo: "EFPIV", nombre: "Electivo Formación Profesional IV", creditos: 5, prereq: [] },
      { codigo: "EFPV", nombre: "Electivo Formación Profesional V", creditos: 5, prereq: [] },
    ],
  },
  {
    semestre: 10,
    ramos: [
      { codigo: "MEM", nombre: "Memoria", creditos: 4, prereq: ["PRM"] },
      { codigo: "MPDC", nombre: "Módulo Desempeño Integrado: Práctica Profesional", creditos: 26, prereq: [] },
    ],
  },
];

// Estado guardado en localStorage
let estado = {};

// Obtener estado guardado o inicializar
function cargarEstado() {
  const estadoGuardado = localStorage.getItem("estadoMallaPsico");
  if (estadoGuardado) {
    estado = JSON.parse(estadoGuardado);
  } else {
    estado = {};
  }
}

// Guardar estado en localStorage
function guardarEstado() {
  localStorage.setItem("estadoMallaPsico", JSON.stringify(estado));
}

// Verificar si los prerrequisitos están aprobados
function prereqAprobados(prereqs) {
  return prereqs.every((pre) => estado[pre] === true);
}

// Renderizar la malla completa
function renderizarMalla() {
  const contenedor = document.getElementById("malla");
  contenedor.innerHTML = "";
  contenedor.id = "contenedor-malla";

  malla.forEach(({ semestre, ramos }) => {
    const divSemestre = document.createElement("div");
    divSemestre.classList.add("semestre");
    divSemestre.dataset.semestre = semestre;

    const tituloSemestre = document.createElement("h2");
    tituloSemestre.textContent = `Semestre ${semestre}`;
    divSemestre.appendChild(tituloSemestre);

    ramos.forEach(({ codigo, nombre, creditos, prereq }) => {
      const ramo = document.createElement("div");
      ramo.classList.add("ramo");

      // Guardar atributos para tooltip y control
      ramo.textContent = nombre;
      ramo.dataset.codigo = codigo;
      ramo.dataset.creditos = creditos;
      ramo.dataset.prereq = JSON.stringify(prereq);

      // Estado del ramo (aprobado, bloqueado, no aprobado)
      if (estado[codigo]) {
        ramo.classList.add("aprobado");
      } else if (!prereqAprobados(prereq)) {
        ramo.classList.add("bloqueado");
      } else {
        ramo.classList.add("no-aprobado");
      }

      // Solo ramos no bloqueados pueden cambiar de estado al hacer click
      ramo.addEventListener("click", () => {
        if (ramo.classList.contains("bloqueado")) return;

        if (ramo.classList.contains("aprobado")) {
          ramo.classList.remove("aprobado");
          ramo.classList.add("no-aprobado");
          estado[codigo] = false;
        } else {
          ramo.classList.remove("no-aprobado");
          ramo.classList.add("aprobado");
          estado[codigo] = true;
        }

        guardarEstado();
        renderizarMalla(); // re-render para actualizar bloqueos
      });

      divSemestre.appendChild(ramo);
    });

    contenedor.appendChild(divSemestre);
  });
}

// Iniciar la app
cargarEstado();
renderizarMalla();
