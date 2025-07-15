const malla = [
  {
    semestre: "1",
    ramos: [
      { id: "historia", nombre: "Historia de la Psicología y Sistemas Psicológicos", creditos: 8 },
      { id: "neuro", nombre: "Neurobiología Aplicada a la Psicología", creditos: 10 },
      { id: "desarrollo", nombre: "Psicología del Desarrollo Humano", creditos: 8 },
      { id: "metodologia", nombre: "Metodología de la Investigación en Psicología", creditos: 8 },
      { id: "filosofia", nombre: "Filosofía y Psicología", creditos: 4 },
      { id: "introduccion", nombre: "Introducción a la Psicología y su Praxis", creditos: 2 },
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
      { id: "estadistica1", nombre: "Técnicas de Análisis Estadístico en Psicología I", creditos: 4 }
    ]
  },
  {
    semestre: "3",
    ramos: [
      { id: "personalidad1", nombre: "Psicología de la Personalidad I", creditos: 4, prerequisitos: ["desarrollo"] },
      { id: "motivacion", nombre: "Motivación y Procesos Emocionales", creditos: 4 },
      { id: "aprendizaje", nombre: "Procesos de Aprendizaje Básico", creditos: 4, prerequisitos: ["cognitivos1"] },
      { id: "evalinteligencia", nombre: "Evaluación de la Inteligencia y Procesos Neuropsicológicos", creditos: 4, prerequisitos: ["neuro"] },
      { id: "social1", nombre: "Psicología Social I: Pensamiento Social", creditos: 4, prerequisitos: ["metodologia"] },
      { id: "autogestion", nombre: "Autogestión del Aprendizaje", creditos: 3 },
      { id: "idioma3", nombre: "Idioma Extranjero III", creditos: 3, prerequisitos: ["idioma2"] },
      { id: "estadistica2", nombre: "Técnicas de Análisis Estadístico en Psicología II", creditos: 4, prerequisitos: ["estadistica1"] }
    ]
  },
  {
    semestre: "4",
    ramos: [
      { id: "personalidad2", nombre: "Psicología de la Personalidad II", creditos: 4, prerequisitos: ["personalidad1"] },
      { id: "memoria", nombre: "Memoria Humana", creditos: 4, prerequisitos: ["aprendizaje"] },
      { id: "social2", nombre: "Psicología Social II: Actitudes y Comportamiento", creditos: 4, prerequisitos: ["social1"] },
      { id: "evalpersonalidad1", nombre: "Evaluación de la Personalidad I", creditos: 3, prerequisitos: ["personalidad1"] },
      { id: "intervencionind", nombre: "Técnicas de Intervención Individual", creditos: 5, prerequisitos: ["social1"] },
      { id: "trabajoequipo", nombre: "Trabajo en Equipo y Desarrollo de Habilidades Sociales", creditos: 3, prerequisitos: ["autogestion"] },
      { id: "construccionpruebas1", nombre: "Teoría y Construcción de Pruebas Psicológicas I", creditos: 4, prerequisitos: ["estadistica2"] }
    ]
  },
  {
    semestre: "5",
    ramos: [
      { id: "trabajoorg1", nombre: "Psicología del Trabajo y las Organizaciones I", creditos: 4, prerequisitos: ["social2"] },
      { id: "psicopatinfanto", nombre: "Psicopatología Infanto Juvenil", creditos: 4, prerequisitos: ["desarrollo"] },
      { id: "evalpersonalidad2", nombre: "Evaluación de la Personalidad II", creditos: 4, prerequisitos: ["personalidad2"] },
      { id: "social3", nombre: "Psicología Social III: Grupos, Colectivos y Ambientes", creditos: 4, prerequisitos: ["social2"] },
      { id: "cognitivos2", nombre: "Procesos Cognitivos II", creditos: 4, prerequisitos: ["memoria"] },
      { id: "datoscualitativos", nombre: "Técnicas de Recolección y Análisis de Datos Cualitativos", creditos: 3, prerequisitos: ["metodologia"] },
      { id: "comprensioncontextos", nombre: "Comprensión de Contextos Sociales", creditos: 3, prerequisitos: ["comunicacion2"] },
      { id: "construccionpruebas2", nombre: "Teoría y Construcción de Pruebas Psicológicas II", creditos: 4, prerequisitos: ["construccionpruebas1"] }
    ]
  },
  {
    semestre: "6",
    ramos: [
      { id: "intervenciongrupal", nombre: "Técnicas de Intervención Grupal", creditos: 5, prerequisitos: ["social3", "intervencionind"] },
      { id: "trabajoorg2", nombre: "Psicología del Trabajo y las Organizaciones II", creditos: 4, prerequisitos: ["trabajoorg1"] },
      { id: "psicopatadultos", nombre: "Psicopatología de Adultos", creditos: 4, prerequisitos: ["personalidad2"] },
      { id: "educacional1", nombre: "Psicología Educacional I", creditos: 4, prerequisitos: ["cognitivos2", "desarrollo"] },
      { id: "comunitaria", nombre: "Psicología Comunitaria", creditos: 4, prerequisitos: ["social3"] },
      { id: "fundpsicoterapia1", nombre: "Fundamentos de Psicoterapia I", creditos: 4, prerequisitos: ["intervencionind"] },
      { id: "modulointegracion1", nombre: "Módulo I de Integración de Competencias Psicológicas: Investigación", creditos: 3, prerequisitos: ["construccionpruebas2", "datoscualitativos"] },
      { id: "comprensioncultural", nombre: "Comprensión de Contextos Culturales", creditos: 3, prerequisitos: ["comprensioncontextos"] }
    ]
  },
  {
    semestre: "7",
    ramos: [
      { id: "desarrolloorganizacional", nombre: "Desarrollo y Cambio Organizacional", creditos: 4, prerequisitos: ["trabajoorg2"] },
      { id: "seleccionpersonas", nombre: "Selección de Personas", creditos: 4, prerequisitos: ["evalpersonalidad2"] },
      { id: "tallerpsicodiagnostico", nombre: "Taller de Psicodiagnóstico y Evaluación", creditos: 5, prerequisitos: ["psicopatadultos", "personalidad2"] },
      { id: "educacional2", nombre: "Psicología Educacional II", creditos: 4, prerequisitos: ["educacional1"] },
      { id: "intervencioncomunitaria", nombre: "Intervención Comunitaria", creditos: 5, prerequisitos: ["comunitaria"] },
      { id: "fundpsicoterapia2", nombre: "Fundamentos de Psicoterapia II", creditos: 4, prerequisitos: ["fundpsicoterapia1"] },
      { id: "electivo1", nombre: "Electivo Disciplinar I", creditos: 3 },
      { id: "etica", nombre: "Ética y Responsabilidad Social", creditos: 3, prerequisitos: ["comprensioncultural", "trabajoequipo"] }
    ]
  },
  {
    semestre: "8",
    ramos: [
      { id: "gestionpersonas", nombre: "Gestión Estratégica de Personas", creditos: 4, prerequisitos: ["desarrolloorganizacional"] },
      { id: "neuropsiquiatria", nombre: "Neuropsiquiatría y Psicofarmacología", creditos: 4, prerequisitos: ["psicopatadultos", "evalinteligencia"] },
      { id: "competenciasorgan", nombre: "Desarrollo de Competencias Profesionales en el Ámbito Organizacional", creditos: 4, prerequisitos: ["trabajoorg2", "intervenciongrupal"] },
      { id: "educacional3", nombre: "Psicología Educacional III", creditos: 4, prerequisitos: ["educacional2"] },
      { id: "proyectosocial", nombre: "Diseño y Evaluación de Proyectos Sociales", creditos: 4, prerequisitos: ["intervencioncomunitaria"] },
      { id: "clinicoinfanto", nombre: "Psicología Clínica Infanto Juvenil", creditos: 4, prerequisitos: ["psicopatinfanto"] },
      { id: "modulointegracion2", nombre: "Módulo II de Integración de Competencias Psicológicas: Diseño de Intervención", creditos: 3 },
      { id: "responsabilidadsocial", nombre: "Responsabilidad Social", creditos: 3, prerequisitos: ["etica"] }
    ]
  },
  {
    semestre: "9",
    ramos: [
      { id: "proyectomemoria", nombre: "Proyecto de Memoria", creditos: 5, prerequisitos: ["modulointegracion1"] },
      { id: "electivoformprof1", nombre: "Electivo de Formación Profesional I", creditos: 5 },
      { id: "electivoformprof2", nombre: "Electivo de Formación Profesional II", creditos: 5 },
      { id: "electivoformprof3", nombre: "Electivo de Formación Profesional III", creditos: 5 },
      { id: "electivoformprof4", nombre: "Electivo de Formación Profesional IV", creditos: 5 },
      { id: "electivoformprof5", nombre: "Electivo de Formación Profesional V", creditos: 5 }
    ]
  },
  {
    semestre: "10",
    ramos: [
      { id: "memoriafinal", nombre: "Memoria", creditos: 4, prerequisitos: ["proyectomemoria"] },
      { id: "practicaprofesional", nombre: "Módulo de Desempeño Integrado de Competencias: Práctica Profesional", creditos: 26 }
    ]
  }
];

