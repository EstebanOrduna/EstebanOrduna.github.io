const profile = {
    image: "bw.jpeg",
    name: "Esteban Orduña",
    title: "Agentic Process & QA Automation Engineer",
    tags: ["Ing. Mecatrónico", "LSS Black Belt", "MSc. Manufactura", "MC. TIC"],
    intro: "Comencé como ingeniero de procesos con una obsesión simple: si algo puede no hacerse, mejor no hacerlo; si debe hacerse, que sea fácil de repetir. Esa mentalidad me llevó de Excel a Python, y de ahí a dirigir agentes de IA. No busco hacer más cosas — busco hacer las correctas de la forma más simple posible. Desde finales de 2025, el desarrollo dirigido por IA es mi método principal de trabajo.",
    experience: [
        { icon: "fa-graduation-cap", text: "Ing. en Mecatrónica – Universidad TecMilenio" },
        { icon: "fa-graduation-cap", text: "MSc. Sistemas de Manufactura – ITESM (Tec de Monterrey)" },
        { icon: "fa-graduation-cap", text: "MC. Tecnologías de la Información – IEXETEC" },
        { icon: "fa-certificate",    text: "Lean Six Sigma Black Belt" },
        { icon: "fa-code",           text: "QA Automation Engineer" }
    ],
    services: [
        { icon: "fa-wand-magic-sparkles", name: "Desarrollo dirigido por IA", desc: "Diseño y entrega de soluciones usando agentes como Claude Code — desde MVPs hasta automatizaciones complejas" },
        { icon: "fa-robot",               name: "Automatización de procesos",  desc: "RPA, scripts y flujos que eliminan trabajo repetitivo de alto volumen" },
        { icon: "fa-chart-line",          name: "Consultoría de procesos",     desc: "Diagnóstico e identificación de cuellos de botella operativos" },
        { icon: "fa-camera",              name: "Fotografía",                  desc: "Proyectos selectivos según disponibilidad" }
    ],
    projects: [
        {
            name: "AutoMate – Framework RPA",
            desc: "Framework de automatización robótica de procesos en desarrollo. Arquitectura modular con motores intercambiables (Playwright, Selenium, Excel) que desacopla la lógica de negocio de la tecnología subyacente. Incluye gestión centralizada de credenciales y configuración por cliente.",
            stack: ["Python", "Flask", "Playwright", "Selenium", "PyInstaller"],
            type: "personal"
        },
        {
            name: "Agente AI local",
            desc: "Proyecto en desarrollo: asistente de codificación autohospedable para equipos que necesitan apoyo de IA sin enviar código a servidores externos. Soporta múltiples LLMs locales vía Ollama con sistema de herramientas y contexto persistente.",
            stack: ["TypeScript", "Node.js", "Ollama"],
            type: "personal"
        },
        {
            name: "Portal de operaciones",
            desc: "Migración de sistema operativo basado en hojas de cálculo a portal web. Login con roles, CRUD de empleados y unidades, registro de operaciones, CI/CD automatizado y deploy en infraestructura propia.",
            stack: ["Next.js", "TypeScript", "Prisma", "Docker", "GitHub Actions"],
            type: "personal"
        }
    ],
    // Email split to avoid scraper harvesting from public repo source
    email: ["esteban.orduna", "gmail.com"],
    linkedin: "https://www.linkedin.com/in/esteban-ordu%C3%B1a-045473104/",
    // Create a free form at formspree.io and replace YOUR_FORM_ID with your form's ID
    formspreeId: "YOUR_FORM_ID"
};
