import { Service } from "./types";

export const services: Service[] = [
  {
    id: "terapia-lenguaje",
    slug: "terapia-de-lenguaje",
    name: "Terapia de Lenguaje",
    shortDescription: "Comunicación efectiva",
    description:
      "Evaluación y tratamiento de dificultades en el habla, lenguaje y comunicación para potenciar la expresión. Trabajamos con niños que presentan retrasos en el lenguaje, trastornos articulatorios, dificultades de fluidez y problemas de comprensión. Nuestro enfoque es lúdico y personalizado, adaptado a las necesidades únicas de cada niño.",
    icon: "record_voice_over",
    iconBgColor: "bg-blue-100 dark:bg-blue-900/30",
    iconTextColor: "text-blue-600 dark:text-blue-300",
    benefits: [
      "Evaluación integral del lenguaje y la comunicación",
      "Terapia individualizada basada en el juego",
      "Orientación y entrenamiento para padres",
      "Seguimiento continuo del progreso",
    ],
  },
  {
    id: "terapia-ocupacional",
    slug: "terapia-ocupacional",
    name: "Terapia Ocupacional",
    shortDescription: "Habilidades diarias",
    description:
      "Fomentamos la independencia en actividades diarias a través del juego y el desarrollo sensorial. Ayudamos a los niños a desarrollar habilidades motoras finas y gruesas, procesamiento sensorial adecuado, coordinación y destrezas necesarias para la vida escolar y cotidiana.",
    icon: "extension",
    iconBgColor: "bg-green-100 dark:bg-green-900/30",
    iconTextColor: "text-green-600 dark:text-green-300",
    benefits: [
      "Desarrollo de habilidades motoras finas y gruesas",
      "Integración sensorial",
      "Preparación para escritura y actividades escolares",
      "Autonomía en actividades de la vida diaria",
    ],
  },
  {
    id: "psicologia-infantil",
    slug: "psicologia-infantil",
    name: "Psicología Infantil",
    shortDescription: "Apoyo emocional",
    description:
      "Apoyo emocional y conductual para niños y adolescentes, brindando herramientas para el bienestar. Trabajamos con ansiedad, miedos, dificultades conductuales, problemas de autoestima, duelos y situaciones de cambio familiar. Utilizamos terapia de juego y técnicas cognitivo-conductuales adaptadas a cada edad.",
    icon: "psychology",
    iconBgColor: "bg-purple-100 dark:bg-purple-900/30",
    iconTextColor: "text-primary dark:text-purple-300",
    benefits: [
      "Terapia de juego y expresión emocional",
      "Manejo de ansiedad y miedos",
      "Apoyo en situaciones familiares difíciles",
      "Estrategias de regulación emocional",
    ],
  },
  {
    id: "asesoria-lactancia",
    slug: "asesoria-de-lactancia",
    name: "Asesoría de Lactancia",
    shortDescription: "Asesoría experta",
    description:
      "Guía profesional para una lactancia exitosa y alimentación complementaria saludable. Acompañamos a las familias desde el nacimiento, resolviendo dificultades de agarre, producción de leche, alimentación complementaria BLW y transición a sólidos de manera segura.",
    icon: "baby_changing_station",
    iconBgColor: "bg-orange-100 dark:bg-orange-900/30",
    iconTextColor: "text-orange-600 dark:text-orange-300",
    benefits: [
      "Apoyo en lactancia desde el nacimiento",
      "Resolución de dificultades de agarre y producción",
      "Introducción a alimentación complementaria (BLW)",
      "Acompañamiento personalizado y continuo",
    ],
  },
  {
    id: "evaluaciones-desarrollo",
    slug: "evaluaciones-del-desarrollo",
    name: "Evaluaciones del Desarrollo",
    shortDescription: "Diagnóstico integral",
    description:
      "Evaluaciones completas del desarrollo infantil para identificar fortalezas y áreas de oportunidad. Realizamos valoraciones multidisciplinarias que abarcan lenguaje, motricidad, cognición, habilidades sociales y comportamiento adaptativo. Nuestros informes detallados sirven como guía para diseñar planes de intervención efectivos.",
    icon: "assessment",
    iconBgColor: "bg-teal-100 dark:bg-teal-900/30",
    iconTextColor: "text-teal-600 dark:text-teal-300",
    benefits: [
      "Evaluación multidisciplinaria completa",
      "Identificación temprana de necesidades",
      "Informes detallados con recomendaciones",
      "Plan de intervención personalizado",
    ],
  },
  {
    id: "talleres-padres",
    slug: "talleres-para-padres",
    name: "Talleres para Padres",
    shortDescription: "Formación familiar",
    description:
      "Espacios de aprendizaje y reflexión para padres y cuidadores sobre desarrollo infantil, crianza respetuosa y estimulación temprana. Ofrecemos talleres grupales e individuales que empoderan a las familias con herramientas prácticas para apoyar el desarrollo de sus hijos en casa.",
    icon: "groups",
    iconBgColor: "bg-rose-100 dark:bg-rose-900/30",
    iconTextColor: "text-rose-600 dark:text-rose-300",
    benefits: [
      "Estrategias de estimulación en el hogar",
      "Crianza respetuosa y límites saludables",
      "Comunidad de apoyo entre familias",
      "Material práctico para aplicar en casa",
    ],
  },
];
