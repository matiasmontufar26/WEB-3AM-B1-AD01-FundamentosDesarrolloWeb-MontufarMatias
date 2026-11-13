/**
 * ============================================================================
 * INSTITUTO SUPERIOR TECNOLÓGICO CORDILLERA
 * Carrera de Desarrollo de Software - Programación Web 1
 * Unidad 1 - Práctica 1: AD01 - Fundamentos de desarrollo Web
 * Proyecto: Sistema Web para Taller de Mantenimiento Automotriz (AutoTech Pro)
 * Estudiante: Matías Montúfar Ninahualpa
 * ============================================================================
 * Requisitos técnicos demostrados:
 * - Arrays de objetos, diccionarios y persistencia en localStorage.
 * - Métodos funcionales: forEach(), filter(), find(), map(), for y for...of.
 * - Validación de expresiones regulares (Placa, teléfono, horarios, años).
 * - Manejo de roles (Cliente vs Administrador) y control de acceso (RBAC).
 * - Notificaciones dinámicas con SweetAlert2 y modales de Bootstrap 5.
 * ============================================================================
 */

// ==========================================
// 1. ESTRUCTURAS DE DATOS INICIALES (ARRAYS Y OBJETOS)
// ==========================================

/**
 * Catálogo de servicios disponibles en el taller
 */
const CATALOGO_SERVICIOS = [
    {
        id: "SRV-01",
        nombre: "Mantenimiento Preventivo Periódico",
        icono: "fa-solid fa-car-on",
        tiempo: "3 a 4 horas",
        precioRef: "$45 - $80",
        descripcion: "Revisión integral de 50 puntos de seguridad, niveles de fluidos, bujías, filtros y prueba de ruta computarizada."
    },
    {
        id: "SRV-02",
        nombre: "Cambio de Aceite y Filtros",
        icono: "fa-solid fa-oil-can",
        tiempo: "45 minutos",
        precioRef: "$35 - $65",
        descripcion: "Sustitución de aceite sintético o semisintético según especificaciones del fabricante, con filtro de aceite y arandela nueva."
    },
    {
        id: "SRV-03",
        nombre: "Revisión y Cambio de Frenos",
        icono: "fa-solid fa-compact-disc",
        tiempo: "2 horas",
        precioRef: "$40 - $110",
        descripcion: "Rectificación de discos y tambores, cambio de pastillas cerámicas, purga del sistema hidráulico y líquido DOT 4."
    },
    {
        id: "SRV-04",
        nombre: "Alineación, Balanceo y Rotación",
        icono: "fa-solid fa-arrows-spin",
        tiempo: "1 hora",
        precioRef: "$25 - $40",
        descripcion: "Alineación láser 3D en las 4 ruedas, plomos ecológicos computarizados y verificación del desgaste simétrico de neumáticos."
    },
    {
        id: "SRV-05",
        nombre: "Diagnóstico Computarizado (Scanner OBD-II)",
        icono: "fa-solid fa-laptop-medical",
        tiempo: "1 hora",
        precioRef: "$30",
        descripcion: "Escaneo electrónico de módulos ECU, ABS, Airbag, análisis de sensores en vivo e informe técnico con código de averías."
    },
    {
        id: "SRV-06",
        nombre: "Afinamiento y Limpieza de Inyectores",
        icono: "fa-solid fa-spray-can-sparkles",
        tiempo: "3 horas",
        precioRef: "$50 - $95",
        descripcion: "Lavado ultrasónico de inyectores en banco de pruebas, sustitución de microfiltros, orings y calibración del cuerpo de aceleración."
    },
    {
        id: "SRV-07",
        nombre: "Reparación de Sistema de Suspensión",
        icono: "fa-solid fa-gears",
        tiempo: "3 a 5 horas",
        precioRef: "$60 - $180",
        descripcion: "Inspección de amortiguadores, terminales, rótulas, bases y bujes para garantizar estabilidad y confort de marcha."
    },
    {
        id: "SRV-08",
        nombre: "Sistema Eléctrico y Batería",
        icono: "fa-solid fa-bolt",
        tiempo: "1 a 2 horas",
        precioRef: "$20 - $70",
        descripcion: "Diagnóstico de alternador, motor de arranque, batería de 12V con probador de conductancia y reemplazo de fusibles/reles."
    },
    {
        id: "SRV-09",
        nombre: "Reparación Mecánica General",
        icono: "fa-solid fa-wrench",
        tiempo: "A convenir",
        precioRef: "Presupuesto",
        descripcion: "Atención especializada en kit de distribución, embrague, sistema de enfriamiento (bomba de agua, termostato) y fugas."
    }
];

/**
 * Usuarios de prueba registrados en el sistema (Cumple Caso Mínimo de Prueba 1, 2 y 5)
 */
const USUARIOS_INICIALES = [
    {
        id: "USR-001",
        nombre: "Matías Montúfar",
        email: "matias@correo.com",
        password: "cliente123",
        telefono: "0991234567",
        cedula: "1723456789",
        rol: "Cliente",
        placaHabitual: "PBC-1234",
        activo: true
    },
    {
        id: "USR-002",
        nombre: "Carlos Pérez",
        email: "carlos@correo.com",
        password: "cliente123",
        telefono: "0987654321",
        cedula: "1719876543",
        rol: "Cliente",
        placaHabitual: "PCH-5678",
        activo: true
    },
    {
        id: "USR-003",
        nombre: "Administrador del Taller",
        email: "admin@taller.com",
        password: "admin123",
        telefono: "0990001122",
        cedula: "1799988877",
        rol: "Administrador",
        placaHabitual: "PBA-9999",
        activo: true
    },
    {
        id: "USR-004",
        nombre: "Usuario Deshabilitado (Prueba)",
        email: "inactivo@correo.com",
        password: "123456",
        telefono: "0998887766",
        cedula: "1700112233",
        rol: "Cliente",
        placaHabitual: "PDF-0000",
        activo: false // Cuenta deshabilitada para probar Caso 2
    }
];

/**
 * Solicitudes de mantenimiento iniciales precargadas en el sistema
 */
