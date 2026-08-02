// ==========================================
// IAFit - Lógica de la Aplicación y Simulación de IA
// ==========================================

// Base de Datos Local de Ejercicios con Ilustraciones SVG Animadas
const EXERCISES_DATABASE = [
    {
        id: "caminata",
        name: "Caminata Rápida",
        category: "cardio",
        desc: "Excelente para iniciar, sin impacto articular. Ayuda a controlar los niveles de glucosa en sangre de forma muy efectiva.",
        difficulty: "Baja",
        time: "15-30 min",
        icon: "lucide-footprints",
        equipment: "none",
        cardioIntensity: "low",
        jointStress: [],
        lightAlternative: "Caminata suave de 10 min",
        muscleGroups: ['Piernas', 'Pantorrillas', 'Cardio'],
        steps: [
            'Párate derecho con los pies a la altura de los hombros.',
            'Da pasos firmes aterrizando primero con el talón, luego la punta.',
            'Mueve los brazos en oposición a las piernas para dar equilibrio e impulso.',
            'Mantén la vista al frente y la espalda recta, sin encorvarte.',
            'Respira de forma constante: inhala por la nariz y exhala por la boca.'
        ],
        benefits: 'Mejora la circulación, reduce la glucosa postprandial y fortalece el sistema cardiovascular sin impacto articular.',
        tipsDiabetic: "Ideal realizarla 15-30 minutos después de comer para reducir el pico de glucosa.",
        tipsHypertensive: "Excelente ejercicio aeróbico para reducir la resistencia vascular de forma natural.",
        tipsJointPain: "Usa tenis amortiguados y prefiere terrenos planos.",
        visualSvg: `
            <svg viewBox="0 0 100 100" width="100%" height="100%" style="background:#141620; stroke:#6366f1; stroke-width:3; fill:none; stroke-linecap:round;">
                <!-- Camino -->
                <line x1="10" y1="80" x2="90" y2="80" stroke="rgba(255,255,255,0.1)" stroke-width="2" />
                <!-- Cabeza -->
                <circle cx="50" cy="25" r="6" stroke="#10b981" />
                <!-- Cuerpo/Tronco -->
                <line x1="50" y1="31" x2="50" y2="55" />
                <!-- Brazos en movimiento -->
                <line x1="50" y1="36" x2="40" y2="48">
                    <animate attributeName="x2" values="40;60;40" dur="1.2s" repeatCount="indefinite" />
                </line>
                <line x1="50" y1="36" x2="60" y2="48">
                    <animate attributeName="x2" values="60;40;60" dur="1.2s" repeatCount="indefinite" />
                </line>
                <!-- Piernas en movimiento de caminata -->
                <line x1="50" y1="55" x2="38" y2="80">
                    <animate attributeName="x2" values="38;62;38" dur="1.2s" repeatCount="indefinite" />
                </line>
                <line x1="50" y1="55" x2="62" y2="80">
                    <animate attributeName="x2" values="62;38;62" dur="1.2s" repeatCount="indefinite" />
                </line>
            </svg>
        `
    },
    {
        id: "sentadillas-silla",
        name: "Sentadillas con Soporte de Silla",
        category: "fuerza",
        desc: "Tonifica muslos y glúteos de forma segura. Usa una silla para mantener el equilibrio.",
        difficulty: "Baja",
        time: "3 series de 10 reps",
        icon: "lucide-accessibility",
        equipment: "none",
        cardioIntensity: "low",
        jointStress: ["knee", "hip"],
        lightAlternative: "Sentarse y levantarse de la silla despacio (5 repeticiones)",
        muscleGroups: ['Cuádriceps', 'Glúteos', 'Core'],
        steps: [
            'Párate frente a la silla con manos en el respaldo para apoyarte.',
            'Separa los pies a la altura de los hombros, punta de pies ligeramente hacia fuera.',
            'Inhala y baja lentamente doblando las rodillas, como si fueras a sentarte.',
            'Baja hasta los 90 grados (o menos si hay dolor) sin despegar los talones.',
            'Exhala y sube empujando desde los talones. Mantén la espalda recta.'
        ],
        benefits: 'Tonifica cuádriceps y glúteos, mejora el equilibrio y el consumo de glucosa de forma muy eficiente.',
        tipsDiabetic: "El trabajo de grandes grupos musculares como las piernas consume mucha glucosa de manera eficiente.",
        tipsHypertensive: "Evita contener la respiración durante la bajada (maniobra de Valsalva).",
        tipsJointPain: "No bajes más allá de los 90 grados en la rodilla si hay dolor.",
        visualSvg: `
            <svg viewBox="0 0 100 100" width="100%" height="100%" style="background:#141620; stroke:#6366f1; stroke-width:3; fill:none; stroke-linecap:round;">
                <!-- Silla de soporte -->
                <path d="M 65 50 L 65 80 M 65 60 L 50 60" stroke="rgba(255,255,255,0.3)" />
                <!-- Cabeza -->
                <circle cx="45" cy="25" r="6" stroke="#10b981">
                    <animate attributeName="cy" values="25;45;25" dur="2s" repeatCount="indefinite" />
                </circle>
                <!-- Tronco -->
                <path d="M 45 31 L 45 55">
                    <animate attributeName="d" values="M 45 31 L 45 55; M 45 51 L 45 68; M 45 31 L 45 55" dur="2s" repeatCount="indefinite" />
                </path>
                <!-- Pierna -->
                <path d="M 45 55 L 45 80">
                    <animate attributeName="d" values="M 45 55 L 45 80; M 45 68 L 58 68 L 58 80; M 45 55 L 45 80" dur="2s" repeatCount="indefinite" />
                </path>
                <!-- Brazo sosteniendo -->
                <path d="M 45 38 L 58 38 L 58 60">
                    <animate attributeName="d" values="M 45 38 L 58 38 L 58 60; M 45 58 L 58 60 L 58 60; M 45 38 L 58 38 L 58 60" dur="2s" repeatCount="indefinite" />
                </path>
            </svg>
        `
    },
    {
        id: "flexiones-pared",
        name: "Flexiones en Pared",
        category: "fuerza",
        desc: "Fortalece brazos, hombros y pecho disminuyendo la presión sobre los hombros y muñecas.",
        difficulty: "Baja",
        time: "3 series de 8 reps",
        icon: "lucide-sparkles",
        equipment: "none",
        cardioIntensity: "low",
        jointStress: ["wrist_elbow", "upper_back_shoulder"],
        lightAlternative: "Flexiones con inclinación alta (sobre mesa firme)",
        muscleGroups: ['Pecho', 'Hombros', 'Tríceps'],
        steps: [
            'Párate a unos 60 cm de una pared firme, con los pies alineados.',
            'Apoya las palmas en la pared a la altura del pecho, separadas al ancho de los hombros.',
            'Inhala e inclínate hacia la pared doblando los codos en 45 grados.',
            'Exhala y empuja de regreso extendiendo los brazos hasta casi bloquear los codos.',
            'Mantén el cuerpo en línea recta de cabeza a pies durante todo el movimiento.'
        ],
        benefits: 'Fortalece pecho, hombros y tríceps con bajo riesgo articular. Ideal para iniciar antes de flexiones en el suelo.',
        tipsDiabetic: "Fortalecimiento del tren superior que ayuda a balancear el metabolismo.",
        tipsHypertensive: "No empujes con demasiada fuerza para evitar picos de presión arterial.",
        tipsJointPain: "Mantén los codos a 45 grados del cuerpo para proteger tus hombros.",
        visualSvg: `
            <svg viewBox="0 0 100 100" width="100%" height="100%" style="background:#141620; stroke:#6366f1; stroke-width:3; fill:none; stroke-linecap:round;">
                <!-- Pared -->
                <line x1="75" y1="20" x2="75" y2="80" stroke="rgba(255,255,255,0.4)" stroke-dasharray="4" />
                <!-- Persona haciendo flexión -->
                <g>
                    <!-- Movimiento completo de rotación/inclinación hacia la pared -->
                    <animateTransform attributeName="transform" type="rotate" values="0 40 80; 12 40 80; 0 40 80" dur="2.5s" repeatCount="indefinite" />
                    <!-- Cabeza -->
                    <circle cx="50" cy="25" r="6" stroke="#10b981" />
                    <!-- Cuerpo -->
                    <line x1="50" y1="31" x2="40" y2="80" />
                    <!-- Brazos -->
                    <path d="M 50 38 L 75 38" />
                </g>
            </svg>
        `
    },
    {
        id: "movilidad-articular",
        name: "Movilidad Articular Completa",
        category: "movilidad",
        desc: "Rotaciones suaves de tobillos, rodillas, cadera y hombros. Prepara el cuerpo para el movimiento.",
        difficulty: "Baja",
        time: "5-10 min",
        icon: "lucide-refresh-cw",
        equipment: "none",
        cardioIntensity: "low",
        jointStress: [],
        lightAlternative: "Movilidad sentado",
        muscleGroups: ['Articulaciones', 'Músc. Estabilizadores'],
        steps: [
            'Comienza por los tobillos: haz 8 círculos lentos hacia cada lado.',
            'Sube a las rodillas: flexión y extensión suave, 10 veces cada una.',
            'Continúa con las caderas: círculos amplios, 8 hacia cada dirección.',
            'Trabaja los hombros: rotaciones completas hacia adelante y hacia atrás.',
            'Todo lento y sin dolor — es calentamiento, no esfuerzo máximo.'
        ],
        benefits: 'Prepara las articulaciones para el ejercicio, mejora el rango de movimiento y reduce significativamente el riesgo de lesiones.',
        tipsDiabetic: "Mejora la circulación periférica y la flexibilidad de tendones sin gasto calórico elevado.",
        tipsHypertensive: "Calienta progresivamente los vasos sanguíneos sin generar picos de presión.",
        tipsJointPain: "El mejor lubricante natural para articulaciones — hazlo siempre sin dolor.",
        visualSvg: `
            <svg viewBox="0 0 100 100" width="100%" height="100%" style="background:#141620; stroke:#6366f1; stroke-width:3; fill:none; stroke-linecap:round;">
                <!-- Cabeza -->
                <circle cx="50" cy="25" r="6" stroke="#10b981" />
                <!-- Tronco -->
                <line x1="50" y1="31" x2="50" y2="60" />
                <!-- Círculo de rotación animado alrededor de los hombros/brazos -->
                <circle cx="50" cy="38" r="10" stroke="rgba(255,255,255,0.2)" stroke-dasharray="5 5">
                    <animateTransform attributeName="transform" type="rotate" from="0 50 38" to="360 50 38" dur="3s" repeatCount="indefinite" />
                </circle>
                <line x1="50" y1="38" x2="60" y2="38">
                    <animateTransform attributeName="transform" type="rotate" from="0 50 38" to="360 50 38" dur="3s" repeatCount="indefinite" />
                </line>
                <!-- Piernas estables -->
                <line x1="50" y1="60" x2="42" y2="85" />
                <line x1="50" y1="60" x2="58" y2="85" />
            </svg>
        `
    },
    {
        id: "jumping-jacks",
        name: "Saltos de Tijera (Jumping Jacks)",
        category: "cardio",
        desc: "Cardio de cuerpo completo que eleva rápido la frecuencia cardíaca. Requiere buen estado de rodillas y tobillos.",
        difficulty: "Media",
        time: "3 series de 30 seg",
        icon: "lucide-zap",
        equipment: "none",
        cardioIntensity: "high",
        jointStress: ["knee", "ankle_foot"],
        lightAlternative: "Marcha en el sitio elevando rodillas suavemente",
        muscleGroups: ['Piernas', 'Glúteos', 'Deltoides', 'Cardio'],
        steps: [
            'Párate con los pies juntos y los brazos pegados al cuerpo.',
            'Salta separando los pies más allá de los hombros mientras alzas los brazos sobre la cabeza.',
            'Salta de regreso a la posición inicial con pies juntos y brazos abajo.',
            'Aterriza suavemente con las rodillas ligeramente dobladas para amortiguar.',
            'Mantén un ritmo constante y respira durante todo el movimiento.'
        ],
        benefits: 'Eleva la frecuencia cardíaca rápidamente, quema calorías y activa todo el cuerpo en un tiempo mínimo.',
        tipsDiabetic: "Muy efectivo para bajar glucosa rápidamente. Hidrátate bien antes y después.",
        tipsHypertensive: "Evítalo si tu presión no está controlada; prefiere la marcha en el sitio.",
        tipsJointPain: "El impacto puede afectar rodillas y tobillos — usa siempre la alternativa sin salto.",
        visualSvg: `
            <svg viewBox="0 0 100 100" width="100%" height="100%" style="background:#141620; stroke:#6366f1; stroke-width:3; fill:none; stroke-linecap:round;">
                <circle cx="50" cy="22" r="6" stroke="#10b981" />
                <line x1="50" y1="28" x2="50" y2="55" />
                <line x1="50" y1="32" x2="30" y2="15">
                    <animate attributeName="x2" values="30;65;30" dur="0.8s" repeatCount="indefinite" />
                    <animate attributeName="y2" values="15;45;15" dur="0.8s" repeatCount="indefinite" />
                </line>
                <line x1="50" y1="32" x2="70" y2="15">
                    <animate attributeName="x2" values="70;35;70" dur="0.8s" repeatCount="indefinite" />
                    <animate attributeName="y2" values="15;45;15" dur="0.8s" repeatCount="indefinite" />
                </line>
                <line x1="50" y1="55" x2="35" y2="85">
                    <animate attributeName="x2" values="35;20;35" dur="0.8s" repeatCount="indefinite" />
                </line>
                <line x1="50" y1="55" x2="65" y2="85">
                    <animate attributeName="x2" values="65;80;65" dur="0.8s" repeatCount="indefinite" />
                </line>
            </svg>
        `
    },
    {
        id: "bici-estatica",
        name: "Bicicleta Estática",
        category: "cardio",
        desc: "Cardio de bajo impacto muy amigable con las articulaciones. Ideal para elevar pulsaciones de forma controlada.",
        difficulty: "Media",
        time: "15-20 min",
        icon: "lucide-bike",
        equipment: "gym",
        cardioIntensity: "moderate",
        jointStress: [],
        lightAlternative: "10 minutos a resistencia mínima",
        muscleGroups: ['Cuádriceps', 'Pantorrillas', 'Cardio'],
        steps: [
            'Ajusta el asiento para que la rodilla quede ligeramente doblada al extender la pierna.',
            'Coloca los pies firmemente en los pedales y agarra el manubrio con comodidad.',
            'Comienza pedaleando a ritmo suave durante 2-3 minutos de calentamiento.',
            'Aumenta gradualmente la resistencia o el ritmo según cómo te sientas.',
            'Mantén la espalda apoyada y los hombros relajados durante toda la sesión.'
        ],
        benefits: 'Cardio de bajo impacto ideal para proteger rodillas y caderas, mejora la resistencia cardiovascular de forma segura.',
        tipsDiabetic: "El esfuerzo sostenido y controlado ayuda a estabilizar los niveles de glucosa.",
        tipsHypertensive: "Mantén resistencia moderada y evita picos de esfuerzo repentinos.",
        tipsJointPain: "Una de las mejores opciones de cardio si tienes molestias de rodilla o cadera.",
        visualSvg: `
            <svg viewBox="0 0 100 100" width="100%" height="100%" style="background:#141620; stroke:#6366f1; stroke-width:3; fill:none; stroke-linecap:round;">
                <circle cx="30" cy="80" r="10" stroke="rgba(255,255,255,0.3)" />
                <circle cx="70" cy="80" r="10" stroke="rgba(255,255,255,0.3)" />
                <line x1="30" y1="80" x2="55" y2="60" />
                <line x1="55" y1="60" x2="70" y2="80" />
                <circle cx="55" cy="40" r="6" stroke="#10b981" />
                <line x1="55" y1="46" x2="55" y2="60" />
                <line x1="55" y1="50" x2="65" y2="60" />
                <circle cx="45" cy="65" r="3" fill="#6366f1" stroke="none">
                    <animateTransform attributeName="transform" type="rotate" from="0 45 65" to="360 45 65" dur="1s" repeatCount="indefinite" />
                </circle>
            </svg>
        `
    },
    {
        id: "remo-banda",
        name: "Remo con Banda Elástica",
        category: "fuerza",
        desc: "Fortalece espalda alta y postura. Muy seguro para hombros y columna, requiere solo una banda elástica.",
        difficulty: "Baja",
        time: "3 series de 12 reps",
        icon: "lucide-dumbbell",
        equipment: "basic",
        cardioIntensity: "low",
        jointStress: [],
        lightAlternative: "Remo con banda de menor resistencia, 8 reps",
        muscleGroups: ['Dorsal', 'Trapecios', 'Bíceps', 'Postura'],
        steps: [
            'Siéntate en silla o en el suelo con la banda anclada frente a ti a la altura del pecho.',
            'Sostén los extremos de la banda con ambas manos, brazos extendidos al frente.',
            'Jala la banda hacia tu abdomen apretando los omóplatos al final del recorrido (exhala).',
            'Regresa lentamente extendiendo los brazos y controlando la banda (inhala).',
            'Mantén la espalda recta en todo momento — no te encorves al jalar.'
        ],
        benefits: 'Fortalece la espalda alta y mejora la postura, combatiendo el efecto de pasar muchas horas sentado.',
        tipsDiabetic: "El trabajo muscular de espalda contribuye al consumo general de glucosa.",
        tipsHypertensive: "Exhala al jalar la banda; nunca contengas la respiración durante el esfuerzo.",
        tipsJointPain: "Muy seguro para espalda y hombros por el bajo impacto articular del movimiento.",
        visualSvg: `
            <svg viewBox="0 0 100 100" width="100%" height="100%" style="background:#141620; stroke:#6366f1; stroke-width:3; fill:none; stroke-linecap:round;">
                <line x1="20" y1="55" x2="20" y2="80" stroke="rgba(255,255,255,0.3)" />
                <circle cx="65" cy="30" r="6" stroke="#10b981" />
                <line x1="65" y1="36" x2="65" y2="65" />
                <path d="M 65 45 L 20 55">
                    <animate attributeName="d" values="M 65 45 L 20 55; M 40 45 L 20 55; M 65 45 L 20 55" dur="1.4s" repeatCount="indefinite" />
                </path>
                <line x1="65" y1="65" x2="55" y2="85" />
                <line x1="65" y1="65" x2="75" y2="85" />
            </svg>
        `
    },
    {
        id: "curl-mancuernas",
        name: "Curl de Bíceps con Mancuernas",
        category: "fuerza",
        desc: "Trabajo aislado de brazos para tonificar. Requiere un par de mancuernas ligeras.",
        difficulty: "Baja",
        time: "3 series de 12 reps",
        icon: "lucide-dumbbell",
        equipment: "basic",
        cardioIntensity: "low",
        jointStress: ["wrist_elbow"],
        lightAlternative: "Curl sin peso o con botellas de agua",
        muscleGroups: ['Bíceps', 'Antebrazos'],
        steps: [
            'Párate o siéntate con una mancuerna en cada mano, palmas hacia adelante.',
            'Mantén los codos pegados al cuerpo y la espalda completamente recta.',
            'Dobla los codos subiendo las mancuernas hacia los hombros (exhala).',
            'Baja lentamente de regreso a la posición inicial controlando el movimiento (inhala).',
            'Evita balancear el cuerpo — el movimiento debe ser solo de los antebrazos.'
        ],
        benefits: 'Tonifica los bíceps y mejora la fuerza funcional del brazo para actividades cotidianas.',
        tipsDiabetic: "Ganar masa muscular mejora la sensibilidad a la insulina a largo plazo.",
        tipsHypertensive: "Usa pesos ligeros y evita apretar demasiado fuerte el agarre.",
        tipsJointPain: "Si hay molestia en muñeca o codo, reduce el peso o el rango de movimiento.",
        visualSvg: `
            <svg viewBox="0 0 100 100" width="100%" height="100%" style="background:#141620; stroke:#6366f1; stroke-width:3; fill:none; stroke-linecap:round;">
                <circle cx="50" cy="25" r="6" stroke="#10b981" />
                <line x1="50" y1="31" x2="50" y2="65" />
                <line x1="50" y1="40" x2="60" y2="55" />
                <line x1="60" y1="55" x2="55" y2="35">
                    <animate attributeName="y2" values="35;60;35" dur="1.4s" repeatCount="indefinite" />
                </line>
                <line x1="50" y1="65" x2="42" y2="88" />
                <line x1="50" y1="65" x2="58" y2="88" />
            </svg>
        `
    },
    {
        id: "prensa-piernas",
        name: "Prensa de Piernas (Máquina)",
        category: "fuerza",
        desc: "Fortalece piernas de forma guiada y segura, con soporte de la máquina para la espalda.",
        difficulty: "Media",
        time: "3 series de 10 reps",
        icon: "lucide-dumbbell",
        equipment: "gym",
        cardioIntensity: "low",
        jointStress: ["knee", "hip"],
        lightAlternative: "Rango de movimiento corto y carga mínima",
        muscleGroups: ['Cuádriceps', 'Glúteos', 'Isquiotibiales'],
        steps: [
            'Siéntate en la máquina y ajusta el asiento para que las rodillas estén a ~90 grados.',
            'Coloca los pies en la plataforma separados al ancho de los hombros.',
            'Empuja la plataforma extendiendo las piernas sin bloquear completamente las rodillas (exhala).',
            'Regresa lentamente controlando el peso, sin dejar que las rodillas superen los 90 grados (inhala).',
            'Nunca despegues la espalda ni el coxis del respaldo durante el movimiento.'
        ],
        benefits: 'Fortalece todo el tren inferior de forma guiada y segura, con mínimo estrés en la columna vertebral.',
        tipsDiabetic: "El trabajo de piernas es de los más efectivos para consumir glucosa muscularmente.",
        tipsHypertensive: "No bloquees las rodillas al extender y exhala siempre en el empuje.",
        tipsJointPain: "Ajusta el rango de movimiento para no forzar rodilla o cadera más allá de lo cómodo.",
        visualSvg: `
            <svg viewBox="0 0 100 100" width="100%" height="100%" style="background:#141620; stroke:#6366f1; stroke-width:3; fill:none; stroke-linecap:round;">
                <line x1="20" y1="30" x2="20" y2="90" stroke="rgba(255,255,255,0.3)" />
                <circle cx="55" cy="40" r="6" stroke="#10b981" />
                <line x1="55" y1="46" x2="55" y2="65" />
                <line x1="55" y1="65" x2="35" y2="65">
                    <animate attributeName="x2" values="35;20;35" dur="1.4s" repeatCount="indefinite" />
                </line>
            </svg>
        `
    },
    {
        id: "movilidad-cuello-hombros",
        name: "Movilidad de Cuello y Hombros",
        category: "movilidad",
        desc: "Rotaciones y estiramientos suaves para liberar tensión de cuello y hombros. Terapéutico y de bajísimo riesgo.",
        difficulty: "Baja",
        time: "5 min",
        icon: "lucide-refresh-cw",
        equipment: "none",
        cardioIntensity: "low",
        jointStress: [],
        lightAlternative: "Rotaciones aún más lentas, sentado",
        muscleGroups: ['Cuello', 'Trapecios', 'Hombros'],
        steps: [
            'Siéntate o párate con la espalda recta y los hombros completamente relajados.',
            'Inclina la cabeza hacia el lado derecho, aguanta 3 segundos. Luego al lado izquierdo.',
            'Lleva la barbilla al pecho suavemente y aguanta 3 segundos. No fuerces.',
            'Haz círculos lentos con los hombros: 8 hacia adelante y 8 hacia atrás.',
            'Termina con los brazos estirados hacia los lados para elongar los trapecios.'
        ],
        benefits: 'Alivia la tensión acumulada en cuello y hombros, mejora la movilidad cervical y reduce dolores de cabeza por tensión.',
        tipsDiabetic: "Ayuda a liberar tensión sin exigir esfuerzo metabólico significativo.",
        tipsHypertensive: "Muy seguro, ideal para calentar o para días de descanso activo.",
        tipsJointPain: "Diseñado especialmente para aliviar molestias de cuello y hombro.",
        visualSvg: `
            <svg viewBox="0 0 100 100" width="100%" height="100%" style="background:#141620; stroke:#6366f1; stroke-width:3; fill:none; stroke-linecap:round;">
                <circle cx="50" cy="30" r="7" stroke="#10b981">
                    <animateTransform attributeName="transform" type="rotate" values="0 50 45; 15 50 45; -15 50 45; 0 50 45" dur="2.5s" repeatCount="indefinite" />
                </circle>
                <line x1="50" y1="37" x2="50" y2="65" />
                <line x1="50" y1="45" x2="30" y2="55" />
                <line x1="50" y1="45" x2="70" y2="55" />
                <line x1="50" y1="65" x2="42" y2="88" />
                <line x1="50" y1="65" x2="58" y2="88" />
            </svg>
        `
    },
    {
        id: "estiramiento-gato-vaca",
        name: "Estiramiento Gato-Vaca (Espalda Baja)",
        category: "movilidad",
        desc: "Movimiento suave en cuatro puntos que alivia y moviliza la espalda baja. Muy usado en fisioterapia.",
        difficulty: "Baja",
        time: "5-8 min",
        icon: "lucide-refresh-cw",
        equipment: "none",
        cardioIntensity: "low",
        jointStress: [],
        lightAlternative: "Versión sentado en silla, con menos rango",
        muscleGroups: ['Espalda Baja', 'Core', 'Columna'],
        steps: [
            'Colócate en cuatro puntos: manos debajo de los hombros, rodillas debajo de las caderas.',
            'Inhala: hunde el abdomen y deja que la espalda se arquee hacia abajo (posición "Vaca", cabeza arriba).',
            'Exhala: redondea la espalda hacia el techo metiendo el abdomen (posición "Gato", cabeza abajo).',
            'Alterna entre ambas posiciones de forma fluida durante 8-10 repeticiones.',
            'El movimiento debe ser suave y continuo, escucha a tu cuerpo en todo momento.'
        ],
        benefits: 'Descomprime la columna vertebral, mejora la flexibilidad de la espalda baja y activa los músculos profundos del core.',
        tipsDiabetic: "Ejercicio de bajo gasto calórico pero excelente para el bienestar físico general.",
        tipsHypertensive: "Evita mantener la cabeza muy abajo por períodos prolongados.",
        tipsJointPain: "Uno de los mejores movimientos para descomprimir la espalda baja.",
        visualSvg: `
            <svg viewBox="0 0 100 100" width="100%" height="100%" style="background:#141620; stroke:#6366f1; stroke-width:3; fill:none; stroke-linecap:round;">
                <circle cx="75" cy="45" r="6" stroke="#10b981" />
                <path d="M 25 65 L 70 50">
                    <animate attributeName="d" values="M 25 65 L 70 50; M 25 60 L 70 68; M 25 65 L 70 50" dur="2.4s" repeatCount="indefinite" />
                </path>
                <line x1="25" y1="65" x2="25" y2="85" />
                <line x1="55" y1="60" x2="55" y2="85" />
            </svg>
        `
    },
    {
        id: "plancha-rodillas",
        name: "Plancha Modificada (Rodillas Apoyadas)",
        category: "fuerza",
        desc: "Fortalece el core de forma segura apoyando las rodillas en el piso, reduciendo la carga en muñecas.",
        difficulty: "Media",
        time: "3 series de 20 seg",
        icon: "lucide-accessibility",
        equipment: "none",
        cardioIntensity: "low",
        jointStress: ["wrist_elbow"],
        lightAlternative: "Plancha en antebrazos apoyada en mesa o pared",
        muscleGroups: ['Core', 'Abdomen', 'Glúteos', 'Hombros'],
        steps: [
            'Colócate boca abajo apoyando las rodillas y las palmas (o antebrazos si molestan las muñecas).',
            'Alinea los hombros con las manos y forma una línea recta de cabeza a rodillas.',
            'Contrae el abdomen sin dejar que las caderas suban ni se hundan.',
            'Mantén la posición respirando de forma constante durante 15-30 segundos.',
            'Descansa 30 segundos entre series. Nunca aguantes la respiración.'
        ],
        benefits: 'Fortalece todo el core de forma isométrica, mejora la estabilidad de la columna y la postura general.',
        tipsDiabetic: "Fortalecer el core mejora la postura para el resto de tus ejercicios diarios.",
        tipsHypertensive: "No contengas la respiración; respira de forma constante durante el sostén.",
        tipsJointPain: "Si las muñecas molestan, apóyate en los antebrazos en lugar de las manos.",
        visualSvg: `
            <svg viewBox="0 0 100 100" width="100%" height="100%" style="background:#141620; stroke:#6366f1; stroke-width:3; fill:none; stroke-linecap:round;">
                <circle cx="25" cy="45" r="6" stroke="#10b981" />
                <line x1="30" y1="48" x2="65" y2="60" />
                <line x1="65" y1="60" x2="65" y2="80" />
                <line x1="40" y1="52" x2="40" y2="80" />
                <line x1="30" y1="48" x2="30" y2="60" />
            </svg>
        `
    }
];

