# INSTITUTO SUPERIOR TECNOLÓGICO CORDILLERA
## CARRERA DE DESARROLLO DE SOFTWARE
### PROGRAMACIÓN WEB 1 – UNIDAD 1 – PRÁCTICA 1 (AD01)

---

# AD01 - Fundamentos de Desarrollo Web
## Sistema de Gestión de Mantenimiento Automotriz (AutoTech Pro)

- **Estudiante:** Matías Montúfar Ninahualpa
- **Asignatura:** Programación Web 1
- **Periodo Académico:** Bimestre 1 - 2026
- **Nivel / Paralelo sugerido:** 3AM (Tercero A Matutino)
- **Formato Oficial de Repositorio:** `WEB-[NIVEL/PARALELO]-[BIMESTRE]-[ACTIVIDAD]-[TEMA]-[APELLIDO/NOMBRE]`
- **Nombre del Repositorio:** `WEB-3AM-B1-AD01-FundamentosDesarrolloWeb-MontufarMatias`

---

## 1. Descripción del Proyecto

**AutoTech Pro** es una plataforma web para talleres mecánicos y concesionarios automotrices desarrollada con tecnologías frontend nativas (**HTML5 semántico, CSS3 personalizado, Bootstrap 5.3 y JavaScript ES6+**), sin requerir backend ni base de datos tradicional.

El sistema permite:
1. Brindar información institucional, catálogo de servicios mecánicos con precios referenciales y horarios de atención.
2. Permitir el registro de solicitudes de mantenimiento mediante un formulario dinámico con validaciones estrictas en tiempo real.
3. Gestionar autenticación y perfiles con **Control de Acceso Basado en Roles (RBAC)**:
   - **Rol Cliente:** Consulta su perfil, registra solicitudes personales y visualiza exclusivamente sus órdenes de servicio en "Mis Mantenimientos".
   - **Rol Administrador:** Tiene control total del taller (**CRUD completo**), permitiendo visualizar todas las solicitudes, filtrar en vivo, editar datos, modificar el estado de atención mecánica (`Pendiente`, `En revisión`, `En proceso`, `Finalizado`, `Cancelado`) y eliminar registros previa confirmación modal.

---

## 2. Estructura de Archivos del Proyecto

```text
WEB-3AM-B1-AD01-FundamentosDesarrolloWeb-MontufarMatias/
├── index.html          # Estructura semántica (Header, Nav, Main, Footer y Modales)
├── css/
│   └── styles.css      # Estilos personalizados, diseño automotriz oscuro y variables CSS
├── js/
│   └── script.js       # Lógica integral de JS (CRUD, RBAC, Validaciones, localStorage)
├── docs/
│   └── REGISTRO_USO_IA.md # Formato oficial del ISTCO de fuentes y uso ético de IA
└── README.md           # Documentación técnica y guía de sustentación
```

---

## 3. Matriz de Roles y Permisos (Cumplimiento de Rúbrica)

| Acción en el Sistema | Rol Cliente | Rol Administrador |
| :--- | :---: | :---: |
| Visitar inicio, acerca de nosotros y catálogo de servicios | ✅ Sí | ✅ Sí |
| Iniciar sesión y consultar datos del perfil | ✅ Sí | ✅ Sí |
| Registrar solicitud de mantenimiento | Para sí mismo | Propia o para otro cliente |
| Consultar solicitudes y sus estados de atención | Solo las propias | Todas las solicitudes |
| Editar, cambiar de estado y eliminar solicitudes | ❌ No (Acceso denegado) | ✅ Sí (CRUD completo) |

---

## 4. Casos Mínimos de Prueba y Verificación