const SOLICITUDES_INICIALES = [
    {
        id: "SOL-1001",
        clienteId: "USR-001",
        clienteNombre: "Matías Montúfar",
        clienteEmail: "matias@correo.com",
        clienteTelefono: "0991234567",
        clienteCedula: "1723456789",
        autoPlaca: "PBC-1234",
        autoMarca: "Chevrolet",
        autoModelo: "Sail 1.4",
        autoAnio: 2019,
        autoKilometraje: 48500,
        servicio: "Cambio de Aceite y Filtros",
        prioridad: "Normal",
        adicionales: ["Revisión de líquido de frenos", "Lavado de cortesía básico"],
        fecha: "2026-11-15",
        hora: "09:00",
        observaciones: "Se requiere aceite 10W-30 sintético. Por favor revisar leve zumbido al frenar.",
        estado: "En proceso",
        fechaRegistro: "2026-11-12 08:30"
    },
    {
        id: "SOL-1002",
        clienteId: "USR-001",
        clienteNombre: "Matías Montúfar",
        clienteEmail: "matias@correo.com",
        clienteTelefono: "0991234567",
        clienteCedula: "1723456789",
        autoPlaca: "PBC-1234",
        autoMarca: "Chevrolet",
        autoModelo: "Sail 1.4",
        autoAnio: 2019,
        autoKilometraje: 40000,
        servicio: "Mantenimiento Preventivo Periódico",
        prioridad: "Express",
        adicionales: ["Comprobación de carga de batería", "Lavado de cortesía básico"],
        fecha: "2026-08-20",
        hora: "10:30",
        observaciones: "Mantenimiento semestral completado a conformidad.",
        estado: "Finalizado",
        fechaRegistro: "2026-08-19 14:10"
    },
    {
        id: "SOL-1003",
        clienteId: "USR-002",
        clienteNombre: "Carlos Pérez",
        clienteEmail: "carlos@correo.com",
        clienteTelefono: "0987654321",
        clienteCedula: "1719876543",
        autoPlaca: "PCH-5678",
        autoMarca: "Toyota",
        autoModelo: "Corolla",
        autoAnio: 2021,
        autoKilometraje: 32000,
        servicio: "Revisión y Cambio de Frenos",
        prioridad: "Normal",
        adicionales: ["Revisión de líquido de frenos"],
        fecha: "2026-11-16",
        hora: "11:00",
        observaciones: "Pedal de freno se siente esponjoso al descender pendientes.",
        estado: "Pendiente",
        fechaRegistro: "2026-11-12 11:20"
    },
    {
        id: "SOL-1004",
        clienteId: "USR-002",
        clienteNombre: "Carlos Pérez",
        clienteEmail: "carlos@correo.com",
        clienteTelefono: "0987654321",
        clienteCedula: "1719876543",
        autoPlaca: "PCH-5678",
        autoMarca: "Toyota",
        autoModelo: "Corolla",
        autoAnio: 2021,
        autoKilometraje: 25000,
        servicio: "Diagnóstico Computarizado (Scanner OBD-II)",
        prioridad: "Urgente",
        adicionales: ["Comprobación de carga de batería"],
        fecha: "2026-05-10",
        hora: "08:30",
        observaciones: "Luz de Check Engine encendida por sensor de oxígeno.",
        estado: "Finalizado",
        fechaRegistro: "2026-05-09 17:00"
    },
    {
        id: "SOL-1005",
        clienteId: "USR-003",
        clienteNombre: "Administrador del Taller",
        clienteEmail: "admin@taller.com",
        clienteTelefono: "0990001122",
        clienteCedula: "1799988877",
        autoPlaca: "PBA-9999",
        autoMarca: "Nissan",
        autoModelo: "Frontier 4x4",
        autoAnio: 2022,
        autoKilometraje: 55000,
        servicio: "Reparación de Sistema de Suspensión",
        prioridad: "Normal",
        adicionales: ["Revisión de amortiguadores y suspensión"],
        fecha: "2026-11-17",
        hora: "14:00",
        observaciones: "Vehículo institucional de auxilio mecánico. Calibrar suspensión trasera.",
        estado: "En revisión",
        fechaRegistro: "2026-11-12 09:15"
    }
];

// ==========================================
// 2. ESTADO GLOBAL DE LA APLICACIÓN
// ==========================================

let appUsuarios = [];
let appSolicitudes = [];
let appUsuarioActual = null; // null si no hay sesión iniciada

const STORAGE_KEYS = {
    USUARIOS: "AUTOTECH_USUARIOS_V1",
    SOLICITUDES: "AUTOTECH_SOLICITUDES_V1",
    SESION: "AUTOTECH_SESION_ACTIVA_V1"
};

// ==========================================
// 3. INICIALIZACIÓN AL CARGAR EL DOM
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
    inicializarDatos();
    renderizarCatalogoServicios();
    establecerRestriccionesFechaHora();
    configurarEventos();
    actualizarVistaSegunSesion();
});

/**
 * Carga o inicializa datos en localStorage con manejo de arrays y objetos
 */
function inicializarDatos() {
    // 1. Usuarios
    const usuariosGuardados = localStorage.getItem(STORAGE_KEYS.USUARIOS);
    if (usuariosGuardados) {
        try {
            appUsuarios = JSON.parse(usuariosGuardados);
        } catch (e) {
            console.error("Error al parsear usuarios:", e);
            appUsuarios = [...USUARIOS_INICIALES];
            guardarUsuarios();
        }
    } else {
        appUsuarios = [...USUARIOS_INICIALES];
        guardarUsuarios();
    }

    // 2. Solicitudes
    const solicitudesGuardadas = localStorage.getItem(STORAGE_KEYS.SOLICITUDES);
    if (solicitudesGuardadas) {
        try {
            appSolicitudes = JSON.parse(solicitudesGuardadas);
        } catch (e) {
            console.error("Error al parsear solicitudes:", e);
            appSolicitudes = [...SOLICITUDES_INICIALES];
            guardarSolicitudes();
        }
    } else {
        appSolicitudes = [...SOLICITUDES_INICIALES];
        guardarSolicitudes();
    }

    // 3. Sesión activa
    const sesionGuardada = localStorage.getItem(STORAGE_KEYS.SESION);
    if (sesionGuardada) {
        try {
            const dataSesion = JSON.parse(sesionGuardada);
            // Uso de find() para validar que el usuario aún exista y siga activo
            const usuarioValido = appUsuarios.find(u => u.id === dataSesion.id && u.activo === true);
            if (usuarioValido) {
                appUsuarioActual = usuarioValido;
            } else {
                localStorage.removeItem(STORAGE_KEYS.SESION);
                appUsuarioActual = null;
            }
        } catch (e) {
            console.error("Error al restaurar sesión:", e);
            appUsuarioActual = null;
        }
    }
}

function guardarUsuarios() {
    localStorage.setItem(STORAGE_KEYS.USUARIOS, JSON.stringify(appUsuarios));
}

function guardarSolicitudes() {
    localStorage.setItem(STORAGE_KEYS.SOLICITUDES, JSON.stringify(appSolicitudes));
}

function guardarSesion(usuario) {
    if (usuario) {
        localStorage.setItem(STORAGE_KEYS.SESION, JSON.stringify({
            id: usuario.id,
            email: usuario.email,
            rol: usuario.rol
        }));
    } else {
        localStorage.removeItem(STORAGE_KEYS.SESION);
    }
}

// ==========================================
// 4. RENDERIZADO DEL CATÁLOGO DE SERVICIOS (forEach)
// ==========================================

function renderizarCatalogoServicios() {
    const contenedor = document.getElementById("serviciosContainer");
    if (!contenedor) return;

    contenedor.innerHTML = "";

    // Practicando método forEach() requerido en la rúbrica
    CATALOGO_SERVICIOS.forEach((servicio, index) => {
        const col = document.createElement("div");
        col.className = "col-lg-4 col-md-6";
        col.innerHTML = `
            <div class="service-card">
                <div class="d-flex justify-content-between align-items-start mb-3">
                    <div class="card-icon">
                        <i class="${servicio.icono}"></i>
                    </div>
                    <span class="time-badge">
                        <i class="fa-regular fa-clock me-1 text-warning"></i>${servicio.tiempo}
                    </span>
                </div>
                <h5>${servicio.nombre}</h5>
                <p class="flex-grow-1">${servicio.descripcion}</p>
                <div class="d-flex justify-content-between align-items-center pt-3 border-top border-secondary border-opacity-25 mt-auto">
                    <div>
                        <span class="text-secondary small d-block" style="font-size: 0.725rem; text-transform: uppercase; letter-spacing: 0.06em;">Tarifa Base</span>
                        <strong class="price-badge">${servicio.precioRef}</strong>
                    </div>
                    <button type="button" class="btn btn-sm btn-warning btn-solicitar-servicio" data-servicio="${servicio.nombre}">
                        <i class="fa-solid fa-calendar-check me-1"></i> Agendar
                    </button>
                </div>
            </div>
        `;
        contenedor.appendChild(col);
    });

    // Eventos para botones de agendar servicio
    document.querySelectorAll(".btn-solicitar-servicio").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const nombreServicio = e.currentTarget.getAttribute("data-servicio");
            seleccionarServicioYDesplazar(nombreServicio);
        });
    });
}

function seleccionarServicioYDesplazar(nombreServicio) {
    const selectServicio = document.getElementById("solicitudServicio");
    if (selectServicio) {
        selectServicio.value = nombreServicio;
    }
    const seccionSolicitud = document.getElementById("solicitud");
    if (seccionSolicitud) {
        seccionSolicitud.scrollIntoView({ behavior: "smooth" });
    }
}

// ==========================================
// 5. RESTRICCIONES DE FECHAS Y HORARIOS
// ==========================================