// ==========================================
// BASE DE DATOS DE ALIMENTOS (Fase 4 - Motor de Dieta)
// ==========================================
const FOODS_DATABASE = [
    // --- Proteínas ---
    { id: "pollo", name: "Pechuga de Pollo", category: "proteina", dietTypes: ["omnivoro"], allergens: [], budget: "bajo", isDiabeticFriendly: true, isLowSodium: true, isHighProtein: true, caloriesPer100g: 165 },
    { id: "huevo", name: "Huevo", category: "proteina", dietTypes: ["omnivoro", "vegetariano"], allergens: ["huevo"], budget: "bajo", isDiabeticFriendly: true, isLowSodium: true, isHighProtein: true, caloriesPer100g: 155 },
    { id: "atun", name: "Atún (enlatado, al agua)", category: "proteina", dietTypes: ["omnivoro"], allergens: ["pescado"], budget: "medio", isDiabeticFriendly: true, isLowSodium: false, isHighProtein: true, caloriesPer100g: 116 },
    { id: "tofu", name: "Tofu", category: "proteina", dietTypes: ["omnivoro", "vegetariano", "vegano"], allergens: ["soya"], budget: "medio", isDiabeticFriendly: true, isLowSodium: true, isHighProtein: true, caloriesPer100g: 76 },
    { id: "yogur-griego", name: "Yogur Griego Natural", category: "proteina", dietTypes: ["omnivoro", "vegetariano"], allergens: ["lactosa"], budget: "medio", isDiabeticFriendly: true, isLowSodium: true, isHighProtein: true, caloriesPer100g: 97 },
    { id: "lentejas", name: "Lentejas", category: "proteina", dietTypes: ["omnivoro", "vegetariano", "vegano"], allergens: [], budget: "bajo", isDiabeticFriendly: true, isLowSodium: true, isHighProtein: true, caloriesPer100g: 116 },
    { id: "frijoles", name: "Frijoles / Alubias", category: "proteina", dietTypes: ["omnivoro", "vegetariano", "vegano"], allergens: [], budget: "bajo", isDiabeticFriendly: true, isLowSodium: true, isHighProtein: true, caloriesPer100g: 127 },

    // --- Carbohidratos ---
    { id: "avena", name: "Avena", category: "carbohidrato", dietTypes: ["omnivoro", "vegetariano", "vegano"], allergens: ["gluten"], budget: "bajo", isDiabeticFriendly: true, isLowSodium: true, isHighProtein: false, caloriesPer100g: 389 },
    { id: "arroz-integral", name: "Arroz Integral", category: "carbohidrato", dietTypes: ["omnivoro", "vegetariano", "vegano"], allergens: [], budget: "bajo", isDiabeticFriendly: true, isLowSodium: true, isHighProtein: false, caloriesPer100g: 123 },
    { id: "papa", name: "Papa / Camote", category: "carbohidrato", dietTypes: ["omnivoro", "vegetariano", "vegano"], allergens: [], budget: "bajo", isDiabeticFriendly: false, isLowSodium: true, isHighProtein: false, caloriesPer100g: 86 },
    { id: "quinoa", name: "Quinoa", category: "carbohidrato", dietTypes: ["omnivoro", "vegetariano", "vegano"], allergens: [], budget: "medio", isDiabeticFriendly: true, isLowSodium: true, isHighProtein: true, caloriesPer100g: 120 },
    { id: "pan-integral", name: "Pan Integral", category: "carbohidrato", dietTypes: ["omnivoro", "vegetariano", "vegano"], allergens: ["gluten"], budget: "bajo", isDiabeticFriendly: false, isLowSodium: false, isHighProtein: false, caloriesPer100g: 247 },

    // --- Vegetales ---
    { id: "brocoli", name: "Brócoli", category: "vegetal", dietTypes: ["omnivoro", "vegetariano", "vegano"], allergens: [], budget: "bajo", isDiabeticFriendly: true, isLowSodium: true, isHighProtein: false, caloriesPer100g: 34 },
    { id: "espinaca", name: "Espinaca", category: "vegetal", dietTypes: ["omnivoro", "vegetariano", "vegano"], allergens: [], budget: "bajo", isDiabeticFriendly: true, isLowSodium: true, isHighProtein: false, caloriesPer100g: 23 },
    { id: "zanahoria", name: "Zanahoria", category: "vegetal", dietTypes: ["omnivoro", "vegetariano", "vegano"], allergens: [], budget: "bajo", isDiabeticFriendly: true, isLowSodium: true, isHighProtein: false, caloriesPer100g: 41 },
    { id: "tomate", name: "Tomate", category: "vegetal", dietTypes: ["omnivoro", "vegetariano", "vegano"], allergens: [], budget: "bajo", isDiabeticFriendly: true, isLowSodium: true, isHighProtein: false, caloriesPer100g: 18 },

    // --- Frutas ---
    { id: "manzana", name: "Manzana", category: "fruta", dietTypes: ["omnivoro", "vegetariano", "vegano"], allergens: [], budget: "bajo", isDiabeticFriendly: true, isLowSodium: true, isHighProtein: false, caloriesPer100g: 52 },
    { id: "banana", name: "Plátano / Banana", category: "fruta", dietTypes: ["omnivoro", "vegetariano", "vegano"], allergens: [], budget: "bajo", isDiabeticFriendly: false, isLowSodium: true, isHighProtein: false, caloriesPer100g: 89 },
    { id: "frutos-rojos", name: "Frutos Rojos (fresa, mora, arándano)", category: "fruta", dietTypes: ["omnivoro", "vegetariano", "vegano"], allergens: [], budget: "alto", isDiabeticFriendly: true, isLowSodium: true, isHighProtein: false, caloriesPer100g: 43 },

    // --- Grasas Saludables ---
    { id: "aguacate", name: "Aguacate", category: "grasa", dietTypes: ["omnivoro", "vegetariano", "vegano"], allergens: [], budget: "medio", isDiabeticFriendly: true, isLowSodium: true, isHighProtein: false, caloriesPer100g: 160 },
    { id: "nueces", name: "Nueces / Almendras", category: "grasa", dietTypes: ["omnivoro", "vegetariano", "vegano"], allergens: ["frutos_secos"], budget: "medio", isDiabeticFriendly: true, isLowSodium: true, isHighProtein: false, caloriesPer100g: 607 },
    { id: "aceite-oliva", name: "Aceite de Oliva", category: "grasa", dietTypes: ["omnivoro", "vegetariano", "vegano"], allergens: [], budget: "medio", isDiabeticFriendly: true, isLowSodium: true, isHighProtein: false, caloriesPer100g: 884 },

    // --- Lácteos / Alternativas ---
    { id: "leche-descremada", name: "Leche Descremada", category: "lacteo", dietTypes: ["omnivoro", "vegetariano"], allergens: ["lactosa"], budget: "bajo", isDiabeticFriendly: true, isLowSodium: true, isHighProtein: false, caloriesPer100g: 34 },
    { id: "bebida-almendra", name: "Bebida de Almendra (sin azúcar)", category: "lacteo", dietTypes: ["omnivoro", "vegetariano", "vegano"], allergens: ["frutos_secos"], budget: "medio", isDiabeticFriendly: true, isLowSodium: true, isHighProtein: false, caloriesPer100g: 17 }
];