| N.° | Caso de Prueba | Procedimiento de Prueba | Resultado Esperado |
| :---: | :--- | :--- | :--- |
| **1** | Iniciar sesión como Cliente | Clic en *Iniciar Sesión* -> Clic en el botón rápido *Matías Montúfar* (`matias@correo.com` / `cliente123`). | Muestra perfil en el header y despliega la sección **Mis Mantenimientos** con sus órdenes exclusivas. |
| **2** | Acceso inválido o cuenta deshabilitada | Probar con credenciales erróneas o pulsar el botón rápido *Cuenta Deshabilitada* (`inactivo@correo.com`). | No inicia sesión y dispara alerta SweetAlert2 indicando que la cuenta no está autorizada. |
| **3** | Solicitud con placa, fecha o kilometraje inválidos | Llenar el formulario con placa errónea (ej. `123-ABC`), kilometraje `0` o fecha pasada. | No guarda el registro y despliega alerta SweetAlert2 explicando cada uno de los errores. |
| **4** | Registrar un mantenimiento correctamente | Llenar formulario con placa válida (ej. `PBC-1234`), año `2021`, kilometraje `45000` y enviar. | Se agrega al array JavaScript, se persiste en `localStorage` y aparece en *Mis Mantenimientos*. |
| **5** | Cliente intenta entrar en Administración | Iniciar como cliente e intentar abrir la consola o invocar el panel administrativo. | Acceso denegado con SweetAlert2; la sección admin permanece oculta para clientes. |
| **6** | Admin modifica estado y elimina un registro | Iniciar como *Admin* (`admin@taller.com`), cambiar estado desde la tabla y pulsar el botón de eliminar. | Pide confirmación modal SweetAlert2, elimina del array y actualiza métricas y listado. |

---

## 5. Cuentas de Acceso de Demostración

| Rol | Nombre | Correo Electrónico | Contraseña | Estado |
| :--- | :--- | :--- | :--- | :--- |
| **Cliente** | Matías Montúfar | `matias@correo.com` | `cliente123` | Activo |
| **Cliente** | Carlos Pérez | `carlos@correo.com` | `cliente123` | Activo |
| **Administrador** | Taller Central | `admin@taller.com` | `admin123` | Activo |
| **Cliente (Prueba 2)** | Usuario Inactivo | `inactivo@correo.com` | `123456` | **Deshabilitado** |

> *Nota:* En la ventana de inicio de sesión se incluyeron botones de **1 clic** para cada cuenta de prueba, agilizando la revisión del docente evaluador.

---

## 6. Sustentación Técnica de JavaScript

El código en `js/script.js` fue implementado siguiendo las buenas prácticas de la rúbrica:

- **`forEach()`**: Utilizado para renderizar dinámicamente las tarjetas del catálogo de servicios y las filas de las tablas.
- **`filter()`**: Utilizado para filtrar únicamente las solicitudes del cliente autenticado y para los filtros en tiempo real del panel de administración (por estado o texto de búsqueda).
- **`find()`**: Utilizado para localizar el usuario correspondiente a las credenciales ingresadas y para encontrar una solicitud por su ID antes de editarla o mostrar su detalle.
- **`map()`**: Utilizado para extraer arreglos de estados para el conteo de indicadores y para mapear elementos de revisión técnica.
- **`for` y `for...of`**: Empleados para la validación acumulativa de errores del formulario y para el recorrido de checkboxes de servicios adicionales.
- **Expresiones Regulares (RegExp)**:
  - Formato de placa ecuatoriana: `/^[A-Z]{3}-\d{3,4}$/`
  - Teléfono: `/^09\d{8}$/`
  - Cédula de identidad: `/^\d{10}$/`
- **Persistencia**: Sincronización en tiempo real con `localStorage` (`JSON.stringify` y `JSON.parse`) con precarga de datos iniciales en caso de almacenamiento vacío.

---

## 7. Instrucciones para Subir a GitHub

Para cumplir estrictamente con el formato exigido por el docente:

```bash
# 1. Posicionarse en la carpeta del proyecto
cd "c:\Users\USER-PC\Desktop\Matias\WEB-3AM-B1-AD01-FundamentosDesarrolloWeb-MontufarMatias"

# 2. Inicializar el repositorio Git (si no está inicializado)
git init

# 3. Agregar todos los archivos
git add .

# 4. Crear el commit de entrega
git commit -m "feat: entrega completa AD01 fundamentos de desarrollo web - Mantenimiento Automotriz"

# 5. Crear el repositorio en tu cuenta de GitHub con el nombre exacto:
# WEB-3AM-B1-AD01-FundamentosDesarrolloWeb-MontufarMatias

# 6. Vincular y subir a GitHub (reemplaza TU_USUARIO por tu usuario de GitHub):
git branch -M main
git remote add origin https://github.com/TU_USUARIO/WEB-3AM-B1-AD01-FundamentosDesarrolloWeb-MontufarMatias.git
git push -u origin main
```

---

## 8. Licencia y Declaración Académica

Trabajo académico desarrollado conforme a las directrices de integridad académica del **Instituto Superior Tecnológico Cordillera (ITSCO)**. Toda la implementación técnica está documentada y lista para su sustentación presencial o virtual.