function establecerRestriccionesFechaHora() {
    const inputFecha = document.getElementById("solicitudFecha");
    if (inputFecha) {
        const hoy = new Date();
        const yyyy = hoy.getFullYear();
        const mm = String(hoy.getMonth() + 1).padStart(2, "0");
        const dd = String(hoy.getDate()).padStart(2, "0");
        const fechaMinima = `${yyyy}-${mm}-${dd}`;
        inputFecha.min = fechaMinima;
        inputFecha.value = fechaMinima;
    }

    const inputHora = document.getElementById("solicitudHora");
    if (inputHora && !inputHora.value) {
        inputHora.value = "09:00";
    }
}

// ==========================================
// 6. CONTROL DE SESIÓN Y VISTAS SEGÚN ROL (MÓDULO 3)
// ==========================================

function actualizarVistaSegunSesion() {
    const navAuthContainer = document.getElementById("navAuthContainer");
    const navUserDropdown = document.getElementById("navUserDropdown");
    const navUserName = document.getElementById("navUserName");
    const navUserRoleBadge = document.getElementById("navUserRoleBadge");
    const topSessionBadge = document.getElementById("topSessionBadge");

    const navItemMisSolicitudes = document.getElementById("navItemMisSolicitudes");
    const navItemAdmin = document.getElementById("navItemAdmin");
    const dropdownOptionMisSolicitudes = document.getElementById("dropdownOptionMisSolicitudes");
    const dropdownOptionAdmin = document.getElementById("dropdownOptionAdmin");

    const seccionMisMantenimientos = document.getElementById("mis-mantenimientos");
    const seccionAdmin = document.getElementById("panel-admin");
    const adminClienteSelectorContainer = document.getElementById("adminClienteSelectorContainer");

    const solicitudRoleAlert = document.getElementById("solicitudRoleAlert");
    const solicitudRoleAlertTitle = document.getElementById("solicitudRoleAlertTitle");
    const solicitudRoleAlertDesc = document.getElementById("solicitudRoleAlertDesc");

    if (appUsuarioActual) {
        // Sesión activa
        navAuthContainer.classList.add("d-none");
        navUserDropdown.classList.remove("d-none");
        navUserName.textContent = appUsuarioActual.nombre;
        navUserRoleBadge.textContent = appUsuarioActual.rol;

        if (appUsuarioActual.rol === "Administrador") {
            navUserRoleBadge.className = "badge bg-warning text-dark ms-1";
            topSessionBadge.className = "badge bg-warning text-dark";
            topSessionBadge.innerHTML = `<i class="fa-solid fa-user-shield me-1"></i> Admin: ${appUsuarioActual.nombre}`;

            navItemMisSolicitudes.classList.remove("d-none");
            navItemAdmin.classList.remove("d-none");
            dropdownOptionMisSolicitudes.classList.remove("d-none");
            dropdownOptionAdmin.classList.remove("d-none");

            seccionMisMantenimientos.classList.remove("d-none");
            seccionAdmin.classList.remove("d-none");
            adminClienteSelectorContainer.classList.remove("d-none");

            solicitudRoleAlert.className = "alert alert-warning d-flex align-items-center justify-content-between mb-4 fade show";
            solicitudRoleAlertTitle.textContent = `Sesión de Administrador: ${appUsuarioActual.nombre}`;
            solicitudRoleAlertDesc.textContent = "Puede registrar solicitudes tanto para su propio vehículo como en nombre de cualquier cliente registrado.";

            cargarClientesEnSelectorAdmin();
            renderizarPanelAdmin();
            renderizarMisMantenimientos();
        } else {
            // Rol: Cliente
            navUserRoleBadge.className = "badge bg-primary ms-1";
            topSessionBadge.className = "badge bg-primary";
            topSessionBadge.innerHTML = `<i class="fa-solid fa-user me-1"></i> Cliente: ${appUsuarioActual.nombre}`;

            navItemMisSolicitudes.classList.remove("d-none");
            navItemAdmin.classList.add("d-none");
            dropdownOptionMisSolicitudes.classList.remove("d-none");
            dropdownOptionAdmin.classList.add("d-none");

            seccionMisMantenimientos.classList.remove("d-none");
            seccionAdmin.classList.add("d-none"); // Oculto para cliente
            adminClienteSelectorContainer.classList.add("d-none");

            solicitudRoleAlert.className = "alert alert-success d-flex align-items-center justify-content-between mb-4 fade show";
            solicitudRoleAlertTitle.textContent = `Bienvenido, ${appUsuarioActual.nombre}`;
            solicitudRoleAlertDesc.textContent = "Sus datos personales han sido precargados automáticamente en el formulario.";

            precargarDatosClienteEnFormulario(appUsuarioActual);
            renderizarMisMantenimientos();
        }
    } else {
        // Modo Invitado (Sin sesión)
        navAuthContainer.classList.remove("d-none");
        navUserDropdown.classList.add("d-none");
        topSessionBadge.className = "badge bg-secondary";
        topSessionBadge.textContent = "Sin sesión activa";

        navItemMisSolicitudes.classList.add("d-none");
        navItemAdmin.classList.add("d-none");
        dropdownOptionMisSolicitudes.classList.add("d-none");
        dropdownOptionAdmin.classList.add("d-none");

        seccionMisMantenimientos.classList.add("d-none");
        seccionAdmin.classList.add("d-none");
        adminClienteSelectorContainer.classList.add("d-none");

        solicitudRoleAlert.className = "alert alert-info d-flex align-items-center justify-content-between mb-4 fade show";
        solicitudRoleAlertTitle.textContent = "Modo Invitado / Registro Inicial";
        solicitudRoleAlertDesc.textContent = "Puede registrar su mantenimiento. Si inicia sesión como Cliente o Administrador sus datos se vincularán automáticamente.";
    }
}

/**
 * Autocompleta datos del cliente logueado en el formulario
 */
function precargarDatosClienteEnFormulario(usuario) {
    const inputNombre = document.getElementById("clienteNombre");
    const inputEmail = document.getElementById("clienteEmail");
    const inputTelefono = document.getElementById("clienteTelefono");
    const inputCedula = document.getElementById("clienteCedula");
    const inputPlaca = document.getElementById("autoPlaca");

    if (inputNombre) inputNombre.value = usuario.nombre || "";
    if (inputEmail) inputEmail.value = usuario.email || "";
    if (inputTelefono) inputTelefono.value = usuario.telefono || "";
    if (inputCedula) inputCedula.value = usuario.cedula || "";
    if (inputPlaca && usuario.placaHabitual && !inputPlaca.value) {
        inputPlaca.value = usuario.placaHabitual;
    }
}

/**
 * Llena el selector de clientes en modo administrador utilizando for...of y map()
 */
function cargarClientesEnSelectorAdmin() {
    const select = document.getElementById("adminClienteSelect");
    if (!select) return;

    select.innerHTML = '<option value="" selected>-- Registrar para mí mismo (Administrador) --</option>';

    // Uso de filter() para tomar solo clientes
    const clientes = appUsuarios.filter(u => u.rol === "Cliente" && u.activo === true);

    // Uso de for...of para recorrer los clientes
    for (const c of clientes) {
        const opt = document.createElement("option");
        opt.value = c.id;
        opt.textContent = `${c.nombre} (${c.email}) - Placa: ${c.placaHabitual || 'N/A'}`;
        select.appendChild(opt);
    }
}

// ==========================================
// 7. SISTEMA DE LOGIN Y LOGOUT (MÓDULO 3)
// ==========================================

