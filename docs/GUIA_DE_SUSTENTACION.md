# Guía Maestra de Sustentación Técnica Oral (3.5 / 10 Puntos)
## Práctica AD01 - Fundamentos de Desarrollo Web (AutoTech Pro)
**Instituto Superior Tecnológico Cordillera - Carrera de Desarrollo de Software**
**Materia:** Programación Web 1 | **Docente Evaluador** | **Estudiante:** Matías Montúfar Ninahualpa

---

### Objetivo de este documento
Esta guía te prepara para responder con seguridad, solvencia y precisión técnica cualquier pregunta que el docente te realice durante la sustentación de la práctica.

---

## 1. Preguntas sobre Estructura Semántica y Maquetación (HTML5 & CSS3)

### P1: ¿Por qué utilizaste etiquetas semánticas y cuáles son las principales en tu proyecto?
> **Respuesta modelo:**
> *"Utilicé etiquetas semánticas de HTML5 para garantizar la accesibilidad, mejorar la jerarquía del árbol DOM y cumplir con las normas W3C. La estructura principal se divide en:*
> - `<header>`: *Contiene la barra superior informativa y la barra de navegación `<nav class="navbar navbar-expand-lg">`.*
> - `<main>`: *Agrupa el contenido principal del sistema dividido en secciones temáticas (`<section id="inicio">`, `<section id="nosotros">`, `<section id="servicios">`, `<section id="solicitud">`, `<section id="mis-mantenimientos">` y `<section id="panel-admin">`).*
> - `<footer>`: *Contiene la información de contacto institucional, horarios y créditos de autoría.*
> - *Adicionalmente, se utilizaron contenedores modales accesibles con atributos `aria-labelledby` y `aria-hidden` para el login, el perfil y las operaciones CRUD."*

### P2: ¿Cómo lograste que el sitio sea 100% responsivo?
> **Respuesta modelo:**
> *"Se utilizó el sistema de cuadrícula (Grid System de 12 columnas) y utilidades Flexbox de **Bootstrap 5.3**, mediante clases como `col-lg-4 col-md-6 col-12`, `d-flex`, `flex-wrap` y `align-items-center`. Esto permite que en dispositivos móviles los elementos se apilen verticalmente y el menú colapse en un botón tipo hamburguesa (`navbar-toggler`), mientras que en pantallas medianas y de escritorio se distribuya armónicamente aprovechando todo el ancho de pantalla."*

---

## 2. Preguntas sobre JavaScript: Métodos de Arrays y Objetos (Rúbrica Clave)

### P3: Muéstrame en el código dónde y para qué utilizas cada uno de los métodos de array requeridos en la guía:
> **Respuesta modelo:**
> - **`forEach()`** (Línea ~226 y ~448 de `script.js`):
>   *"Lo utilizo para iterar sobre el catálogo de servicios (`CATALOGO_SERVICIOS.forEach(...)`) e inyectar dinámicamente cada tarjeta en el DOM, así como para renderizar las filas de las tablas de Mis Mantenimientos y del Panel de Administración."*
> - **`filter()`** (Línea ~430 y ~490 de `script.js`):
>   *"Lo utilizo en dos lugares críticos: primero, para filtrar las solicitudes que le pertenecen exclusivamente al cliente logueado (`appSolicitudes.filter(sol => sol.clienteId === appUsuarioActual.id)`), garantizando la privacidad de los datos; y segundo, en el Panel Admin para filtrar las órdenes por estado y por texto de búsqueda en tiempo real."*
> - **`find()`** (Línea ~190, ~300 y ~570 de `script.js`):
>   *"Lo utilizo para buscar un objeto específico dentro de un array según una condición única. Por ejemplo, para encontrar el usuario por su correo electrónico en la función `ejecutarLogin()` y para ubicar una solicitud específica por su identificador único (`sol.id`) antes de ver su detalle o editarla."*
> - **`map()`** (Línea ~545 de `script.js`):
>   *"Lo utilizo para transformar colecciones. Por ejemplo, para extraer una lista plana de todos los estados de las órdenes (`appSolicitudes.map(s => s.estado)`) y procesar las métricas numéricas del panel de administración, así como para convertir el array de revisiones adicionales en elementos `<li>` HTML."*
> - **`for` tradicional** (Línea ~405 de `script.js`):
>   *"Lo utilizo en la función `procesarEnvioSolicitud()` para iterar sobre el array acumulador de mensajes de error de validación y construir la lista visual con viñetas que se muestra en SweetAlert2."*
> - **`for...of`** (Línea ~290 y ~385 de `script.js`):
>   *"Lo utilizo para recorrer colecciones iterables, tales como los elementos checkboxes marcados (`for (const chk of checkboxesAdicionales)`) y para recorrer los estados en el cálculo de estadísticas del taller."*

---

## 3. Preguntas sobre Validaciones y Expresiones Regulares (Módulo 2)

