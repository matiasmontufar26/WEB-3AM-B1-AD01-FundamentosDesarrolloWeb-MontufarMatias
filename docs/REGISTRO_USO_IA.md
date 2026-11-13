# Registro de fuentes y uso responsable de IA
*Instituto Superior Tecnológico Cordillera - Carrera de Desarrollo de Software*

Adjunta este registro a tus tareas cuando utilices herramientas de IA.

- **Actividad / Código:** AD01 - Fundamentos de desarrollo Web
- **Estudiante:** Matías Montúfar Ninahualpa
- **Fecha:** 12/11/2026
- **Materia:** Programación Web 1 (Unidad 1 - Práctica 1)

---

### Declaración de uso:
> *"Utilicé IA generativa como apoyo. Documentaré a continuación los prompts relevantes y verificaré las referencias antes de citarlas."*

---

### Registro de consultas significativas

| Parámetro | Detalle Registrado |
| :--- | :--- |
| **Herramienta / modelo** | Gemini 3.8 Flash (High) / Antigravity AI Coding Assistant |
| **Fecha** | 12/11/2026 |
| **Propósito de la consulta** | Estructurar la arquitectura completa de una aplicación frontend sin backend para un taller automotriz, implementando validaciones avanzadas de formularios, arrays de objetos con persistencia en `localStorage`, control de roles (Cliente vs Administrador) y confirmaciones visuales con SweetAlert2. |
| **Prompt exacto** | `"Desarrollar el frontend de un sistema web para un taller de mantenimiento automotriz, aplicando la estructura semántica de HTML, estilos CSS/Bootstrap y, especialmente, programación con JavaScript. Implementar formularios, validaciones, arrays de objetos, eventos, login básico, roles y CRUD sin backend ni base de datos."` |
| **Respuesta aprovechada** | 1. Estructuración semántica en HTML5 dividida en Header, Main (`#inicio`, `#nosotros`, `#servicios`, `#solicitud`, `#mis-mantenimientos`, `#panel-admin`, `#contacto`) y Footer.<br>2. Definición del modelo de datos de solicitudes y usuarios en arrays de objetos de JavaScript.<br>3. Uso exhaustivo de métodos de array: `forEach()` para renderizado, `find()` para autenticación y detalle, `filter()` para filtrado por rol y búsqueda admin, `map()` para normalización de estados, y bucles `for` y `for...of` para validaciones y recopilación de checkboxes.<br>4. Implementación de expresiones regulares para validación de formato de placa vehicular ecuatoriana (`^[A-Z]{3}-\d{3,4}$`), teléfonos de 10 dígitos y horarios de atención.<br>5. Integración de alertas interactivas y modales de confirmación con SweetAlert2 y Bootstrap 5.3. |
| **Fuentes informales y sugeridas por IA (al menos 3)** | 1. **Diseño de interfaz y maquetación (Bootstrap):** Asistencia en la estructura de cuadrícula responsiva, tarjetas de servicios automotrices con efectos visuales y modal de autenticación con botones de prueba rápida.<br>2. **Lógica de autenticación y roles (JavaScript):** Orientación en el patrón de control de acceso basado en roles (RBAC) en el cliente, aislamiento de vistas administrativas y manejo de estados mediante localStorage.<br>3. **Optimización y depuración de componentes:** Validación reactiva de campos obligatorios, prevención de envíos erróneos con `event.preventDefault()` y formateo de placas vehiculares a mayúsculas en tiempo real. |
| **Fuentes verificadas y citadas (al menos 3)** | 1. Mozilla Developer Network. (s.f.). *Selectores CSS y manipulación del DOM con JavaScript*. MDN Web Docs. [https://developer.mozilla.org/es/docs/Web/CSS/CSS_Selectors](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Selectors)<br>2. Otto, M., & Thornton, J. (s.f.). *Grid system & Form Validation*. Bootstrap v5.3. [https://getbootstrap.com/docs/5.3/layout/grid/](https://getbootstrap.com/docs/5.3/layout/grid/)<br>3. Mozilla Developer Network. (s.f.). *Array.prototype.filter() y Array.prototype.find()*. MDN Web Docs. [https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) |

---

### Bibliografía / Referencias Verificadas

- Automotriz del Valle. (2026). *Taller Mecánico | Taller Automotriz, Valle de los Chillos*. [https://tallerautomotriz.ec/index.html](https://tallerautomotriz.ec/index.html)
- Mansuri, F. (2025, junio 6). *CSS Specificity — The Hidden Reason Your UI Breaks*. DEV Community. [https://dev.to/fazal_mansuri_/css-specificity-the-hidden-reason-your-ui-breaks-2jhp](https://dev.to/fazal_mansuri_/css-specificity-the-hidden-reason-your-ui-breaks-2jhp)
- Mozilla Developer Network. (2024). *Expresiones regulares en JavaScript*. MDN Web Docs. [https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions)
- SweetAlert2. (2024). *SweetAlert2: A beautiful, responsive, customizable replacement for JavaScript's popup boxes*. [https://sweetalert2.github.io/](https://sweetalert2.github.io/)
- W3C. (2023). *HTML5: A vocabulary and associated APIs for HTML and XHTML*. W3C Recommendation. [https://www.w3.org/TR/html52/](https://www.w3.org/TR/html52/)

---

### Verificación de Cumplimiento de la Política de IA

- [x] **Condición de autoría y comprensión:** El estudiante comprende íntegramente la arquitectura de archivos, el flujo de ejecución de JavaScript, los eventos del DOM y está preparado para sustentar técnicamente cada línea de código.
- [x] **Protección de datos:** No se compartieron contraseñas reales ni información privada institucional.
- [x] **Trazabilidad y fuentes comprobadas:** Las URLs y autores citados fueron verificados y sustentan cada técnica implementada.