function ejecutarLogin(email, password) {
    // Búsqueda del usuario mediante find()
    const usuarioEncontrado = appUsuarios.find(u => u.email.toLowerCase().trim() === email.toLowerCase().trim());

    // CASO DE PRUEBA 2: Acceso inválido o cuenta deshabilitada
    if (!usuarioEncontrado) {
        Swal.fire({
            icon: 'error',
            title: 'Credenciales Incorrectas',
            text: 'El correo electrónico ingresado no se encuentra registrado en el sistema.',
            confirmButtonColor: '#ffb703',
            confirmButtonText: 'Reintentar'
        });
        return false;
    }

    if (usuarioEncontrado.password !== password) {
        Swal.fire({
            icon: 'error',
            title: 'Contraseña Incorrecta',
            text: 'La clave ingresada no coincide con los registros del usuario.',
            confirmButtonColor: '#ffb703',
            confirmButtonText: 'Reintentar'
        });
        return false;
    }

    // Validación de cuenta activa/deshabilitada
    if (usuarioEncontrado.activo === false) {
        Swal.fire({
            icon: 'warning',
            title: 'Cuenta Deshabilitada',
            text: 'Esta cuenta ha sido desactivada temporalmente por la administración del taller.',
            footer: '<strong>Caso de prueba 2:</strong> Validación exitosa de cuenta no autorizada.',
            confirmButtonColor: '#dc3545',
            confirmButtonText: 'Entendido'
        });
        return false;
    }

    // CASO DE PRUEBA 1: Iniciar sesión como Cliente o Admin exitosamente
    appUsuarioActual = usuarioEncontrado;
    guardarSesion(usuarioEncontrado);

    // Cerrar modal de login de Bootstrap
    const modalElement = document.getElementById("modalLogin");
    const modalInstance = bootstrap.Modal.getInstance(modalElement);
    if (modalInstance) {
        modalInstance.hide();
    }

    actualizarVistaSegunSesion();

    Swal.fire({
        icon: 'success',
        title: `¡Bienvenido(a), ${usuarioEncontrado.nombre}!`,
        text: `Has iniciado sesión correctamente con el rol de ${usuarioEncontrado.rol}.`,
        timer: 2000,
        showConfirmButton: false
    });

    return true;
}

function ejecutarLogout() {
    Swal.fire({
        title: '¿Deseas cerrar sesión?',
        text: "Tu sesión actual en AutoTech Pro finalizará.",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#ffb703',
        cancelButtonColor: '#6c757d',
        confirmButtonText: 'Sí, salir',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            appUsuarioActual = null;
            guardarSesion(null);
            actualizarVistaSegunSesion();

            // Limpiar formulario
            document.getElementById("formSolicitud").reset();
            establecerRestriccionesFechaHora();

            Swal.fire({
                icon: 'info',
                title: 'Sesión Finalizada',
                text: 'Has salido del sistema de manera segura.',
                timer: 1500,
                showConfirmButton: false
            });
        }
    });
}

function mostrarModalPerfil() {
    if (!appUsuarioActual) {
        Swal.fire({
            icon: 'info',
            title: 'Sin sesión',
            text: 'Inicia sesión para consultar tus datos de perfil.'
        });
        return;
    }

    document.getElementById("perfilNombre").textContent = appUsuarioActual.nombre;
    document.getElementById("perfilRol").textContent = appUsuarioActual.rol;
    document.getElementById("perfilEmail").textContent = appUsuarioActual.email;
    document.getElementById("perfilTelefono").textContent = appUsuarioActual.telefono || "No registrado";
    document.getElementById("perfilCedula").textContent = appUsuarioActual.cedula || "No registrada";
    document.getElementById("perfilPlaca").textContent = appUsuarioActual.placaHabitual || "No registrada";

    const modal = new bootstrap.Modal(document.getElementById("modalPerfil"));
    modal.show();
}

// ==========================================
// 8. VALIDACIONES ESTRICTAS DE FORMULARIO (MÓDULO 2)
// ==========================================

/**
 * Validador integral de la solicitud de mantenimiento
 * CASO DE PRUEBA 3: Solicitud con placa, fecha o kilometraje inválidos
 */
function validarFormularioSolicitud(datos) {
    const errores = [];

    // 1. Nombre obligatorio (al menos 3 caracteres)
    if (!datos.clienteNombre || datos.clienteNombre.trim().length < 3) {
        errores.push("El nombre completo del cliente es obligatorio (mínimo 3 caracteres).");
    }

    // 2. Email válido
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!datos.clienteEmail || !regexEmail.test(datos.clienteEmail.trim())) {
        errores.push("El correo electrónico del cliente no tiene un formato válido (ej. usuario@correo.com).");
    }

    // 3. Teléfono (10 dígitos en Ecuador)
    const regexTelefono = /^09\d{8}$/;
    const regexTelefonoGeneral = /^\d{7,10}$/;
    if (!datos.clienteTelefono || (!regexTelefono.test(datos.clienteTelefono) && !regexTelefonoGeneral.test(datos.clienteTelefono))) {
        errores.push("El teléfono debe contener 10 dígitos numéricos (ej. 0991234567).");
    }

    // 4. Cédula (10 dígitos)
    const regexCedula = /^\d{10}$/;
    if (!datos.clienteCedula || !regexCedula.test(datos.clienteCedula)) {
        errores.push("La cédula de identidad debe contener exactamente 10 dígitos numéricos.");
    }

    // 5. Placa vehicular ecuatoriana (3 letras, guión y 3 o 4 dígitos)
    // Ejemplos válidos: PBC-1234, ABC-123, TBA-4567
    const regexPlaca = /^[A-Z]{3}-\d{3,4}$/;
    const placaLimpia = (datos.autoPlaca || "").toUpperCase().trim();
    if (!placaLimpia || !regexPlaca.test(placaLimpia)) {
        errores.push("Formato de placa vehicular inválido. Debe cumplir el estándar ecuatoriano: 3 letras mayúsculas, un guion y 3 o 4 números (Ejemplos: <strong>PBC-1234</strong> o <strong>ABC-123</strong>).");
    }

    // 6. Marca y modelo obligatorios
    if (!datos.autoMarca || datos.autoMarca === "") {
        errores.push("Debe seleccionar la marca del vehículo.");
    }
    if (!datos.autoModelo || datos.autoModelo.trim().length < 2) {
        errores.push("Debe especificar el modelo del vehículo.");
    }

    // 7. Año del vehículo (entre 1990 y 2027)
    const anioNum = parseInt(datos.autoAnio, 10);
    const anioActual = new Date().getFullYear();
    if (isNaN(anioNum) || anioNum < 1990 || anioNum > (anioActual + 1)) {
        errores.push(`El año del vehículo es inválido (${datos.autoAnio}). Debe estar comprendido entre 1990 y ${anioActual + 1}.`);
    }

    // 8. Kilometraje (mayor a 0 y menor a 1'000.000)
    const kmNum = parseInt(datos.autoKilometraje, 10);
    if (isNaN(kmNum) || kmNum <= 0 || kmNum > 1000000) {
        errores.push("El kilometraje ingresado es inválido. Debe ser un número mayor a 0 km.");
    }

    // 9. Tipo de servicio
    if (!datos.servicio || datos.servicio === "") {
        errores.push("Debe seleccionar el tipo de servicio automotriz requerido.");
    }

    // 10. Validación de fecha (no fechas pasadas)
    if (!datos.fecha) {
        errores.push("Debe seleccionar una fecha para su cita.");
    } else {
        const fechaIngresada = new Date(datos.fecha + "T00:00:00");
        const hoy = new Date();
        hoy.setHours(0, 0, 0, 0);

        if (fechaIngresada < hoy) {
            errores.push("La fecha de la cita no puede ser una fecha pasada. Por favor elija hoy o un día posterior.");
        }
    }

    // 11. Validación de horario laboral (08:00 a 17:30)
    if (!datos.hora) {
        errores.push("Debe seleccionar la hora de la cita.");
    } else {
        const [hh, mm] = datos.hora.split(":").map(Number);
        const minutosTotales = hh * 60 + mm;
        const minutosInicio = 8 * 60; // 08:00
        const minutosFin = 17 * 60 + 30; // 17:30

        if (minutosTotales < minutosInicio || minutosTotales > minutosFin) {
            errores.push(`La hora seleccionada (${datos.hora}) está fuera del horario de atención del taller (08:00 a 17:30).`);
        }
    }

    return errores;
}

// ==========================================
// 9. REGISTRO DE SOLICITUD (MÓDULO 2 - CASO 3 Y 4)
// ==========================================