### P4: ¿Cómo validaste la placa vehicular, el kilometraje y los horarios de atención?
> **Respuesta modelo:**
> - **Placa vehicular ecuatoriana:** *"Implementé una expresión regular estricta: `const regexPlaca = /^[A-Z]{3}-\d{3,4}$/;`. Esta regex exige obligatoriamente 3 letras mayúsculas, un guion intermedio y 3 o 4 números (como `PBC-1234` o `ABC-123`). Además, vinculé un evento `input` en el campo para que transforme cualquier letra minúscula a mayúscula automáticamente."*
> - **Kilometraje:** *"Se valida que sea un valor numérico entero mayor a cero (`kmNum > 0`) y no supere un millón de kilómetros."*
> - **Año:** *"Se valida que se encuentre entre 1990 y el año actual + 1 (ej. 2027)."*
> - **Fecha:** *"Se valida que la fecha elegida sea igual o superior a la fecha actual (`fechaIngresada >= hoy`), impidiendo citas retroactivas."*
> - **Horario:** *"Se valida que la hora se encuentre dentro del horario laboral del taller (de 08:00 a 17:30) comparando los minutos absolutos del día."*

---

## 4. Preguntas sobre Roles, Seguridad y CRUD (Módulo 3)

### P5: ¿Cómo funciona el Control de Acceso por Roles (RBAC) sin tener backend?
> **Respuesta modelo:**
> *"La seguridad se gestiona en dos capas del lado del cliente:*
> 1. **Capa Visual (DOM):** *Al cambiar la sesión (`actualizarVistaSegunSesion()`), si el usuario tiene rol de 'Cliente', los enlaces y la sección del `#panel-admin` reciben la clase `d-none` y quedan completamente ocultos. Solo se despliega la sección 'Mis Mantenimientos'.*
> 2. **Capa Lógica (Funciones):** *Cada función administrativa (`renderizarPanelAdmin`, `cambiarEstadoRapidoAdmin`, `abrirModalEditarAdmin`, `eliminarSolicitudAdmin`) ejecuta como primera línea la función guardiana `verificarAccesoAdministrador()`. Si un usuario intenta forzar la ejecución de estas funciones por consola o manipular el DOM, el sistema detecta que no posee el rol 'Administrador', bloquea la acción y lanza una alerta SweetAlert2 indicando 'Acceso Denegado: Esta función requiere permisos de Administrador' (cumpliendo el Caso de Prueba 5)."*

### P6: ¿Cómo funciona la persistencia de datos con localStorage?
> **Respuesta modelo:**
> *"Los datos residen en memoria en las variables de array `appUsuarios` y `appSolicitudes`. Cada vez que se crea una solicitud, se actualiza un estado o se elimina un registro, se actualiza el array en memoria y de inmediato se ejecuta `guardarSolicitudes()`, la cual serializa el array con `JSON.stringify()` y lo guarda en `localStorage`. Al cargar o recargar la página, la función `inicializarDatos()` lee el almacenamiento local, deserializa con `JSON.parse()` y, si el almacenamiento estuviera vacío, precarga automáticamente un semillero de datos de demostración para que el sistema esté listo para probarse inmediatamente."*

---

## 5. Demostración Rápida de los 6 Casos de Prueba (Checklist de Rúbrica)

| Caso de Prueba | Acción en Vivo | Explicación |
| :--- | :--- | :--- |
| **1. Iniciar sesión como Cliente** | Abrir login -> Clic en botón rápido *Matías Montúfar* | *«Se inicia sesión, se muestra el rol Cliente en el navbar y la tabla "Mis Mantenimientos" solo muestra mis dos autos (PBC-1234), filtrados con filter().»* |
| **2. Acceso inválido o deshabilitado** | Abrir login -> Clic en botón rápido *Cuenta Deshabilitada* | *«El sistema detecta `u.activo === false`, no permite ingresar y dispara la alerta SweetAlert2 de cuenta deshabilitada.»* |
| **3. Placa, fecha o km inválidos** | Ir a solicitud, poner placa `ABC1234` (sin guion) o km `0` | *«Al pulsar Registrar, `validarFormularioSolicitud()` detecta las inconsistencias, no agrega nada al array y SweetAlert2 explica el error exacto.»* |
| **4. Registrar mantenimiento exitoso** | Llenar formulario con placa `PBA-2024`, fecha válida, km `35000` | *«Se agrega el objeto al inicio de `appSolicitudes` con `unshift()`, se guarda en localStorage y aparece automáticamente en Mis Mantenimientos.»* |
| **5. Cliente intenta entrar a Admin** | Iniciar como cliente e intentar abrir panel admin | *«El menú no lo muestra y si se fuerza la llamada se ejecuta `verificarAccesoAdministrador()`, bloqueando la acción con Acceso Denegado.»* |
| **6. Admin modifica estado y elimina** | Iniciar como *Admin*, cambiar estado con el botón de ciclo y luego eliminar | *«El admin puede cambiar a "Finalizado", y al presionar eliminar se pide confirmación con SweetAlert2; tras confirmar, se elimina del array y se actualiza el listado.»* |