// Estado de ramos aprobados
const aprobados = new Set();

function crearMalla() {
  const contenedor = document.getElementById("malla");
  contenedor.innerHTML = "";

  malla.forEach((sem) => {
    const divSemestre = document.createElement("div");
    divSemestre.classList.add("semestre");

    const titulo = document.createElement("h2");
    titulo.textContent = `Semestre ${sem.semestre}`;
    divSemestre.appendChild(titulo);

    sem.ramos.forEach((ramo) => {
      const divRamo = document.createElement("div");
      divRamo.textContent = `${ramo.nombre} (${ramo.creditos} créditos)`;
      divRamo.classList.add("ramo");
      divRamo.dataset.id = ramo.id;

      if (ramo.prerequisitos && ramo.prerequisitos.length > 0) {
        divRamo.classList.add("bloqueado");
        divRamo.dataset.bloqueado = "true";
      }

      divRamo.addEventListener("click", () => manejarClick(ramo, divRamo));
      divSemestre.appendChild(divRamo);
    });

    contenedor.appendChild(divSemestre);
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

    if (!ramo) return;

    if (ramo.prerequisitos && ramo.prerequisitos.length > 0) {
      const desbloqueado = ramo.prerequisitos.every((pre) => aprobados.has(pre));
      if (desbloqueado) {
        el.classList.remove("bloqueado");
        el.dataset.bloqueado = "false";
      } else {
        el.classList.add("bloqueado");
        el.classList.remove("aprobado");
        el.dataset.bloqueado = "true";
        aprobados.delete(ramo.id);
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