function procesarEnvioSolicitud(e) {
    e.preventDefault();

    // Recopilación de checkboxes con for...of (Módulo 2)
    const checkboxesAdicionales = document.querySelectorAll(".check-adicional:checked");
    const adicionales = [];
    for (const chk of checkboxesAdicionales) {
        adicionales.push(chk.value);
    }

    // Recopilación de radio button de prioridad
    const radioPrioridad = document.querySelector('input[name="tipoPrioridad"]:checked');
    const prioridad = radioPrioridad ? radioPrioridad.value : "Normal";

    // Determinación del cliente propietario de la solicitud
    let clienteId = "USR-INVITADO";
    let clienteNombre = document.getElementById("clienteNombre").value.trim();
    let clienteEmail = document.getElementById("clienteEmail").value.trim();
    let clienteTelefono = document.getElementById("clienteTelefono").value.trim();
    let clienteCedula = document.getElementById("clienteCedula").value.trim();

    if (appUsuarioActual) {
        if (appUsuarioActual.rol === "Administrador") {
            const selectAdminCliente = document.getElementById("adminClienteSelect");
            if (selectAdminCliente && selectAdminCliente.value) {
                // Admin registrando para otro cliente
                const clienteAsignado = appUsuarios.find(u => u.id === selectAdminCliente.value);
                if (clienteAsignado) {
                    clienteId = clienteAsignado.id;
                    clienteNombre = clienteAsignado.nombre;
                    clienteEmail = clienteAsignado.email;
                    clienteTelefono = clienteAsignado.telefono;
                    clienteCedula = clienteAsignado.cedula;
                }
            } else {
                // Admin registrando para sí mismo
                clienteId = appUsuarioActual.id;
            }
        } else {
            // Cliente regular registrando para sí mismo
            clienteId = appUsuarioActual.id;
        }
    }

    const nuevaSolicitud = {
        id: `SOL-${Date.now().toString().slice(-4)}`,
        clienteId: clienteId,
        clienteNombre: clienteNombre,
        clienteEmail: clienteEmail,
        clienteTelefono: clienteTelefono,
        clienteCedula: clienteCedula,
        autoPlaca: document.getElementById("autoPlaca").value.toUpperCase().trim(),
        autoMarca: document.getElementById("autoMarca").value,
        autoModelo: document.getElementById("autoModelo").value.trim(),
        autoAnio: document.getElementById("autoAnio").value,
        autoKilometraje: document.getElementById("autoKilometraje").value,
        servicio: document.getElementById("solicitudServicio").value,
        prioridad: prioridad,
        adicionales: adicionales,
        fecha: document.getElementById("solicitudFecha").value,
        hora: document.getElementById("solicitudHora").value,
        observaciones: document.getElementById("solicitudObservaciones").value.trim(),
        estado: "Pendiente", // Estado inicial obligatorio
        fechaRegistro: new Date().toLocaleString()
    };

    // Validación
    const listaErrores = validarFormularioSolicitud(nuevaSolicitud);

    // CASO DE PRUEBA 3: Si hay errores, no guarda y explica con detalle
    if (listaErrores.length > 0) {
        let htmlErrores = `<ul class="text-start mb-0">`;
        // Recorrido de errores con for tradicional
        for (let i = 0; i < listaErrores.length; i++) {
            htmlErrores += `<li class="small mb-1">${listaErrores[i]}</li>`;
        }
        htmlErrores += `</ul>`;

        Swal.fire({
            icon: 'error',
            title: 'Error de Validación en Solicitud',
            html: htmlErrores,
            confirmButtonColor: '#ffb703',
            confirmButtonText: 'Corregir Datos'
        });
        return;
    }

    // CASO DE PRUEBA 4: Registrar mantenimiento correctamente
    // Se agrega al array de objetos en JavaScript
    appSolicitudes.unshift(nuevaSolicitud);
    guardarSolicitudes();

    Swal.fire({
        icon: 'success',
        title: '¡Solicitud Registrada Exitosamente!',
        html: `
            <p class="mb-2">Su orden de mantenimiento ha sido generada con el código: <strong>${nuevaSolicitud.id}</strong></p>
            <div class="small text-muted p-2 bg-light rounded text-start">
                <strong>Vehículo:</strong> ${nuevaSolicitud.autoMarca} ${nuevaSolicitud.autoModelo} (${nuevaSolicitud.autoPlaca})<br>
                <strong>Servicio:</strong> ${nuevaSolicitud.servicio}<br>
                <strong>Cita:</strong> ${nuevaSolicitud.fecha} a las ${nuevaSolicitud.hora} hrs.<br>
                <strong>Estado:</strong> <span class="badge bg-warning text-dark">Pendiente</span>
            </div>
        `,
        confirmButtonColor: '#ffb703',
        confirmButtonText: 'Aceptar'
    });

    // Limpiar campos o restablecer formulario
    document.getElementById("formSolicitud").reset();
    establecerRestriccionesFechaHora();

    if (appUsuarioActual && appUsuarioActual.rol === "Cliente") {
        precargarDatosClienteEnFormulario(appUsuarioActual);
    }

    // Actualizar vistas si corresponden
    renderizarMisMantenimientos();
    if (appUsuarioActual && appUsuarioActual.rol === "Administrador") {
        renderizarPanelAdmin();
    }
}

// ==========================================
// 10. VISTA DE CLIENTE: MIS MANTENIMIENTOS (MÓDULO 3)
// ==========================================

/**
 * Renderiza exclusivamente las solicitudes correspondientes al cliente logueado
 * CASO DE PRUEBA 1 & 4: filter() y visualización en "Mis Mantenimientos"
 */
function renderizarMisMantenimientos() {
    const tbody = document.getElementById("misMantenimientosTableBody");
    const emptyMsg = document.getElementById("misMantenimientosEmpty");
    const countBadge = document.getElementById("clienteDashboardCount");
    const nombreLabel = document.getElementById("clienteDashboardNombre");
    const emailLabel = document.getElementById("clienteDashboardEmail");
    const telefonoLabel = document.getElementById("clienteDashboardTelefono");

    if (!tbody || !appUsuarioActual) return;

    nombreLabel.textContent = `Propietario: ${appUsuarioActual.nombre}`;
    emailLabel.textContent = appUsuarioActual.email;
    telefonoLabel.textContent = appUsuarioActual.telefono || "N/A";

    // Filtrar solicitudes usando filter()
    const misSolicitudes = appSolicitudes.filter(sol => {
        return sol.clienteId === appUsuarioActual.id || sol.clienteEmail === appUsuarioActual.email;
    });

    countBadge.innerHTML = `<i class="fa-solid fa-car me-1"></i> ${misSolicitudes.length} Órdenes registradas`;

    tbody.innerHTML = "";

    if (misSolicitudes.length === 0) {
        tbody.parentElement.classList.add("d-none");
        emptyMsg.classList.remove("d-none");
        return;
    }

    tbody.parentElement.classList.remove("d-none");
    emptyMsg.classList.add("d-none");

    // Uso de forEach() para iterar
    misSolicitudes.forEach(sol => {
        const tr = document.createElement("tr");
        const badgeEstado = obtenerBadgeEstado(sol.estado);
        const badgePrioridad = obtenerBadgePrioridad(sol.prioridad);

        tr.innerHTML = `
            <td><strong class="text-primary">${sol.id}</strong></td>
            <td>${sol.autoMarca} ${sol.autoModelo} <span class="small text-muted">(${sol.autoAnio})</span></td>
            <td><span class="badge bg-dark font-monospace">${sol.autoPlaca}</span></td>
            <td>${sol.servicio}</td>
            <td>${sol.fecha} <span class="small text-muted">(${sol.hora})</span></td>
            <td>${badgePrioridad}</td>
            <td>${badgeEstado}</td>
            <td class="text-center">
                <button class="btn btn-sm btn-outline-info btn-ver-detalle" data-id="${sol.id}" title="Ver Detalle Completo">
                    <i class="fa-solid fa-eye"></i> Detalle
                </button>
            </td>
        `;
        tbody.appendChild(tr);
    });

    // Conectar eventos a botones de detalle
    tbody.querySelectorAll(".btn-ver-detalle").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = btn.getAttribute("data-id");
            mostrarDetalleSolicitud(id);
        });
    });
}