const FOOD_CATEGORY_LABELS = {
    proteina: { label: "Proteínas", icon: "lucide-drumstick" },
    carbohidrato: { label: "Carbohidratos", icon: "lucide-wheat" },
    vegetal: { label: "Vegetales", icon: "lucide-carrot" },
    fruta: { label: "Frutas", icon: "lucide-apple" },
    grasa: { label: "Grasas Saludables", icon: "lucide-droplet" },
    lacteo: { label: "Lácteos / Alternativas", icon: "lucide-milk" }
};

const ALLERGY_LABELS = {
    gluten: "Gluten",
    lactosa: "Lactosa",
    frutos_secos: "Frutos Secos",
    huevo: "Huevo",
    mariscos: "Mariscos",
    pescado: "Pescado",
    soya: "Soya"
};


// Este backend NUNCA debe correr en el navegador con la API key incluida.
// Aquí solo apuntamos a nuestro propio servidor (ver carpeta /server),
// que es quien realmente le habla a Gemini.
// En Vercel las funciones /api/* están en el mismo dominio → URL relativa ('').
// En desarrollo local apuntamos a nuestro servidor Express en el puerto 3001.
const AI_BACKEND_URL = (location.hostname === 'localhost' || location.hostname === '127.0.0.1')
    ? 'http://localhost:3001'
    : '';


// para que perfiles antiguos no rompan la app al agregar campos nuevos)
const DEFAULT_USER = {
    weight: 0,
    height: 0,
    age: 0,
    sex: '', // 'female' | 'male' | 'unspecified'
    activity: '',
    isDiabetic: false,
    cardioCondition: 'none', // none | hypertension | arrhythmia | heart_failure | post_infarction | other
    respiratoryCondition: 'none', // none | asthma | copd | other
    injuryZones: [], // ej. ['knee', 'lower_back']
    cycleTracking: {
        enabled: false,
        lastPeriodDate: '',
        cycleLength: 28
    },
    resources: 'none', // none | basic | gym
    // Preferencias de dieta (Fase 4)
    dietType: 'omnivoro', // omnivoro | vegetariano | vegano
    allergies: [], // ej. ['gluten', 'lactosa']
    dietGoal: 'mantener', // bajar_peso | mantener | ganar_musculo
    mealsPerDay: 4,
    dietBudget: 'bajo', // bajo | medio | alto
    // Derivados de los campos anteriores, se recalculan siempre al guardar el perfil
    isHypertensive: false,
    hasJointPain: false,
    intensity: 'light', // 'light' o 'normal'
    ownedEquipment: [],  // ej. ['bicicleta-estatica', 'eliptica']
    imc: 0
};

