import { BlogPost } from "./types";

/**
 * List of available blog categories.
 */
export const blogCategories = [
  "Todos",
  "Lenguaje",
  "Alimentación",
  "Sensorial",
  "Psicología",
  "Desarrollo",
  "Crianza",
];

/**
 * Array of blog posts details.
 * Used to populate the blog section of the website.
 */
export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "senales-alerta-desarrollo-lenguaje",
    title: "Señales de alerta en el desarrollo del lenguaje",
    excerpt:
      "Descubre cuándo es momento de consultar a un especialista si tu hijo tarda en hablar.",
    content: `El desarrollo del lenguaje es uno de los hitos más esperados por los padres. Sin embargo, cada niño tiene su propio ritmo y es importante conocer las señales que podrían indicar la necesidad de una evaluación profesional.

## ¿Qué es normal y qué no?

Durante los primeros años de vida, los niños pasan por diferentes etapas en su desarrollo comunicativo. Desde los balbuceos a los 6 meses hasta las primeras palabras alrededor del primer año, cada fase es fundamental.

## Señales de alerta por edad

### De 0 a 12 meses
- No responde a sonidos ni a su nombre
- No balbucea ni produce sonidos variados
- No señala objetos ni usa gestos para comunicarse

### De 12 a 18 meses
- No dice ninguna palabra con significado
- No comprende instrucciones simples como "dame" o "ven"
- No imita sonidos ni palabras

### De 18 a 24 meses
- Tiene menos de 50 palabras en su vocabulario
- No combina dos palabras juntas
- Pierde habilidades que ya había adquirido

### De 2 a 3 años
- Su habla es difícil de entender para personas cercanas
- No forma oraciones de 3 palabras
- No puede seguir instrucciones de dos pasos

## ¿Qué hacer si identificas alguna señal?

Si identificas alguna de estas señales en tu hijo, lo más recomendable es consultar con un terapeuta de lenguaje. Una evaluación temprana permite identificar dificultades a tiempo y diseñar un plan de intervención efectivo.

En TheraKids contamos con especialistas que realizan evaluaciones integrales del lenguaje y la comunicación, brindando orientación personalizada a cada familia.

## La importancia de la intervención temprana

Los primeros años de vida son cruciales para el desarrollo del lenguaje. El cerebro tiene una plasticidad increíble durante esta etapa, lo que significa que las intervenciones tempranas suelen tener mejores resultados.

No esperes a que el niño "crezca y hable solo". Si tienes dudas, consulta. Siempre es mejor prevenir y actuar a tiempo que esperar con incertidumbre.`,
    category: "Lenguaje",
    author: "Majo Rivera",
    date: "2025-01-15",
    readTime: "7 min lectura",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDfXYePMP0FkHqHUYEZj841Iej5WXyMOB3UsFGfGnYyARNX48HX8826R0Cbb0QzboUmeOL9qQsjHUHH5vJdaMRhce-EV-uQ7ZEInz_EPU-LU2Yphmqhv_9oOvSVutd3mJhpST7raU9D33IFfz7x5oMWLoxO2LNjjbi5fLCiC_USxBDBF-2dUmd8_3rNnHzmh-0_AI2r1w02NyMP8pAxzDDaKxgiefnbSpDWlSG0NSC3pF852nQ69KcA3qvsVu6_gbNJBt72Db4JVPi7",
    imageAlt: "Niño jugando con bloques de colores",
    featured: true,
  },
  {
    id: "2",
    slug: "introduccion-alimentacion-complementaria",
    title: "Introducción a la alimentación complementaria",
    excerpt:
      "Guía paso a paso para iniciar a tu bebé en el mundo de los sólidos de manera segura y divertida.",
    content: `La alimentación complementaria es una etapa emocionante y a veces abrumadora para las familias. Alrededor de los 6 meses, los bebés están listos para explorar nuevos sabores y texturas más allá de la leche materna o fórmula.

## ¿Cuándo iniciar?

La Organización Mundial de la Salud recomienda iniciar la alimentación complementaria alrededor de los 6 meses de edad, cuando el bebé muestra señales de madurez como:

- **Control cefálico**: Mantiene la cabeza erguida de forma estable
- **Se sienta con apoyo**: Puede mantenerse sentado con mínimo soporte
- **Interés por la comida**: Observa y se interesa cuando otros comen
- **Reflejo de extrusión disminuido**: Ya no empuja los alimentos fuera de la boca con la lengua

## BLW vs alimentación tradicional

### Baby-Led Weaning (BLW)
El BLW consiste en ofrecer alimentos en trozos que el bebé pueda agarrar y llevar a su boca de forma autónoma. Esto fomenta:
- Autonomía y confianza
- Exploración de texturas
- Desarrollo de motricidad fina
- Autorregulación del apetito

### Alimentación tradicional con cuchara
La alimentación con purés y papillas sigue siendo una opción válida. Lo importante es respetar las señales de hambre y saciedad del bebé.

## Primeros alimentos recomendados

Los primeros alimentos deben ser nutritivos, fáciles de digerir y seguros:

- Aguacate maduro
- Banana en trozos
- Camote cocido
- Brócoli al vapor
- Pollo desmenuzado
- Huevo bien cocido

## Alimentos a evitar antes del año

- Miel (riesgo de botulismo)
- Leche de vaca como bebida principal
- Sal y azúcar añadidos
- Alimentos duros y redondos (riesgo de atragantamiento)

## Consejos para una transición exitosa

1. **Sé paciente**: El bebé necesita tiempo para explorar y aprender
2. **Ofrece variedad**: Introduce diferentes sabores y texturas gradualmente
3. **Come en familia**: El ejemplo es el mejor maestro
4. **No obligues**: Respeta los ritmos del bebé
5. **Mantén la lactancia**: La leche sigue siendo el alimento principal hasta el año

En TheraKids, nuestra especialista en alimentación infantil puede acompañarte en todo este proceso con un plan personalizado para tu familia.`,
    category: "Alimentación",
    author: "Dani Méndez",
    date: "2025-01-12",
    readTime: "5 min lectura",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDO1EA2_-n0EhCdyYPBoh8zwOnEMfB2_WI_opN-kfHxKseSFnOGa_9pwZzgL5GK-sq8VJu2SfgWLab64oMIsrt0nMh2ByE-NNOjEwISzDsOwQMT2kbntUwuZi2yFPNOydag9rkTbyaXsiTEg-FIDxq7kvn11brOcHNhbbReLzdcrAZOBUrDZzOQfYU4Do8xDEOqZx_NdSJ3K8RzbIRFH_uyfHcFIPfp7DI4Pfj6FFDkZMLvNKl_awoR2pzoGhqWApL2UG-f_9n2-OV2",
    imageAlt: "Bebé comiendo frutas con las manos",
  },
  {
    id: "3",
    slug: "importancia-juego-sensorial",
    title: "La importancia del juego sensorial",
    excerpt:
      "Cómo las texturas y los colores ayudan al cerebro de tu hijo a procesar la información del entorno.",
    content: `El juego sensorial es mucho más que una actividad divertida: es una herramienta fundamental para el desarrollo cerebral de los niños. A través de la exploración de diferentes texturas, sonidos, colores y movimientos, los pequeños construyen conexiones neuronales esenciales.

## ¿Qué es el procesamiento sensorial?

El procesamiento sensorial es la capacidad del cerebro de recibir, organizar e interpretar la información que llega a través de los sentidos. Los niños utilizan sus sentidos para:

- Entender el mundo que los rodea
- Regular sus emociones y comportamiento
- Desarrollar habilidades motoras
- Aprender conceptos nuevos

## Los 8 sentidos (sí, son más de 5)

Además de los 5 sentidos conocidos (vista, oído, olfato, gusto y tacto), existen tres sentidos internos fundamentales:

1. **Vestibular**: Sentido del equilibrio y movimiento
2. **Propioceptivo**: Conciencia de la posición del cuerpo
3. **Interocepción**: Sensaciones internas (hambre, sed, necesidad de ir al baño)

## Actividades sensoriales por edad

### De 0 a 12 meses
- Juegos con agua tibia en la bañera
- Texturas suaves: telas, peluches, esponjas
- Música y sonidos variados
- Juegos de movimiento suave (mecerlo, columpiarlo)

### De 1 a 3 años
- Plastilina y masa sensorial
- Pintura con dedos
- Arena cinética
- Caminatas descalzos en diferentes superficies

### De 3 a 6 años
- Circuitos de obstáculos
- Juegos con agua y arena
- Arte con diferentes materiales
- Cocinar juntos

## Señales de dificultades sensoriales

Algunos niños pueden presentar dificultades en el procesamiento sensorial. Presta atención si tu hijo:

- Rechaza intensamente ciertas texturas, sonidos o luces
- Busca sensaciones intensas constantemente
- Tiene dificultad para calmarse
- Se cubre los oídos frecuentemente
- Evita ensuciarse las manos

## El juego sensorial en casa

No necesitas materiales costosos para estimular los sentidos de tu hijo. Elementos cotidianos como arroz, fideos, agua, hojas y piedras pueden convertirse en excelentes herramientas sensoriales.

Lo más importante es crear un ambiente seguro donde tu hijo pueda explorar libremente, sin presiones ni expectativas. El juego sensorial debe ser placentero y respetar los límites de cada niño.

En TheraKids, nuestras terapeutas ocupacionales diseñan experiencias sensoriales personalizadas que potencian el desarrollo de cada niño de manera divertida y efectiva.`,
    category: "Sensorial",
    author: "Gene Mejías",
    date: "2025-01-08",
    readTime: "8 min lectura",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBWyplzyn--2DtSX32vX35bvbXZApbvh0y8V6bJpGQVwbGWfbo6GtCg2tfFlutgtCn68TKbiWhyKU2Znfh-udPzTnc2R4V4GvagIwix5AlzIcFmfOp_Hw83bI9hhsM40v-zZ2Wphp_TNriWLYlCj4y6RtrsMJr5R7OC2nf-ESSm731_8EBUh-1l97ydvAaDxYpBo8UHBpD46UpQTGi52-W2lwa4upuC54SXGjtya4MX0NM-ZGGWIkotQOpo62trKcUfDXx8Laz1Ql6K",
    imageAlt: "Niña jugando con plastilina",
  },
  {
    id: "4",
    slug: "manejando-rabietas-con-empatia",
    title: "Manejando las rabietas con empatía",
    excerpt:
      "Estrategias de disciplina positiva para acompañar a los niños en sus momentos de desregulación emocional.",
    content: `Las rabietas son una parte normal del desarrollo infantil. Lejos de ser un problema de comportamiento, son la forma en que los niños pequeños expresan emociones que aún no pueden manejar. Entender esto cambia completamente nuestra forma de responder.

## ¿Por qué ocurren las rabietas?

Los niños entre 1 y 4 años están desarrollando su cerebro emocional. La corteza prefrontal, encargada de la regulación emocional, no madura completamente hasta la adultez. Esto significa que los niños literalmente no pueden controlar sus reacciones emocionales intensas.

Las rabietas pueden ser provocadas por:
- Frustración al no lograr algo
- Hambre, sueño o cansancio
- Cambios en la rutina
- Sobrestimulación sensorial
- Necesidad de autonomía
- Dificultad para comunicar lo que necesitan

## Qué hacer durante una rabieta

### 1. Mantén la calma
Tu regulación es lo primero. Respira profundo antes de actuar. Los niños necesitan un adulto regulado que los ayude a regularse.

### 2. Valida la emoción
Nombra lo que sientes que tu hijo está experimentando: "Veo que estás muy enojado porque no pudiste abrir la caja". Esto le ayuda a sentirse comprendido y a identificar sus emociones.

### 3. Ofrece contención física (si la acepta)
Algunos niños necesitan un abrazo firme y cálido. Otros prefieren su espacio. Respeta lo que tu hijo necesita en ese momento.

### 4. No razones en medio de la crisis
El cerebro emocional está activado. Las explicaciones lógicas no funcionan hasta que el niño se calme. Primero conecta, después corrige.

### 5. Espera y acompaña
Las rabietas tienen un inicio, un pico y un final. Tu presencia calmada es el mejor recurso.

## Qué NO hacer

- **No gritar ni castigar**: Esto aumenta la activación emocional
- **No ignorar**: El niño necesita saber que estás ahí
- **No ceder para que pare**: Esto refuerza la conducta
- **No avergonzar**: Frases como "ya estás grande para eso" dañan la autoestima

## Prevención: reducir las rabietas

- Mantén rutinas predecibles
- Ofrece opciones limitadas ("¿quieres la camisa azul o la roja?")
- Anticipa las transiciones ("en 5 minutos vamos a guardar los juguetes")
- Asegúrate de que las necesidades básicas estén cubiertas
- Enseña vocabulario emocional desde temprana edad

## Cuándo consultar a un profesional

Si las rabietas son muy frecuentes, intensas, duran más de 20-30 minutos o el niño se lastima a sí mismo o a otros, es recomendable consultar con un psicólogo infantil.

En TheraKids, nuestro equipo de psicología puede ayudarte a entender las necesidades emocionales de tu hijo y brindarte herramientas prácticas para manejar estos momentos difíciles con amor y firmeza.`,
    category: "Psicología",
    author: "Paula Fernández",
    date: "2025-01-05",
    readTime: "6 min lectura",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuARB39h2YZs2A1MLAIbjugOYJ9n2XzwKvNT0UsCbvQgWQC38bMYuBALvukX5xQNr9s0y-eFpjll7nUK5v1iYRI9Ytef2PAkHJ55QCuxsVAIWIJGTRkGzHGdk6VSoJoeTGs9DqJKiUE5pbkOz4mvOjDw7YhFHEen4eUTLvIIDfq5zZujXLZmuJ7-IGBvewx6YuJGHD-kTzjoXAWTrjiR1sav61KnKkrN-oaTPPRMbfJiFpLLgD2wmJfF87B2HljtOzcWfBDyQwEa5wru",
    imageAlt: "Madre leyendo cuento a su hijo",
  },
  {
    id: "5",
    slug: "estimulacion-temprana-en-casa",
    title: "Estimulación temprana: actividades para hacer en casa",
    excerpt:
      "Ideas prácticas y divertidas para estimular el desarrollo de tu bebé desde los primeros meses.",
    content: `La estimulación temprana no requiere materiales especiales ni sesiones formales. Las mejores oportunidades de aprendizaje ocurren en las interacciones cotidianas con tu bebé. Cada momento compartido es una oportunidad de crecimiento.

## ¿Qué es la estimulación temprana?

Es un conjunto de actividades organizadas que buscan potenciar las habilidades cognitivas, motoras, emocionales y sociales del niño durante sus primeros años de vida, aprovechando la enorme plasticidad cerebral de esta etapa.

## Actividades por área de desarrollo

### Lenguaje y comunicación
- **Narra tu día**: Describe todo lo que haces mientras estás con tu bebé
- **Lee en voz alta**: Desde el nacimiento, los cuentos estimulan el lenguaje
- **Canta canciones**: Las melodías repetitivas favorecen la memoria auditiva
- **Imita sus sonidos**: Responder a sus balbuceos estimula la comunicación
- **Señala y nombra**: Los objetos, animales y personas que ven juntos

### Motricidad gruesa
- **Tiempo boca abajo (tummy time)**: Desde las primeras semanas, por períodos cortos
- **Juegos de alcanzar**: Coloca juguetes a su alcance para motivar el movimiento
- **Circuitos caseros**: Con cojines y almohadas para gatear y trepar
- **Baile y movimiento**: Muévete con tu bebé al ritmo de la música

### Motricidad fina
- **Juegos de transferir**: Pasar objetos de un recipiente a otro
- **Rasgar papel**: Fortalece los músculos de las manos
- **Plastilina y masa**: Modelar fortalece la coordinación
- **Enhebrar**: Cuentas grandes en un cordón (supervisado)

### Desarrollo socioemocional
- **Juego de escondidas (peek-a-boo)**: Fundamental para la permanencia del objeto
- **Juego simbólico**: Jugar a la casita, al doctor, a cocinar
- **Turnos en el juego**: Enseña paciencia y habilidades sociales
- **Expresión emocional**: Nombrar emociones en cuentos y situaciones cotidianas

## Principios fundamentales

1. **Sigue el interés del niño**: La motivación intrínseca potencia el aprendizaje
2. **Menos es más**: No sobrecargues con actividades
3. **El juego libre es esencial**: No todo debe ser estructurado
4. **Tu presencia es el mejor estímulo**: La conexión afectiva es la base
5. **Respeta los ritmos**: Cada niño se desarrolla a su propio paso

## Errores comunes

- Comparar con otros niños
- Forzar actividades que no le interesan
- Usar pantallas como estimulación (antes de los 2 años)
- Confundir estimulación con sobreestimulación

Recuerda: el objetivo no es crear niños superdotados, sino acompañar el desarrollo natural con amor, juego y presencia. En TheraKids podemos orientarte sobre las actividades más adecuadas para la etapa de desarrollo de tu hijo.`,
    category: "Desarrollo",
    author: "Majo Rivera",
    date: "2024-12-28",
    readTime: "9 min lectura",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA9eD832XpNt_tl7oMi06JBtmpi4ktyG9h2oxMw3aV7fNiXsuLa2G2dVr9D01bQZ8fNRIyxBFcu4TH92wsjYGEBVSykm9y-q99qUCu3GMtkWS6U2M6cM1N5I5zAhC9XxDYhTXaUNrotLg00gU21YpQJyta9Hay7V_gfRc8XRWdMcfmY0JuN4Fc4b3cI_Nn5sO5UVnUftvtUbEQS0QMJxL58qTYlPxL6Fl8D-dozM6w1FJ8sGMoTdHzpcIIGlSbp5VkMVuE4sFs3Suex",
    imageAlt: "Padres jugando con su bebé en casa",
  },
  {
    id: "6",
    slug: "crianza-respetuosa-limites-saludables",
    title: "Crianza respetuosa: cómo poner límites saludables",
    excerpt:
      "Aprende a establecer límites firmes y amorosos que fortalezcan el vínculo con tu hijo.",
    content: `La crianza respetuosa no significa criar sin límites. Por el contrario, los límites claros y consistentes son esenciales para que los niños se sientan seguros. La clave está en cómo los establecemos y comunicamos.

## ¿Qué es la crianza respetuosa?

Es un enfoque de crianza que busca:
- Tratar a los niños con dignidad y respeto
- Reconocer sus emociones como válidas
- Establecer límites firmes sin recurrir a la violencia
- Fomentar la autonomía progresiva
- Mantener una conexión afectiva sólida

## ¿Por qué los niños necesitan límites?

Los límites proporcionan:
- **Seguridad**: Saber qué esperar reduce la ansiedad
- **Estructura**: Las rutinas predecibles dan estabilidad
- **Aprendizaje social**: Entender las normas de convivencia
- **Autorregulación**: Aprender a manejar la frustración

## Cómo establecer límites respetuosos

### 1. Sé claro y específico
En lugar de "pórtate bien", di "en el supermercado caminamos, no corremos". Los niños necesitan instrucciones concretas.

### 2. Ofrece alternativas
"No puedes golpear. Si estás enojado, puedes golpear este cojín o decirme con palabras qué necesitas."

### 3. Mantén la calma y la firmeza
Un límite se puede poner con voz tranquila y actitud firme. No necesitas gritar para ser escuchado.

### 4. Sé consistente
Si hoy el límite aplica pero mañana no, el niño recibe mensajes confusos. La consistencia es fundamental.

### 5. Valida antes de limitar
"Entiendo que quieres seguir jugando (validación). Es hora de cenar, podemos jugar después (límite)."

## Errores frecuentes

- **Amenazas vacías**: "Si no te portas bien, no vamos al parque" (y luego ir de todas formas)
- **Explicaciones excesivas**: Los niños pequeños necesitan pocas palabras
- **Negociar constantemente**: Un límite no es una negociación
- **Sentir culpa**: Poner límites es un acto de amor

## Herramientas prácticas

- **Anticipar**: Prepara al niño para lo que viene
- **Opciones limitadas**: "¿Te lavas los dientes antes o después del cuento?"
- **Consecuencias lógicas**: Relacionadas con la situación, no castigos arbitrarios
- **Refuerzo positivo**: Reconocer cuando respeta los límites

## Cuando pedir ayuda

Si sientes que la crianza te sobrepasa, que los conflictos son constantes o que necesitas nuevas herramientas, buscar apoyo profesional es un acto de responsabilidad y amor.

En TheraKids ofrecemos talleres de crianza respetuosa y sesiones de orientación para padres donde trabajamos estrategias concretas para tu familia.`,
    category: "Crianza",
    author: "Paula Fernández",
    date: "2024-12-20",
    readTime: "7 min lectura",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB9WGdf3-r898nllhYlNPOxstg7PxMmxvwG3ak7MtnBcwDX-fqOGbg-EXhZB916VFZya61WYq2mK63krdeHeMBatrb42pJwgcWUNIDdGtYADoD6vkcmczBvrhwidv3WP1FdV8wXdCSqD9MM5sU3-eWvb_6m1AX3bWzwxddnC8aLA4ME5ylIn8NCc9OKji7FK9L13YJsr8jlM4VIQEBYAphwW-TaAY-CFKBnPF6ubFG969QlaO5lUuK9m0WyH3FStpT7VM2jH0oVNy4j",
    imageAlt: "Familia compartiendo momento juntos",
  },
];