// ==========================================
// 11. PANEL DE ADMINISTRADOR: CRUD Y CONTROL (MÓDULO 3)
// ==========================================

/**
 * CASO DE PRUEBA 5: Control de acceso RBAC.
 * Si un cliente intenta entrar al módulo de administración, se bloquea el acceso.
 */
function verificarAccesoAdministrador() {
    if (!appUsuarioActual || appUsuarioActual.rol !== "Administrador") {
        Swal.fire({
            icon: 'error',
            title: 'Acceso Denegado',
            text: 'Operación no permitida: Esta sección está reservada exclusivamente para el rol de Administrador.',
            footer: '<strong>Caso de prueba 5:</strong> Intento de acceso administrativo bloqueado.',
            confirmButtonColor: '#dc3545',
            confirmButtonText: 'Regresar'
        });
        return false;
    }
    return true;
}

/**
 * Renderiza la tabla completa del CRUD general para el Administrador
 * CASO DE PRUEBA 6: Admin modifica estado y elimina un registro
 */
function renderizarPanelAdmin() {
    if (!verificarAccesoAdministrador()) return;

    const tbody = document.getElementById("adminTableBody");
    const emptyMsg = document.getElementById("adminTableEmpty");
    const filtroEstado = document.getElementById("adminFiltroEstado").value;
    const busqueda = (document.getElementById("adminInputBusqueda").value || "").toLowerCase().trim();

    // Actualizar métricas del dashboard usando map(), filter() y for
    actualizarMetricasAdmin();

    // Filtrar solicitudes con filter()
    let resultado = appSolicitudes.filter(sol => {
        // Filtro por estado
        const coincideEstado = (filtroEstado === "TODOS" || sol.estado === filtroEstado);

        // Búsqueda por texto (placa, cliente, marca, código)
        const coincideBusqueda = busqueda === "" ||
            sol.id.toLowerCase().includes(busqueda) ||
            sol.clienteNombre.toLowerCase().includes(busqueda) ||
            sol.autoPlaca.toLowerCase().includes(busqueda) ||
            sol.autoMarca.toLowerCase().includes(busqueda) ||
            sol.servicio.toLowerCase().includes(busqueda);

        return coincideEstado && coincideBusqueda;
    });

    tbody.innerHTML = "";

    if (resultado.length === 0) {
        emptyMsg.classList.remove("d-none");
        return;
    }
    emptyMsg.classList.add("d-none");

    // Renderizar filas con forEach()
    resultado.forEach(sol => {
        const tr = document.createElement("tr");
        const badgeEstado = obtenerBadgeEstado(sol.estado);
        const badgePrioridad = obtenerBadgePrioridad(sol.prioridad);

        tr.innerHTML = `
            <td><strong class="text-warning">${sol.id}</strong></td>
            <td>
                <div class="fw-semibold">${sol.clienteNombre}</div>
                <small class="text-secondary">${sol.clienteEmail}</small>
            </td>
            <td>
                <div>${sol.autoMarca} ${sol.autoModelo} (${sol.autoAnio})</div>
                <span class="badge bg-secondary font-monospace">${sol.autoPlaca}</span> - <small class="text-white-50">${sol.autoKilometraje} km</small>
            </td>
            <td>${sol.servicio}</td>
            <td>${sol.fecha} <small class="text-white-50">(${sol.hora})</small></td>
            <td>${badgePrioridad}</td>
            <td>${badgeEstado}</td>
            <td class="text-center btn-action-group">
                <button class="btn btn-outline-info btn-admin-detalle" data-id="${sol.id}" title="Ver Detalle">
                    <i class="fa-solid fa-eye"></i>
                </button>
                <button class="btn btn-outline-warning btn-admin-estado" data-id="${sol.id}" title="Cambiar Estado Rápido">
                    <i class="fa-solid fa-arrows-spin"></i>
                </button>
                <button class="btn btn-outline-primary btn-admin-editar" data-id="${sol.id}" title="Editar Solicitud">
                    <i class="fa-solid fa-pen"></i>
                </button>
                <button class="btn btn-outline-danger btn-admin-eliminar" data-id="${sol.id}" title="Eliminar Registro">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </td>
        `;
        tbody.appendChild(tr);
    });

    // Conectar eventos de acciones CRUD
    tbody.querySelectorAll(".btn-admin-detalle").forEach(btn => {
        btn.addEventListener("click", () => mostrarDetalleSolicitud(btn.getAttribute("data-id")));
    });

    tbody.querySelectorAll(".btn-admin-estado").forEach(btn => {
        btn.addEventListener("click", () => cambiarEstadoRapidoAdmin(btn.getAttribute("data-id")));
    });

    tbody.querySelectorAll(".btn-admin-editar").forEach(btn => {
        btn.addEventListener("click", () => abrirModalEditarAdmin(btn.getAttribute("data-id")));
    });

    tbody.querySelectorAll(".btn-admin-eliminar").forEach(btn => {
        btn.addEventListener("click", () => eliminarSolicitudAdmin(btn.getAttribute("data-id")));
    });
}

/**
 * Cálculo de estadísticas del taller usando for...of, filter y map
 */
function actualizarMetricasAdmin() {
    const statTotal = document.getElementById("statTotal");
    const statPendientes = document.getElementById("statPendientes");
    const statProceso = document.getElementById("statProceso");
    const statFinalizados = document.getElementById("statFinalizados");

    if (!statTotal) return;

    // Práctica de map() para extraer todos los estados
    const todosLosEstados = appSolicitudes.map(s => s.estado);

    let pendientesCount = 0;
    let procesoCount = 0;
    let finalizadosCount = 0;

    // Práctica de for...of
    for (const estado of todosLosEstados) {
        if (estado === "Pendiente" || estado === "En revisión") {
            pendientesCount++;
        } else if (estado === "En proceso") {
            procesoCount++;
        } else if (estado === "Finalizado") {
            finalizadosCount++;
        }
    }

    statTotal.textContent = appSolicitudes.length;
    statPendientes.textContent = pendientesCount;
    statProceso.textContent = procesoCount;
    statFinalizados.textContent = finalizadosCount;
}

/**
 * CASO DE PRUEBA 6: Modificar estado de una solicitud (Administrador)
 */
function cambiarEstadoRapidoAdmin(id) {
    if (!verificarAccesoAdministrador()) return;

    // Buscar solicitud con find()
    const sol = appSolicitudes.find(s => s.id === id);
    if (!sol) return;

    Swal.fire({
        title: `Actualizar Estado - ${sol.id}`,
        text: `Vehículo: ${sol.autoMarca} ${sol.autoModelo} (${sol.autoPlaca})`,
        input: 'select',
        inputOptions: {
            'Pendiente': 'Pendiente',
            'En revisión': 'En revisión',
            'En proceso': 'En proceso',
            'Finalizado': 'Finalizado',
            'Cancelado': 'Cancelado'
        },
        inputValue: sol.estado,
        showCancelButton: true,
        confirmButtonColor: '#ffb703',
        cancelButtonColor: '#6c757d',
        confirmButtonText: 'Guardar Estado',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed && result.value) {
            const estadoAnterior = sol.estado;
            sol.estado = result.value;
            guardarSolicitudes();

            renderizarPanelAdmin();
            renderizarMisMantenimientos();

            Swal.fire({
                icon: 'success',
                title: 'Estado Actualizado',
                text: `La solicitud ${sol.id} cambió de "${estadoAnterior}" a "${result.value}".`,
                timer: 1800,
                showConfirmButton: false
            });
        }
    });
}

/**
 * CASO DE PRUEBA 6: Abrir modal y editar registro completo (CRUD Admin)
 */