// Estado global de la aplicación
const state = {
    user: JSON.parse(JSON.stringify(DEFAULT_USER)),
    chatHistory: [],
    currentTab: 'tab-dashboard'
};

// Elementos del DOM
const onboardingScreen = document.getElementById('onboarding-screen');
const mainApp = document.getElementById('main-app');
const onboardingForm = document.getElementById('onboarding-form');

// Inputs - Paso 1
const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const ageInput = document.getElementById('age');
const sexSelect = document.getElementById('sex-select');
const activitySelect = document.getElementById('activity-level');

// Inputs - Paso 2
const diabeticCheckbox = document.getElementById('is-diabetic');
const cardioConditionSelect = document.getElementById('cardio-condition');
const respiratoryConditionSelect = document.getElementById('respiratory-condition');

// Inputs - Paso 3 (zonas de lesión)
const zoneSelector = document.getElementById('zone-selector');
const zoneChips = document.querySelectorAll('.zone-chip');

// Inputs - Paso 4 (ciclo, recursos, intensidad)
const cycleFieldsGroup = document.getElementById('cycle-fields-group');
const cycleTrackingCheckbox = document.getElementById('cycle-tracking-enabled');
const cycleDetailGrid = document.getElementById('cycle-detail-grid');
const lastPeriodDateInput = document.getElementById('last-period-date');
const cycleLengthInput = document.getElementById('cycle-length');
const resourceOptions = document.getElementById('resource-options');
const resourceCards = document.querySelectorAll('.resource-card');
const intensitySelect = document.getElementById('initial-intensity');

// Navegación del Wizard
const wizardSteps = document.querySelectorAll('.wizard-step');
const wizardDots = document.querySelectorAll('.wizard-dot');
const btnWizardBack = document.getElementById('btn-wizard-back');
const btnWizardNext = document.getElementById('btn-wizard-next');
const btnWizardSubmit = document.getElementById('btn-wizard-submit');
let currentWizardStep = 1;
const TOTAL_WIZARD_STEPS = wizardSteps.length;

// Header badges (dinámicas)
const badgesDynamic = document.getElementById('badges-dynamic');
const btnEditProfile = document.getElementById('btn-edit-profile');

// Pestañas
const navItems = document.querySelectorAll('.nav-item');
const tabPanes = document.querySelectorAll('.tab-pane');

// Dashboard Elements
const imcValue = document.getElementById('imc-value');
const imcStatus = document.getElementById('imc-status');
const imcIndicator = document.getElementById('imc-indicator');
const dashboardDailyAdvice = document.getElementById('dashboard-daily-advice');
const quickRoutineList = document.getElementById('quick-routine-list');
const btnQuickAdjust = document.getElementById('btn-quick-adjust');

// Ejercicios Elements
const exerciseSearch = document.getElementById('exercise-search');
const filterChips = document.querySelectorAll('.chip');
const exerciseGrid = document.getElementById('exercise-grid');

// Chat Elements
const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');
const btnChatSend = document.getElementById('btn-chat-send');
const btnChatReset = document.getElementById('btn-chat-reset');
const quickChatBtns = document.querySelectorAll('.quick-btn');

// Dieta Elements
const dietTypeSelect = document.getElementById('diet-type');
const allergyChips = document.querySelectorAll('#allergy-selector .zone-chip');
const dietGoalSelect = document.getElementById('diet-goal');
const dietMealsSelect = document.getElementById('diet-meals');
const dietBudgetCards = document.querySelectorAll('#diet-budget-options .resource-card');
const btnGenerateDiet = document.getElementById('btn-generate-diet');
const calorieSummary = document.getElementById('calorie-summary');
const recommendedFoodsGrid = document.getElementById('recommended-foods-grid');
const btnAiDietSuggestions = document.getElementById('btn-ai-diet-suggestions');
const aiDietResult = document.getElementById('ai-diet-result');

// --- INICIALIZACIÓN ---
document.addEventListener('DOMContentLoaded', () => {
    // Comprobar si hay perfil guardado en LocalStorage
    const savedUser = localStorage.getItem('iafit_user');
    if (savedUser) {
        // Se combina con DEFAULT_USER para que perfiles guardados antes de
        // agregar estos campos nuevos no rompan la app (quedan con sus valores por defecto)
        state.user = Object.assign({}, DEFAULT_USER, JSON.parse(savedUser));
        calculateIMC();
        updateUIWithUserData();
        showScreen(mainApp);
        generateDashboardRoutine();
        initChat();
    } else {
        showScreen(onboardingScreen);
    }

    renderExercises(EXERCISES_DATABASE);
});

// ==========================================
// WIZARD DE ONBOARDING
// ==========================================

function goToStep(stepNumber) {
    currentWizardStep = stepNumber;

    // Si vamos a entrar al último paso, decidir si mostramos los campos de ciclo
    if (stepNumber === TOTAL_WIZARD_STEPS) {
        updateCycleFieldsVisibility();
    }

    wizardSteps.forEach(step => {
        step.classList.toggle('active', parseInt(step.getAttribute('data-step')) === stepNumber);
    });

    wizardDots.forEach(dot => {
        const dotStep = parseInt(dot.getAttribute('data-step'));
        dot.classList.toggle('active', dotStep === stepNumber);
        dot.classList.toggle('completed', dotStep < stepNumber);
    });

    btnWizardBack.style.visibility = stepNumber === 1 ? 'hidden' : 'visible';

    const isLastStep = stepNumber === TOTAL_WIZARD_STEPS;
    btnWizardNext.style.display = isLastStep ? 'none' : 'inline-flex';
    btnWizardSubmit.style.display = isLastStep ? 'inline-flex' : 'none';
}

function validateCurrentStep() {
    const currentStepEl = document.querySelector(`.wizard-step[data-step="${currentWizardStep}"]`);
    const requiredFields = currentStepEl.querySelectorAll('input[required], select[required]');
    for (const field of requiredFields) {
        if (!field.checkValidity()) {
            field.reportValidity();
            return false;
        }
    }
    return true;
}

function updateCycleFieldsVisibility() {
    // Solo mostramos el bloque de ciclo menstrual si la persona se identificó como mujer
    cycleFieldsGroup.style.display = sexSelect.value === 'female' ? 'block' : 'none';
    if (sexSelect.value !== 'female') {
        cycleTrackingCheckbox.checked = false;
        cycleDetailGrid.style.display = 'none';
    }
}

btnWizardNext.addEventListener('click', () => {
    if (!validateCurrentStep()) return;
    if (currentWizardStep < TOTAL_WIZARD_STEPS) {
        goToStep(currentWizardStep + 1);
    }
});

btnWizardBack.addEventListener('click', () => {
    if (currentWizardStep > 1) {
        goToStep(currentWizardStep - 1);
    }
});

// Evitar que la tecla Enter envíe el formulario antes del último paso
onboardingForm.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && currentWizardStep < TOTAL_WIZARD_STEPS) {
        e.preventDefault();
        btnWizardNext.click();
    }
});

// Selector de zonas de lesión (multi-selección con "Ninguna" excluyente)
zoneChips.forEach(chip => {
    chip.addEventListener('click', () => {
        const zone = chip.getAttribute('data-zone');
        if (zone === 'none') {
            zoneChips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
        } else {
            chip.classList.toggle('active');
            // Si se selecciona una zona real, "Ninguna" deja de estar activa
            document.querySelector('.zone-chip-none').classList.remove('active');
            // Si no queda ninguna zona seleccionada, volvemos a activar "Ninguna"
            const anyActive = Array.from(zoneChips).some(c => c.getAttribute('data-zone') !== 'none' && c.classList.contains('active'));
            if (!anyActive) {
                document.querySelector('.zone-chip-none').classList.add('active');
            }
        }
    });
});

// Tarjetas de selección de recursos disponibles (selección única)
resourceCards.forEach(card => {
    card.addEventListener('click', () => {
        resourceCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
    });
});

// Chips de equipamiento específico en casa (multi-selección, voluntario)
document.querySelectorAll('.equip-chip').forEach(chip => {
    chip.addEventListener('click', () => {
        chip.classList.toggle('active');
    });
});

// Mostrar/ocultar bloque de ciclo según el sexo elegido en el paso 1
sexSelect.addEventListener('change', updateCycleFieldsVisibility);

// Mostrar/ocultar detalle del ciclo (fecha y duración) al activar el checkbox
cycleTrackingCheckbox.addEventListener('change', () => {
    cycleDetailGrid.style.display = cycleTrackingCheckbox.checked ? 'grid' : 'none';
});

// Evento Onboarding Form (envío final, paso 4)
onboardingForm.addEventListener('submit', (e) => {
    e.preventDefault();

    state.user.weight = parseFloat(weightInput.value);
    state.user.height = parseFloat(heightInput.value);
    state.user.age = parseInt(ageInput.value);
    state.user.sex = sexSelect.value;
    state.user.activity = activitySelect.value;

    state.user.isDiabetic = diabeticCheckbox.checked;
    state.user.cardioCondition = cardioConditionSelect.value;
    state.user.respiratoryCondition = respiratoryConditionSelect.value;

    // Zonas de lesión seleccionadas (excluyendo "ninguna")
    state.user.injuryZones = Array.from(zoneChips)
        .filter(c => c.classList.contains('active') && c.getAttribute('data-zone') !== 'none')
        .map(c => c.getAttribute('data-zone'));

    // Ciclo menstrual (solo aplica si es mujer y activó el seguimiento)
    state.user.cycleTracking = {
        enabled: sexSelect.value === 'female' && cycleTrackingCheckbox.checked,
        lastPeriodDate: lastPeriodDateInput.value || '',
        cycleLength: parseInt(cycleLengthInput.value) || 28
    };

    // Recursos disponibles (nivel general)
    const activeResourceCard = document.querySelector('#resource-options .resource-card.active');
    state.user.resources = activeResourceCard ? activeResourceCard.getAttribute('data-resource') : 'none';

    // Equipamiento específico en casa (voluntario)
    state.user.ownedEquipment = Array.from(document.querySelectorAll('.equip-chip.active'))
        .map(c => c.getAttribute('data-equipment'));

    // Intensidad
    state.user.intensity = intensitySelect.value;

    // Campos derivados (se mantienen por compatibilidad con las tarjetas de ejercicios)
    state.user.isHypertensive = state.user.cardioCondition === 'hypertension';
    state.user.hasJointPain = state.user.injuryZones.length > 0;

    calculateIMC();
    localStorage.setItem('iafit_user', JSON.stringify(state.user));

    updateUIWithUserData();
    showScreen(mainApp);
    generateDashboardRoutine();
    initChat();
});

// Editar perfil
btnEditProfile.addEventListener('click', () => {
    // Rellenar el wizard completo con los datos actuales del usuario
    weightInput.value = state.user.weight || '';
    heightInput.value = state.user.height || '';
    ageInput.value = state.user.age || '';
    sexSelect.value = state.user.sex || '';
    activitySelect.value = state.user.activity || '';

    diabeticCheckbox.checked = !!state.user.isDiabetic;
    cardioConditionSelect.value = state.user.cardioCondition || 'none';
    respiratoryConditionSelect.value = state.user.respiratoryCondition || 'none';

    const savedZones = state.user.injuryZones || [];
    zoneChips.forEach(chip => {
        const zone = chip.getAttribute('data-zone');
        if (zone === 'none') {
            chip.classList.toggle('active', savedZones.length === 0);
        } else {
            chip.classList.toggle('active', savedZones.includes(zone));
        }
    });

    const cycle = state.user.cycleTracking || DEFAULT_USER.cycleTracking;
    cycleTrackingCheckbox.checked = !!cycle.enabled;
    lastPeriodDateInput.value = cycle.lastPeriodDate || '';
    cycleLengthInput.value = cycle.cycleLength || 28;
    cycleDetailGrid.style.display = cycle.enabled ? 'grid' : 'none';

    resourceCards.forEach(card => {
        card.classList.toggle('active', card.getAttribute('data-resource') === (state.user.resources || 'none'));
    });

    intensitySelect.value = state.user.intensity || 'light';

    goToStep(1);
    showScreen(onboardingScreen);
});

// Sistema de Pestañas SPA
navItems.forEach(item => {
    item.addEventListener('click', () => {
        const targetTab = item.getAttribute('data-target');
        
        navItems.forEach(i => i.classList.remove('active'));
        tabPanes.forEach(pane => pane.classList.remove('active'));
        
        item.classList.add('active');
        document.getElementById(targetTab).classList.add('active');

        if (targetTab === 'tab-diet') {
            populateDietPreferencesUI();
            generateDietPlan();
        }
    });
});

