/* ============================================================
   RIR Ingeniería — i18n (ES ⇄ EN)
   Traducción manual. Diccionario español → inglés aplicado por
   nodos de texto. Persiste el idioma en localStorage entre páginas.
   ============================================================ */
(function () {
  const DICT = {
    /* ---- Navegación ---- */
    "Nosotros": "About",
    "Integridad": "Integrity",
    "Proyectos": "Projects",
    "Proceso": "Process",
    "Contacto": "Contact",
    "Ingeniería": "Engineering",
    "Linktree": "Linktree",

    /* ---- Hero ---- */
    "República Dominicana — Ingeniería & Construcción": "Dominican Republic — Engineering & Construction",
    "Construimos con": "We build with",
    "integridad.": "integrity.",
    "Ejecutamos con": "We execute with",
    "precisión.": "precision.",
    "RIR Ingeniería desarrolla proyectos constructivos con visión técnica, responsabilidad profesional y compromiso absoluto con la calidad.": "RIR Ingeniería develops construction projects with technical vision, professional responsibility and an absolute commitment to quality.",
    "Ver proyectos": "View projects",
    "Conocer la empresa": "Learn about the company",
    "Scroll": "Scroll",

    /* ---- Liderazgo ---- */
    "Liderazgo": "Leadership",
    "Liderazgo en el que": "Leadership you can",
    "puedes confiar.": "trust.",
    "Ingeniero · Director": "Engineer · Director",
    "Al frente de RIR Ingeniería, Raymel Infante combina criterio técnico, experiencia constructiva y un compromiso absoluto con hacer las cosas bien. Su forma de dirigir se traduce en obras planificadas con rigor y ejecutadas con responsabilidad en cada etapa.": "At the helm of RIR Ingeniería, Raymel Infante combines technical judgment, construction experience and an absolute commitment to doing things right. His leadership translates into projects planned with rigor and executed responsibly at every stage.",
    "Para él, cada proyecto es una promesa: construir con integridad, comunicar con transparencia y entregar exactamente lo prometido — desde el primer plano hasta la entrega final.": "For him, every project is a promise: to build with integrity, communicate with transparency and deliver exactly what was promised — from the first blueprint to the final handover.",
    "* Descripción preliminar — se actualizará con la trayectoria y los datos reales.": "* Preliminary description — to be updated with the real background and details.",

    /* ---- Quiénes somos ---- */
    "Quiénes somos": "About us",
    "Una firma de ingeniería": "An engineering firm",
    "construida sobre criterio": "built on technical",
    "técnico y responsabilidad real.": "judgment and real responsibility.",
    "RIR Ingeniería convierte planificación, criterio técnico y responsabilidad constructiva en obras reales. Cada proyecto se desarrolla con una visión clara: construir estructuras sólidas, funcionales y pensadas para permanecer.": "RIR Ingeniería turns planning, technical judgment and construction responsibility into real works. Every project is developed with a clear vision: to build solid, functional structures designed to last.",
    "No construimos solo espacios. Construimos confianza medible. Cada decisión técnica tiene una consecuencia, y por eso cada detalle importa desde el primer plano hasta la entrega final.": "We don't just build spaces. We build measurable trust. Every technical decision has a consequence, and that's why every detail matters — from the first blueprint to the final handover.",
    "Proyectos ejecutados": "Completed projects",
    "Compromiso técnico": "Technical commitment",
    "Años en el sector construcción": "Years in construction",
    "Apartamentos realizados": "Apartments delivered",
    "Presencia nacional": "Nationwide presence",
    "República Dominicana": "Dominican Republic",
    "Ingeniería & Construcción": "Engineering & Construction",
    "& Construcción": "& Construction",

    /* ---- Integridad ---- */
    "Nuestro fundamento": "Our foundation",
    "“La confianza no se promete:": "“Trust isn't promised:",
    "se construye.": "it's built.",
    "En RIR Ingeniería, la integridad está presente desde la primera conversación hasta la entrega final. Significa presupuestos claros, procesos responsables, decisiones técnicas correctas y compromiso real con cada cliente.": "At RIR Ingeniería, integrity is present from the first conversation to the final handover. It means clear budgets, responsible processes, sound technical decisions and a real commitment to every client.",
    "Transparencia": "Transparency",
    "Presupuestos claros. Comunicación directa. Sin letra pequeña. La integridad se demuestra cuando el plano se convierte en obra.": "Clear budgets. Direct communication. No fine print. Integrity is proven when the blueprint becomes a building.",
    "Responsabilidad": "Responsibility",
    "Cada obra exige precisión. Cada cliente merece transparencia. Asumimos el peso técnico y profesional de cada proyecto.": "Every project demands precision. Every client deserves transparency. We take on the technical and professional weight of each project.",
    "Calidad Técnica": "Technical Quality",
    "El verdadero valor de una estructura está en lo que no se ve: planificación, criterio y responsabilidad construida en cada capa.": "The true value of a structure lies in what you don't see: planning, judgment and responsibility built into every layer.",
    "Seguridad": "Safety",
    "Cada decisión técnica tiene una consecuencia. Nuestros estándares de seguridad no son negociables en ninguna etapa constructiva.": "Every technical decision has a consequence. Our safety standards are non-negotiable at every construction stage.",
    "Cumplimiento": "Reliability",
    "Respetamos tiempos, presupuestos y estándares. Una obra bien ejecutada empieza mucho antes del primer vaciado.": "We respect timelines, budgets and standards. A well-executed project begins long before the first pour.",
    "Permanencia": "Permanence",
    "Construimos estructuras pensadas para permanecer. La obra termina cuando la confianza del cliente queda en pie.": "We build structures designed to last. The work is done when the client's trust stands firm.",

    /* ---- Proyectos (encabezado) ---- */
    "Proyectos realizados": "Completed projects",
    "Obras que hablan": "Work that speaks",
    "por sí": "for",
    "mismas.": "itself.",
    "Cada proyecto es la expresión de un compromiso técnico y profesional asumido con seriedad, criterio y rigor constructivo.": "Each project is the expression of a technical and professional commitment taken on with seriousness, judgment and construction rigor.",
    "Ver proyecto": "View project",
    "Foto próximamente": "Photo coming soon",

    /* ---- Tipos de proyecto (eyebrow / tarjeta) ---- */
    "Desarrollo Residencial": "Residential Development",
    "Complejo Residencial Premium": "Premium Residential Complex",
    "Residencial de Diseño": "Design Residential",
    "Torre Residencial / Comercial": "Residential / Commercial Tower",
    "Condominio Residencial": "Residential Condominium",
    "Residencial de vanguardia": "Avant-garde Residential",

    /* ---- Descripciones de proyecto ---- */
    "Proyecto residencial contemporáneo con unidades de 1, 2 y 3 habitaciones, pensado para parejas, familias, viajeros ejecutivos e inversionistas que buscan comodidad, diseño y ubicación estratégica.": "Contemporary residential project with 1, 2 and 3-bedroom units, designed for couples, families, executive travelers and investors seeking comfort, design and a strategic location.",
    "Proyecto que combina diseño moderno, espacios amplios, iluminación natural y vistas panorámicas de la ciudad, ofreciendo apartamentos pensados para quienes buscan comodidad, elegancia y una experiencia residencial de alto nivel.": "A project that combines modern design, spacious interiors, natural light and panoramic city views, offering apartments designed for those seeking comfort, elegance and a high-end residential experience.",
    "Proyecto residencial moderno de diseño minimalista, ubicado en una zona estratégica de Santiago. Combina confort, calidez y elegancia, creando espacios pensados para la vida familiar y el disfrute diario.": "A modern residential project with minimalist design, located in a strategic area of Santiago. It combines comfort, warmth and elegance, creating spaces designed for family life and everyday enjoyment.",
    "Proyecto residencial de vanguardia ubicado en el sector La Esmeralda, Santiago. Su diseño integra espacios abiertos, áreas verdes, amenidades funcionales y apartamentos pensados para responder a las necesidades del diario vivir con comodidad, eficiencia y estilo.": "An avant-garde residential project located in the La Esmeralda sector, Santiago. Its design integrates open spaces, green areas, functional amenities and apartments designed to meet the needs of everyday living with comfort, efficiency and style.",
    "Innovador proyecto residencial ubicado en una de las zonas de mayor crecimiento de Santiago. Su diseño combina líneas arquitectónicas modernas, espacios funcionales, iluminación natural y una distribución pensada para ofrecer confort, privacidad y seguridad a cada familia.": "An innovative residential project located in one of Santiago's fastest-growing areas. Its design combines modern architectural lines, functional spaces, natural light and a layout designed to offer comfort, privacy and security to every family.",

    /* ---- Comentarios / cita de cada proyecto ---- */
    "Solengo fue concebido como un proyecto funcional, moderno y rentable. Cada espacio ha sido diseñado para aprovechar al máximo la distribución, la iluminación natural y la comodidad del usuario, integrando terminaciones de calidad, amenidades prácticas y una ubicación estratégica que lo convierte en una excelente opción tanto para vivir como para invertir.": "Solengo was conceived as a functional, modern and profitable project. Each space has been designed to make the most of the layout, natural light and user comfort, integrating quality finishes, practical amenities and a strategic location that makes it an excellent option both to live in and to invest.",
    "En Mureña Residences buscamos desarrollar una torre residencial que integrara funcionalidad, estética y confort. Cada espacio fue pensado para aprovechar la iluminación natural, las vistas y la distribución interior, creando un proyecto moderno que eleva la experiencia de vivir en una de las zonas más exclusivas de Santiago.": "At Mureña Residences we set out to develop a residential tower that integrates functionality, aesthetics and comfort. Every space was designed to take advantage of natural light, views and interior layout, creating a modern project that elevates the experience of living in one of Santiago's most exclusive areas.",
    "Residenza representa un proyecto pensado desde la funcionalidad y la vida familiar. Buscamos crear espacios cómodos, bien distribuidos y con terminaciones de calidad, manteniendo una arquitectura moderna y práctica que responda a las necesidades reales de quienes desean vivir en un entorno seguro, elegante y bien ubicado.": "Residenza represents a project conceived around functionality and family life. We aim to create comfortable, well-distributed spaces with quality finishes, maintaining a modern, practical architecture that meets the real needs of those who want to live in a safe, elegant and well-located environment.",
    "Siena nace con la intención de crear una propuesta diferente dentro de Santiago. Su diseño tipo escalera no solo aporta una imagen arquitectónica única, sino que también permite generar espacios más abiertos, terrazas mejor aprovechadas y una relación más directa con las vistas de la ciudad. Es un proyecto pensado para destacar, pero también para responder con eficiencia a las necesidades reales de sus residentes.": "Siena was born with the intention of creating a different proposal within Santiago. Its staircase-style design not only delivers a unique architectural image, but also generates more open spaces, better-utilized terraces and a more direct connection to the city views. It is a project designed to stand out, but also to respond efficiently to the real needs of its residents.",
    "En Vera Condos buscamos desarrollar un proyecto residencial que se sintiera práctico, seguro y fácil de habitar. Cada apartamento fue pensado para ofrecer una distribución clara, espacios bien aprovechados y áreas comunes funcionales, manteniendo una arquitectura moderna que responde al estilo de vida de las familias actuales.": "At Vera Condos we set out to develop a residential project that felt practical, secure and easy to live in. Each apartment was designed to offer a clear layout, well-utilized spaces and functional common areas, maintaining a modern architecture that responds to the lifestyle of today's families.",

    /* ---- Tarjeta: etiquetas y valores ---- */
    "Ubicación": "Location",
    "Categoría": "Category",
    "Tipologías": "Unit types",
    "Ideal para": "Ideal for",
    "Valor del proyecto": "Project value",
    "Diferencial": "Key differentiator",
    "Residencial contemporáneo": "Contemporary residential",
    "Residencial de apartamentos": "Apartment residential",
    "Proyecto residencial de vanguardia": "Avant-garde residential project",
    "Ubicación estratégica y diseño funcional": "Strategic location and functional design",
    "Arquitectura tipo escalera con un diseño único en Santiago, pensado para integrar vistas, terrazas y espacios abiertos": "Staircase-style architecture with a unique design in Santiago, conceived to integrate views, terraces and open spaces",
    "Apartamentos de 62, 82, 105 y 137 m²": "Apartments of 62, 82, 105 and 137 m²",
    "Apartamentos de 120, 135 y 189 m²": "Apartments of 120, 135 and 189 m²",
    "Apartamentos de 95, 97, 114 y 117 m²": "Apartments of 95, 97, 114 and 117 m²",
    "Apartamentos de 80 y 125 m²": "Apartments of 80 and 125 m²",
    "Familias que buscan un hogar moderno en una zona exclusiva de Santiago": "Families looking for a modern home in an exclusive area of Santiago",
    "Familias que buscan un residencial moderno en una zona estratégica de Santiago": "Families looking for a modern residential in a strategic area of Santiago",
    "Familias que buscan exclusividad, comodidad y una ubicación céntrica en Santiago": "Families seeking exclusivity, comfort and a central location in Santiago",
    "Familias que buscan confort, seguridad y una vivienda moderna en Santiago": "Families looking for comfort, security and a modern home in Santiago",

    /* ---- Proceso ---- */
    "Método constructivo": "Construction method",
    "Antes de construir,": "Before we build,",
    "planificamos.": "we plan.",
    "Cada proyecto avanza con método. Antes de construir, planificamos. Antes de ejecutar, verificamos. Antes de entregar, aseguramos que cada detalle responda al estándar prometido.": "Every project advances with method. Before building, we plan. Before executing, we verify. Before delivering, we make sure every detail meets the promised standard.",
    "Planificación": "Planning",
    "Análisis técnico, levantamiento de requerimientos y definición del alcance exacto antes de comprometer un solo peso o un solo día.": "Technical analysis, requirements gathering and definition of the exact scope before committing a single peso or a single day.",
    "Diseño estructural, cálculos verificados y documentación técnica completa. El error se previene en los planos, no se corrige en la obra.": "Structural design, verified calculations and complete technical documentation. Errors are prevented in the drawings, not fixed on site.",
    "Coordinación": "Coordination",
    "Gestión integrada de equipos, materiales, proveedores y cronogramas. Cada variable controlada para que la ejecución fluya sin improvisación.": "Integrated management of teams, materials, suppliers and schedules. Every variable controlled so execution flows without improvisation.",
    "Supervisión": "Supervision",
    "Control técnico permanente en cada etapa. Lo que se construye se verifica. Lo que se verifica responde al plano. Lo que responde al plano, permanece.": "Permanent technical control at every stage. What is built is verified. What is verified matches the drawing. What matches the drawing, lasts.",
    "Ejecución": "Execution",
    "Construcción con rigor técnico, equipos calificados y materiales verificados. Cada vaciado, cada estructura, cada terminación responde a un estándar real.": "Construction with technical rigor, qualified teams and verified materials. Every pour, every structure, every finish meets a real standard.",
    "Control de Calidad": "Quality Control",
    "Verificación sistemática en cada etapa clave. No entregamos lo que parece correcto: entregamos lo que demostramos que es correcto.": "Systematic verification at every key stage. We don't deliver what looks right: we deliver what we prove is right.",
    "Protocolos de seguridad estructural y de obra no negociables. Cada persona en el sitio y cada estructura entregada responde a ese compromiso.": "Non-negotiable structural and site safety protocols. Every person on site and every structure delivered honors that commitment.",
    "Entrega": "Handover",
    "La obra se entrega cuando cumple lo prometido: no antes, no con defectos pendientes, no con compromisos incumplidos. La confianza cierra cada proyecto.": "The project is delivered when it meets what was promised: not before, not with pending defects, not with unmet commitments. Trust closes every project.",
    "“La integridad se demuestra en cada plano, cada presupuesto y": "“Integrity is proven in every drawing, every budget and",
    "cada entrega.": "every handover.",

    /* ---- Contacto ---- */
    "Construyamos el próximo proyecto": "Let's build the next project",
    "con integridad.": "with integrity.",
    "Conversemos sobre una obra pensada para ejecutarse con precisión, transparencia y responsabilidad técnica. El primer paso es una conversación honesta.": "Let's talk about a project built with precision, transparency and technical responsibility. The first step is an honest conversation.",
    "Correo electrónico": "Email",
    "Teléfono": "Phone",
    "Todos los proyectos": "All projects",
    "Iniciar conversación": "Start a conversation",
    "Cuéntenos sobre su proyecto. Sin compromiso, sin presión.": "Tell us about your project. No commitment, no pressure.",
    "Nombre completo": "Full name",
    "Su nombre": "Your name",
    "Teléfono / WhatsApp": "Phone / WhatsApp",
    "correo@ejemplo.com": "email@example.com",
    "Tipo de proyecto": "Project type",
    "Seleccione una opción": "Select an option",
    "Residencial — Vivienda unifamiliar": "Residential — Single-family home",
    "Residencial — Condominio / Edificio": "Residential — Condominium / Building",
    "Comercial / Institucional": "Commercial / Institutional",
    "Remodelación": "Renovation",
    "Diseño arquitectónico": "Architectural design",
    "Otro / Consultar": "Other / Inquire",
    "Descripción del proyecto": "Project description",
    "Cuéntenos brevemente qué tiene en mente: ubicación aproximada, dimensiones, plazos, presupuesto estimado...": "Tell us briefly what you have in mind: approximate location, dimensions, timeline, estimated budget...",
    "Enviar consulta": "Send inquiry",
    "Mensaje enviado": "Message sent",
    "© 2025 RIR Ingeniería. República Dominicana. Todos los derechos reservados.": "© 2025 RIR Ingeniería. Dominican Republic. All rights reserved.",
    "Oficina principal": "Main office",
    "Ver en Google Maps": "View on Google Maps",
    "Av. Juan Pablo Duarte esq. Calle La Salle · Plaza Zona Rosa, 3er nivel, Local D 2-9 · Santiago de los Caballeros, R.D.": "Av. Juan Pablo Duarte cnr. Calle La Salle · Plaza Zona Rosa, 3rd floor, Unit D 2-9 · Santiago de los Caballeros, Dominican Republic",

    /* ---- Página de detalle (UI) ---- */
    "Volver a proyectos": "Back to projects",
    "Amenidades": "Amenities",
    "Distribución del proyecto": "Project layout",
    "Terminaciones": "Finishes",
    "Incluye": "Includes",
    "Tipos de": "Apartment",
    "apartamentos.": "types.",
    "Distribuciones diseñadas para distintos estilos de vida.": "Layouts designed for different lifestyles.",
    "Galería de": "Gallery of",
    "Imágenes y renders del desarrollo. Haz clic para ampliar.": "Images and renders of the development. Click to enlarge.",
    "Galería en preparación": "Gallery coming soon",
    "Las fotos de este proyecto se publicarán pronto.": "Photos of this project will be published soon.",
    "¿Estás interesado en": "Are you interested in",
    "alguno de nuestros proyectos?": "one of our projects?",
    "Cuéntanos cuál te llamó la atención y conversemos. Te damos toda la información, sin compromiso.": "Tell us which one caught your eye and let's talk. We'll give you all the information, no commitment.",
    "Hablar por WhatsApp": "Chat on WhatsApp",
    "Formulario de contacto": "Contact form",
    "Proyecto no encontrado": "Project not found",

    /* ---- Tipologías: tipo, habitaciones ---- */
    "Tipo A": "Type A",
    "Tipo B": "Type B",
    "Tipo C": "Type C",
    "Tipo D": "Type D",
    "Tipo B y C": "Type B & C",
    "1 habitación": "1 bedroom",
    "2 habitaciones": "2 bedrooms",
    "3 habitaciones": "3 bedrooms",
    "3 habitaciones · 2 niveles": "3 bedrooms · 2 levels",

    /* ---- Características de unidades ---- */
    "Sala": "Living room",
    "Comedor": "Dining room",
    "Sala y comedor": "Living and dining room",
    "Balcón": "Balcony",
    "Baño de visita": "Guest bathroom",
    "Medio baño de visita": "Guest half-bath",
    "Baño común": "Shared bathroom",
    "Baño de servicio": "Service bathroom",
    "Cuarto de servicio": "Maid's room",
    "Área de lavado": "Laundry area",
    "Closet de ropa blanca": "Linen closet",
    "Estar familiar": "Family room",
    "Cocina con isla": "Kitchen with island",
    "Cocina con isla opcional": "Kitchen with optional island",
    "Cocina con opción de isla": "Kitchen with island option",
    "Cocina con desayunador": "Kitchen with breakfast bar",
    "Cocina modular": "Modular kitchen",
    "Baño y walking closet": "Bathroom and walk-in closet",
    "Principal con baño y walking closet": "Master with bathroom and walk-in closet",
    "Cada habitación con baño y walking closet": "Each bedroom with bathroom and walk-in closet",
    "Habitación principal con baño, walking closet y acceso al balcón": "Master bedroom with bathroom, walk-in closet and balcony access",
    "Habitación principal con baño y walking closet": "Master bedroom with bathroom and walk-in closet",
    "Habitación principal con baño y vestidor": "Master bedroom with bathroom and dressing room",
    "Habitación secundaria con walking closet": "Secondary bedroom with walk-in closet",
    "2 habitaciones secundarias con closet": "2 secondary bedrooms with closet",
    "2 habitaciones secundarias con closets": "2 secondary bedrooms with closets",
    "Baño para habitaciones secundarias": "Bathroom for secondary bedrooms",
    "2 habitaciones, cada una con baño y closet": "2 bedrooms, each with bathroom and closet",
    "1 parqueo por apartamento": "1 parking space per apartment",
    "Terraza exterior con jacuzzi": "Outdoor terrace with jacuzzi",
    "Dos niveles": "Two levels",

    /* ---- Amenidades ---- */
    "Gimnasio equipado": "Equipped gym",
    "Lounge social": "Social lounge",
    "Terraza exterior": "Outdoor terrace",
    "Área social": "Social area",
    "Piscina": "Pool",
    "Rooftop": "Rooftop",
    "Terraza": "Terrace",
    "Área BBQ": "BBQ area",
    "Área de lounge": "Lounge area",
    "Salón de reuniones": "Meeting room",
    "Lobby climatizado": "Climate-controlled lobby",
    "Gimnasio primer nivel": "Ground-floor gym",
    "Planta eléctrica full": "Full power generator",
    "Gas centralizado": "Centralized gas",
    "2 elevadores": "2 elevators",
    "Parqueos techados": "Covered parking",
    "Juegos infantiles": "Children's playground",
    "Baños en área social": "Restrooms in social area",
    "Paisajismo": "Landscaping",
    "Elevadores": "Elevators",
    "Planta eléctrica en áreas comunes": "Power generator in common areas",
    "Control de acceso": "Access control",
    "Lobby amueblado y climatizado": "Furnished, climate-controlled lobby",
    "Oficina administrativa": "Administrative office",
    "Terrazas techadas y al aire libre en el piso 15": "Covered and open-air terraces on the 15th floor",
    "Gimnasio totalmente equipado en el piso 6": "Fully equipped gym on the 6th floor",
    "Área de juego de mesas": "Game / table area",
    "250 m² de área multiuso": "250 m² multipurpose area",
    "2 ascensores": "2 elevators",
    "Portón eléctrico": "Electric gate",
    "Circuito cerrado de vigilancia HD": "HD CCTV surveillance",
    "Ducto de basura": "Trash chute",
    "Sistema contra incendios": "Fire protection system",
    "Intercom HD": "HD intercom",
    "Sistema de gas centralizado": "Centralized gas system",
    "Lockers disponibles para venta": "Lockers available for purchase",
    "Gimnasio": "Gym",
    "Ascensor": "Elevator",

    /* ---- Distribución (Siena) ---- */
    "3 apartamentos por piso del 1er al 4to nivel": "3 apartments per floor from the 1st to the 4th level",
    "2 apartamentos por piso en el 5to nivel": "2 apartments per floor on the 5th level",
    "1 apartamento por piso del 6to al 14avo nivel": "1 apartment per floor from the 6th to the 14th level",

    /* ---- Incluye (Siena) ---- */
    "Nevera": "Refrigerator",
    "Estufa": "Stove",
    "Horno": "Oven",
    "Extractor": "Range hood",
    "Aire acondicionado en todas las habitaciones": "Air conditioning in all bedrooms",

    /* ---- Terminaciones (párrafos) ---- */
    "Porcelanato de primera, cocinas modulares, topes en granito, balcones en cristal y acero inoxidable, grifería de alta calidad, calentador de gas, cisterna y aires acondicionados en todas las habitaciones.": "First-grade porcelain tile, modular kitchens, granite countertops, glass and stainless-steel balconies, high-quality fixtures, gas water heater, cistern and air conditioning in all bedrooms.",
    "Iluminación natural en los espacios, cocina moderna, balcones con vistas, espacios amplios y funcionales, diseño contemporáneo, rooftop con áreas sociales y vista panorámica de Santiago.": "Natural lighting throughout, modern kitchen, balconies with views, spacious and functional layouts, contemporary design, rooftop with social areas and panoramic views of Santiago.",
    "Piso de porcelanato, cocinas modulares, tope de cocina en granito, respaldo de cocina en cerámica, calentador de gas, timbre e intercom, baranda de balcón en cristal y acero inoxidable, escalera principal en porcelanato, baranda de escalera en hierro, salida de agua para nevera, salida de gas para secadora y cisterna.": "Porcelain tile flooring, modular kitchens, granite kitchen countertop, ceramic kitchen backsplash, gas water heater, doorbell and intercom, glass and stainless-steel balcony railing, porcelain main staircase, iron staircase railing, water outlet for refrigerator, gas outlet for dryer and cistern.",
    "Piso de porcelanato de primera, cocinas modulares, tope y respaldo de cocina en granito, calentador de gas, techos con sheetrock, baranda de balcón en cristal y acero inoxidable, grifería de alta calidad, salida de agua para nevera, salida de gas para secadora, ducto para extractor y cisterna.": "First-grade porcelain tile flooring, modular kitchens, granite kitchen countertop and backsplash, gas water heater, sheetrock ceilings, glass and stainless-steel balcony railing, high-quality fixtures, water outlet for refrigerator, gas outlet for dryer, duct for range hood and cistern.",
    "Piso de porcelanato, cocinas modulares, tope de cocina en granito, calentador de gas, timbre e intercom, baranda de balcón en cristal y acero inoxidable, escalera principal en porcelanato, baranda de escalera en hierro, salida de agua para nevera, salida de gas para secadora y cisterna.": "Porcelain tile flooring, modular kitchens, granite kitchen countertop, gas water heater, doorbell and intercom, glass and stainless-steel balcony railing, porcelain main staircase, iron staircase railing, water outlet for refrigerator, gas outlet for dryer and cistern."
  };

  const SKIP = new Set(['SCRIPT', 'STYLE', 'NOSCRIPT']);
  const store = new Map();   // text node -> original ES value
  let current = 'es';

  function translateText(root) {
    const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(n) {
        if (!n.nodeValue || !n.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        const p = n.parentNode;
        if (p && (SKIP.has(p.nodeName) || (p.classList && p.classList.contains('lang-toggle')))) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const nodes = [];
    while (w.nextNode()) nodes.push(w.currentNode);
    nodes.forEach(n => {
      const m = n.nodeValue.match(/^(\s*)([\s\S]*?)(\s*)$/);
      const key = m[2];
      if (DICT[key] !== undefined) {
        if (!store.has(n)) store.set(n, n.nodeValue);
        n.nodeValue = m[1] + DICT[key] + m[3];
      }
    });
  }

  function translateAttrs() {
    document.querySelectorAll('[placeholder]').forEach(el => {
      const k = el.getAttribute('placeholder').trim();
      if (DICT[k] !== undefined) {
        if (!el.dataset.phEs) el.dataset.phEs = el.getAttribute('placeholder');
        el.setAttribute('placeholder', DICT[k]);
      }
    });
  }

  function revert() {
    store.forEach((orig, n) => { n.nodeValue = orig; });
    document.querySelectorAll('[data-ph-es]').forEach(el => { el.setAttribute('placeholder', el.dataset.phEs); });
  }

  function apply(lang) {
    if (lang === 'en') {
      translateText(document.body);
      translateAttrs();
      document.documentElement.setAttribute('lang', 'en');
    } else {
      revert();
      document.documentElement.setAttribute('lang', 'es');
    }
    current = lang;
    try { localStorage.setItem('rir_lang', lang); } catch (e) {}
    document.querySelectorAll('.lang-toggle').forEach(b => { b.textContent = lang === 'en' ? 'ES' : 'EN'; });
  }

  function toggle() { apply(current === 'en' ? 'es' : 'en'); }

  // Re-traduce contenido inyectado dinámicamente después de cambiar idioma
  window.RIRi18n = {
    apply: apply,
    toggle: toggle,
    retranslate() { if (current === 'en') { translateText(document.body); translateAttrs(); } }
  };

  function init() {
    document.querySelectorAll('.lang-toggle').forEach(b => b.addEventListener('click', toggle));
    let saved = 'es';
    try { saved = localStorage.getItem('rir_lang') || 'es'; } catch (e) {}
    apply(saved);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