function abrirModalEditarAdmin(id) {
    if (!verificarAccesoAdministrador()) return;

    const sol = appSolicitudes.find(s => s.id === id);
    if (!sol) return;

    document.getElementById("editSolicitudId").value = sol.id;
    document.getElementById("editClienteNombre").value = sol.clienteNombre;
    document.getElementById("editClienteEmail").value = sol.clienteEmail;
    document.getElementById("editAutoPlaca").value = sol.autoPlaca;
    document.getElementById("editAutoMarca").value = sol.autoMarca;
    document.getElementById("editAutoModelo").value = sol.autoModelo;
    document.getElementById("editAutoAnio").value = sol.autoAnio;
    document.getElementById("editAutoKilometraje").value = sol.autoKilometraje;
    document.getElementById("editEstado").value = sol.estado;
    document.getElementById("editServicio").value = sol.servicio;
    document.getElementById("editFecha").value = sol.fecha;
    document.getElementById("editHora").value = sol.hora;
    document.getElementById("editObservaciones").value = sol.observaciones || "";

    const modal = new bootstrap.Modal(document.getElementById("modalEditarSolicitud"));
    modal.show();
}

function procesarGuardarEdicionAdmin(e) {
    e.preventDefault();
    if (!verificarAccesoAdministrador()) return;

    const id = document.getElementById("editSolicitudId").value;
    // Búsqueda del índice para actualizar el objeto en el array
    const indice = appSolicitudes.findIndex(s => s.id === id);
    if (indice === -1) return;

    appSolicitudes[indice].clienteNombre = document.getElementById("editClienteNombre").value.trim();
    appSolicitudes[indice].clienteEmail = document.getElementById("editClienteEmail").value.trim();
    appSolicitudes[indice].autoPlaca = document.getElementById("editAutoPlaca").value.toUpperCase().trim();
    appSolicitudes[indice].autoMarca = document.getElementById("editAutoMarca").value.trim();
    appSolicitudes[indice].autoModelo = document.getElementById("editAutoModelo").value.trim();
    appSolicitudes[indice].autoAnio = parseInt(document.getElementById("editAutoAnio").value, 10);
    appSolicitudes[indice].autoKilometraje = parseInt(document.getElementById("editAutoKilometraje").value, 10);
    appSolicitudes[indice].estado = document.getElementById("editEstado").value;
    appSolicitudes[indice].servicio = document.getElementById("editServicio").value.trim();
    appSolicitudes[indice].fecha = document.getElementById("editFecha").value;
    appSolicitudes[indice].hora = document.getElementById("editHora").value;
    appSolicitudes[indice].observaciones = document.getElementById("editObservaciones").value.trim();

    guardarSolicitudes();

    const modalEl = document.getElementById("modalEditarSolicitud");
    const modalInst = bootstrap.Modal.getInstance(modalEl);
    if (modalInst) modalInst.hide();

    renderizarPanelAdmin();
    renderizarMisMantenimientos();

    Swal.fire({
        icon: 'success',
        title: 'Solicitud Modificada',
        text: `Los cambios en la solicitud ${id} han sido guardados satisfactoriamente.`,
        timer: 1800,
        showConfirmButton: false
    });
}

/**
 * CASO DE PRUEBA 6: Eliminar solicitud con confirmación de SweetAlert2 (Admin)
 */
function eliminarSolicitudAdmin(id) {
    if (!verificarAccesoAdministrador()) return;

    const sol = appSolicitudes.find(s => s.id === id);
    if (!sol) return;

    Swal.fire({
        title: '¿Confirmar eliminación?',
        html: `¿Está seguro de eliminar la solicitud <strong>${sol.id}</strong>?<br><small class="text-danger">Esta acción eliminará el registro del vehículo ${sol.autoPlaca} permanentemente.</small>`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#dc3545',
        cancelButtonColor: '#6c757d',
        confirmButtonText: '<i class="fa-solid fa-trash me-1"></i> Sí, eliminar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            // Filtrar eliminando con filter()
            appSolicitudes = appSolicitudes.filter(s => s.id !== id);
            guardarSolicitudes();

            renderizarPanelAdmin();
            renderizarMisMantenimientos();

            Swal.fire({
                icon: 'success',
                title: 'Registro Eliminado',
                text: `La solicitud ${id} fue removida del sistema.`,
                timer: 1800,
                showConfirmButton: false
            });
        }
    });
}

// ==========================================
// 12. MODAL DETALLE DE SOLICITUD (Solo lectura)
// ==========================================

function mostrarDetalleSolicitud(id) {
    const sol = appSolicitudes.find(s => s.id === id);
    if (!sol) return;

    const contenedor = document.getElementById("modalDetalleBody");
    const badgeEstado = obtenerBadgeEstado(sol.estado);
    const badgePrioridad = obtenerBadgePrioridad(sol.prioridad);

    const adicionalesList = (sol.adicionales && sol.adicionales.length > 0)
        ? sol.adicionales.map(a => `<li><i class="fa-solid fa-check text-success me-2"></i>${a}</li>`).join("")
        : '<li class="text-muted">Ningún servicio adicional seleccionado.</li>';

    contenedor.innerHTML = `
        <div class="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3">
            <div>
                <h4 class="fw-bold mb-0 text-dark">Orden de Servicio: ${sol.id}</h4>
                <small class="text-muted">Fecha de registro: ${sol.fechaRegistro || 'N/A'}</small>
            </div>
            <div>
                ${badgeEstado}
            </div>
        </div>

        <div class="row g-3">
            <div class="col-md-6">
                <div class="p-3 bg-light rounded-3 border">
                    <h6 class="fw-bold text-primary mb-2"><i class="fa-solid fa-user me-2"></i>Datos del Propietario</h6>
                    <p class="mb-1"><strong>Nombre:</strong> ${sol.clienteNombre}</p>
                    <p class="mb-1"><strong>Correo:</strong> ${sol.clienteEmail}</p>
                    <p class="mb-1"><strong>Teléfono:</strong> ${sol.clienteTelefono}</p>
                    <p class="mb-0"><strong>Cédula:</strong> ${sol.clienteCedula}</p>
                </div>
            </div>

            <div class="col-md-6">
                <div class="p-3 bg-light rounded-3 border">
                    <h6 class="fw-bold text-warning mb-2"><i class="fa-solid fa-car me-2"></i>Datos del Vehículo</h6>
                    <p class="mb-1"><strong>Placa:</strong> <span class="badge bg-dark font-monospace">${sol.autoPlaca}</span></p>
                    <p class="mb-1"><strong>Vehículo:</strong> ${sol.autoMarca} ${sol.autoModelo}</p>
                    <p class="mb-1"><strong>Año:</strong> ${sol.autoAnio}</p>
                    <p class="mb-0"><strong>Kilometraje:</strong> ${sol.autoKilometraje} km</p>
                </div>
            </div>

            <div class="col-12">
                <div class="p-3 bg-light rounded-3 border">
                    <h6 class="fw-bold text-dark mb-2"><i class="fa-solid fa-wrench me-2"></i>Detalle de la Cita de Mantenimiento</h6>
                    <div class="row">
                        <div class="col-md-6">
                            <p class="mb-1"><strong>Servicio Principal:</strong> ${sol.servicio}</p>
                            <p class="mb-1"><strong>Fecha de Cita:</strong> ${sol.fecha}</p>
                            <p class="mb-0"><strong>Hora de Atención:</strong> ${sol.hora} hrs.</p>
                        </div>
                        <div class="col-md-6">
                            <p class="mb-1"><strong>Tipo de Atención:</strong> ${badgePrioridad}</p>
                            <p class="mb-1"><strong>Revisiones Adicionales:</strong></p>
                            <ul class="list-unstyled small mb-0">${adicionalesList}</ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-12">
                <div class="p-3 bg-light rounded-3 border">
                    <h6 class="fw-bold text-secondary mb-1"><i class="fa-solid fa-comment-dots me-2"></i>Observaciones y Diagnóstico</h6>
                    <p class="small text-muted mb-0">${sol.observaciones || "Sin observaciones adicionales registradas."}</p>
                </div>
            </div>
        </div>
    `;

    const modal = new bootstrap.Modal(document.getElementById("modalDetalleSolicitud"));
    modal.show();
}