// --- LÓGICA DE CÁLCULOS ---
function calculateIMC() {
    const heightInMeters = state.user.height / 100;
    const imc = state.user.weight / (heightInMeters * heightInMeters);
    state.user.imc = imc.toFixed(1);
}

// --- ETIQUETAS LEGIBLES PARA LOS NUEVOS CAMPOS ---
const CARDIO_LABELS = {
    hypertension: 'Presión Alta',
    arrhythmia: 'Arritmia',
    heart_failure: 'Insuf. Cardíaca',
    post_infarction: 'Post-Infarto',
    other: 'Cond. Cardíaca'
};

const RESPIRATORY_LABELS = {
    asthma: 'Asma',
    copd: 'EPOC',
    other: 'Cond. Respiratoria'
};

const ZONE_LABELS = {
    knee: 'Rodilla',
    hip: 'Cadera',
    lower_back: 'Espalda Baja',
    upper_back_shoulder: 'Espalda Alta/Hombro',
    neck: 'Cuello',
    wrist_elbow: 'Muñeca/Codo',
    ankle_foot: 'Tobillo/Pie'
};

const RESOURCE_LABELS = {
    none: { label: 'En Casa (Sin Equipo)', icon: 'lucide-home' },
    basic: { label: 'Equipo Básico', icon: 'lucide-dumbbell' },
    gym: { label: 'Gimnasio', icon: 'lucide-building-2' }
};

const CYCLE_PHASE_LABELS = {
    menstrual: { label: 'Fase Menstrual', tip: 'prioriza movilidad suave y escucha a tu cuerpo, la intensidad puede bajar unos días.' },
    folicular: { label: 'Fase Folicular', tip: 'tu energía suele subir, es buen momento para retos un poco más exigentes.' },
    ovulacion: { label: 'Ovulación', tip: 'usualmente es tu pico de energía y fuerza en el mes.' },
    lutea: { label: 'Fase Lútea', tip: 'la energía puede bajar gradualmente, prioriza cardio ligero y estiramientos.' }
};

// Calcula la fase aproximada del ciclo menstrual a partir de la fecha del último período
function computeCyclePhase(lastPeriodDateStr, cycleLength) {
    if (!lastPeriodDateStr) return null;
    const lastPeriod = new Date(lastPeriodDateStr + 'T00:00:00');
    if (isNaN(lastPeriod.getTime())) return null;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const msPerDay = 24 * 60 * 60 * 1000;
    const daysSince = Math.floor((today - lastPeriod) / msPerDay);
    const length = cycleLength && cycleLength > 0 ? cycleLength : 28;

    // Día dentro del ciclo (1 = primer día del período), soporta fechas futuras/pasadas
    const dayInCycle = (((daysSince % length) + length) % length) + 1;
    const ovulationDay = Math.max(length - 14, 10); // aproximación estándar

    let phase = 'lutea';
    if (dayInCycle <= 5) {
        phase = 'menstrual';
    } else if (dayInCycle < ovulationDay - 1) {
        phase = 'folicular';
    } else if (dayInCycle <= ovulationDay + 1) {
        phase = 'ovulacion';
    } else {
        phase = 'lutea';
    }

    return { phase, dayInCycle, ...CYCLE_PHASE_LABELS[phase] };
}

function updateUIWithUserData() {
    // --- Construcción dinámica de badges en la cabecera ---
    const badges = [];

    if (state.user.isDiabetic) {
        badges.push({ icon: 'lucide-shield-alert', label: 'Diabetes', variant: 'warn' });
    }
    if (state.user.cardioCondition && state.user.cardioCondition !== 'none') {
        badges.push({ icon: 'lucide-heart-pulse', label: CARDIO_LABELS[state.user.cardioCondition] || 'Cond. Cardíaca', variant: 'danger' });
    }
    if (state.user.respiratoryCondition && state.user.respiratoryCondition !== 'none') {
        badges.push({ icon: 'lucide-wind', label: RESPIRATORY_LABELS[state.user.respiratoryCondition] || 'Cond. Respiratoria', variant: 'danger' });
    }
    if (state.user.injuryZones && state.user.injuryZones.length > 0) {
        const zoneLabel = state.user.injuryZones.length === 1
            ? ZONE_LABELS[state.user.injuryZones[0]]
            : `${state.user.injuryZones.length} zonas`;
        badges.push({ icon: 'lucide-activity', label: `Lesión: ${zoneLabel}`, variant: 'warn' });
    }

    let cycleInfo = null;
    if (state.user.cycleTracking && state.user.cycleTracking.enabled) {
        cycleInfo = computeCyclePhase(state.user.cycleTracking.lastPeriodDate, state.user.cycleTracking.cycleLength);
        if (cycleInfo) {
            badges.push({ icon: 'lucide-moon', label: cycleInfo.label, variant: 'accent' });
        }
    }

    // Badge de equipamiento específico (si seleccionó algo)
    const owned = state.user.ownedEquipment || [];
    if (owned.length > 0) {
        const equipNames = {
            'bicicleta-estatica': 'Bici Estática',
            'eliptica': 'Elíptica',
            'caminadora': 'Caminadora',
            'mancuernas': 'Mancuernas',
            'bandas': 'Bandas',
            'colchoneta': 'Colchoneta',
            'barra-dominadas': 'Barra',
            'kettlebell': 'Kettlebell',
            'remo': 'Máq. Remo',
            'escaladora': 'Escaladora',
            'fitball': 'Fitball',
            'trx': 'TRX'
        };
        const label = owned.length === 1
            ? (equipNames[owned[0]] || owned[0])
            : `${owned.length} equipos en casa`;
        badges.push({ icon: 'lucide-dumbbell', label, variant: 'accent' });
    }

    const resourceInfo = RESOURCE_LABELS[state.user.resources] || RESOURCE_LABELS.none;
    badges.push({ icon: resourceInfo.icon, label: resourceInfo.label, variant: '' });

    badges.push({
        icon: 'lucide-gauge',
        label: state.user.intensity === 'light' ? 'Ligeramente Suave' : 'Normal',
        variant: state.user.intensity
    });

    badgesDynamic.innerHTML = badges
        .map(b => `<span class="user-badge ${b.variant || ''}"><i class="${b.icon}"></i> ${b.label}</span>`)
        .join('');

    // Dashboard IMC
    imcValue.textContent = state.user.imc;
    let statusText = 'Peso Saludable';
    let indicatorLeft = '50%';
    
    if (state.user.imc < 18.5) {
        statusText = 'Bajo Peso';
        indicatorLeft = '20%';
    } else if (state.user.imc >= 25 && state.user.imc < 30) {
        statusText = 'Sobrepeso';
        indicatorLeft = '70%';
    } else if (state.user.imc >= 30) {
        statusText = 'Obesidad';
        indicatorLeft = '85%';
    }
    
    imcStatus.textContent = statusText;
    imcIndicator.style.left = indicatorLeft;

    // Consejo personalizado de bienvenida, ahora considerando todas las condiciones
    let advice = `¡Hola! Tu IMC es de ${state.user.imc} (${statusText}). `;

    if (state.user.cardioCondition && state.user.cardioCondition !== 'none') {
        advice += `Vimos tu condición cardiovascular (${CARDIO_LABELS[state.user.cardioCondition]}), así que mantendremos la intensidad controlada y con progresión gradual. `;
    }
    if (state.user.respiratoryCondition && state.user.respiratoryCondition !== 'none') {
        advice += `También consideraremos tu condición respiratoria (${RESPIRATORY_LABELS[state.user.respiratoryCondition]}) para dosificar el esfuerzo cardiovascular. `;
    }
    if (state.user.isDiabetic) {
        advice += "Hemos activado las pautas de control de glucosa: sugerimos descansos mayores y rutinas de intensidad ligera-moderada post-comidas para ayudar a regular el azúcar. ";
    }
    if (state.user.injuryZones && state.user.injuryZones.length > 0) {
        const zonesText = state.user.injuryZones.map(z => ZONE_LABELS[z]).join(', ');
        advice += `Evitaremos ejercicios de alto impacto para: ${zonesText}. `;
    }
    if (cycleInfo) {
        advice += `Notamos que estás en ${cycleInfo.label.toLowerCase()}: ${cycleInfo.tip} `;
    }
    if (state.user.resources === 'none') {
        advice += "Todos tus ejercicios usarán solo tu peso corporal, ideal para hacer en casa sin gastar en equipo. ";
    } else if (state.user.resources === 'basic') {
        advice += "Aprovecharemos tus bandas o mancuernas para variar la rutina. ";
    } else if (state.user.resources === 'gym') {
        advice += "Podemos incorporar máquinas y pesas del gimnasio en tu plan. ";
    }
    if (!state.user.isDiabetic && state.user.cardioCondition === 'none' && state.user.respiratoryCondition === 'none' && (!state.user.injuryZones || state.user.injuryZones.length === 0)) {
        if (state.user.activity === 'sedentary') {
            advice += "Dado que tienes un estilo de vida inactivo, empezaremos con rutinas súper amigables que no te generen fatiga extrema, enfocándonos en movilidad.";
        } else {
            advice += "¡Excelente! Ya tienes bases activas, mantendremos rutinas fluidas enfocadas en tus objetivos de forma segura.";
        }
    }

    dashboardDailyAdvice.textContent = advice.trim();
}

// ==========================================
// MOTOR DE REGLAS: evalúa qué ejercicios son seguros/adecuados para el perfil
// ==========================================

const INTENSITY_RANK = { low: 1, moderate: 2, high: 3 };
const EQUIPMENT_RANK = { none: 0, basic: 1, gym: 2 };
const DIFFICULTY_RANK = { 'Baja': 1, 'Media': 2, 'Alta': 3 };

// Máxima intensidad cardiovascular permitida según condición cardíaca (1=baja, 2=moderada, 3=alta)
const CARDIO_CONDITION_MAX = {
    none: 3,
    hypertension: 2,
    arrhythmia: 2,
    heart_failure: 1,
    post_infarction: 1,
    other: 2
};

// Máxima intensidad cardiovascular permitida según condición respiratoria
const RESPIRATORY_CONDITION_MAX = {
    none: 3,
    asthma: 2,
    copd: 1,
    other: 2
};

// Máxima dificultad recomendada según nivel de actividad habitual
const ACTIVITY_MAX_DIFFICULTY = {
    sedentary: 1,   // solo 'Baja'
    moderate: 2,    // hasta 'Media'
    active: 3       // hasta 'Alta'
};

function getMaxCardioIntensity(user) {
    const cardioMax = CARDIO_CONDITION_MAX[user.cardioCondition] ?? 3;
    const respMax = RESPIRATORY_CONDITION_MAX[user.respiratoryCondition] ?? 3;
    let max = Math.min(cardioMax, respMax);
    // La intensidad "Ligera" elegida por la persona baja un nivel adicional el techo permitido
    if (user.intensity === 'light') max = Math.max(1, max - 1);
    return max;
}

function getMaxDifficultyRank(user) {
    let max = ACTIVITY_MAX_DIFFICULTY[user.activity] ?? 2;
    if (user.intensity === 'light') max = 1; // en modo ligero, siempre dificultad Baja
    return max;
}

function isEquipmentAvailable(ex, user) {
    return EQUIPMENT_RANK[ex.equipment] <= EQUIPMENT_RANK[user.resources ?? 'none'];
}

function hasZoneConflict(ex, user) {
    const zones = user.injuryZones || [];
    return (ex.jointStress || []).some(z => zones.includes(z));
}

