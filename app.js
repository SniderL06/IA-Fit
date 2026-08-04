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
    },
    {
        id: "flexiones-suelo",
        name: "Lagartijas / Flexiones en Suelo",
        category: "fuerza",
        desc: "El clásico ejercicio de peso corporal para fortalecer el pecho, hombros, tríceps y core al mismo tiempo.",
        difficulty: "Media",
        time: "3 series de 10 reps",
        icon: "lucide-dumbbell",
        equipment: "none",
        cardioIntensity: "low",
        jointStress: ["wrist_elbow", "upper_back_shoulder"],
        lightAlternative: "Flexiones con rodillas apoyadas o en pared",
        muscleGroups: ['Pecho', 'Tríceps', 'Hombros', 'Core'],
        steps: [
            'Colócate en posición de plancha alta con las manos al ancho de los hombros y punta de pies apoyadas.',
            'Mantén el cuerpo firme en línea recta desde la cabeza hasta los talones.',
            'Baja flexionado los codos a 45 grados hasta que el pecho casi toque el suelo (inhala).',
            'Empuja con fuerza el piso para regresar a la posición inicial (exhala).'
        ],
        benefits: 'Desarrolla fuerza funcional pura en todo el tren superior sin necesidad de pesas.',
        tipsDiabetic: "Ejercicio multiarticular muy eficiente para consumir glucosa muscular rápidamente.",
        tipsHypertensive: "Respira de manera fluida y constante; no aguantes la respiración en la subida.",
        tipsJointPain: "Si duelen las muñecas, puedes apoyar los puños o usar soportes para flexiones.",
        visualSvg: `
            <svg viewBox="0 0 100 100" width="100%" height="100%" style="background:#141620; stroke:#6366f1; stroke-width:3; fill:none; stroke-linecap:round;">
                <g>
                    <animateTransform attributeName="transform" type="translate" values="0,0; 0,10; 0,0" dur="1.8s" repeatCount="indefinite" />
                    <circle cx="25" cy="40" r="6" stroke="#10b981" />
                    <line x1="30" y1="42" x2="80" y2="42" />
                    <line x1="80" y1="42" x2="85" y2="70" />
                    <line x1="40" y1="42" x2="40" y2="70" />
                </g>
            </svg>
        `
    },
    {
        id: "mountain-climbers",
        name: "Escaladores de Montaña (Mountain Climbers)",
        category: "cardio",
        desc: "Cardio dinámico y quemagrasa en casa que combina la plancha con aceleración de piernas.",
        difficulty: "Media",
        time: "3 series de 30 seg",
        icon: "lucide-zap",
        equipment: "none",
        cardioIntensity: "high",
        jointStress: ["wrist_elbow", "knee"],
        lightAlternative: "Elevación de rodillas lenta en plancha apoyado en mesa",
        muscleGroups: ['Core', 'Cuádriceps', 'Hombros', 'Cardio'],
        steps: [
            'Comienza en posición de flexión alta con brazos estirados.',
            'Lleva una rodilla rápidamente hacia el pecho sin levantar las caderas.',
            'Regresa la pierna atrás mientras llevas la otra rodilla al frente de forma alterna y continua.',
            'Mantén los hombros sobre las muñecas durante todo el ejercicio.'
        ],
        benefits: 'Eleva el pulso cardíaco de inmediato y quema calorías activando activamente los abdominales.',
        tipsDiabetic: "Ideal para sesiones de cardio intenso sin equipo.",
        tipsHypertensive: "Evita movimientos explosivos si tienes hipertensión no controlada.",
        tipsJointPain: "Reduce la velocidad o eleva la superficie de apoyo para proteger rodillas.",
        visualSvg: `
            <svg viewBox="0 0 100 100" width="100%" height="100%" style="background:#141620; stroke:#6366f1; stroke-width:3; fill:none; stroke-linecap:round;">
                <circle cx="25" cy="35" r="6" stroke="#10b981" />
                <line x1="30" y1="38" x2="75" y2="45" />
                <line x1="40" y1="40" x2="40" y2="70" />
                <line x1="60" y1="43" x2="45" y2="55">
                    <animate attributeName="x2" values="45;65;45" dur="0.8s" repeatCount="indefinite" />
                </line>
                <line x1="75" y1="45" x2="85" y2="70">
                    <animate attributeName="x2" values="85;65;85" dur="0.8s" repeatCount="indefinite" />
                </line>
            </svg>
        `
    },
    {
        id: "abdominales-crunch",
        name: "Abdominales Crunch Clásicos",
        category: "fuerza",
        desc: "Ejercicio concentrado de pared abdominal sin sobrecargar la zona lumbar.",
        difficulty: "Baja",
        time: "3 series de 15 reps",
        icon: "lucide-sparkles",
        equipment: "none",
        cardioIntensity: "low",
        jointStress: ["neck"],
        lightAlternative: "Contracción abdominal isométrica acostado",
        muscleGroups: ['Abdomen Superior', 'Core'],
        steps: [
            'Acuéstate boca arriba con las rodillas dobladas y las plantas de los pies apoyadas en el suelo.',
            'Coloca las yemas de los dedos detrás de las orejas sin jalar el cuello.',
            'Contrae el abdomen elevando los hombros unos centímetros del suelo (exhala).',
            'Baja lentamente controlando el descenso sin relajar el abdomen (inhala).'
        ],
        benefits: 'Fortalece la zona frontal del abdomen manteniendo la espalda baja apoyada.',
        tipsDiabetic: "Mantener buena musculatura abdominal apoya la postura y digestión.",
        tipsHypertensive: "No fuerces el cuello ni mantengas el aire dentro.",
        tipsJointPain: "Ideal para evitar molestias lumbares ya que la espalda baja no se despega del suelo.",
        visualSvg: `
            <svg viewBox="0 0 100 100" width="100%" height="100%" style="background:#141620; stroke:#6366f1; stroke-width:3; fill:none; stroke-linecap:round;">
                <line x1="10" y1="75" x2="90" y2="75" stroke="rgba(255,255,255,0.2)" />
                <circle cx="30" cy="55" r="6" stroke="#10b981">
                    <animate attributeName="cy" values="55;45;55" dur="1.5s" repeatCount="indefinite" />
                </circle>
                <path d="M 35 60 L 60 70 L 80 50">
                    <animate attributeName="d" values="M 35 60 L 60 70 L 80 50; M 35 52 L 60 70 L 80 50; M 35 60 L 60 70 L 80 50" dur="1.5s" repeatCount="indefinite" />
                </path>
            </svg>
        `
    },
    {
        id: "elevacion-piernas",
        name: "Elevación de Piernas (Abdomen Inferior)",
        category: "fuerza",
        desc: "Excelente para tonificar la parte inferior del abdomen y la estabilidad pélvica.",
        difficulty: "Media",
        time: "3 series de 10 reps",
        icon: "lucide-layout",
        equipment: "none",
        cardioIntensity: "low",
        jointStress: ["lower_back"],
        lightAlternative: "Elevación de una sola pierna alternada",
        muscleGroups: ['Abdomen Inferior', 'Psoas', 'Core'],
        steps: [
            'Acuéstate boca arriba en la colchoneta con las manos debajo de las caderas para proteger la espalda.',
            'Mantén las piernas rectas y elévalas juntas hasta formar 90 grados con el cuerpo (exhala).',
            'Baja las piernas lentamente sin llegar a tocar el suelo ni despegando la espalda baja (inhala).'
        ],
        benefits: 'Tonifica los abdominales inferiores y fortalece la flexión de cadera.',
        tipsDiabetic: "Gran trabajo de estabilización central.",
        tipsHypertensive: "Respira de forma constante sin aguantar la respiración.",
        tipsJointPain: "Si sientes molestia lumbar, dobla ligeramente las rodillas al subir y bajar.",
        visualSvg: `
            <svg viewBox="0 0 100 100" width="100%" height="100%" style="background:#141620; stroke:#6366f1; stroke-width:3; fill:none; stroke-linecap:round;">
                <circle cx="20" cy="70" r="6" stroke="#10b981" />
                <line x1="25" y1="72" x2="55" y2="72" />
                <line x1="55" y1="72" x2="85" y2="40">
                    <animate attributeName="y2" values="40;72;40" dur="2s" repeatCount="indefinite" />
                </line>
            </svg>
        `
    },
    {
        id: "zancadas-libres",
        name: "Zancadas / Lunges Alternos",
        category: "fuerza",
        desc: "Fortalece piernas, glúteos y mejora el equilibrio sin necesidad de peso adicional.",
        difficulty: "Media",
        time: "3 series de 10 por leg",
        icon: "lucide-footprints",
        equipment: "none",
        cardioIntensity: "low",
        jointStress: ["knee", "hip"],
        lightAlternative: "Zancadas cortas o apoyando la mano en una pared",
        muscleGroups: ['Cuádriceps', 'Glúteos', 'Isquiotibiales', 'Equilibrio'],
        steps: [
            'Párate derecho con las manos en las caderas.',
            'Da un paso largo hacia adelante flexionando ambas rodillas a 90 grados.',
            'La rodilla trasera debe quedar cerca del suelo sin tocarlo.',
            'Empuja con el talón delantero para regresar a la posición inicial y alterna de pierna.'
        ],
        benefits: 'Desarrolla fuerza unilateral, mejora la estabilidad de rodilla y tonifica los glúteos.',
        tipsDiabetic: "Excelente ejercicio de fuerza en piernas para procesar carbohidratos.",
        tipsHypertensive: "No te apresures en el movimiento; mantén la respiración coordinada.",
        tipsJointPain: "Asegúrate de que la rodilla delantera no supere la punta del pie.",
        visualSvg: `
            <svg viewBox="0 0 100 100" width="100%" height="100%" style="background:#141620; stroke:#6366f1; stroke-width:3; fill:none; stroke-linecap:round;">
                <circle cx="45" cy="20" r="6" stroke="#10b981" />
                <line x1="45" y1="26" x2="45" y2="50" />
                <line x1="45" y1="50" x2="25" y2="75">
                    <animate attributeName="x2" values="25;45;25" dur="1.8s" repeatCount="indefinite" />
                </line>
                <line x1="45" y1="50" x2="65" y2="75">
                    <animate attributeName="x2" values="65;45;65" dur="1.8s" repeatCount="indefinite" />
                </line>
            </svg>
        `
    },
    {
        id: "puente-gluteos",
        name: "Puente de Glúteos en Suelo",
        category: "fuerza",
        desc: "Excelente para tonificar glúteos y proteger la espalda baja. Apto para todos los niveles.",
        difficulty: "Baja",
        time: "3 series de 15 reps",
        icon: "lucide-heart-pulse",
        equipment: "none",
        cardioIntensity: "low",
        jointStress: [],
        lightAlternative: "Sostén isométrico de puente por 15 segundos",
        muscleGroups: ['Glúteos', 'Isquiotibiales', 'Espalda Baja'],
        steps: [
            'Acuéstate boca arriba con las rodillas flexionadas y pies apoyados en el suelo.',
            'Eleva las caderas apretando los glúteos hasta formar una línea recta desde hombros a rodillas (exhala).',
            'Mantén la contracción arriba 1 segundo y baja suavemente (inhala).'
        ],
        benefits: 'Fortalece la cadena posterior sin ningún impacto en las rodillas ni en la columna.',
        tipsDiabetic: "Movimiento seguro y muy efectivo para mantener glúteos activos.",
        tipsHypertensive: "Súper seguro; mantén la respiración fluida.",
        tipsJointPain: "Sugerido especialmente si tienes dolores de rodilla o espalda baja.",
        visualSvg: `
            <svg viewBox="0 0 100 100" width="100%" height="100%" style="background:#141620; stroke:#6366f1; stroke-width:3; fill:none; stroke-linecap:round;">
                <circle cx="20" cy="70" r="6" stroke="#10b981" />
                <path d="M 25 72 L 55 55 L 80 75">
                    <animate attributeName="d" values="M 25 72 L 55 55 L 80 75; M 25 72 L 55 72 L 80 75; M 25 72 L 55 55 L 80 75" dur="2s" repeatCount="indefinite" />
                </path>
            </svg>
        `
    },
    {
        id: "eliptica",
        name: "Entrenamiento en Elíptica",
        category: "cardio",
        desc: "Cardio fluido de cuerpo entero en máquina elíptica con cero impacto articular.",
        difficulty: "Media",
        time: "15-25 min",
        icon: "lucide-activity",
        equipment: "eliptica",
        cardioIntensity: "moderate",
        jointStress: [],
        lightAlternative: "10 minutos a velocidad constante y resistencia mínima",
        muscleGroups: ['Piernas', 'Brazos', 'Cardio', 'Glúteos'],
        steps: [
            'Súbete a la elíptica sujetando firmemente las asas móviles.',
            'Pedalea con un movimiento fluido de zancada impulsando también con los brazos.',
            'Mantén la postura erguida y evita inclinarte hacia adelante.'
        ],
        benefits: 'Quema calorías masivamente involucrando tren superior e inferior sin golpear las articulaciones.',
        tipsDiabetic: "Mantiene la glucosa estable a lo largo del ejercicio aero-cardíaco.",
        tipsHypertensive: "Ajusta la resistencia a un nivel que te permita hablar sin ahogarte.",
        tipsJointPain: "De los mejores cardio si tienes problemas en rodillas, tobillos o caderas.",
        visualSvg: `
            <svg viewBox="0 0 100 100" width="100%" height="100%" style="background:#141620; stroke:#6366f1; stroke-width:3; fill:none; stroke-linecap:round;">
                <circle cx="50" cy="25" r="6" stroke="#10b981" />
                <line x1="50" y1="31" x2="50" y2="60" />
                <line x1="50" y1="60" x2="35" y2="80">
                    <animate attributeName="x2" values="35;65;35" dur="1.2s" repeatCount="indefinite" />
                </line>
                <line x1="50" y1="60" x2="65" y2="80">
                    <animate attributeName="x2" values="65;35;65" dur="1.2s" repeatCount="indefinite" />
                </line>
            </svg>
        `
    },
    {
        id: "caminadora",
        name: "Caminadora Inclinada / Cinta de Correr",
        category: "cardio",
        desc: "Cardio regulable en caminadora para quemar calorías ajustando la velocidad e inclinación.",
        difficulty: "Media",
        time: "15-30 min",
        icon: "lucide-footprints",
        equipment: "caminadora",
        cardioIntensity: "moderate",
        jointStress: [],
        lightAlternative: "Caminata plana a 4 km/h en la caminadora",
        muscleGroups: ['Piernas', 'Pantorrillas', 'Cardio', 'Glúteos'],
        steps: [
            'Empieza caminando a velocidad suave (3-4 km/h) para calentar.',
            'Aumenta la inclinación a 3-5% para activar más los glúteos sin necesidad de correr.',
            'Mantiene los brazos sueltos o apoyados suavemente en los agarres si lo necesitas.'
        ],
        benefits: 'Permite regular exactamente la intensidad y quemar calorías a tu propio ritmo.',
        tipsDiabetic: "Control preciso del esfuerzo para sesiones de cardio sostenidas.",
        tipsHypertensive: "Usa caminata inclinada suave en lugar de trote para evitar picos bruscos.",
        tipsJointPain: "La banda amortiguada reduce el choque articular comparado con la calle.",
        visualSvg: `
            <svg viewBox="0 0 100 100" width="100%" height="100%" style="background:#141620; stroke:#6366f1; stroke-width:3; fill:none; stroke-linecap:round;">
                <line x1="20" y1="80" x2="80" y2="70" stroke="rgba(255,255,255,0.4)" stroke-width="4" />
                <circle cx="50" cy="25" r="6" stroke="#10b981" />
                <line x1="50" y1="31" x2="50" y2="55" />
                <line x1="50" y1="55" x2="38" y2="76">
                    <animate attributeName="x2" values="38;60;38" dur="1s" repeatCount="indefinite" />
                </line>
                <line x1="50" y1="55" x2="60" y2="74">
                    <animate attributeName="x2" values="60;38;60" dur="1s" repeatCount="indefinite" />
                </line>
            </svg>
        `
    },
    {
        id: "elevaciones-laterales",
        name: "Elevaciones Laterales para Hombros",
        category: "fuerza",
        desc: "Esculpe y fortalece los hombros dando amplitud y buena postura al cuerpo.",
        difficulty: "Baja",
        time: "3 series de 12 reps",
        icon: "lucide-dumbbell",
        equipment: "mancuernas",
        cardioIntensity: "low",
        jointStress: ["upper_back_shoulder"],
        lightAlternative: "Elevaciones sin peso concentrándote en la contracción",
        muscleGroups: ['Deltoides Laterales', 'Hombros'],
        steps: [
            'Párate con una mancuerna ligera en cada mano a los costados del cuerpo.',
            'Lleva los brazos hacia afuera y arriba hasta la altura de los hombros (exhala).',
            'Baja lentamente de regreso manteniendo los codos ligeramente flexionados (inhala).'
        ],
        benefits: 'Fortalece la articulación del hombro y mejora la estética y postura corporal.',
        tipsDiabetic: "Fortalecimiento de tren superior ideal para complementar tu rutina diaria.",
        tipsHypertensive: "Usa pesos ligeros; el ejercicio debe ser fluido sin pujar.",
        tipsJointPain: "No subas las mancuernas más allá de la línea de tus hombros.",
        visualSvg: `
            <svg viewBox="0 0 100 100" width="100%" height="100%" style="background:#141620; stroke:#6366f1; stroke-width:3; fill:none; stroke-linecap:round;">
                <circle cx="50" cy="25" r="6" stroke="#10b981" />
                <line x1="50" y1="31" x2="50" y2="65" />
                <line x1="50" y1="40" x2="20" y2="40">
                    <animate attributeName="y2" values="40;60;40" dur="1.8s" repeatCount="indefinite" />
                </line>
                <line x1="50" y1="40" x2="80" y2="40">
                    <animate attributeName="y2" values="40;60;40" dur="1.8s" repeatCount="indefinite" />
                </line>
            </svg>
        `
    },
    {
        id: "press-hombros",
        name: "Press Militar de Hombros",
        category: "fuerza",
        desc: "Ejercicio fundamental de empuje vertical para hombros y tríceps.",
        difficulty: "Media",
        time: "3 series de 10 reps",
        icon: "lucide-dumbbell",
        equipment: "mancuernas",
        cardioIntensity: "low",
        jointStress: ["upper_back_shoulder"],
        lightAlternative: "Press de hombros sentado con peso muy ligero",
        muscleGroups: ['Deltoides', 'Tríceps', 'Trapecios'],
        steps: [
            'Siéntate o párate con las mancuernas a la altura de las orejas y palmas al frente.',
            'Empuja las pesas hacia arriba sobre la cabeza hasta casi extender los brazos (exhala).',
            'Baja despacio las mancuernas de regreso a la altura de las orejas (inhala).'
        ],
        benefits: 'Desarrolla fuerza en hombros y brazos para levantar objetos por encima de la cabeza.',
        tipsDiabetic: "Excelente gasto energético del tren superior.",
        tipsHypertensive: "Realízalo preferentemente sentado para controlar la presión arterial.",
        tipsJointPain: "Si hay molestias en el manguito rotador, hazlo con palmas mirándose entre sí.",
        visualSvg: `
            <svg viewBox="0 0 100 100" width="100%" height="100%" style="background:#141620; stroke:#6366f1; stroke-width:3; fill:none; stroke-linecap:round;">
                <circle cx="50" cy="25" r="6" stroke="#10b981" />
                <line x1="50" y1="31" x2="50" y2="65" />
                <line x1="30" y1="15" x2="30" y2="40">
                    <animate attributeName="y1" values="15;35;15" dur="1.6s" repeatCount="indefinite" />
                </line>
                <line x1="70" y1="15" x2="70" y2="40">
                    <animate attributeName="y1" values="15;35;15" dur="1.6s" repeatCount="indefinite" />
                </line>
            </svg>
        `
    },
    {
        id: "fondos-triceps",
        name: "Fondos de Tríceps en Silla",
        category: "fuerza",
        desc: "Tonifica la parte posterior del brazo usando una silla estable como soporte.",
        difficulty: "Media",
        time: "3 series de 10 reps",
        icon: "lucide-accessibility",
        equipment: "none",
        cardioIntensity: "low",
        jointStress: ["wrist_elbow", "upper_back_shoulder"],
        lightAlternative: "Extensión de tríceps con botella por detrás de la cabeza",
        muscleGroups: ['Tríceps', 'Hombro Anterior'],
        steps: [
            'Siéntate al borde de una silla firme y apoya las palmas junto a tus caderas.',
            'Desplaza la cadera hacia adelante fuera del asiento manteniendo la espalda cerca de la silla.',
            'Flexiona los codos a 90 grados bajando el cuerpo (inhala).',
            'Empuja con las palmas para subir y extender los brazos (exhala).'
        ],
        benefits: 'Elimina la flacidez en la zona de tríceps usando únicamente el peso corporal.',
        tipsDiabetic: "Excelente ejercicio de resistencia para brazos.",
        tipsHypertensive: "No aguantes la respiración durante el descenso y ascenso.",
        tipsJointPain: "Si sientes molestia en el hombro, no bajes más allá de 90 grados.",
        visualSvg: `
            <svg viewBox="0 0 100 100" width="100%" height="100%" style="background:#141620; stroke:#6366f1; stroke-width:3; fill:none; stroke-linecap:round;">
                <path d="M 65 45 L 65 80 M 65 60 L 50 60" stroke="rgba(255,255,255,0.3)" />
                <circle cx="40" cy="30" r="6" stroke="#10b981">
                    <animate attributeName="cy" values="30;45;30" dur="1.6s" repeatCount="indefinite" />
                </circle>
                <line x1="40" y1="36" x2="40" y2="60" />
            </svg>
        `
    },

    // =================== SIN EQUIPAMIENTO - FUERZA / CUERPO COMPLETO ===================
    {
        id: "lagartijas",
        name: "Lagartijas (Push-ups)",
        category: "fuerza",
        desc: "El ejercicio de pecho y brazos más clásico del mundo. Trabaja pecho, hombros, tríceps y core simultáneamente.",
        difficulty: "Media",
        time: "3 series de 10-15 reps",
        icon: "lucide-dumbbell",
        equipment: "none",
        cardioIntensity: "low",
        jointStress: ["wrist_elbow"],
        lightAlternative: "Lagartijas en rodillas (posición modificada)",
        muscleGroups: ['Pecho', 'Hombros', 'Tríceps', 'Core'],
        steps: [
            'Colócate boca abajo, manos al ancho de los hombros, dedos apuntando hacia adelante.',
            'Extiende los brazos hasta que estés en posición de tabla — cuerpo recto de cabeza a talones.',
            'Inhala y dobla los codos bajando el pecho hasta casi tocar el suelo.',
            'Exhala y empuja con fuerza extendiendo los brazos hasta la posición inicial.',
            'Mantén el abdomen apretado todo el tiempo y no dejes que las caderas caigan.'
        ],
        benefits: 'Fortalece pecho, hombros y tríceps usando solo el peso corporal. Mejora la estabilidad del core y la postura.',
        tipsDiabetic: "El trabajo de músculos grandes del tren superior genera un buen consumo de glucosa.",
        tipsHypertensive: "Exhala al empujar. Si tienes la presión elevada, prefiere las versiones en pared o rodillas.",
        tipsJointPain: "Si hay molestia en muñecas, usa puños cerrados o apoyos ergonómicos.",
        visualSvg: `
            <svg viewBox="0 0 100 100" width="100%" height="100%" style="background:#141620; stroke:#6366f1; stroke-width:3; fill:none; stroke-linecap:round;">
                <line x1="10" y1="85" x2="90" y2="85" stroke="rgba(255,255,255,0.1)" stroke-width="2"/>
                <circle cx="75" cy="38" r="6" stroke="#10b981"/>
                <line x1="75" y1="44" x2="55" y2="55"/>
                <line x1="55" y1="55" x2="25" y2="55">
                    <animate attributeName="d" values="M 55 55 L 25 55; M 55 65 L 25 65; M 55 55 L 25 55" dur="1.5s" repeatCount="indefinite"/>
                </line>
                <line x1="25" y1="55" x2="20" y2="85"/>
                <line x1="55" y1="55" x2="50" y2="85">
                    <animate attributeName="y1" values="55;65;55" dur="1.5s" repeatCount="indefinite"/>
                    <animate attributeName="y2" values="85;85;85" dur="1.5s" repeatCount="indefinite"/>
                </line>
                <line x1="20" y1="85" x2="85" y2="85" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
            </svg>
        `
    },
    {
        id: "plancha",
        name: "Plancha Isométrica (Plank)",
        category: "fuerza",
        desc: "El rey del entrenamiento de core. Trabaja abdomen, lumbar, glúteos y estabilizadores de forma isométrica sin impacto.",
        difficulty: "Media",
        time: "3 series de 20-45 seg",
        icon: "lucide-activity",
        equipment: "none",
        cardioIntensity: "low",
        jointStress: ["wrist_elbow"],
        lightAlternative: "Plancha sobre codos (Forearm plank)",
        muscleGroups: ['Core', 'Abdomen', 'Lumbar', 'Glúteos', 'Hombros'],
        steps: [
            'Colócate boca abajo apoyado en las palmas (o codos) y las puntas de los pies.',
            'Cuerpo completamente recto: cabeza, espalda, caderas y talones en línea.',
            'Aprieta el abdomen, glúteos y cuádriceps para mantener la posición.',
            'Respira de forma continua y controlada. No aguantes la respiración.',
            'Mantén la posición el tiempo indicado. Si tiemblas, es normal — eso significa que está funcionando.'
        ],
        benefits: 'Fortalece el core al 100% sin impacto. Mejora la postura, estabiliza la columna y reduce el dolor de espalda baja.',
        tipsDiabetic: "Excelente ejercicio isométrico que no requiere equipamiento y mejora la resistencia muscular general.",
        tipsHypertensive: "Prefiere series cortas (15-20 seg) y NO aguantes la respiración en ningún momento.",
        tipsJointPain: "La versión sobre codos elimina el estrés en las muñecas completamente.",
        visualSvg: `
            <svg viewBox="0 0 100 100" width="100%" height="100%" style="background:#141620; stroke:#6366f1; stroke-width:3; fill:none; stroke-linecap:round;">
                <line x1="5" y1="72" x2="95" y2="72" stroke="rgba(255,255,255,0.1)" stroke-width="2"/>
                <circle cx="80" cy="48" r="6" stroke="#10b981"/>
                <line x1="80" y1="54" x2="15" y2="54"/>
                <line x1="80" y1="60" x2="90" y2="72"/>
                <line x1="15" y1="54" x2="15" y2="72"/>
                <circle cx="15" cy="54" r="3" fill="#6366f1" stroke="none">
                    <animate attributeName="r" values="3;4;3" dur="2s" repeatCount="indefinite"/>
                </circle>
            </svg>
        `
    },
    {
        id: "abdominales-crunch",
        name: "Abdominales Crunch",
        category: "fuerza",
        desc: "El ejercicio abdominal más directo. Trabaja el recto abdominal y el core frontal de forma controlada.",
        difficulty: "Baja",
        time: "3 series de 15-20 reps",
        icon: "lucide-activity",
        equipment: "none",
        cardioIntensity: "low",
        jointStress: [],
        lightAlternative: "Crunch parcial (solo levantar ligeramente la cabeza)",
        muscleGroups: ['Abdomen', 'Core', 'Oblicuos'],
        steps: [
            'Acuéstate boca arriba, rodillas dobladas, pies planos en el suelo.',
            'Cruza los brazos en el pecho o coloca las manos detrás de la cabeza sin jalar del cuello.',
            'Inhala. Exhala y contrae el abdomen levantando los hombros del suelo.',
            'Sube solo hasta que la espalda baja toque el suelo; no te sientes completamente.',
            'Regresa despacio (inhala) sin soltar la tensión del abdomen.'
        ],
        benefits: 'Tonifica el abdomen y mejora la estabilidad del tronco, contribuyendo a una mejor postura y menos dolores de espalda.',
        tipsDiabetic: "Ejercicio seguro y directo para trabajo abdominal sin esfuerzo cardiovascular excesivo.",
        tipsHypertensive: "Evita contener la respiración. Exhala siempre en el esfuerzo ascendente.",
        tipsJointPain: "No requiere articulaciones; es suave para rodillas, caderas y hombros.",
        visualSvg: `
            <svg viewBox="0 0 100 100" width="100%" height="100%" style="background:#141620; stroke:#6366f1; stroke-width:3; fill:none; stroke-linecap:round;">
                <line x1="10" y1="78" x2="90" y2="78" stroke="rgba(255,255,255,0.1)" stroke-width="2"/>
                <circle cx="30" cy="55" r="6" stroke="#10b981">
                    <animate attributeName="cy" values="55;40;55" dur="1.8s" repeatCount="indefinite"/>
                </circle>
                <path d="M 30 61 Q 50 75 70 65">
                    <animate attributeName="d" values="M 30 61 Q 50 75 70 65; M 30 46 Q 50 62 70 65; M 30 61 Q 50 75 70 65" dur="1.8s" repeatCount="indefinite"/>
                </path>
                <line x1="70" y1="65" x2="85" y2="78"/>
                <line x1="85" y1="78" x2="90" y2="78" stroke="rgba(255,255,255,0.3)"/>
            </svg>
        `
    },
    {
        id: "escalada-montana",
        name: "Escalada de Montaña (Mountain Climbers)",
        category: "cardio",
        desc: "Ejercicio HIIT de cuerpo completo en posición de plancha. Activa core, piernas y cardio a máxima intensidad.",
        difficulty: "Alta",
        time: "3 series de 30 seg",
        icon: "lucide-zap",
        equipment: "none",
        cardioIntensity: "high",
        jointStress: ["wrist_elbow", "knee"],
        lightAlternative: "Escalada lenta controlada (1 rodilla a la vez, sin salto)",
        muscleGroups: ['Core', 'Piernas', 'Hombros', 'Cardio'],
        steps: [
            'Adopta la posición de plancha alta: manos bajo los hombros, cuerpo en línea recta.',
            'Lleva la rodilla derecha hacia el pecho lo más rápido que puedas.',
            'Regresa el pie derecho y simultáneamente lleva la rodilla izquierda al pecho.',
            'Alterna las piernas en un movimiento continuo como si estuvieras corriendo en el suelo.',
            'Mantén las caderas bajas y el abdomen apretado durante toda la serie.'
        ],
        benefits: 'Quema calorías a alta intensidad, fortalece el core y mejora la resistencia cardiovascular sin necesidad de equipamiento.',
        tipsDiabetic: "Alta intensidad: muy efectivo para bajar la glucosa. Hidratación importante.",
        tipsHypertensive: "Consulta tu médico si la presión no está controlada antes de ejercicios de alta intensidad.",
        tipsJointPain: "Reduce la velocidad para disminuir el impacto en muñecas y rodillas.",
        visualSvg: `
            <svg viewBox="0 0 100 100" width="100%" height="100%" style="background:#141620; stroke:#6366f1; stroke-width:3; fill:none; stroke-linecap:round;">
                <line x1="5" y1="70" x2="95" y2="70" stroke="rgba(255,255,255,0.1)" stroke-width="2"/>
                <circle cx="78" cy="42" r="6" stroke="#10b981"/>
                <line x1="78" y1="48" x2="15" y2="55"/>
                <line x1="15" y1="55" x2="15" y2="70"/>
                <line x1="78" y1="60" x2="65" y2="55">
                    <animate attributeName="x2" values="65;45;65" dur="0.5s" repeatCount="indefinite"/>
                    <animate attributeName="y2" values="55;70;55" dur="0.5s" repeatCount="indefinite"/>
                </line>
                <line x1="78" y1="60" x2="85" y2="70"/>
            </svg>
        `
    },
    {
        id: "burpees",
        name: "Burpees",
        category: "cardio",
        desc: "El ejercicio total de alta intensidad. Combina sentadilla, plancha, lagartija y salto en un solo movimiento.",
        difficulty: "Alta",
        time: "3 series de 8-12 reps",
        icon: "lucide-zap",
        equipment: "none",
        cardioIntensity: "high",
        jointStress: ["knee", "wrist_elbow", "ankle_foot"],
        lightAlternative: "Burpee sin salto (caminar los pies en lugar de saltar)",
        muscleGroups: ['Cuerpo Completo', 'Cardio', 'Core', 'Piernas', 'Pecho'],
        steps: [
            'Párate derecho. Baja en cuclillas y apoya las palmas en el suelo.',
            'Salta los pies hacia atrás hasta quedar en posición de plancha alta.',
            'Opcional: haz una lagartija completa en ese punto.',
            'Salta los pies hacia las manos regresando a la posición de cuclillas.',
            'Salta verticalmente con los brazos por encima de la cabeza. Eso es 1 burpee.'
        ],
        benefits: 'Máximo gasto calórico, mejora la resistencia cardiovascular y fortalece el cuerpo completo en poco tiempo.',
        tipsDiabetic: "De los ejercicios más poderosos para bajar glucosa en el menor tiempo posible.",
        tipsHypertensive: "No recomendado si la presión arterial no está controlada. Consulta a tu médico.",
        tipsJointPain: "Evita el impacto del salto si tienes problemas de rodilla, tobillo o muñeca.",
        visualSvg: `
            <svg viewBox="0 0 100 100" width="100%" height="100%" style="background:#141620; stroke:#6366f1; stroke-width:3; fill:none; stroke-linecap:round;">
                <circle cx="50" cy="20" r="6" stroke="#10b981">
                    <animate attributeName="cy" values="20;70;20" dur="2s" repeatCount="indefinite"/>
                </circle>
                <line x1="50" y1="26" x2="50" y2="50">
                    <animate attributeName="y1" values="26;76;26" dur="2s" repeatCount="indefinite"/>
                    <animate attributeName="y2" values="50;90;50" dur="2s" repeatCount="indefinite"/>
                </line>
                <line x1="50" y1="38" x2="35" y2="52">
                    <animate attributeName="y1" values="38;76;38" dur="2s" repeatCount="indefinite"/>
                    <animate attributeName="x2" values="35;20;35" dur="2s" repeatCount="indefinite"/>
                    <animate attributeName="y2" values="52;90;52" dur="2s" repeatCount="indefinite"/>
                </line>
                <line x1="50" y1="38" x2="65" y2="52">
                    <animate attributeName="y1" values="38;76;38" dur="2s" repeatCount="indefinite"/>
                    <animate attributeName="x2" values="65;80;65" dur="2s" repeatCount="indefinite"/>
                    <animate attributeName="y2" values="52;90;52" dur="2s" repeatCount="indefinite"/>
                </line>
            </svg>
        `
    },
    {
        id: "sentadillas-sumo",
        name: "Sentadilla Sumo",
        category: "fuerza",
        desc: "Variante de sentadilla con pies muy abiertos que activa glúteos, aductores e isquiotibiales de forma diferente.",
        difficulty: "Media",
        time: "3 series de 12 reps",
        icon: "lucide-accessibility",
        equipment: "none",
        cardioIntensity: "low",
        jointStress: ["knee", "hip"],
        lightAlternative: "Sentadilla sumo parcial (rango reducido)",
        muscleGroups: ['Glúteos', 'Aductores', 'Cuádriceps', 'Isquiotibiales'],
        steps: [
            'Párate con los pies más abiertos que los hombros, puntas hacia fuera a 45 grados.',
            'Mantén el pecho erguido y los hombros hacia atrás.',
            'Inhala y baja las caderas en línea recta hacia el suelo, rodillas siguiendo la dirección de las puntas.',
            'Baja hasta que los muslos estén paralelos al suelo o hasta tu rango cómodo.',
            'Exhala y sube apretando los glúteos al máximo al llegar arriba.'
        ],
        benefits: 'Activa glúteos y aductores de forma superior a la sentadilla clásica. Ideal para trabajar la zona interna del muslo.',
        tipsDiabetic: "Gran activación de los músculos más grandes del cuerpo para consumo eficiente de glucosa.",
        tipsHypertensive: "Exhala en la subida. Evita bloquearte y contener el aliento.",
        tipsJointPain: "El ángulo abierto reduce algo el estrés en la rodilla. Ajusta el rango según tu comodidad.",
        visualSvg: `
            <svg viewBox="0 0 100 100" width="100%" height="100%" style="background:#141620; stroke:#6366f1; stroke-width:3; fill:none; stroke-linecap:round;">
                <circle cx="50" cy="25" r="6" stroke="#10b981"/>
                <line x1="50" y1="31" x2="50" y2="55"/>
                <line x1="50" y1="55" x2="25" y2="80">
                    <animate attributeName="d" values="M 50 55 L 25 80; M 50 68 L 25 80; M 50 55 L 25 80" dur="1.8s" repeatCount="indefinite"/>
                </line>
                <line x1="50" y1="55" x2="75" y2="80">
                    <animate attributeName="y1" values="55;68;55" dur="1.8s" repeatCount="indefinite"/>
                </line>
                <line x1="25" y1="80" x2="15" y2="85"/>
                <line x1="75" y1="80" x2="85" y2="85"/>
            </svg>
        `
    },
    {
        id: "zancadas",
        name: "Zancadas (Lunges)",
        category: "fuerza",
        desc: "Trabaja cada pierna de forma independiente para desarrollar fuerza, equilibrio y coordinación del tren inferior.",
        difficulty: "Media",
        time: "3 series de 10 reps por pierna",
        icon: "lucide-footprints",
        equipment: "none",
        cardioIntensity: "low",
        jointStress: ["knee", "hip"],
        lightAlternative: "Zancada estática (sin avanzar, apoyado en pared)",
        muscleGroups: ['Cuádriceps', 'Glúteos', 'Isquiotibiales', 'Equilibrio'],
        steps: [
            'Párate derecho con los pies juntos y las manos en las caderas.',
            'Da un paso largo hacia adelante con la pierna derecha.',
            'Baja la rodilla izquierda hacia el suelo sin que toque (inhala).',
            'La rodilla delantera debe estar directamente sobre el tobillo, no más adelante.',
            'Empuja con el pie delantero para regresar y repite con la pierna izquierda (exhala).'
        ],
        benefits: 'Desarrollo del tren inferior de forma unilateral, mejora el equilibrio y corrige desequilibrios musculares entre piernas.',
        tipsDiabetic: "Excelente para activar los músculos de las piernas y mejorar la sensibilidad a la insulina.",
        tipsHypertensive: "Seguro a intensidad moderada. Exhala en el esfuerzo de subida.",
        tipsJointPain: "Si hay dolor de rodilla, reduce el rango o prueba la versión estática apoyado en la pared.",
        visualSvg: `
            <svg viewBox="0 0 100 100" width="100%" height="100%" style="background:#141620; stroke:#6366f1; stroke-width:3; fill:none; stroke-linecap:round;">
                <circle cx="50" cy="22" r="6" stroke="#10b981"/>
                <line x1="50" y1="28" x2="50" y2="52"/>
                <line x1="50" y1="52" x2="70" y2="75">
                    <animate attributeName="x2" values="70;30;70" dur="1.8s" repeatCount="indefinite"/>
                </line>
                <line x1="50" y1="52" x2="30" y2="90">
                    <animate attributeName="x2" values="30;70;30" dur="1.8s" repeatCount="indefinite"/>
                    <animate attributeName="y2" values="90;75;90" dur="1.8s" repeatCount="indefinite"/>
                </line>
                <line x1="70" y1="75" x2="75" y2="90"/>
            </svg>
        `
    },
    {
        id: "elevacion-cadera",
        name: "Elevación de Cadera (Glute Bridge)",
        category: "fuerza",
        desc: "Activa glúteos e isquiotibiales en posición supina. Excelente para la zona lumbar y para mejorar la postura.",
        difficulty: "Baja",
        time: "3 series de 15 reps",
        icon: "lucide-activity",
        equipment: "none",
        cardioIntensity: "low",
        jointStress: [],
        lightAlternative: "Elevación parcial, sin llegar a la posición completa",
        muscleGroups: ['Glúteos', 'Isquiotibiales', 'Lumbar', 'Core'],
        steps: [
            'Acuéstate boca arriba con las rodillas dobladas y los pies planos en el suelo.',
            'Brazos a los lados del cuerpo con las palmas hacia abajo para darte estabilidad.',
            'Inhala. Aprieta los glúteos y eleva las caderas del suelo hasta que el cuerpo quede en línea recta de hombros a rodillas.',
            'Mantén 1-2 segundos apretando al máximo en la cima (exhala).',
            'Baja lentamente la cadera sin dejar que el trasero toque completamente el suelo antes de la siguiente repetición.'
        ],
        benefits: 'Activa y tonifica glúteos e isquiotibiales, refuerza la lumbar y mejora la estabilidad de caderas.',
        tipsDiabetic: "Muy seguro y cómodo, ideal para sesiones de recuperación activa.",
        tipsHypertensive: "Sin impacto y con respiración controlada — uno de los más seguros para hipertensos.",
        tipsJointPain: "Sin estrés articular en rodillas, caderas ni hombros. Excelente para rehabilitación.",
        visualSvg: `
            <svg viewBox="0 0 100 100" width="100%" height="100%" style="background:#141620; stroke:#6366f1; stroke-width:3; fill:none; stroke-linecap:round;">
                <line x1="5" y1="80" x2="95" y2="80" stroke="rgba(255,255,255,0.1)" stroke-width="2"/>
                <circle cx="20" cy="65" r="5" stroke="#10b981"/>
                <path d="M 20 70 Q 50 40 80 65">
                    <animate attributeName="d" values="M 20 70 Q 50 40 80 65; M 20 70 Q 50 55 80 65; M 20 70 Q 50 40 80 65" dur="2s" repeatCount="indefinite"/>
                </path>
                <line x1="80" y1="65" x2="80" y2="80"/>
                <line x1="65" y1="80" x2="80" y2="65"/>
            </svg>
        `
    },
    {
        id: "superman",
        name: "Superman (Extensión de Espalda)",
        category: "fuerza",
        desc: "Fortalece la musculatura erectora de la columna y los glúteos en posición boca abajo. Clave para la espalda sana.",
        difficulty: "Baja",
        time: "3 series de 12 reps",
        icon: "lucide-activity",
        equipment: "none",
        cardioIntensity: "low",
        jointStress: [],
        lightAlternative: "Elevación solo de brazos o solo de piernas (no ambos a la vez)",
        muscleGroups: ['Lumbar', 'Glúteos', 'Dorsales', 'Postura'],
        steps: [
            'Acuéstate boca abajo con los brazos extendidos al frente como Superman.',
            'Inhala y levanta simultáneamente los brazos, pecho y piernas del suelo.',
            'Mantén el cuello neutro — no levantes la cabeza forzando el cuello.',
            'Sostén la posición 2-3 segundos apretando glúteos y espalda baja (exhala).',
            'Baja lentamente y repite. El movimiento es pequeño y controlado.'
        ],
        benefits: 'Fortalece la cadena posterior completa (lumbar, glúteos, dorsales), fundamental para una espalda sana y sin dolor.',
        tipsDiabetic: "Ejercicio de bajo esfuerzo metabólico. Ideal para intercalarlo con ejercicios más intensos.",
        tipsHypertensive: "Completamente seguro para hipertensos por su baja demanda cardiovascular.",
        tipsJointPain: "Muy beneficioso para el dolor lumbar crónico cuando se hace con progresión gradual.",
        visualSvg: `
            <svg viewBox="0 0 100 100" width="100%" height="100%" style="background:#141620; stroke:#6366f1; stroke-width:3; fill:none; stroke-linecap:round;">
                <line x1="5" y1="60" x2="95" y2="60" stroke="rgba(255,255,255,0.1)" stroke-width="2"/>
                <circle cx="50" cy="55" r="6" stroke="#10b981">
                    <animate attributeName="cy" values="55;45;55" dur="2s" repeatCount="indefinite"/>
                </circle>
                <line x1="50" y1="61" x2="50" y2="60"/>
                <line x1="50" y1="55" x2="15" y2="50">
                    <animate attributeName="y2" values="50;40;50" dur="2s" repeatCount="indefinite"/>
                </line>
                <line x1="50" y1="55" x2="85" y2="60">
                    <animate attributeName="y2" values="60;50;60" dur="2s" repeatCount="indefinite"/>
                </line>
            </svg>
        `
    },
    {
        id: "abdominales-bicicleta",
        name: "Abdominales en Bicicleta",
        category: "fuerza",
        desc: "La variante abdominal más completa. Trabaja recto, oblicuos y flexores de cadera simultáneamente.",
        difficulty: "Media",
        time: "3 series de 20 reps (alternadas)",
        icon: "lucide-activity",
        equipment: "none",
        cardioIntensity: "low",
        jointStress: [],
        lightAlternative: "Rotación con los pies en el suelo",
        muscleGroups: ['Abdomen', 'Oblicuos', 'Core', 'Flexores de cadera'],
        steps: [
            'Acuéstate boca arriba. Manos detrás de la cabeza con los codos abiertos.',
            'Levanta ambas piernas del suelo con las rodillas dobladas a 90 grados.',
            'Lleva el codo derecho hacia la rodilla izquierda mientras extiendes la pierna derecha.',
            'Alterna: codo izquierdo hacia rodilla derecha, extendiendo la pierna izquierda.',
            'Mantén un ritmo controlado — no jalones bruscos del cuello.'
        ],
        benefits: 'Activación superior al crunch clásico. Trabajar oblicuos y abdominales juntos reduce la cintura y mejora la estabilidad del tronco.',
        tipsDiabetic: "Ejercicio efectivo de core sin impacto articular.",
        tipsHypertensive: "Respira de forma continua. No aguantes la respiración entre repeticiones.",
        tipsJointPain: "No estresa rodillas ni caderas. Si hay molestia en cuello, apoya la cabeza en el suelo.",
        visualSvg: `
            <svg viewBox="0 0 100 100" width="100%" height="100%" style="background:#141620; stroke:#6366f1; stroke-width:3; fill:none; stroke-linecap:round;">
                <line x1="5" y1="78" x2="95" y2="78" stroke="rgba(255,255,255,0.1)" stroke-width="2"/>
                <circle cx="25" cy="52" r="5" stroke="#10b981">
                    <animate attributeName="cx" values="25;35;25" dur="1.2s" repeatCount="indefinite"/>
                </circle>
                <line x1="25" y1="57" x2="50" y2="65">
                    <animate attributeName="x1" values="25;35;25" dur="1.2s" repeatCount="indefinite"/>
                </line>
                <line x1="50" y1="65" x2="70" y2="50">
                    <animate attributeName="x2" values="70;50;70" dur="1.2s" repeatCount="indefinite"/>
                    <animate attributeName="y2" values="50;65;50" dur="1.2s" repeatCount="indefinite"/>
                </line>
                <line x1="50" y1="65" x2="30" y2="78"/>
                <line x1="50" y1="65" x2="70" y2="78">
                    <animate attributeName="x2" values="70;30;70" dur="1.2s" repeatCount="indefinite"/>
                </line>
            </svg>
        `
    },
    {
        id: "saltos-cuerda",
        name: "Saltos de Cuerda (o simulado)",
        category: "cardio",
        desc: "Cardio de alta intensidad. Se puede hacer simulando el movimiento sin cuerda para el mismo beneficio cardiovascular.",
        difficulty: "Media",
        time: "3 series de 1 minuto",
        icon: "lucide-zap",
        equipment: "none",
        cardioIntensity: "high",
        jointStress: ["ankle_foot", "knee"],
        lightAlternative: "Marcha en el sitio simulando el giro de brazos de la cuerda",
        muscleGroups: ['Pantorrillas', 'Cardio', 'Coordinación', 'Core'],
        steps: [
            'Párate con los pies juntos. Si tienes cuerda, sostenla en las manos; si no, simula el giro.',
            'Salta ligeramente sobre las puntas de los pies, alternando o con ambos pies juntos.',
            'El movimiento de muñecas simula el giro de la cuerda (pequeños círculos).',
            'Aterriza suavemente con las rodillas ligeramente flexionadas para absorber el impacto.',
            'Mantén un ritmo sostenible — puedes alternar velocidades en el mismo minuto.'
        ],
        benefits: 'Quema hasta 10-15 calorías por minuto, mejora coordinación, coordinación motriz y fortalece pantorrillas y tobillos.',
        tipsDiabetic: "Alta efectividad para reducir glucosa post-comida en sesiones cortas.",
        tipsHypertensive: "Empieza con series cortas de 30 segundos y monitorea cómo te sientes.",
        tipsJointPain: "Si hay molestias en tobillos o rodillas, reemplaza por la marcha en el sitio.",
        visualSvg: `
            <svg viewBox="0 0 100 100" width="100%" height="100%" style="background:#141620; stroke:#6366f1; stroke-width:3; fill:none; stroke-linecap:round;">
                <circle cx="50" cy="25" r="6" stroke="#10b981">
                    <animate attributeName="cy" values="25;20;25" dur="0.6s" repeatCount="indefinite"/>
                </circle>
                <line x1="50" y1="31" x2="50" y2="60">
                    <animate attributeName="y1" values="31;26;31" dur="0.6s" repeatCount="indefinite"/>
                </line>
                <line x1="50" y1="42" x2="30" y2="55">
                    <animate attributeName="x2" values="30;20;30" dur="0.6s" repeatCount="indefinite"/>
                </line>
                <line x1="50" y1="42" x2="70" y2="55">
                    <animate attributeName="x2" values="70;80;70" dur="0.6s" repeatCount="indefinite"/>
                </line>
                <path d="M 25 65 Q 50 90 75 65" stroke="#6366f1" stroke-dasharray="3 3">
                    <animateTransform attributeName="transform" type="rotate" from="0 50 75" to="360 50 75" dur="0.6s" repeatCount="indefinite"/>
                </path>
            </svg>
        `
    },
    {
        id: "sentadilla-isometrica",
        name: "Sentadilla Isométrica (Wall Sit)",
        category: "fuerza",
        desc: "Sentadilla estática contra la pared. Desarrolla resistencia muscular en cuádriceps y glúteos sin movimiento.",
        difficulty: "Media",
        time: "3 series de 30-60 seg",
        icon: "lucide-accessibility",
        equipment: "none",
        cardioIntensity: "low",
        jointStress: ["knee"],
        lightAlternative: "Ángulo mayor (rodillas a 100-120 grados en vez de 90)",
        muscleGroups: ['Cuádriceps', 'Glúteos', 'Isquiotibiales'],
        steps: [
            'Apoya la espalda completamente en una pared.',
            'Desliza la espalda hacia abajo hasta que las rodillas estén a 90 grados.',
            'Los pies deben estar directamente bajo las rodillas (no más adelante).',
            'Mantén los brazos a los lados o extendidos al frente.',
            'Respira de forma continua y mantén la posición el tiempo indicado.'
        ],
        benefits: 'Desarrolla la resistencia muscular del cuádriceps de forma progresiva sin impacto. Ideal para preparar las rodillas.',
        tipsDiabetic: "Esfuerzo muscular sostenido que consume glucosa de manera constante.",
        tipsHypertensive: "Respira continuamente — nunca aguantes la respiración en posiciones isométricas.",
        tipsJointPain: "Si hay molestia en rodillas, sube la posición para reducir el ángulo de flexión.",
        visualSvg: `
            <svg viewBox="0 0 100 100" width="100%" height="100%" style="background:#141620; stroke:#6366f1; stroke-width:3; fill:none; stroke-linecap:round;">
                <line x1="80" y1="10" x2="80" y2="90" stroke="rgba(255,255,255,0.3)" stroke-dasharray="4 4"/>
                <circle cx="55" cy="25" r="6" stroke="#10b981"/>
                <line x1="55" y1="31" x2="55" y2="60"/>
                <line x1="55" y1="60" x2="35" y2="80">
                    <animate attributeName="x2" values="35;38;35" dur="3s" repeatCount="indefinite"/>
                </line>
                <line x1="55" y1="60" x2="75" y2="60"/>
                <line x1="35" y1="80" x2="35" y2="80"/>
                <line x1="75" y1="60" x2="75" y2="80"/>
            </svg>
        `
    },
    {
        id: "step-ups",
        name: "Step-Ups (Subida al Escalón)",
        category: "cardio",
        desc: "Cardio funcional sencillo subiendo un escalón o una superficie elevada. Activa piernas y glúteos con bajo impacto.",
        difficulty: "Baja",
        time: "3 series de 2 min",
        icon: "lucide-footprints",
        equipment: "none",
        cardioIntensity: "moderate",
        jointStress: ["knee", "hip"],
        lightAlternative: "Marcha en el sitio elevando las rodillas a la altura de la cadera",
        muscleGroups: ['Cuádriceps', 'Glúteos', 'Pantorrillas', 'Cardio'],
        steps: [
            'Párate frente a un escalón estable (15-25 cm de altura).',
            'Sube el pie derecho al escalón y empuja desde el talón para subir completamente.',
            'Sube el pie izquierdo para estar completamente sobre el escalón.',
            'Baja el pie derecho primero, seguido del izquierdo.',
            'Alterna la pierna de inicio en cada serie.'
        ],
        benefits: 'Cardio funcional de bajo impacto que trabaja el tren inferior. Ideal para mejorar la resistencia y quemar calorías.',
        tipsDiabetic: "Excelente actividad cardio-moderada para el control de glucosa post-comida.",
        tipsHypertensive: "Ritmo controlado y pausas cuando sea necesario. Más seguro que el trote.",
        tipsJointPain: "Escalón bajo (10-15 cm) para reducir estrés en rodillas. Apóyate en una pared.",
        visualSvg: `
            <svg viewBox="0 0 100 100" width="100%" height="100%" style="background:#141620; stroke:#6366f1; stroke-width:3; fill:none; stroke-linecap:round;">
                <rect x="25" y="68" width="50" height="12" stroke="rgba(255,255,255,0.3)" rx="2"/>
                <circle cx="50" cy="30" r="6" stroke="#10b981">
                    <animate attributeName="cy" values="30;22;30" dur="1.2s" repeatCount="indefinite"/>
                </circle>
                <line x1="50" y1="36" x2="50" y2="60">
                    <animate attributeName="y1" values="36;28;36" dur="1.2s" repeatCount="indefinite"/>
                </line>
                <line x1="50" y1="60" x2="38" y2="80">
                    <animate attributeName="y2" values="80;68;80" dur="1.2s" repeatCount="indefinite"/>
                </line>
                <line x1="50" y1="60" x2="62" y2="80"/>
            </svg>
        `
    },
    {
        id: "abdominales-oblicuos",
        name: "Giros Rusos (Russian Twists)",
        category: "fuerza",
        desc: "Trabaja los oblicuos y el core lateral de forma dinámica. Puede hacerse con o sin peso adicional.",
        difficulty: "Media",
        time: "3 series de 20 reps (10 cada lado)",
        icon: "lucide-activity",
        equipment: "none",
        cardioIntensity: "low",
        jointStress: [],
        lightAlternative: "Con pies apoyados en el suelo (versión más fácil)",
        muscleGroups: ['Oblicuos', 'Core', 'Abdomen', 'Lumbar'],
        steps: [
            'Siéntate en el suelo con las rodillas dobladas, pies levemente elevados del suelo.',
            'Inclina la espalda hacia atrás unos 45 grados — cuerpo en forma de V.',
            'Junta las manos al frente (o sostén una mancuerna/botella).',
            'Gira el torso hacia la derecha, lleva las manos hasta el suelo a tu derecha (exhala).',
            'Vuelve al centro e inmediatamente gira hacia la izquierda. Eso es 1 repetición.'
        ],
        benefits: 'Fortalece los oblicuos y el core lateral, reduciendo la cintura y mejorando la estabilidad rotacional del tronco.',
        tipsDiabetic: "Ejercicio seguro de core que contribuye al tono muscular general.",
        tipsHypertensive: "Si te mareas, baja la inclinación del torso o apoya los pies en el suelo.",
        tipsJointPain: "Sin impacto articular. Si hay lumbalgia, reduce el rango de giro.",
        visualSvg: `
            <svg viewBox="0 0 100 100" width="100%" height="100%" style="background:#141620; stroke:#6366f1; stroke-width:3; fill:none; stroke-linecap:round;">
                <circle cx="50" cy="38" r="6" stroke="#10b981">
                    <animateTransform attributeName="transform" type="rotate" values="0 50 65; 20 50 65; -20 50 65; 0 50 65" dur="2s" repeatCount="indefinite"/>
                </circle>
                <line x1="50" y1="44" x2="50" y2="65"/>
                <line x1="50" y1="52" x2="28" y2="60">
                    <animateTransform attributeName="transform" type="rotate" values="0 50 52; 25 50 52; -25 50 52; 0 50 52" dur="2s" repeatCount="indefinite"/>
                </line>
                <line x1="50" y1="65" x2="35" y2="85"/>
                <line x1="50" y1="65" x2="65" y2="85"/>
            </svg>
        `
    },
    {
        id: "sentadillas-bulgaras",
        name: "Sentadillas Búlgaras (Split Squat)",
        category: "fuerza",
        desc: "Sentadilla unilateral con pie trasero elevado. Uno de los mejores ejercicios para glúteos y cuádriceps.",
        difficulty: "Alta",
        time: "3 series de 8 reps por pierna",
        icon: "lucide-accessibility",
        equipment: "none",
        cardioIntensity: "low",
        jointStress: ["knee", "hip"],
        lightAlternative: "Zancada estática sin elevar el pie trasero",
        muscleGroups: ['Glúteos', 'Cuádriceps', 'Isquiotibiales', 'Equilibrio'],
        steps: [
            'Párate de espaldas a una silla o banco (60-70 cm de altura).',
            'Coloca el pie trasero sobre la silla — solo la punta del pie, de forma cómoda.',
            'El pie delantero debe estar suficientemente adelante (1 m aprox de la silla).',
            'Baja el cuerpo flexionando la rodilla delantera, dejando caer la rodilla trasera.',
            'Sube empujando con el talón delantero. La espalda debe mantenerse erguida.'
        ],
        benefits: 'Superior a la sentadilla clásica para aislar glúteos y cuádriceps. Mejora el equilibrio y la fuerza unilateral del tren inferior.',
        tipsDiabetic: "Alta activación muscular por pierna — consumo intenso de glucosa.",
        tipsHypertensive: "Baja sin prisa y sube de forma controlada. Evita bloquear la rodilla al extender.",
        tipsJointPain: "Si duele la rodilla trasera, pon una toalla doblada bajo ella para mayor comodidad.",
        visualSvg: `
            <svg viewBox="0 0 100 100" width="100%" height="100%" style="background:#141620; stroke:#6366f1; stroke-width:3; fill:none; stroke-linecap:round;">
                <rect x="62" y="58" width="20" height="8" stroke="rgba(255,255,255,0.3)" rx="2"/>
                <circle cx="42" cy="22" r="6" stroke="#10b981">
                    <animate attributeName="cy" values="22;35;22" dur="2s" repeatCount="indefinite"/>
                </circle>
                <line x1="42" y1="28" x2="42" y2="52">
                    <animate attributeName="y2" values="52;62;52" dur="2s" repeatCount="indefinite"/>
                </line>
                <line x1="42" y1="52" x2="22" y2="80">
                    <animate attributeName="y1" values="52;62;52" dur="2s" repeatCount="indefinite"/>
                </line>
                <line x1="42" y1="52" x2="72" y2="58">
                    <animate attributeName="y1" values="52;62;52" dur="2s" repeatCount="indefinite"/>
                </line>
                <line x1="22" y1="80" x2="22" y2="88"/>
            </svg>
        `
    },

    // =================== CON EQUIPAMIENTO ===================
    {
        id: "eliptica",
        name: "Elíptica",
        category: "cardio",
        desc: "Cardio de bajo impacto que trabaja tren superior e inferior simultáneamente. Ideal para quienes tienen problemas de rodillas.",
        difficulty: "Baja",
        time: "20-30 min",
        icon: "lucide-bike",
        equipment: "gym",
        cardioIntensity: "moderate",
        jointStress: [],
        lightAlternative: "10 minutos a resistencia mínima, sin inclinación",
        muscleGroups: ['Piernas', 'Glúteos', 'Brazos', 'Cardio', 'Core'],
        steps: [
            'Sube a la elíptica, coloca los pies en las plataformas y agarra las barras móviles.',
            'Empieza a pedalear de forma suave durante 3-5 minutos de calentamiento.',
            'Activa las barras móviles de los brazos para trabajar también el tren superior.',
            'Ajusta la resistencia para mantener un esfuerzo sostenible durante todo el tiempo.',
            'Para mayor intensidad, aumenta la inclinación. Para menor impacto, mantén resistencia baja.'
        ],
        benefits: 'Cardio de cuerpo completo con impacto articular casi nulo. Ideal para recuperación o para personas con problemas de rodilla.',
        tipsDiabetic: "Sesión continua de 20-30 min muy efectiva para estabilizar los niveles de glucosa.",
        tipsHypertensive: "Mejor opción de cardio de máquina: bajo estrés cardiovascular con buena quema calórica.",
        tipsJointPain: "El movimiento elíptico elimina prácticamente el impacto en rodillas y tobillos.",
        visualSvg: `
            <svg viewBox="0 0 100 100" width="100%" height="100%" style="background:#141620; stroke:#6366f1; stroke-width:3; fill:none; stroke-linecap:round;">
                <ellipse cx="50" cy="70" rx="30" ry="10" stroke="rgba(255,255,255,0.3)"/>
                <circle cx="50" cy="32" r="6" stroke="#10b981"/>
                <line x1="50" y1="38" x2="50" y2="60"/>
                <line x1="50" y1="47" x2="30" y2="38"/>
                <line x1="50" y1="47" x2="70" y2="38"/>
                <circle cx="50" cy="70" r="4" fill="#6366f1" stroke="none">
                    <animateTransform attributeName="transform" type="rotate" from="0 50 70" to="360 50 70" dur="1.5s" repeatCount="indefinite"/>
                </circle>
                <line x1="50" y1="60" x2="70" y2="75">
                    <animateTransform attributeName="transform" type="rotate" from="0 50 70" to="360 50 70" dur="1.5s" repeatCount="indefinite"/>
                </line>
            </svg>
        `
    },
    {
        id: "cinta-trotar",
        name: "Trote en Caminadora (Treadmill)",
        category: "cardio",
        desc: "Cardio controlado en caminadora. Permite ajustar velocidad e inclinación para resultados precisos.",
        difficulty: "Media",
        time: "20-30 min",
        icon: "lucide-footprints",
        equipment: "gym",
        cardioIntensity: "moderate",
        jointStress: ["knee", "ankle_foot"],
        lightAlternative: "Caminata a 5-6 km/h sin inclinación",
        muscleGroups: ['Piernas', 'Glúteos', 'Core', 'Cardio'],
        steps: [
            'Sube a la caminadora, agarra las barras laterales y empieza a 4-5 km/h caminando.',
            'Aumenta gradualmente la velocidad hasta un trote cómodo (6.5-8.5 km/h).',
            'Mantén la postura erguida, hombros relajados y vista al frente.',
            'Aterriza con el mediupié o el talón — no con la punta del pie.',
            'Al terminar, baja la velocidad progresivamente durante 3-5 minutos de vuelta a la calma.'
        ],
        benefits: 'Cardio controlado y medido. La inclinación al 1-2% simula el esfuerzo del trote al aire libre.',
        tipsDiabetic: "El trote moderado es excelente para reducir la glucemia. Lleva siempre una fuente de glucosa rápida por si acaso.",
        tipsHypertensive: "Velocidades de 5-7 km/h y pendiente del 0-1% para mantener esfuerzo controlado.",
        tipsJointPain: "Prefiere la caminata al 3-5% de inclinación en lugar del trote para reducir el impacto.",
        visualSvg: `
            <svg viewBox="0 0 100 100" width="100%" height="100%" style="background:#141620; stroke:#6366f1; stroke-width:3; fill:none; stroke-linecap:round;">
                <rect x="15" y="75" width="70" height="8" stroke="rgba(255,255,255,0.3)" rx="2"/>
                <circle cx="50" cy="25" r="6" stroke="#10b981"/>
                <line x1="50" y1="31" x2="50" y2="55"/>
                <line x1="50" y1="40" x2="35" y2="52">
                    <animate attributeName="x2" values="35;62;35" dur="0.9s" repeatCount="indefinite"/>
                    <animate attributeName="y2" values="52;45;52" dur="0.9s" repeatCount="indefinite"/>
                </line>
                <line x1="50" y1="55" x2="38" y2="75">
                    <animate attributeName="x2" values="38;62;38" dur="0.9s" repeatCount="indefinite"/>
                </line>
                <line x1="50" y1="55" x2="62" y2="75">
                    <animate attributeName="x2" values="62;38;62" dur="0.9s" repeatCount="indefinite"/>
                </line>
            </svg>
        `
    },
    {
        id: "remo-maquina",
        name: "Remo en Máquina (Rowing Machine)",
        category: "cardio",
        desc: "El cardio más completo: trabaja el 86% de los músculos del cuerpo. Alta quema calórica con bajo impacto articular.",
        difficulty: "Media",
        time: "15-20 min",
        icon: "lucide-activity",
        equipment: "gym",
        cardioIntensity: "moderate",
        jointStress: [],
        lightAlternative: "Remo a ritmo lento con resistencia mínima",
        muscleGroups: ['Espalda', 'Piernas', 'Brazos', 'Core', 'Cardio'],
        steps: [
            'Siéntate en el remo, asegura los pies en los reposapiés y agarra el mango.',
            'Empieza con las rodillas dobladas, torso inclinado levemente hacia adelante.',
            'Empuja con las piernas extendiendo las rodillas (60% del esfuerzo).',
            'Inclina el torso hacia atrás ligeramente y jala el mango hacia el abdomen bajo.',
            'Regresa deslizando: extiende los brazos, inclina el torso y dobla las rodillas.'
        ],
        benefits: 'Cardio de cuerpo completo que quema hasta 600 kcal/hora. Excelente para resistencia cardiovascular y muscular simultánea.',
        tipsDiabetic: "Alta intensidad controlada — muy efectivo para gestionar la glucosa.",
        tipsHypertensive: "Monitorea tu frecuencia cardíaca y mantente en zona moderada (60-70% FC máx).",
        tipsJointPain: "Sin impacto. Movimiento fluido que no estressa rodillas ni espalda si la técnica es correcta.",
        visualSvg: `
            <svg viewBox="0 0 100 100" width="100%" height="100%" style="background:#141620; stroke:#6366f1; stroke-width:3; fill:none; stroke-linecap:round;">
                <line x1="10" y1="80" x2="90" y2="80" stroke="rgba(255,255,255,0.2)"/>
                <circle cx="55" cy="38" r="6" stroke="#10b981">
                    <animate attributeName="cx" values="55;45;55" dur="1.5s" repeatCount="indefinite"/>
                </circle>
                <path d="M 55 44 L 70 65 L 80 80">
                    <animate attributeName="d" values="M 55 44 L 70 65 L 80 80; M 45 44 L 35 65 L 25 80; M 55 44 L 70 65 L 80 80" dur="1.5s" repeatCount="indefinite"/>
                </path>
                <path d="M 55 50 L 25 55">
                    <animate attributeName="d" values="M 55 50 L 25 55; M 45 50 L 15 50; M 55 50 L 25 55" dur="1.5s" repeatCount="indefinite"/>
                </path>
            </svg>
        `
    },
    {
        id: "press-pecho-mancuernas",
        name: "Press de Pecho con Mancuernas",
        category: "fuerza",
        desc: "Versión libre del press de banca. Trabaja pecho, tríceps y hombros con mancuernas en posición reclinada.",
        difficulty: "Media",
        time: "3 series de 10-12 reps",
        icon: "lucide-dumbbell",
        equipment: "basic",
        cardioIntensity: "low",
        jointStress: ["wrist_elbow", "upper_back_shoulder"],
        lightAlternative: "Press con objetos ligeros (botellas de agua 1.5L)",
        muscleGroups: ['Pecho', 'Tríceps', 'Deltoides Anterior'],
        steps: [
            'Acuéstate en un banco o en el suelo con una mancuerna en cada mano.',
            'Agarra las mancuernas a la altura del pecho, codos en ángulo de 45-75 grados.',
            'Inhala y baja las mancuernas hasta que los codos estén a la altura del torso.',
            'Exhala y empuja las mancuernas hacia arriba y ligeramente al centro.',
            'No bloquees completamente los codos arriba — mantén ligera tensión.'
        ],
        benefits: 'Construye y tonifica el pecho de forma efectiva. La versión con mancuernas tiene mayor rango de movimiento que la barra.',
        tipsDiabetic: "El trabajo muscular del tren superior contribuye al metabolismo general.",
        tipsHypertensive: "Exhala en el esfuerzo (subida). No aguantes la respiración durante la bajada.",
        tipsJointPain: "Si hay molestia en hombros, reduce el rango de bajada. Ángulo de 45° en codos más seguro.",
        visualSvg: `
            <svg viewBox="0 0 100 100" width="100%" height="100%" style="background:#141620; stroke:#6366f1; stroke-width:3; fill:none; stroke-linecap:round;">
                <line x1="5" y1="65" x2="95" y2="65" stroke="rgba(255,255,255,0.2)"/>
                <circle cx="50" cy="50" r="6" stroke="#10b981"/>
                <line x1="50" y1="56" x2="50" y2="65"/>
                <line x1="50" y1="50" x2="20" y2="35">
                    <animate attributeName="y2" values="35;55;35" dur="1.5s" repeatCount="indefinite"/>
                </line>
                <line x1="50" y1="50" x2="80" y2="35">
                    <animate attributeName="y2" values="35;55;35" dur="1.5s" repeatCount="indefinite"/>
                </line>
                <circle cx="15" cy="30" r="4" fill="#6366f1" stroke="none">
                    <animate attributeName="cy" values="30;50;30" dur="1.5s" repeatCount="indefinite"/>
                </circle>
                <circle cx="85" cy="30" r="4" fill="#6366f1" stroke="none">
                    <animate attributeName="cy" values="30;50;30" dur="1.5s" repeatCount="indefinite"/>
                </circle>
            </svg>
        `
    },
    {
        id: "press-hombros-mancuernas",
        name: "Press de Hombros con Mancuernas",
        category: "fuerza",
        desc: "Fortalece deltoides anteriores y laterales. Se puede hacer sentado o de pie con mancuernas ligeras a moderadas.",
        difficulty: "Media",
        time: "3 series de 10 reps",
        icon: "lucide-dumbbell",
        equipment: "basic",
        cardioIntensity: "low",
        jointStress: ["wrist_elbow", "upper_back_shoulder"],
        lightAlternative: "Press con botellas de agua 1L",
        muscleGroups: ['Deltoides', 'Tríceps', 'Trapecios'],
        steps: [
            'Siéntate con la espalda recta o párate con los pies a la altura de los hombros.',
            'Sostén las mancuernas a la altura de los hombros, codos a 90 grados.',
            'Empuja las mancuernas hacia arriba hasta casi extender los brazos (exhala).',
            'Baja lentamente de regreso a la posición inicial (inhala).',
            'Evita arquear la espalda baja al empujar — usa el core para estabilizarte.'
        ],
        benefits: 'Desarrolla hombros redondeados y mejora la fuerza del tren superior para movimientos cotidianos de alcance.',
        tipsDiabetic: "Trabajo muscular aislado y seguro. Buena opción para los días de baja intensidad.",
        tipsHypertensive: "Versión sentada y con pesos ligeros. No aguantes la respiración al empujar.",
        tipsJointPain: "Si hay molestia en el hombro, reduce el rango (no subas completamente los brazos).",
        visualSvg: `
            <svg viewBox="0 0 100 100" width="100%" height="100%" style="background:#141620; stroke:#6366f1; stroke-width:3; fill:none; stroke-linecap:round;">
                <circle cx="50" cy="30" r="6" stroke="#10b981"/>
                <line x1="50" y1="36" x2="50" y2="65"/>
                <line x1="50" y1="42" x2="28" y2="55">
                    <animate attributeName="y2" values="55;30;55" dur="1.5s" repeatCount="indefinite"/>
                </line>
                <line x1="50" y1="42" x2="72" y2="55">
                    <animate attributeName="y2" values="55;30;55" dur="1.5s" repeatCount="indefinite"/>
                </line>
                <circle cx="22" cy="55" r="4" fill="#6366f1" stroke="none">
                    <animate attributeName="cy" values="55;30;55" dur="1.5s" repeatCount="indefinite"/>
                </circle>
                <circle cx="78" cy="55" r="4" fill="#6366f1" stroke="none">
                    <animate attributeName="cy" values="55;30;55" dur="1.5s" repeatCount="indefinite"/>
                </circle>
                <line x1="50" y1="65" x2="40" y2="88"/>
                <line x1="50" y1="65" x2="60" y2="88"/>
            </svg>
        `
    },
    {
        id: "peso-muerto-mancuernas",
        name: "Peso Muerto con Mancuernas",
        category: "fuerza",
        desc: "Trabaja toda la cadena posterior: isquiotibiales, glúteos y espalda baja. Uno de los movimientos más funcionales.",
        difficulty: "Media",
        time: "3 series de 10 reps",
        icon: "lucide-dumbbell",
        equipment: "basic",
        cardioIntensity: "low",
        jointStress: ["hip"],
        lightAlternative: "Peso muerto con botellas de agua o sin peso (gesto de bisagra de cadera)",
        muscleGroups: ['Isquiotibiales', 'Glúteos', 'Lumbar', 'Core'],
        steps: [
            'Párate con las mancuernas frente a tus muslos, pies a la altura de los hombros.',
            'Inclina el torso hacia adelante desde la cadera (no desde la cintura) — espalda recta.',
            'Las mancuernas deslizan pegadas a las piernas mientras bajas.',
            'Baja hasta sentir tensión en los isquiotibiales (aproximadamente rodillas-espinillas).',
            'Empuja las caderas hacia adelante para subir. Aprieta glúteos al llegar arriba.'
        ],
        benefits: 'Fortalece la cadena posterior completa. Mejora postura, potencia y previene dolor lumbar cuando se hace correctamente.',
        tipsDiabetic: "Trabajo muscular intenso de isquiotibiales y glúteos con alto consumo de glucosa.",
        tipsHypertensive: "Exhala al subir. Pesos ligeros con buena técnica son más seguros que mucho peso.",
        tipsJointPain: "El movimiento de bisagra de cadera es muy seguro para la columna si la espalda permanece recta.",
        visualSvg: `
            <svg viewBox="0 0 100 100" width="100%" height="100%" style="background:#141620; stroke:#6366f1; stroke-width:3; fill:none; stroke-linecap:round;">
                <circle cx="50" cy="22" r="6" stroke="#10b981">
                    <animate attributeName="cy" values="22;38;22" dur="2s" repeatCount="indefinite"/>
                </circle>
                <line x1="50" y1="28" x2="50" y2="60">
                    <animate attributeName="y1" values="28;44;28" dur="2s" repeatCount="indefinite"/>
                    <animate attributeName="d" values="M 50 28 L 50 60; M 50 44 L 30 55; M 50 28 L 50 60" dur="2s" repeatCount="indefinite"/>
                </line>
                <path d="M 50 35 L 80 50">
                    <animate attributeName="d" values="M 50 35 L 80 50; M 50 48 L 80 45; M 50 35 L 80 50" dur="2s" repeatCount="indefinite"/>
                </path>
                <line x1="50" y1="60" x2="38" y2="88"/>
                <line x1="50" y1="60" x2="62" y2="88"/>
            </svg>
        `
    },
    {
        id: "spinning-hiit",
        name: "Spinning HIIT (Bicicleta Estática Intervalos)",
        category: "cardio",
        desc: "Intervalos de alta intensidad en bicicleta estática. Máxima quema calórica en poco tiempo.",
        difficulty: "Alta",
        time: "20 min (intervalos 1:2)",
        icon: "lucide-bike",
        equipment: "gym",
        cardioIntensity: "high",
        jointStress: [],
        lightAlternative: "Sesión continua a ritmo moderado (no intervalos)",
        muscleGroups: ['Cuádriceps', 'Glúteos', 'Pantorrillas', 'Cardio'],
        steps: [
            'Calentamiento: 3 minutos a ritmo suave en la bicicleta.',
            'Sprint: pedalea al máximo esfuerzo posible durante 20 segundos.',
            'Recuperación: pedalea suave durante 40 segundos.',
            'Repite el ciclo sprint-recuperación 10-12 veces.',
            'Enfriamiento: 3 minutos de pedaleo suave para bajar la frecuencia cardíaca.'
        ],
        benefits: 'HIIT en bicicleta: quema calorías durante las siguientes 24-48 horas por el efecto EPOC. Máxima eficiencia en poco tiempo.',
        tipsDiabetic: "Muy efectivo pero verifica siempre tu glucosa antes y después. Ten azúcar rápida disponible.",
        tipsHypertensive: "No recomendado si la presión no está controlada. Consulta a tu médico antes.",
        tipsJointPain: "Sin impacto. Los sprints en bicicleta son seguros para rodillas y tobillos.",
        visualSvg: `
            <svg viewBox="0 0 100 100" width="100%" height="100%" style="background:#141620; stroke:#6366f1; stroke-width:3; fill:none; stroke-linecap:round;">
                <circle cx="30" cy="80" r="12" stroke="rgba(255,255,255,0.3)"/>
                <circle cx="70" cy="80" r="12" stroke="rgba(255,255,255,0.3)"/>
                <line x1="30" y1="80" x2="55" y2="55"/>
                <line x1="55" y1="55" x2="70" y2="80"/>
                <circle cx="55" cy="38" r="6" stroke="#10b981"/>
                <line x1="55" y1="44" x2="55" y2="55"/>
                <circle cx="50" cy="65" r="5" fill="none" stroke="#6366f1">
                    <animateTransform attributeName="transform" type="rotate" from="0 50 65" to="360 50 65" dur="0.4s" repeatCount="indefinite"/>
                </circle>
                <line x1="50" y1="60" x2="50" y2="70">
                    <animateTransform attributeName="transform" type="rotate" from="0 50 65" to="360 50 65" dur="0.4s" repeatCount="indefinite"/>
                </line>
            </svg>
        `
    },
    {
        id: "sentadilla-goblet",
        name: "Sentadilla Goblet con Mancuerna",
        category: "fuerza",
        desc: "Sentadilla sosteniendo una mancuerna frente al pecho. Mejora la postura en la sentadilla y activa core.",
        difficulty: "Media",
        time: "3 series de 12 reps",
        icon: "lucide-dumbbell",
        equipment: "basic",
        cardioIntensity: "low",
        jointStress: ["knee", "hip"],
        lightAlternative: "Sentadilla goblet con botella de agua",
        muscleGroups: ['Cuádriceps', 'Glúteos', 'Core', 'Espalda Alta'],
        steps: [
            'Sostén una mancuerna verticalmente con ambas manos frente al pecho.',
            'Pies ligeramente más abiertos que los hombros, puntas hacia fuera.',
            'Baja en sentadilla profunda manteniendo el pecho erguido gracias al contrapeso.',
            'Los codos apuntan hacia abajo y rozan ligeramente el interior de las rodillas.',
            'Sube apretando glúteos y manteniendo el torso recto.'
        ],
        benefits: 'La posición del peso frente al cuerpo corrige automáticamente la postura en la sentadilla, activando más el core.',
        tipsDiabetic: "Variante excelente para mayor activación de core junto con el tren inferior.",
        tipsHypertensive: "Exhala en la subida. Peso moderado y técnica impecable.",
        tipsJointPain: "El contrapeso facilita una sentadilla profunda con menos estrés en la rodilla.",
        visualSvg: `
            <svg viewBox="0 0 100 100" width="100%" height="100%" style="background:#141620; stroke:#6366f1; stroke-width:3; fill:none; stroke-linecap:round;">
                <circle cx="50" cy="25" r="6" stroke="#10b981"/>
                <line x1="50" y1="31" x2="50" y2="55"/>
                <rect x="40" y="38" width="20" height="12" stroke="#6366f1" rx="3">
                    <animate attributeName="y" values="38;52;38" dur="2s" repeatCount="indefinite"/>
                </rect>
                <line x1="50" y1="55" x2="28" y2="80">
                    <animate attributeName="y1" values="55;65;55" dur="2s" repeatCount="indefinite"/>
                </line>
                <line x1="50" y1="55" x2="72" y2="80">
                    <animate attributeName="y1" values="55;65;55" dur="2s" repeatCount="indefinite"/>
                </line>
                <line x1="28" y1="80" x2="20" y2="88"/>
                <line x1="72" y1="80" x2="80" y2="88"/>
            </svg>
        `
    },
    {
        id: "hip-thrust",
        name: "Hip Thrust con Mancuerna",
        category: "fuerza",
        desc: "El ejercicio más eficiente para glúteos. Mayor activación de glúteo mayor que cualquier otra variante.",
        difficulty: "Media",
        time: "3 series de 12 reps",
        icon: "lucide-activity",
        equipment: "basic",
        cardioIntensity: "low",
        jointStress: [],
        lightAlternative: "Glute Bridge en el suelo sin peso",
        muscleGroups: ['Glúteos', 'Isquiotibiales', 'Core'],
        steps: [
            'Siéntate en el suelo con la espalda apoyada en un sofá, cama firme o banco.',
            'Dobla las rodillas con los pies planos en el suelo, a la altura de los hombros.',
            'Coloca una mancuerna sobre tus caderas y sostenla con ambas manos.',
            'Aprieta los glúteos y eleva las caderas hasta que el cuerpo esté en línea recta de hombros a rodillas.',
            'Baja lentamente. La espalda media debe permanecer apoyada durante todo el movimiento.'
        ],
        benefits: 'Activa el glúteo mayor hasta un 300% más que la sentadilla. El ejercicio más directo para levantar y tonificar glúteos.',
        tipsDiabetic: "Alta activación de glúteos: importante grupo muscular para el metabolismo.",
        tipsHypertensive: "Exhala al elevar las caderas. Sin impacto y muy controlado.",
        tipsJointPain: "Sin impacto en rodillas o tobillos. Ideal para personas con dolor articular en extremidades.",
        visualSvg: `
            <svg viewBox="0 0 100 100" width="100%" height="100%" style="background:#141620; stroke:#6366f1; stroke-width:3; fill:none; stroke-linecap:round;">
                <line x1="5" y1="85" x2="40" y2="85" stroke="rgba(255,255,255,0.3)"/>
                <circle cx="20" cy="68" r="5" stroke="#10b981"/>
                <path d="M 20 73 Q 50 45 80 65">
                    <animate attributeName="d" values="M 20 73 Q 50 45 80 65; M 20 73 Q 50 60 80 65; M 20 73 Q 50 45 80 65" dur="2s" repeatCount="indefinite"/>
                </path>
                <line x1="80" y1="65" x2="80" y2="85"/>
                <line x1="62" y1="85" x2="80" y2="65"/>
                <rect x="40" y="50" width="18" height="10" stroke="#6366f1" rx="3">
                    <animate attributeName="y" values="50;62;50" dur="2s" repeatCount="indefinite"/>
                </rect>
            </svg>
        `
    },
    {
        id: "dominadas-asistidas",
        name: "Dominadas Asistidas / Jalones",
        category: "fuerza",
        desc: "Trabajo de espalda y bíceps con máquina de jalones o banda elástica. Uno de los mejores para el tren superior.",
        difficulty: "Media",
        time: "3 series de 8-10 reps",
        icon: "lucide-dumbbell",
        equipment: "gym",
        cardioIntensity: "low",
        jointStress: ["upper_back_shoulder"],
        lightAlternative: "Remo con banda elástica sentado",
        muscleGroups: ['Dorsal', 'Bíceps', 'Romboides', 'Core'],
        steps: [
            'Siéntate en la máquina de jalones y ajusta el bloqueo de rodillas para asegurarte.',
            'Agarra la barra ancha con las palmas hacia adelante, más ancho que los hombros.',
            'Jala la barra hacia el pecho manteniéndola frente a la cara (no detrás del cuello).',
            'Aprieta los omóplatos al final del movimiento y aguanta 1 segundo.',
            'Sube la barra de forma controlada — no dejes que los brazos suban solos.'
        ],
        benefits: 'Desarrolla la espalda en V (dorsal ancho), mejora la postura y fortalece bíceps. Fundamental para un tren superior sólido.',
        tipsDiabetic: "Trabajo de grandes grupos musculares: alto impacto metabólico.",
        tipsHypertensive: "Exhala al jalar. Evita retener la respiración durante el esfuerzo.",
        tipsJointPain: "Si hay molestia en hombros, usa la barra de agarre neutro (palmas mirándose).",
        visualSvg: `
            <svg viewBox="0 0 100 100" width="100%" height="100%" style="background:#141620; stroke:#6366f1; stroke-width:3; fill:none; stroke-linecap:round;">
                <line x1="20" y1="15" x2="80" y2="15" stroke="rgba(255,255,255,0.3)"/>
                <circle cx="50" cy="42" r="6" stroke="#10b981">
                    <animate attributeName="cy" values="42;32;42" dur="1.5s" repeatCount="indefinite"/>
                </circle>
                <line x1="50" y1="48" x2="50" y2="70">
                    <animate attributeName="y1" values="48;38;48" dur="1.5s" repeatCount="indefinite"/>
                </line>
                <line x1="50" y1="38" x2="25" y2="15">
                    <animate attributeName="y1" values="38;28;38" dur="1.5s" repeatCount="indefinite"/>
                </line>
                <line x1="50" y1="38" x2="75" y2="15">
                    <animate attributeName="y1" values="38;28;38" dur="1.5s" repeatCount="indefinite"/>
                </line>
                <line x1="50" y1="70" x2="38" y2="90"/>
                <line x1="50" y1="70" x2="62" y2="90"/>
            </svg>
        `
    },
    {
        id: "plancha-lateral",
        name: "Plancha Lateral",
        category: "fuerza",
        desc: "Variante de plancha que trabaja principalmente los oblicuos y estabilizadores laterales del core.",
        difficulty: "Media",
        time: "3 series de 20-30 seg por lado",
        icon: "lucide-activity",
        equipment: "none",
        cardioIntensity: "low",
        jointStress: ["wrist_elbow"],
        lightAlternative: "Plancha lateral con rodilla apoyada en el suelo",
        muscleGroups: ['Oblicuos', 'Core Lateral', 'Hombro Estabilizador', 'Glúteos'],
        steps: [
            'Acuéstate de lado apoyado en el codo (o la palma) y el borde del pie.',
            'El cuerpo debe estar en línea recta de cabeza a pies — no dejes caer la cadera.',
            'Aprieta el oblicuo del lado de trabajo para mantener la cadera elevada.',
            'El brazo libre puede extenderse hacia el techo o apoyarse en la cadera.',
            'Mantén la posición respirando de forma continua. Cambia de lado.'
        ],
        benefits: 'Fortalece el core lateral y los oblicuos mejor que cualquier ejercicio abdominal clásico. Reduce la cintura lateralmente.',
        tipsDiabetic: "Ejercicio de estabilidad de bajo impacto cardiovascular pero muy efectivo para el core.",
        tipsHypertensive: "Respira continuamente. Series cortas de 15-20 segundos si la presión está elevada.",
        tipsJointPain: "Versión en rodilla para eliminar carga en muñeca y reducir el esfuerzo total.",
        visualSvg: `
            <svg viewBox="0 0 100 100" width="100%" height="100%" style="background:#141620; stroke:#6366f1; stroke-width:3; fill:none; stroke-linecap:round;">
                <line x1="5" y1="75" x2="95" y2="75" stroke="rgba(255,255,255,0.1)" stroke-width="2"/>
                <circle cx="80" cy="35" r="6" stroke="#10b981"/>
                <line x1="80" y1="41" x2="15" y2="65"/>
                <line x1="15" y1="65" x2="15" y2="75"/>
                <line x1="80" y1="55" x2="90" y2="75"/>
                <circle cx="80" cy="35" r="4" stroke="#6366f1" stroke-dasharray="2 2">
                    <animate attributeName="cy" values="35;30;35" dur="3s" repeatCount="indefinite"/>
                </circle>
            </svg>
        `
    },
    {
        id: "triceps-copa",
        name: "Extensión de Tríceps Copa (Overhead)",
        category: "fuerza",
        desc: "Trabaja el tríceps en su posición más alargada. Se hace con una mancuerna sostenida sobre la cabeza.",
        difficulty: "Baja",
        time: "3 series de 12 reps",
        icon: "lucide-dumbbell",
        equipment: "basic",
        cardioIntensity: "low",
        jointStress: ["wrist_elbow"],
        lightAlternative: "Extensión con botella de agua 1L",
        muscleGroups: ['Tríceps', 'Hombro'],
        steps: [
            'Siéntate o párate con una mancuerna sostenida con ambas manos sobre la cabeza.',
            'Los codos apuntan al techo, brazos extendidos verticalmente.',
            'Inhala y dobla los codos bajando la mancuerna detrás de la cabeza.',
            'Exhala y extiende los brazos de regreso a la posición inicial.',
            'Mantén los codos quietos — solo deben moverse los antebrazos.'
        ],
        benefits: 'Trabaja el tríceps en su rango completo de movimiento. Elimina la flacidez de la parte posterior del brazo.',
        tipsDiabetic: "Ejercicio aislado de brazo. Complementa bien las sesiones más intensas.",
        tipsHypertensive: "Peso ligero y sin aguantar la respiración. Versión sentada más cómoda.",
        tipsJointPain: "Si hay molestia en el codo o muñeca, reduce el peso significativamente.",
        visualSvg: `
            <svg viewBox="0 0 100 100" width="100%" height="100%" style="background:#141620; stroke:#6366f1; stroke-width:3; fill:none; stroke-linecap:round;">
                <circle cx="50" cy="28" r="6" stroke="#10b981"/>
                <line x1="50" y1="34" x2="50" y2="65"/>
                <line x1="50" y1="42" x2="38" y2="35"/>
                <line x1="50" y1="42" x2="62" y2="35"/>
                <line x1="38" y1="35" x2="44" y2="18">
                    <animate attributeName="y2" values="18;30;18" dur="1.5s" repeatCount="indefinite"/>
                </line>
                <line x1="62" y1="35" x2="56" y2="18">
                    <animate attributeName="y2" values="18;30;18" dur="1.5s" repeatCount="indefinite"/>
                </line>
                <rect x="44" y="10" width="12" height="8" stroke="#6366f1" rx="2">
                    <animate attributeName="y" values="10;22;10" dur="1.5s" repeatCount="indefinite"/>
                </rect>
                <line x1="50" y1="65" x2="42" y2="88"/>
                <line x1="50" y1="65" x2="58" y2="88"/>
            </svg>
        `
    },
    {
        id: "marcha-sitio",
        name: "Marcha en el Sitio (High Knees)",
        category: "cardio",
        desc: "Cardio sin impacto alternando elevación de rodillas. Versión sin salto de las escaladas, ideal para principiantes.",
        difficulty: "Baja",
        time: "3 series de 2 min",
        icon: "lucide-footprints",
        equipment: "none",
        cardioIntensity: "moderate",
        jointStress: [],
        lightAlternative: "Marcha lenta con rodillas a la altura de las caderas",
        muscleGroups: ['Flexores de Cadera', 'Cuádriceps', 'Core', 'Cardio'],
        steps: [
            'Párate derecho con los pies a la altura de las caderas.',
            'Levanta la rodilla derecha hacia el pecho a la altura del ombligo.',
            'Baja y alterna con la rodilla izquierda en un movimiento continuo.',
            'Mueve los brazos en oposición a las rodillas como al caminar.',
            'Mantén el ritmo que puedas sostener 2 minutos continuos.'
        ],
        benefits: 'Cardio sin salto que eleva la frecuencia cardíaca, activa el core y puede hacerse en cualquier espacio pequeño.',
        tipsDiabetic: "Ideal para activar el metabolismo antes o después de comer sin riesgo articular.",
        tipsHypertensive: "Completamente seguro. Controla el ritmo y baja las rodillas menos alto si es necesario.",
        tipsJointPain: "Sin impacto en suelo. Si hay dolor de cadera, reduce la altura de la rodilla.",
        visualSvg: `
            <svg viewBox="0 0 100 100" width="100%" height="100%" style="background:#141620; stroke:#6366f1; stroke-width:3; fill:none; stroke-linecap:round;">
                <circle cx="50" cy="22" r="6" stroke="#10b981"/>
                <line x1="50" y1="28" x2="50" y2="58"/>
                <line x1="50" y1="36" x2="35" y2="46">
                    <animate attributeName="x2" values="35;65;35" dur="0.7s" repeatCount="indefinite"/>
                    <animate attributeName="y2" values="46;38;46" dur="0.7s" repeatCount="indefinite"/>
                </line>
                <line x1="50" y1="58" x2="38" y2="68">
                    <animate attributeName="x2" values="38;62;38" dur="0.7s" repeatCount="indefinite"/>
                    <animate attributeName="y2" values="68;55;68" dur="0.7s" repeatCount="indefinite"/>
                </line>
                <line x1="50" y1="58" x2="62" y2="85">
                    <animate attributeName="x2" values="62;38;62" dur="0.7s" repeatCount="indefinite"/>
                </line>
            </svg>
        `
    },
    {
        id: "estiramiento-completo",
        name: "Estiramiento de Cuerpo Completo (Post-Entreno)",
        category: "movilidad",
        desc: "Rutina de estiramiento estático para recuperación muscular. Se realiza siempre al final de la sesión.",
        difficulty: "Baja",
        time: "10-15 min",
        icon: "lucide-refresh-cw",
        equipment: "none",
        cardioIntensity: "low",
        jointStress: [],
        lightAlternative: "Estiramiento solo de las partes trabajadas",
        muscleGroups: ['Todo el Cuerpo', 'Recuperación', 'Flexibilidad'],
        steps: [
            'Cuádriceps: de pie, jala el tobillo hacia el glúteo durante 30 segundos por pierna.',
            'Isquiotibiales: siéntate, estira las piernas y alcanza los pies 30 seg.',
            'Espalda baja: posición fetal, rodillas al pecho, 30 segundos.',
            'Pecho: brazos abiertos contra una pared o puerta, inclínate 30 seg.',
            'Cuello y hombros: rotaciones suaves 8 veces cada dirección.'
        ],
        benefits: 'Reduce el dolor muscular post-entrenamiento (DOMS), mejora la flexibilidad y acelera la recuperación para la siguiente sesión.',
        tipsDiabetic: "Importante para la recuperación. Ayuda a normalizar la glucosa después del ejercicio.",
        tipsHypertensive: "Estiramiento estático es completamente seguro. Baja la presión naturalmente.",
        tipsJointPain: "El estiramiento regular mejora el rango articular y reduce la rigidez crónica.",
        visualSvg: `
            <svg viewBox="0 0 100 100" width="100%" height="100%" style="background:#141620; stroke:#6366f1; stroke-width:3; fill:none; stroke-linecap:round;">
                <circle cx="50" cy="28" r="6" stroke="#10b981"/>
                <line x1="50" y1="34" x2="50" y2="62"/>
                <line x1="50" y1="45" x2="20" y2="38">
                    <animate attributeName="x2" values="20;10;20" dur="3s" repeatCount="indefinite"/>
                    <animate attributeName="y2" values="38;28;38" dur="3s" repeatCount="indefinite"/>
                </line>
                <line x1="50" y1="45" x2="80" y2="38">
                    <animate attributeName="x2" values="80;90;80" dur="3s" repeatCount="indefinite"/>
                    <animate attributeName="y2" values="38;28;38" dur="3s" repeatCount="indefinite"/>
                </line>
                <line x1="50" y1="62" x2="30" y2="88"/>
                <line x1="50" y1="62" x2="70" y2="88"/>
            </svg>
        `
    },
    {
        id: "yoga-perro-boca-abajo",
        name: "Perro Boca Abajo (Downward Dog)",
        category: "movilidad",
        desc: "Postura de yoga fundamental. Estira isquiotibiales, pantorrillas, hombros y columna simultáneamente.",
        difficulty: "Baja",
        time: "5 repeticiones de 30 seg",
        icon: "lucide-refresh-cw",
        equipment: "none",
        cardioIntensity: "low",
        jointStress: ["wrist_elbow"],
        lightAlternative: "Estiramiento de isquiotibial sentado en silla",
        muscleGroups: ['Isquiotibiales', 'Pantorrillas', 'Hombros', 'Columna'],
        steps: [
            'Empieza en posición de cuatro apoyos: manos bajo los hombros, rodillas bajo las caderas.',
            'Dobla los dedos del pie hacia adelante (agarra el suelo) e inhala.',
            'Exhala y eleva las caderas hacia el techo, extendiendo rodillas y codos.',
            'Forma una V invertida con el cuerpo: manos y pies en el suelo, caderas arriba.',
            'Empuja los talones hacia el suelo (aunque no lleguen) y mantén 30 segundos.'
        ],
        benefits: 'Descomprime la columna, estira toda la cadena posterior y libera tensión de hombros y cuello después de ejercicios intensos.',
        tipsDiabetic: "La inversión parcial mejora la circulación. Excelente para la vuelta a la calma.",
        tipsHypertensive: "La inversión es suave (caderas por encima del corazón) — muy segura para hipertensos controlados.",
        tipsJointPain: "Si hay molestia en muñecas, apoya los puños cerrados en lugar de las palmas abiertas.",
        visualSvg: `
            <svg viewBox="0 0 100 100" width="100%" height="100%" style="background:#141620; stroke:#6366f1; stroke-width:3; fill:none; stroke-linecap:round;">
                <line x1="5" y1="88" x2="95" y2="88" stroke="rgba(255,255,255,0.1)" stroke-width="2"/>
                <circle cx="50" cy="20" r="6" stroke="#10b981"/>
                <line x1="50" y1="26" x2="25" y2="62"/>
                <line x1="50" y1="26" x2="75" y2="62"/>
                <line x1="25" y1="62" x2="15" y2="88"/>
                <line x1="75" y1="62" x2="85" y2="88"/>
                <circle cx="50" cy="20" r="3" stroke="#6366f1" fill="none">
                    <animate attributeName="cy" values="20;18;20" dur="3s" repeatCount="indefinite"/>
                </circle>
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
    userAllowedExercises: [], // ej. ['flexiones-suelo', 'mountain-climbers'] ejercicios aprobados manualmente por el usuario
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
    loadUserProfile();
    if (state.user.weight > 0) {
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

// Función global para el botón "Generar mi Plan con IA" (type=button, sin submit nativo)
window.handleWizardSubmit = function() {
    // Validar todos los campos requeridos del paso 1 explícitamente
    const w = parseFloat(document.getElementById('weight').value);
    const h = parseFloat(document.getElementById('height').value);
    const a = parseInt(document.getElementById('age').value);
    const s = document.getElementById('sex-select').value;

    if (!w || w < 30 || w > 250) {
        goToStep(1);
        setTimeout(() => { document.getElementById('weight').focus(); document.getElementById('weight').reportValidity(); }, 100);
        return;
    }
    if (!h || h < 100 || h > 250) {
        goToStep(1);
        setTimeout(() => { document.getElementById('height').focus(); document.getElementById('height').reportValidity(); }, 100);
        return;
    }
    if (!a || a < 12 || a > 100) {
        goToStep(1);
        setTimeout(() => { document.getElementById('age').focus(); document.getElementById('age').reportValidity(); }, 100);
        return;
    }
    if (!s) {
        goToStep(1);
        setTimeout(() => { document.getElementById('sex-select').focus(); document.getElementById('sex-select').reportValidity(); }, 100);
        return;
    }

    state.user.weight = w;
    state.user.height = h;
    state.user.age = a;
    state.user.sex = s;
    state.user.activity = activitySelect.value;

    state.user.isDiabetic = diabeticCheckbox.checked;
    state.user.cardioCondition = cardioConditionSelect.value;
    state.user.respiratoryCondition = respiratoryConditionSelect.value;

    state.user.injuryZones = Array.from(zoneChips)
        .filter(c => c.classList.contains('active') && c.getAttribute('data-zone') !== 'none')
        .map(c => c.getAttribute('data-zone'));

    state.user.cycleTracking = {
        enabled: s === 'female' && cycleTrackingCheckbox.checked,
        lastPeriodDate: lastPeriodDateInput.value || '',
        cycleLength: parseInt(cycleLengthInput.value) || 28
    };

    const activeResourceCard = document.querySelector('#resource-options .resource-card.active');
    state.user.resources = activeResourceCard ? activeResourceCard.getAttribute('data-resource') : 'none';

    state.user.ownedEquipment = Array.from(document.querySelectorAll('.equip-chip.active'))
        .map(c => c.getAttribute('data-equipment'));

    state.user.intensity = intensitySelect.value;
    state.user.isHypertensive = state.user.cardioCondition === 'hypertension';
    state.user.hasJointPain = state.user.injuryZones.length > 0;

    calculateIMC();
    saveUserProfile();
    updateUIWithUserData();
    showScreen(mainApp);
    generateDashboardRoutine();
    initChat();
};

// Mantener el listener del form como fallback (por si alguien presiona Enter)
onboardingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    handleWizardSubmit();
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

    const userAllowed = (user.userAllowedExercises || []).includes(ex.id);
    const safe = (intensityOk && !zoneConflict && equipmentOk) || userAllowed;

    if (userAllowed) {
        reasons.positive.push('Habilitado manualmente por ti');
    }

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

    saveUserProfile();

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
    const meals = state.user.mealsPerDay || 4;
    const maxPerMeal = Math.round(targets.targetCalories / meals);

    calorieSummary.innerHTML = `
        <div class="calorie-hero">
            <span class="calorie-num">${targets.targetCalories}</span>
            <span class="calorie-label">kcal / día · ${goalLabels[state.user.dietGoal] || ''}</span>
        </div>
        <p class="calorie-sub-note">Gasto energético estimado (TDEE): ${targets.tdee} kcal · Metabolismo basal: ${targets.bmr} kcal</p>
        
        <!-- Tarjeta de Límites Calóricos -->
        <div class="calorie-limit-card">
            <div class="calorie-limit-info">
                <h5><i class="lucide-alert-circle"></i> Máximo Recomendado por Comida</h5>
                <p>Distribuido en <strong>${meals} comidas/día</strong>. Para no exceder tu meta diaria.</p>
            </div>
            <div class="calorie-limit-badge">~${maxPerMeal} kcal</div>
        </div>

        <div class="stats-list" style="margin-top:16px;">
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
            const caloriesText = ev.food.caloriesPer100g ? `${ev.food.caloriesPer100g} kcal/100g` : 'Aprox';

            return `
                <div class="food-item-chip">
                    <div class="food-item-header">
                        <span class="food-name">${ev.food.name}</span>
                        <span class="food-kcal-badge">${caloriesText}</span>
                    </div>
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

function toggleUserAllowedExercise(exerciseId) {
    if (!state.user.userAllowedExercises) state.user.userAllowedExercises = [];
    const idx = state.user.userAllowedExercises.indexOf(exerciseId);
    if (idx >= 0) {
        state.user.userAllowedExercises.splice(idx, 1);
    } else {
        state.user.userAllowedExercises.push(exerciseId);
    }
    saveUserProfile();
    filterExercises();
    generateDashboardRoutine();
}

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
        const isUserAllowed = (state.user.userAllowedExercises || []).includes(ex.id);

        card.className = `exercise-card${evaluation.safe ? '' : ' not-recommended'}`;

        const typeName = ex.category === 'fuerza' ? 'Fuerza' : ex.category === 'movilidad' ? 'Movilidad' : 'Cardio';
        const typeClass = ex.category;

        const diffClass = ex.difficulty === 'Baja' ? 'diff-baja' : ex.difficulty === 'Media' ? 'diff-media' : 'diff-alta';

        const muscleTags = (ex.muscleGroups || []).slice(0, 3)
            .map(m => `<span class="muscle-tag">${m}</span>`).join('');

        const recommendationHtml = evaluation.safe
            ? `<div class="recommendation-tag positive"><i class="lucide-check-circle"></i> Recomendado</div>`
            : `<div class="recommendation-tag negative"><i class="lucide-alert-triangle"></i> ${evaluation.reasons.blocking[0]}</div>`;

        const allowBtnText = isUserAllowed ? '<i class="lucide-check-square"></i> Habilitado por ti' : '<i class="lucide-plus-circle"></i> Yo soporto este ejercicio';
        const allowBtnClass = isUserAllowed ? 'btn-allow-exercise active' : 'btn-allow-exercise';

        const visualContent = ex.visualSvg ? ex.visualSvg : `<i class="${ex.icon}"></i>`;

        card.innerHTML = `
            <div class="exercise-img-ph">
                ${visualContent}
                <span class="exercise-type-tag ${typeClass}">${typeName}</span>
                <span class="exercise-tap-hint"><i class="lucide-eye"></i> Ver detalles</span>
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
                <button type="button" class="${allowBtnClass}" data-id="${ex.id}">${allowBtnText}</button>
            </div>
        `;

        card.querySelector('.btn-allow-exercise').addEventListener('click', (e) => {
            e.stopPropagation();
            toggleUserAllowedExercise(ex.id);
        });

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
    const isUserAllowed = (state.user.userAllowedExercises || []).includes(ex.id);
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

    // Tips de salud & Habilitación Manual en Modal
    let healthHtml = '';
    const allowBtnText = isUserAllowed ? '<i class="lucide-check-square"></i> Habilitado por ti (Quitar)' : '<i class="lucide-plus-circle"></i> Yo soporto este ejercicio';
    const allowBtnClass = isUserAllowed ? 'btn-allow-exercise active' : 'btn-allow-exercise';

    healthHtml += `
        <div class="modal-allow-section" style="margin-top:14px; padding:12px; background:var(--surface-2); border-radius:var(--radius-md); border:1px solid var(--border-color); text-align:center;">
            <p style="font-size:0.8rem; color:var(--text-secondary); margin-bottom:8px;">¿Conoces este ejercicio y sabes que tu cuerpo lo soporta bien?</p>
            <button type="button" id="modal-btn-allow" class="${allowBtnClass}">${allowBtnText}</button>
        </div>
    `;

    if (state.user.isDiabetic && ex.tipsDiabetic) {
        healthHtml += `<div class="exercise-tip diabetic"><i class="lucide-shield-alert"></i><span><strong>Diabetes:</strong> ${ex.tipsDiabetic}</span></div>`;
    }
    if (state.user.isHypertensive && ex.tipsHypertensive) {
        healthHtml += `<div class="exercise-tip hypertensive"><i class="lucide-heart-pulse"></i><span><strong>Presión Alta:</strong> ${ex.tipsHypertensive}</span></div>`;
    }
    if (state.user.hasJointPain && ex.tipsJointPain) {
        healthHtml += `<div class="exercise-tip joint"><i class="lucide-bone"></i><span><strong>Articulaciones:</strong> ${ex.tipsJointPain}</span></div>`;
    }

    modalHealthTips.innerHTML = `<div class="modal-section-title">Opciones & Consejos</div>${healthHtml}`;

    const modalAllowBtn = document.getElementById('modal-btn-allow');
    if (modalAllowBtn) {
        modalAllowBtn.addEventListener('click', () => {
            toggleUserAllowedExercise(ex.id);
            closeExerciseModal();
        });
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
    statusEl.textContent = 'En línea (Atención 24/7)';
    statusEl.style.color = 'var(--accent)';
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

// ==========================================
// GOOGLE AUTHENTICATION & MULTI-USER STORAGE
// ==========================================

let currentGoogleUser = JSON.parse(localStorage.getItem('iafit_google_user') || 'null');

function getUserStorageKey() {
    if (currentGoogleUser && currentGoogleUser.email) {
        return `iafit_user_${currentGoogleUser.email}`;
    }
    return 'iafit_user';
}

function loadUserProfile() {
    const key = getUserStorageKey();
    const saved = localStorage.getItem(key);
    if (saved) {
        try {
            state.user = { ...DEFAULT_USER, ...JSON.parse(saved) };
        } catch (e) {
            state.user = JSON.parse(JSON.stringify(DEFAULT_USER));
        }
    } else {
        state.user = JSON.parse(JSON.stringify(DEFAULT_USER));
    }
}

function saveUserProfile() {
    const key = getUserStorageKey();
    localStorage.setItem(key, JSON.stringify(state.user));
}

function parseJwt(token) {
    try {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        return JSON.parse(jsonPayload);
    } catch (e) {
        return null;
    }
}

function updateGoogleUserUI() {
    const activeBadge = document.getElementById('google-user-active-badge');
    const headerChip = document.getElementById('google-profile-chip');
    const loginBtn = document.getElementById('btn-google-login-header');
    const loginArea = document.getElementById('google-login-area');

    if (currentGoogleUser) {
        // Usuario logueado: mostrar chip en header, ocultar botón de login
        if (loginBtn) loginBtn.style.display = 'none';
        if (loginArea) loginArea.style.display = 'none';
        if (activeBadge) {
            activeBadge.style.display = 'flex';
            activeBadge.innerHTML = `
                <img src="${currentGoogleUser.picture || ''}" class="google-user-avatar" alt="Avatar" onerror="this.style.display='none'">
                <span><strong>${currentGoogleUser.name}</strong></span>
                <button onclick="logoutGoogleUser()" class="google-logout-btn" title="Cerrar Sesión"><i class="lucide-log-out"></i></button>
            `;
        }
        if (headerChip) {
            headerChip.style.display = 'flex';
            headerChip.innerHTML = `
                <img src="${currentGoogleUser.picture || ''}" alt="${currentGoogleUser.given_name || currentGoogleUser.name}" onerror="this.style.background='var(--primary)'; this.alt='${(currentGoogleUser.given_name || currentGoogleUser.name).charAt(0)}'">
                <span>${currentGoogleUser.given_name || currentGoogleUser.name}</span>
                <button onclick="logoutGoogleUser()" class="google-logout-btn" title="Cerrar Sesión"><i class="lucide-log-out"></i></button>
            `;
        }
    } else {
        // Sin sesión: mostrar botón de login en header, mostrar área de login en onboarding
        if (loginBtn) loginBtn.style.display = 'flex';
        if (loginArea) loginArea.style.display = 'flex';
        if (activeBadge) {
            activeBadge.style.display = 'none';
            activeBadge.innerHTML = '';
        }
        if (headerChip) {
            headerChip.style.display = 'none';
            headerChip.innerHTML = '';
        }
    }
}

window.handleGoogleCredentialResponse = function(response) {
    const payload = parseJwt(response.credential);
    if (payload) {
        currentGoogleUser = {
            email: payload.email,
            name: payload.name,
            given_name: payload.given_name,
            picture: payload.picture
        };
        localStorage.setItem('iafit_google_user', JSON.stringify(currentGoogleUser));
        
        // Cargar el perfil de esta persona
        loadUserProfile();
        updateGoogleUserUI();
        updateUIWithUserData();

        if (state.user.weight > 0) {
            showScreen(mainApp);
            generateDashboardRoutine();
            initChat();
        } else {
            showScreen(onboardingScreen);
        }
    }
};

window.logoutGoogleUser = function() {
    currentGoogleUser = null;
    localStorage.removeItem('iafit_google_user');
    loadUserProfile();
    updateGoogleUserUI();
    updateUIWithUserData();

    if (state.user.weight > 0) {
        showScreen(mainApp);
        generateDashboardRoutine();
        initChat();
    } else {
        showScreen(onboardingScreen);
    }
};

function initGoogleAuth() {
    updateGoogleUserUI();
    if (window.google && google.accounts && google.accounts.id) {
        try {
            google.accounts.id.initialize({
                client_id: "1098234876123-placeholder.apps.googleusercontent.com", // Google Client ID genérico o de producción
                callback: handleGoogleCredentialResponse,
                auto_select: false
            });
            const onboardingParent = document.getElementById('g_id_onload_onboarding');
            if (onboardingParent) {
                google.accounts.id.renderButton(
                    onboardingParent,
                    { theme: "outline", size: "large", text: "continue_with", shape: "rectangular" }
                );
            }
        } catch (err) {
            console.warn('[IAFit] Google Sign-In init note:', err.message);
        }
    }
}

// ==========================================
// MODAL DE LOGIN PROPIO (funciona sin SDK de Google)
// ==========================================
window.showGoogleLoginModal = function() {
    const modal = document.getElementById('google-login-modal');
    if (modal) {
        modal.style.display = 'flex';
        setTimeout(() => modal.classList.add('visible'), 10);
        const nameInput = document.getElementById('mock-google-name');
        if (nameInput) nameInput.focus();
    }
};

window.closeGoogleLoginModal = function() {
    const modal = document.getElementById('google-login-modal');
    if (modal) {
        modal.classList.remove('visible');
        setTimeout(() => { modal.style.display = 'none'; }, 200);
    }
};

window.confirmMockGoogleLogin = function() {
    const nameInput = document.getElementById('mock-google-name');
    const emailInput = document.getElementById('mock-google-email');
    const name = (nameInput ? nameInput.value.trim() : '') || 'Usuario IAFit';
    const email = (emailInput ? emailInput.value.trim() : '') || `user_${Date.now()}@iafit.local`;

    // Generar un avatar con la inicial del nombre
    const initial = name.charAt(0).toUpperCase();
    const colors = ['#6366f1','#10b981','#f59e0b','#ec4899','#3b82f6'];
    const color = colors[name.charCodeAt(0) % colors.length];
    const avatarSvg = `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'><rect width='40' height='40' rx='20' fill='${encodeURIComponent(color)}'/><text x='50%' y='54%' dominant-baseline='middle' text-anchor='middle' font-family='Outfit,sans-serif' font-size='18' font-weight='700' fill='white'>${initial}</text></svg>`;

    currentGoogleUser = {
        email: email,
        name: name,
        given_name: name.split(' ')[0],
        picture: avatarSvg
    };
    localStorage.setItem('iafit_google_user', JSON.stringify(currentGoogleUser));

    closeGoogleLoginModal();
    loadUserProfile();
    updateGoogleUserUI();

    // Mostrar confirmación visual
    const badge = document.getElementById('google-user-active-badge');
    if (badge) badge.style.animation = 'none';
};

// Función para disparar el login desde el botón del header
window.triggerGoogleLogin = function() {
    showGoogleLoginModal();
};

// Cerrar modal al hacer click fuera
document.addEventListener('click', (e) => {
    const modal = document.getElementById('google-login-modal');
    if (modal && modal.style.display !== 'none' && e.target === modal) {
        closeGoogleLoginModal();
    }
});

// Inicializar Google Auth cuando la ventana termine de cargar
window.addEventListener('load', () => {
    initGoogleAuth();
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