// ==========================================
// 13. HELPERS VISUALES (BADGES DE ESTADO Y PRIORIDAD)
// ==========================================

function obtenerBadgeEstado(estado) {
    switch (estado) {
        case "Pendiente":
            return `<span class="badge-estado badge-estado-pendiente"><span class="status-dot"></span>Pendiente</span>`;
        case "En revisión":
            return `<span class="badge-estado badge-estado-en-revision"><span class="status-dot"></span>En revisión</span>`;
        case "En proceso":
            return `<span class="badge-estado badge-estado-en-proceso"><span class="status-dot"></span>En proceso</span>`;
        case "Finalizado":
            return `<span class="badge-estado badge-estado-finalizado"><span class="status-dot"></span>Finalizado</span>`;
        case "Cancelado":
            return `<span class="badge-estado badge-estado-cancelado"><span class="status-dot"></span>Cancelado</span>`;
        default:
            return `<span class="badge-estado bg-secondary text-white">${estado}</span>`;
    }
}

function obtenerBadgePrioridad(prioridad) {
    switch (prioridad) {
        case "Express":
            return `<span class="badge badge-prioridad-express"><i class="fa-solid fa-bolt me-1"></i>Express</span>`;
        case "Urgente":
            return `<span class="badge badge-prioridad-urgente"><i class="fa-solid fa-triangle-exclamation me-1"></i>Urgente</span>`;
        default:
            return `<span class="badge badge-prioridad-normal">Estándar</span>`;
    }
}

// ==========================================
// 14. CONFIGURACIÓN DE EVENTOS DEL DOM
// ==========================================

function configurarEventos() {
    // Formulario de Solicitud (Submit)
    const formSolicitud = document.getElementById("formSolicitud");
    if (formSolicitud) {
        formSolicitud.addEventListener("submit", procesarEnvioSolicitud);
    }

    // Formulario de Login (Submit)
    const formLogin = document.getElementById("formLogin");
    if (formLogin) {
        formLogin.addEventListener("submit", (e) => {
            e.preventDefault();
            const email = document.getElementById("loginEmail").value;
            const pass = document.getElementById("loginPassword").value;
            ejecutarLogin(email, pass);
        });
    }

    // Botones rápidos de login en modal para facilitar las pruebas del evaluador
    document.querySelectorAll(".btn-quick-login").forEach(btn => {
        btn.addEventListener("click", () => {
            const email = btn.getAttribute("data-email");
            const pass = btn.getAttribute("data-password");
            document.getElementById("loginEmail").value = email;
            document.getElementById("loginPassword").value = pass;
            ejecutarLogin(email, pass);
        });
    });

    // Cerrar sesión
    const btnLogout = document.getElementById("btnLogout");
    if (btnLogout) {
        btnLogout.addEventListener("click", ejecutarLogout);
    }

    // Ver mi perfil
    const btnVerMiPerfil = document.getElementById("btnVerMiPerfil");
    if (btnVerMiPerfil) {
        btnVerMiPerfil.addEventListener("click", mostrarModalPerfil);
    }

    // Botones de navegación interna desde menú de usuario
    const btnIrMisSolicitudes = document.getElementById("btnIrMisSolicitudes");
    if (btnIrMisSolicitudes) {
        btnIrMisSolicitudes.addEventListener("click", () => {
            const seccion = document.getElementById("mis-mantenimientos");
            if (seccion) seccion.scrollIntoView({ behavior: "smooth" });
        });
    }

    const btnIrAdmin = document.getElementById("btnIrAdmin");
    if (btnIrAdmin) {
        btnIrAdmin.addEventListener("click", () => {
            if (verificarAccesoAdministrador()) {
                const seccion = document.getElementById("panel-admin");
                if (seccion) seccion.scrollIntoView({ behavior: "smooth" });
            }
        });
    }

    // Botón recargar mis solicitudes
    const btnRecargarMis = document.getElementById("btnRecargarMisSolicitudes");
    if (btnRecargarMis) {
        btnRecargarMis.addEventListener("click", () => {
            renderizarMisMantenimientos();
            Swal.fire({
                icon: 'info',
                title: 'Actualizado',
                text: 'Lista de solicitudes sincronizada.',
                timer: 1000,
                showConfirmButton: false
            });
        });
    }

    // Selector de clientes en modo admin (autocompleta datos del cliente seleccionado)
    const selectAdminCliente = document.getElementById("adminClienteSelect");
    if (selectAdminCliente) {
        selectAdminCliente.addEventListener("change", (e) => {
            const clienteId = e.target.value;
            if (clienteId) {
                const cliente = appUsuarios.find(u => u.id === clienteId);
                if (cliente) {
                    precargarDatosClienteEnFormulario(cliente);
                }
            } else if (appUsuarioActual) {
                precargarDatosClienteEnFormulario(appUsuarioActual);
            }
        });
    }

    // Filtros del panel admin (búsqueda en vivo y cambio de select)
    const inputBusquedaAdmin = document.getElementById("adminInputBusqueda");
    if (inputBusquedaAdmin) {
        inputBusquedaAdmin.addEventListener("input", renderizarPanelAdmin);
    }

    const selectFiltroEstado = document.getElementById("adminFiltroEstado");
    if (selectFiltroEstado) {
        selectFiltroEstado.addEventListener("change", renderizarPanelAdmin);
    }

    const btnLimpiarFiltros = document.getElementById("btnAdminLimpiarFiltros");
    if (btnLimpiarFiltros) {
        btnLimpiarFiltros.addEventListener("click", () => {
            document.getElementById("adminInputBusqueda").value = "";
            document.getElementById("adminFiltroEstado").value = "TODOS";
            renderizarPanelAdmin();
        });
    }

    // Formulario de edición admin
    const formEditar = document.getElementById("formEditarSolicitud");
    if (formEditar) {
        formEditar.addEventListener("submit", procesarGuardarEdicionAdmin);
    }

    // Botón admin nueva solicitud: scroll al formulario
    const btnAdminNueva = document.getElementById("btnAdminNuevaSolicitud");
    if (btnAdminNueva) {
        btnAdminNueva.addEventListener("click", () => {
            const seccion = document.getElementById("solicitud");
            if (seccion) seccion.scrollIntoView({ behavior: "smooth" });
        });
    }

    // Exportar respaldo de datos en JSON
    const btnExportar = document.getElementById("btnAdminExportarJSON");
    if (btnExportar) {
        btnExportar.addEventListener("click", () => {
            if (!verificarAccesoAdministrador()) return;
            const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(appSolicitudes, null, 2));
            const dlAnchor = document.createElement('a');
            dlAnchor.setAttribute("href", dataStr);
            dlAnchor.setAttribute("download", `autotech_solicitudes_${Date.now()}.json`);
            dlAnchor.click();
        });
    }

    // Restablecer datos iniciales de demostración
    const btnResetData = document.getElementById("btnAdminResetDefaultData");
    if (btnResetData) {
        btnResetData.addEventListener("click", () => {
            if (!verificarAccesoAdministrador()) return;
            Swal.fire({
                title: '¿Restablecer datos originales?',
                text: "Se restaurarán las solicitudes de demostración iniciales de la práctica.",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#dc3545',
                cancelButtonColor: '#6c757d',
                confirmButtonText: 'Sí, restablecer',
                cancelButtonText: 'Cancelar'
            }).then((res) => {
                if (res.isConfirmed) {
                    appSolicitudes = [...SOLICITUDES_INICIALES];
                    guardarSolicitudes();
                    renderizarPanelAdmin();
                    renderizarMisMantenimientos();
                    Swal.fire('Restablecido', 'Los datos iniciales fueron recargados.', 'success');
                }
            });
        });
    }

    // Formateo automático de placa a mayúsculas mientras el usuario escribe
    const inputPlaca = document.getElementById("autoPlaca");
    if (inputPlaca) {
        inputPlaca.addEventListener("input", (e) => {
            e.target.value = e.target.value.toUpperCase();
        });
    }
}