// Evalúa un ejercicio contra el perfil completo del usuario.
// Devuelve si es seguro (hard constraints) y un puntaje de conveniencia (soft preferences)
function evaluateExerciseForUser(ex, user, cycleInfo) {
    const reasons = { blocking: [], positive: [] };

    const maxIntensity = getMaxCardioIntensity(user);
    const intensityOk = INTENSITY_RANK[ex.cardioIntensity] <= maxIntensity;
    if (!intensityOk) {
        reasons.blocking.push('Intensidad cardiovascular muy alta para tu condición actual');
    }

    const zoneConflict = hasZoneConflict(ex, user);
    if (zoneConflict) {
        const zonesAfectadas = (ex.jointStress || []).filter(z => (user.injuryZones || []).includes(z)).map(z => ZONE_LABELS[z]);
        reasons.blocking.push(`Exige a: ${zonesAfectadas.join(', ')}`);
    }

    const equipmentOk = isEquipmentAvailable(ex, user);
    if (!equipmentOk) {
        reasons.blocking.push('Requiere equipo que no tienes disponible');
    }

    const safe = intensityOk && !zoneConflict && equipmentOk;

    // --- Puntaje de conveniencia (solo aplica si es seguro) ---
    let score = 0;
    const maxDifficulty = getMaxDifficultyRank(user);
    const difficultyRank = DIFFICULTY_RANK[ex.difficulty] || 1;

    if (difficultyRank <= maxDifficulty) {
        score += 2;
        if (difficultyRank === maxDifficulty) score += 1; // reta justo a su nivel
    } else {
        score -= 3; // se sale del nivel recomendado según actividad/intensidad elegida
    }

    if (ex.equipment === (user.resources || 'none')) {
        score += 2;
        reasons.positive.push('Usa el equipo que ya tienes');
    } else if (ex.equipment === 'none') {
        score += 1;
        reasons.positive.push('No requiere equipo');
    }

    if ((ex.jointStress || []).length === 0 && (user.injuryZones || []).length > 0) {
        score += 2;
        reasons.positive.push('Seguro para tus zonas con molestias');
    }

    if (user.isDiabetic && ex.tipsDiabetic) score += 1;
    if ((user.cardioCondition !== 'none' || user.respiratoryCondition !== 'none') && ex.cardioIntensity === 'low') {
        score += 2;
        reasons.positive.push('Intensidad cuidadosa para corazón/pulmones');
    }

    if (cycleInfo) {
        if ((cycleInfo.phase === 'menstrual' || cycleInfo.phase === 'lutea')) {
            if (ex.category === 'movilidad') {
                score += 2;
                reasons.positive.push(`Ideal para tu ${cycleInfo.label.toLowerCase()}`);
            }
            if (INTENSITY_RANK[ex.cardioIntensity] >= 2 || difficultyRank >= 2) {
                score -= 2;
            }
        } else if (cycleInfo.phase === 'folicular' || cycleInfo.phase === 'ovulacion') {
            if (INTENSITY_RANK[ex.cardioIntensity] >= 2 || ex.category === 'fuerza') {
                score += 1;
                reasons.positive.push('Aprovecha tu energía alta de esta fase');
            }
        }
    }

    return { exercise: ex, safe, score, reasons };
}

// ==========================================
// MOTOR DE REGLAS: DIETA (Fase 4)
// ==========================================

const ACTIVITY_FACTOR = {
    sedentary: 1.2,
    moderate: 1.45,
    active: 1.7
};

// Calcula BMR (Mifflin-St Jeor), TDEE y objetivo calórico/de macros según el perfil
function calculateCalorieTargets(user) {
    if (!user.weight || !user.height || !user.age) return null;

    const sexConstant = user.sex === 'male' ? 5 : user.sex === 'female' ? -161 : -78;
    const bmr = (10 * user.weight) + (6.25 * user.height) - (5 * user.age) + sexConstant;
    const activityFactor = ACTIVITY_FACTOR[user.activity] || 1.35;
    const tdee = bmr * activityFactor;

    let targetCalories = tdee;
    if (user.dietGoal === 'bajar_peso') targetCalories = tdee - 400;
    else if (user.dietGoal === 'ganar_musculo') targetCalories = tdee + 350;

    // Piso de seguridad general: nunca sugerir por debajo de esto sin supervisión profesional
    targetCalories = Math.max(targetCalories, 1300);

    let proteinPct = 0.30, carbPct = 0.40, fatPct = 0.30;
    if (user.isDiabetic) { proteinPct = 0.30; carbPct = 0.35; fatPct = 0.35; }
    if (user.dietGoal === 'ganar_musculo') { proteinPct = 0.35; carbPct = 0.40; fatPct = 0.25; }

    return {
        bmr: Math.round(bmr),
        tdee: Math.round(tdee),
        targetCalories: Math.round(targetCalories),
        proteinG: Math.round((targetCalories * proteinPct) / 4),
        carbsG: Math.round((targetCalories * carbPct) / 4),
        fatG: Math.round((targetCalories * fatPct) / 9)
    };
}

// Evalúa un alimento contra las preferencias/restricciones y condiciones de salud del usuario
function evaluateFoodForUser(food, user) {
    const reasons = { blocking: [], positive: [] };

    const dietTypeOk = food.dietTypes.includes(user.dietType || 'omnivoro');
    if (!dietTypeOk) {
        reasons.blocking.push(`No es compatible con tu alimentación ${user.dietType}`);
    }

    const allergyConflict = (food.allergens || []).some(a => (user.allergies || []).includes(a));
    if (allergyConflict) {
        const allergenos = food.allergens.filter(a => (user.allergies || []).includes(a)).map(a => ALLERGY_LABELS[a]);
        reasons.blocking.push(`Contiene: ${allergenos.join(', ')}`);
    }

    const safe = dietTypeOk && !allergyConflict;

    let score = 0;
    if (food.budget === (user.dietBudget || 'bajo')) {
        score += 2;
        reasons.positive.push('Se ajusta a tu presupuesto');
    } else if (food.budget === 'bajo') {
        score += 1;
        reasons.positive.push('Económico y accesible');
    }

    if (user.isDiabetic && food.isDiabeticFriendly) {
        score += 2;
        reasons.positive.push('Bajo impacto en glucosa');
    }
    if ((user.cardioCondition !== 'none' || user.isHypertensive) && food.isLowSodium) {
        score += 2;
        reasons.positive.push('Bajo en sodio');
    }
    if (user.dietGoal === 'ganar_musculo' && food.isHighProtein) {
        score += 2;
        reasons.positive.push('Alto en proteína');
    }
    if (user.dietGoal === 'bajar_peso' && (food.category === 'vegetal' || food.category === 'fruta')) {
        score += 1;
        reasons.positive.push('Bajo en calorías, alto en saciedad');
    }
    if (user.dietGoal === 'bajar_peso' && food.caloriesPer100g > 400) {
        score -= 1; // grasas/frutos secos siguen permitidos pero con moderación
    }

    return { food, safe, score, reasons };
}

function populateDietPreferencesUI() {
    dietTypeSelect.value = state.user.dietType || 'omnivoro';
    dietGoalSelect.value = state.user.dietGoal || 'mantener';
    dietMealsSelect.value = String(state.user.mealsPerDay || 4);

    const savedAllergies = state.user.allergies || [];
    allergyChips.forEach(chip => {
        const allergy = chip.getAttribute('data-allergy');
        if (allergy === 'none') {
            chip.classList.toggle('active', savedAllergies.length === 0);
        } else {
            chip.classList.toggle('active', savedAllergies.includes(allergy));
        }
    });

    dietBudgetCards.forEach(card => {
        card.classList.toggle('active', card.getAttribute('data-budget') === (state.user.dietBudget || 'bajo'));
    });
}

// Selector de alergias (multi-selección con "Ninguna" excluyente, igual que las zonas de lesión)
allergyChips.forEach(chip => {
    chip.addEventListener('click', () => {
        const allergy = chip.getAttribute('data-allergy');
        if (allergy === 'none') {
            allergyChips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
        } else {
            chip.classList.toggle('active');
            document.querySelector('#allergy-selector .zone-chip-none').classList.remove('active');
            const anyActive = Array.from(allergyChips).some(c => c.getAttribute('data-allergy') !== 'none' && c.classList.contains('active'));
            if (!anyActive) {
                document.querySelector('#allergy-selector .zone-chip-none').classList.add('active');
            }
        }
    });
});

dietBudgetCards.forEach(card => {
    card.addEventListener('click', () => {
        dietBudgetCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
    });
});

btnGenerateDiet.addEventListener('click', () => {
    state.user.dietType = dietTypeSelect.value;
    state.user.dietGoal = dietGoalSelect.value;
    state.user.mealsPerDay = parseInt(dietMealsSelect.value);
    state.user.allergies = Array.from(allergyChips)
        .filter(c => c.classList.contains('active') && c.getAttribute('data-allergy') !== 'none')
        .map(c => c.getAttribute('data-allergy'));

    const activeBudgetCard = document.querySelector('#diet-budget-options .resource-card.active');
    state.user.dietBudget = activeBudgetCard ? activeBudgetCard.getAttribute('data-budget') : 'bajo';

    localStorage.setItem('iafit_user', JSON.stringify(state.user));

    // Limpiar cualquier sugerencia de IA anterior, ya no corresponde al nuevo perfil
    aiDietResult.innerHTML = '';
    aiDietResult.classList.remove('loading');

    generateDietPlan();
});

function renderCalorieSummary(targets) {
    if (!targets) {
        calorieSummary.innerHTML = `<p style="color: var(--text-muted); font-size: 0.85rem;">Completa tu peso, altura y edad en tu perfil para calcular tu meta calórica.</p>`;
        return;
    }

    const goalLabels = { bajar_peso: 'Déficit para bajar de peso', mantener: 'Mantenimiento', ganar_musculo: 'Superávit para ganar músculo' };

    calorieSummary.innerHTML = `
        <div class="calorie-hero">
            <span class="calorie-num">${targets.targetCalories}</span>
            <span class="calorie-label">kcal / día · ${goalLabels[state.user.dietGoal] || ''}</span>
        </div>
        <p class="calorie-sub-note">Gasto energético estimado (TDEE): ${targets.tdee} kcal · Metabolismo basal: ${targets.bmr} kcal</p>
        <div class="stats-list">
            <div class="stat-item">
                <div class="stat-label">Proteína</div>
                <div class="stat-progress-bar"><div class="progress" style="width: 100%; background: var(--primary);"></div></div>
                <span class="stat-value">${targets.proteinG}g</span>
            </div>
            <div class="stat-item">
                <div class="stat-label">Carbohidratos</div>
                <div class="stat-progress-bar"><div class="progress" style="width: 100%;"></div></div>
                <span class="stat-value">${targets.carbsG}g</span>
            </div>
            <div class="stat-item">
                <div class="stat-label">Grasas</div>
                <div class="stat-progress-bar"><div class="progress" style="width: 100%; background: var(--warning);"></div></div>
                <span class="stat-value">${targets.fatG}g</span>
            </div>
        </div>
    `;
}

function renderRecommendedFoods(evaluations) {
    const safeByCategory = {};
    evaluations.filter(ev => ev.safe).forEach(ev => {
        const cat = ev.food.category;
        if (!safeByCategory[cat]) safeByCategory[cat] = [];
        safeByCategory[cat].push(ev);
    });

    const categoriesOrder = ['proteina', 'carbohidrato', 'vegetal', 'fruta', 'grasa', 'lacteo'];
    let html = '';

    categoriesOrder.forEach(cat => {
        const items = (safeByCategory[cat] || []).sort((a, b) => b.score - a.score).slice(0, 4);
        if (items.length === 0) return;

        const catInfo = FOOD_CATEGORY_LABELS[cat];
        const itemsHtml = items.map(ev => {
            const reasonChips = ev.reasons.positive.slice(0, 2)
                .map(r => `<span class="reason-chip"><i class="lucide-check"></i> ${r}</span>`)
                .join('');
            return `
                <div class="food-item-chip">
                    <span class="food-name">${ev.food.name}</span>
                    <div class="food-reasons">${reasonChips}</div>
                </div>
            `;
        }).join('');

        html += `
            <div>
                <div class="foods-category-title"><i class="${catInfo.icon}"></i> ${catInfo.label}</div>
                <div class="foods-category-items">${itemsHtml}</div>
            </div>
        `;
    });

    if (!html) {
        html = `<p style="color: var(--text-muted); font-size: 0.85rem;">No encontramos alimentos que cumplan con tu tipo de alimentación y alergias seleccionadas. Revisa tus preferencias.</p>`;
    }

    recommendedFoodsGrid.innerHTML = html;
}

function generateDietPlan() {
    const targets = calculateCalorieTargets(state.user);
    renderCalorieSummary(targets);

    const evaluations = FOODS_DATABASE.map(food => evaluateFoodForUser(food, state.user));
    renderRecommendedFoods(evaluations);
}


function pickDiverseRoutine(evaluations, count) {
    const buckets = { movilidad: [], cardio: [], fuerza: [] };
    evaluations.forEach(ev => buckets[ev.exercise.category]?.push(ev));
    Object.values(buckets).forEach(arr => arr.sort((a, b) => b.score - a.score));

    const routine = [];
    ['movilidad', 'cardio', 'fuerza'].forEach(cat => {
        if (buckets[cat].length) routine.push(buckets[cat][0]);
    });

    const remaining = evaluations
        .filter(ev => !routine.includes(ev))
        .sort((a, b) => b.score - a.score);

    while (routine.length < count && remaining.length) {
        routine.push(remaining.shift());
    }

    return routine.slice(0, count).sort((a, b) => b.score - a.score);
}

function generateDashboardRoutine() {
    quickRoutineList.innerHTML = '';

    const cycleInfo = (state.user.cycleTracking && state.user.cycleTracking.enabled)
        ? computeCyclePhase(state.user.cycleTracking.lastPeriodDate, state.user.cycleTracking.cycleLength)
        : null;

    // Evaluamos TODA la base de datos contra el perfil completo (salud, lesiones, equipo, ciclo)
    const evaluations = EXERCISES_DATABASE.map(ex => evaluateExerciseForUser(ex, state.user, cycleInfo));
    let safeEvaluations = evaluations.filter(ev => ev.safe);

    // Salvaguarda: si por alguna combinación muy restrictiva no queda nada seguro,
    // nunca mostramos algo inseguro; en vez de eso avisamos y usamos solo movilidad/cardio bajo sin equipo.
    if (safeEvaluations.length === 0) {
        safeEvaluations = evaluations.filter(ev => ev.exercise.cardioIntensity === 'low' && ev.exercise.equipment === 'none');
    }

    const routine = pickDiverseRoutine(safeEvaluations, 4);

    if (routine.length === 0) {
        quickRoutineList.innerHTML = `<p style="color: var(--text-muted); font-size: 0.85rem;">No encontramos ejercicios que cumplan con tus restricciones actuales. Te recomendamos consultar con un profesional de salud antes de continuar.</p>`;
        return;
    }

    routine.forEach((ev, idx) => {
        const ex = ev.exercise;
        const item = document.createElement('div');
        item.className = 'routine-item';

        const title = state.user.intensity === 'light' ? `Alt: ${ex.lightAlternative || ex.name}` : ex.name;
        const timeDetail = state.user.intensity === 'light' ? 'Intensidad Ligera' : ex.time;

        const reasonChips = ev.reasons.positive.slice(0, 2)
            .map(r => `<span class="reason-chip"><i class="lucide-sparkles"></i> ${r}</span>`)
            .join('');

        item.innerHTML = `
            <div class="routine-num">${idx + 1}</div>
            <div class="routine-details">
                <h4>${title}</h4>
                <p>${ex.desc}</p>
                ${reasonChips ? `<div class="routine-reasons">${reasonChips}</div>` : ''}
            </div>
            <span class="user-badge">${timeDetail}</span>
        `;
        quickRoutineList.appendChild(item);
    });

    // Botón de ajuste rápido de intensidad en Dashboard
    if (state.user.intensity === 'light') {
        btnQuickAdjust.textContent = 'Subir a Normal';
    } else {
        btnQuickAdjust.textContent = 'Aligerar Rutina';
    }
}

btnQuickAdjust.addEventListener('click', () => {
    state.user.intensity = state.user.intensity === 'light' ? 'normal' : 'light';
    localStorage.setItem('iafit_user', JSON.stringify(state.user));
    updateUIWithUserData();
    generateDashboardRoutine();
});

// --- BIBLIOTECA DE EJERCICIOS ---
function renderExercises(exercises) {
    exerciseGrid.innerHTML = '';

    const cycleInfo = (state.user.cycleTracking && state.user.cycleTracking.enabled)
        ? computeCyclePhase(state.user.cycleTracking.lastPeriodDate, state.user.cycleTracking.cycleLength)
        : null;

    if (exercises.length === 0) {
        exerciseGrid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:40px 20px;color:var(--text-muted);font-size:0.9rem;"><i class="lucide-search" style="font-size:2rem;display:block;margin-bottom:12px;"></i>No encontramos ejercicios con ese filtro.</div>`;
        return;
    }

    exercises.forEach(ex => {
        const card = document.createElement('div');
        const evaluation = evaluateExerciseForUser(ex, state.user, cycleInfo);
        card.className = `exercise-card${evaluation.safe ? '' : ' not-recommended'}`;

        const typeName = ex.category === 'fuerza' ? 'Fuerza' : ex.category === 'movilidad' ? 'Movilidad' : 'Cardio';
        const typeClass = ex.category;

        const diffClass = ex.difficulty === 'Baja' ? 'diff-baja' : ex.difficulty === 'Media' ? 'diff-media' : 'diff-alta';

        const muscleTags = (ex.muscleGroups || []).slice(0, 3)
            .map(m => `<span class="muscle-tag">${m}</span>`).join('');

        const recommendationHtml = evaluation.safe
            ? `<div class="recommendation-tag positive"><i class="lucide-check-circle"></i> Recomendado</div>`
            : `<div class="recommendation-tag negative"><i class="lucide-alert-triangle"></i> ${evaluation.reasons.blocking[0]}</div>`;

        const visualContent = ex.visualSvg ? ex.visualSvg : `<i class="${ex.icon}"></i>`;

        card.innerHTML = `
            <div class="exercise-img-ph">
                ${visualContent}
                <span class="exercise-type-tag ${typeClass}">${typeName}</span>
                <span class="exercise-tap-hint"><i class="lucide-eye"></i> Ver cómo hacerlo</span>
            </div>
            <div class="exercise-card-info">
                <h4>${ex.name}</h4>
                ${recommendationHtml}
                <div class="exercise-meta-row">
                    <span class="exercise-meta-badge ${diffClass}"><i class="lucide-gauge"></i> ${ex.difficulty}</span>
                    <span class="exercise-meta-badge"><i class="lucide-clock"></i> ${ex.time}</span>
                </div>
                ${muscleTags ? `<div class="muscle-tags">${muscleTags}</div>` : ''}
                <p>${ex.desc}</p>
            </div>
        `;

        card.addEventListener('click', () => openExerciseModal(ex, evaluation));
        exerciseGrid.appendChild(card);
    });
}

// --- MODAL DE DETALLE DEL EJERCICIO ---
const modalOverlay  = document.getElementById('modal-overlay');
const exerciseModal = document.getElementById('exercise-modal');
const modalCloseBtn = document.getElementById('modal-close-btn');
const modalSvgArea  = document.getElementById('modal-svg-area');
const modalTitle    = document.getElementById('modal-title');
const modalMeta     = document.getElementById('modal-meta');
const modalMuscles  = document.getElementById('modal-muscles');
const modalSteps    = document.getElementById('modal-steps');
const modalBenefits = document.getElementById('modal-benefits');
const modalHealthTips = document.getElementById('modal-health-tips');

function openExerciseModal(ex, evaluation) {
    // SVG
    modalSvgArea.innerHTML = ex.visualSvg || `<i class="${ex.icon}" style="font-size:4rem;color:var(--primary);"></i>`;

    // Título
    modalTitle.textContent = ex.name;

    // Meta badges
    const typeName = ex.category === 'fuerza' ? 'Fuerza' : ex.category === 'movilidad' ? 'Movilidad' : 'Cardio';
    const diffClass = ex.difficulty === 'Baja' ? 'diff-baja' : ex.difficulty === 'Media' ? 'diff-media' : 'diff-alta';
    const recHtml = evaluation.safe
        ? `<span class="recommendation-tag positive"><i class="lucide-check-circle"></i> Recomendado</span>`
        : `<span class="recommendation-tag negative"><i class="lucide-x-circle"></i> No recomendado</span>`;
    modalMeta.innerHTML = `
        ${recHtml}
        <span class="exercise-meta-badge ${diffClass}"><i class="lucide-gauge"></i> ${ex.difficulty}</span>
        <span class="exercise-meta-badge"><i class="lucide-clock"></i> ${ex.time}</span>
        <span class="exercise-meta-badge"><i class="lucide-tag"></i> ${typeName}</span>
    `;

    // Músculosgrupos
    modalMuscles.innerHTML = (ex.muscleGroups || []).map(m => `<span class="modal-muscle-chip">${m}</span>`).join('');

    // Pasos
    modalSteps.innerHTML = (ex.steps || ['Sigue las indicaciones visuales de la animación.']).map((step, i) => `
        <div class="step-item">
            <span class="step-num">${i + 1}</span>
            <span class="step-text">${step}</span>
        </div>
    `).join('');

    // Beneficios
    modalBenefits.textContent = ex.benefits || ex.desc;

    // Tips de salud
    let healthHtml = '';
    if (state.user.isDiabetic && ex.tipsDiabetic) {
        healthHtml += `<div class="exercise-tip diabetic"><i class="lucide-shield-alert"></i><span><strong>Diabetes:</strong> ${ex.tipsDiabetic}</span></div>`;
    }
    if (state.user.isHypertensive && ex.tipsHypertensive) {
        healthHtml += `<div class="exercise-tip hypertensive"><i class="lucide-heart-pulse"></i><span><strong>Presión Alta:</strong> ${ex.tipsHypertensive}</span></div>`;
    }
    if (state.user.hasJointPain && ex.tipsJointPain) {
        healthHtml += `<div class="exercise-tip joint"><i class="lucide-bone"></i><span><strong>Articulaciones:</strong> ${ex.tipsJointPain}</span></div>`;
    }
    if (healthHtml) {
        modalHealthTips.innerHTML = `<div class="modal-section-title">Consejos para tu condición</div>${healthHtml}`;
    } else {
        modalHealthTips.innerHTML = '';
    }

    // Abrir
    modalOverlay.classList.add('active');
    exerciseModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeExerciseModal() {
    modalOverlay.classList.remove('active');
    exerciseModal.classList.remove('active');
    document.body.style.overflow = '';
}

modalCloseBtn.addEventListener('click', closeExerciseModal);
modalOverlay.addEventListener('click', closeExerciseModal);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeExerciseModal(); });

// Swipe down to close modal on mobile
(function setupModalSwipe() {
    let startY = 0;
    exerciseModal.addEventListener('touchstart', e => { startY = e.touches[0].clientY; }, { passive: true });
    exerciseModal.addEventListener('touchend', e => {
        const diff = e.changedTouches[0].clientY - startY;
        if (diff > 80) closeExerciseModal();
    }, { passive: true });
})();

// Búsqueda y Filtro de Ejercicios
exerciseSearch.addEventListener('input', filterExercises);

filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
        filterChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        filterExercises();
    });
});

function filterExercises() {
    const query = exerciseSearch.value.toLowerCase();
    const activeFilter = document.querySelector('.chip.active').getAttribute('data-filter');

    const cycleInfo = (state.user.cycleTracking && state.user.cycleTracking.enabled)
        ? computeCyclePhase(state.user.cycleTracking.lastPeriodDate, state.user.cycleTracking.cycleLength)
        : null;

    const filtered = EXERCISES_DATABASE.filter(ex => {
        const matchesSearch = ex.name.toLowerCase().includes(query) || ex.desc.toLowerCase().includes(query);

        if (activeFilter === 'recomendado') {
            return matchesSearch && evaluateExerciseForUser(ex, state.user, cycleInfo).safe;
        }

        const matchesCategory = activeFilter === 'all' || ex.category === activeFilter;
        return matchesSearch && matchesCategory;
    });

    renderExercises(filtered);
}


// --- CHAT INTERACTIVO CON IA DE FITNESS ---
// ==========================================
// INTEGRACIÓN CON GEMINI (vía nuestro backend)
// ==========================================

// Construye un perfil resumido y seguro para enviar al backend (sin exceso de datos)
function buildAIUserProfile() {
    const cycleInfo = (state.user.cycleTracking && state.user.cycleTracking.enabled)
        ? computeCyclePhase(state.user.cycleTracking.lastPeriodDate, state.user.cycleTracking.cycleLength)
        : null;

    return {
        weight: state.user.weight,
        height: state.user.height,
        age: state.user.age,
        sex: state.user.sex,
        activity: state.user.activity,
        isDiabetic: state.user.isDiabetic,
        cardioCondition: state.user.cardioCondition,
        respiratoryCondition: state.user.respiratoryCondition,
        injuryZones: state.user.injuryZones,
        cyclePhase: cycleInfo ? cycleInfo.phase : null,
        resources: state.user.resources,
        ownedEquipment: state.user.ownedEquipment || [],
        intensity: state.user.intensity,
        imc: state.user.imc
    };
}

// Lista de ejercicios que el motor de reglas local ya aprobó como seguros;
// es lo único que Gemini puede usar para armar rutinas en el chat
function buildSafeExercisesForAI() {
    const cycleInfo = (state.user.cycleTracking && state.user.cycleTracking.enabled)
        ? computeCyclePhase(state.user.cycleTracking.lastPeriodDate, state.user.cycleTracking.cycleLength)
        : null;

    return EXERCISES_DATABASE
        .map(ex => evaluateExerciseForUser(ex, state.user, cycleInfo))
        .filter(ev => ev.safe)
        .sort((a, b) => b.score - a.score)
        .slice(0, 8)
        .map(ev => ({
            name: ev.exercise.name,
            category: ev.exercise.category,
            difficulty: ev.exercise.difficulty,
            time: ev.exercise.time,
            desc: ev.exercise.desc
        }));
}

// Lista de alimentos ya aprobados por el motor de reglas de dieta (tipo de alimentación + alergias)
function buildSafeFoodsForAI() {
    return FOODS_DATABASE
        .map(food => evaluateFoodForUser(food, state.user))
        .filter(ev => ev.safe)
        .sort((a, b) => b.score - a.score)
        .map(ev => ({ name: ev.food.name, category: ev.food.category }));
}

async function fetchGeminiDietSuggestions() {
    const targets = calculateCalorieTargets(state.user);
    const response = await fetch(`${AI_BACKEND_URL}/api/diet-advice`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            userProfile: buildAIUserProfile(),
            dietPreferences: {
                dietType: state.user.dietType,
                allergies: state.user.allergies,
                dietGoal: state.user.dietGoal,
                mealsPerDay: state.user.mealsPerDay,
                dietBudget: state.user.dietBudget
            },
            calorieTargets: targets,
            safeFoods: buildSafeFoodsForAI()
        })
    });

    if (!response.ok) {
        throw new Error(`Backend respondió con estado ${response.status}`);
    }

    const data = await response.json();
    if (!data.suggestion) {
        throw new Error('Respuesta sin contenido');
    }
    return data.suggestion;
}

btnAiDietSuggestions.addEventListener('click', async () => {
    aiDietResult.classList.add('loading');
    aiDietResult.textContent = 'Generando ideas de comidas con IA...';
    btnAiDietSuggestions.disabled = true;

    try {
        const suggestion = await fetchGeminiDietSuggestions();
        aiDietResult.classList.remove('loading');
        aiDietResult.textContent = suggestion;
    } catch (err) {
        console.warn('[IAFit] No se pudo generar sugerencia de dieta con IA:', err.message);
        aiDietResult.classList.remove('loading');
        aiDietResult.textContent = 'No pudimos conectar con el asistente de IA en este momento. Mientras tanto, guíate con la lista de "Alimentos Recomendados para Ti Hoy" de arriba, distribuyéndolos entre tus comidas del día.';
    } finally {
        btnAiDietSuggestions.disabled = false;
    }
});


function showTypingIndicator() {
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message bot typing';
    typingDiv.id = 'typing-indicator';
    typingDiv.innerHTML = `<span class="typing-dot"></span><span class="typing-dot"></span><span class="typing-dot"></span>`;
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function hideTypingIndicator() {
    const el = document.getElementById('typing-indicator');
    if (el) el.remove();
}

// Llama a nuestro backend, que a su vez llama a Gemini. Lanza error si algo falla,
// para que quien la use pueda hacer un fallback local.
async function fetchGeminiReply(userMessage) {
    const response = await fetch(`${AI_BACKEND_URL}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            userProfile: buildAIUserProfile(),
            safeExercises: buildSafeExercisesForAI(),
            conversationHistory: state.chatHistory.slice(-8),
            message: userMessage
        })
    });

    if (!response.ok) {
        throw new Error(`Backend respondió con estado ${response.status}`);
    }

    const data = await response.json();
    if (!data.reply) {
        throw new Error('Respuesta sin contenido');
    }
    return data.reply;
}

// Verifica si el backend de IA está disponible, para reflejarlo en el header del chat
async function checkAIBackendStatus() {
    const statusEl = document.querySelector('.status-indicator');
    if (!statusEl) return;
    try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 2500);
        const res = await fetch(`${AI_BACKEND_URL}/api/health`, { signal: controller.signal });
        clearTimeout(timeout);
        const data = await res.json();
        if (res.ok && data.geminiConfigured) {
            statusEl.textContent = 'En línea con Gemini AI';
            statusEl.style.color = 'var(--accent)';
        } else {
            statusEl.textContent = 'Modo local (backend sin API key)';
            statusEl.style.color = 'var(--warning)';
        }
    } catch (err) {
        statusEl.textContent = 'Modo local (sin conexión al servidor)';
        statusEl.style.color = 'var(--text-muted)';
    }
}


function initChat() {
    chatMessages.innerHTML = '';
    state.chatHistory = [];
    checkAIBackendStatus();


    let healthNotes = [];
    if (state.user.isDiabetic) healthNotes.push("Diabetes");
    if (state.user.cardioCondition && state.user.cardioCondition !== 'none') healthNotes.push(CARDIO_LABELS[state.user.cardioCondition]);
    if (state.user.respiratoryCondition && state.user.respiratoryCondition !== 'none') healthNotes.push(RESPIRATORY_LABELS[state.user.respiratoryCondition]);
    if (state.user.injuryZones && state.user.injuryZones.length > 0) {
        healthNotes.push(`Lesión en ${state.user.injuryZones.map(z => ZONE_LABELS[z]).join('/')}`);
    }
    if (state.user.cycleTracking && state.user.cycleTracking.enabled) healthNotes.push("Seguimiento de ciclo menstrual");

    const healthStr = healthNotes.length > 0 ? `, considerando tus condiciones de: ${healthNotes.join(', ')}` : '';
    const resourceInfo = RESOURCE_LABELS[state.user.resources] || RESOURCE_LABELS.none;
    const welcomeMsg = `¡Hola! Soy tu asistente de entrenamiento IAFit. He analizado tu perfil con un peso de ${state.user.weight}kg, altura de ${state.user.height}cm y nivel de actividad ${state.user.activity}${healthStr}. También tomo en cuenta que entrenas con: ${resourceInfo.label.toLowerCase()}. \n\n¿Quieres que armemos una rutina adaptada para hoy o te gustaría saber cómo iniciar de forma segura en tu nivel de intensidad actual (${state.user.intensity === 'light' ? 'Ligero' : 'Normal'})?`;

    appendMessage('bot', welcomeMsg);
}

function appendMessage(sender, text) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `message ${sender}`;
    // Reemplazar saltos de línea por <br>
    msgDiv.innerHTML = text.replace(/\n/g, '<br>');
    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    state.chatHistory.push({ sender, text });
}

// Respuestas locales de respaldo (se usan si el backend/Gemini no responde)
function generateLocalFallbackResponse(userMsg) {
    const query = userMsg.toLowerCase();
    let response = '';

    if (query.includes('rutina') || query.includes('ejercicio') || query.includes('entrenar') || query.includes('entrenamiento')) {
        response = `¡Por supuesto! Diseñemos una rutina. Basado en tu perfil de hoy:\n\n`;
        
        if (state.user.intensity === 'light') {
            response += `**Rutina Suave / Inicio Progresivo (10-15 min):**\n`;
            response += `1. **Movilidad articular completa**: Rotaciones de hombros, caderas y tobillos (5 min) [Ver diagrama animado en Ejercicios].\n`;
            response += `2. **Caminata Suave o Marcha en el sitio**: 8-10 minutos fluidos.\n`;
            response += `3. **Sentadillas asistidas con silla**: 2 series de 5-8 repeticiones [Ver soporte en Ejercicios].\n\n`;
            response += `*¿Te parece bien esta intensidad o prefieres subirla a Normal?*`;
        } else {
            response += `**Rutina Normal (20-25 min):**\n`;
            response += `1. **Caminata Rápida**: 15 minutos continuos.\n`;
            response += `2. **Flexiones en pared**: 3 series de 10 repeticiones [Reduce impacto articular].\n`;
            response += `3. **Sentadillas asistidas**: 3 series de 12 repeticiones.\n`;
            response += `4. **Movilidad articular**: 5 minutos de estiramiento y calentamiento.\n\n`;
            response += `Si sientes cansancio excesivo, me dices y la aligeramos de inmediato.`;
        }

        if (state.user.isDiabetic) {
            response += `\n\n⚠️ **Diabetes:** Mide tu glucosa antes de iniciar. Si está por debajo de 100 mg/dL, consume un snack de absorción lenta.`;
        }
        if (state.user.isHypertensive) {
            response += `\n\n⚠️ **Presión Alta:** Exhala al hacer el esfuerzo y evita levantar pesos sobre tu cabeza de manera exigente.`;
        }
        if (state.user.hasJointPain) {
            response += `\n\n⚠️ **Articulaciones:** Si sientes dolor punzante en rodillas o espalda, reduce la profundidad de las sentadillas o realiza la caminata de forma más lenta.`;
        }
    } else if (query.includes('diabetes') || query.includes('diabetico') || query.includes('azucar') || query.includes('glucosa')) {
        response = `La actividad física es tu mejor aliada para el control de la glucosa:\n\n`;
        response += `💡 **Reglas de Oro:**\n`;
        response += `- Evita entrenar con niveles de glucosa menores a 90 mg/dL.\n`;
        response += `- Los mejores ejercicios son el cardio continuo y resistencia ligera (sentadillas asistidas).\n`;
        response += `- Si sientes mareos, detén la actividad y consume 15g de azúcar rápida (ej. jugo de fruta).\n\n`;
        response += `¿Quieres que preparemos una rutina enfocada en control glucémico suave?`;
    } else if (query.includes('hipertension') || query.includes('presion') || query.includes('corazon') || query.includes('hipertenso')) {
        response = `Para la hipertensión, el ejercicio aeróbico regular ayuda a relajar los vasos sanguíneos:\n\n`;
        response += `💡 **Reglas de Oro:**\n`;
        response += `- No contengas la respiración mientras haces fuerza (maniobra de Valsalva).\n`;
        response += `- Prioriza ejercicios de bajo impacto e inclinaciones como flexiones en pared antes que en el piso.\n`;
        response += `- Si sientes dolor en el pecho o dolor de cabeza punzante, detente de inmediato.\n\n`;
        response += `¿Te gustaría un plan enfocado en el cuidado cardiovascular ligero?`;
    } else if (query.includes('dolor') || query.includes('articulacion') || query.includes('rodilla') || query.includes('espalda')) {
        response = `El movimiento suave es medicina para las articulaciones porque promueve la lubricación natural (líquido sinovial):\n\n`;
        response += `💡 **Reglas de Oro:**\n`;
        response += `- Usa el soporte de una silla para sentadillas para controlar la bajada.\n`;
        response += `- Evita impactos fuertes. La caminata regular y la movilidad en círculo te ayudarán.\n`;
        response += `- Si duele, no lo hagas. El ejercicio debe ser estimulante, no doloroso.\n\n`;
        response += `¿Quieres que te prepare un circuito de movilidad articular sentada?`;
    } else if (query.includes('iniciar') || query.includes('empezar') || query.includes('cómo')) {
        response = `Para iniciar con éxito un cambio físico, la clave no es entrenar duro una vez, sino hacer algo pequeño todos los días:\n\n`;
        response += `1. **Comienza con 10 minutos**: Es suficiente para despertar tu cuerpo.\n`;
        response += `2. **Ajusta la intensidad**: Si un ejercicio duele o cansa demasiado, usa la opción 'Aligerar'.\n`;
        response += `3. **Mantén el registro**: El simple hecho de entrar a la app ayuda a tu mente a enfocarse en tu bienestar.\n\n`;
        response += `¿Qué tal si hoy solo hacemos la caminata corta? ¿Te animas?`;
    } else {
        response = `¡Qué buen punto! Como tu asistente IA de IAFit, mi objetivo es acompañarte sin juzgar. \n\nRecuerda que puedo guiarte sobre cómo realizar un ejercicio, modificar tu rutina en base a cómo te sientes hoy o darte consejos de salud adaptados a tus datos (${state.user.weight}kg y nivel ${state.user.activity}). \n\n¿De qué te gustaría hablar ahora?`;
    }

    return response;
}

// Punto de entrada del chat: intenta responder con Gemini (vía backend);
// si no está disponible, cae de forma transparente a las respuestas locales.
async function generateBotResponse(userMsg) {
    const query = userMsg.toLowerCase();

    // "Aligerar" cambia el estado global de la app: siempre se maneja localmente,
    // nunca dependemos de la IA para una acción que afecta directamente el dashboard.
    if (query.includes('aligerar') || query.includes('ligero') || query.includes('suave') || query.includes('menos')) {
        state.user.intensity = 'light';
        localStorage.setItem('iafit_user', JSON.stringify(state.user));
        updateUIWithUserData();
        generateDashboardRoutine();

        appendMessage('bot', `¡Entendido! He cambiado tu intensidad global a **Ligero**. Tu dashboard y tus sugerencias automáticas se han actualizado. \n\nNo te preocupes por hacer menos hoy, lo más importante es crear el hábito de moverte sin dolor ni frustración. ¿Empezamos con una rutina de estiramiento suave?`);
        return;
    }

    showTypingIndicator();
    try {
        const reply = await fetchGeminiReply(userMsg);
        hideTypingIndicator();
        appendMessage('bot', reply);
    } catch (err) {
        console.warn('[IAFit] No se pudo usar Gemini, usando respuesta local:', err.message);
        hideTypingIndicator();
        // Pequeña pausa para que se sienta natural, igual que antes
        await new Promise(resolve => setTimeout(resolve, 400));
        appendMessage('bot', generateLocalFallbackResponse(userMsg));
    }
}

// Eventos de envío de chat
btnChatSend.addEventListener('click', async () => {
    const text = chatInput.value.trim();
    if (!text) return;

    appendMessage('user', text);
    chatInput.value = '';
    await generateBotResponse(text);
});

chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        btnChatSend.click();
    }
});

btnChatReset.addEventListener('click', initChat);

// Botones rápidos del chat
quickChatBtns.forEach(btn => {
    btn.addEventListener('click', async () => {
        const text = btn.textContent.replace(/"/g, '');
        appendMessage('user', text);
        await generateBotResponse(text);
    });
});

// Ayudante de vista de pantallas
function showScreen(screenEl) {
    document.querySelectorAll('.screen').forEach(s => {
        s.classList.remove('active');
        s.style.display = 'none';
    });
    screenEl.style.display = 'flex';
    setTimeout(() => {
        screenEl.classList.add('active');
    }, 50);
}
