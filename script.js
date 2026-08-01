// Archivo: script.js
const raiz = document.documentElement;

// --- Diccionario de traducciones (Español, Inglés, Esperanto, Francés, Portugués, Alemán Suizo, Italiano, Checo, Estonio) ---
const traduccionesDeInterfaz = {
    es: {
        etiquetaNombre: "Nombre",
        tituloDatosGato: "Datos del Gato:",
        etiquetaGenero: "Género",
        opcionMacho: "Macho",
        opcionHembra: "Hembra",
        etiquetaEsterilizado: "Esterilizado",
        opcionSi: "Sí",
        opcionNo: "No",
        etiquetaTiempoVida: "Tiempo de vida",
        etiquetaFechaAdopcion: "Fecha de adopción",
        etiquetaPeso: "Peso:",
        etiquetaAltura: "Altura:",
        etiquetaDesparasitado: "Desparasitado",
        etiquetaFecha: "Fecha:",
        tituloVacunas: "Vacunas del Gato",
        vacunaTriple: "Triple Felina",
        vacunaRabica: "Rábica",
        vacunaLeucemia: "Leucemia Felina",
        botonAgregarVacuna: "Agregar Vacuna",
        tituloNotas: "Notas",
        placeholderNotas: "Escribe aquí cualquier observación adicional...",
        botonDescargar: "Descargar PDF",
        imagenAutorUrl: "autor.png"
    },
    en: {
        etiquetaNombre: "Name",
        tituloDatosGato: "Cat's Data:",
        etiquetaGenero: "Gender",
        opcionMacho: "Male",
        opcionHembra: "Female",
        etiquetaEsterilizado: "Neutered",
        opcionSi: "Yes",
        opcionNo: "No",
        etiquetaTiempoVida: "Lifespan",
        etiquetaFechaAdopcion: "Adoption Date",
        etiquetaPeso: "Weight:",
        etiquetaAltura: "Height:",
        etiquetaDesparasitado: "Dewormed",
        etiquetaFecha: "Date:",
        tituloVacunas: "Cat Vaccines",
        vacunaTriple: "Feline Trio",
        vacunaRabica: "Rabies",
        vacunaLeucemia: "Feline Leukemia",
        botonAgregarVacuna: "Add Vaccine",
        tituloNotas: "Notes",
        placeholderNotas: "Write any additional observations here...",
        botonDescargar: "Download PDF",
        imagenAutorUrl: "autorusa.png"
    },
    eo: {
        etiquetaNombre: "Nomo",
        tituloDatosGato: "Datumoj de la Kato:",
        etiquetaGenero: "Senso",
        opcionMacho: "Vira",
        opcionHembra: "Ina",
        etiquetaEsterilizado: "Steriligita",
        opcionSi: "Jes",
        opcionNo: "Ne",
        etiquetaTiempoVida: "Vivo-tempo",
        etiquetaFechaAdopcion: "Adopta Dato",
        etiquetaPeso: "Pezo:",
        etiquetaAltura: "Alteco:",
        etiquetaDesparasitado: "Senparazitigita",
        etiquetaFecha: "Dato:",
        tituloVacunas: "Katak Vaksinoj",
        vacunaTriple: "Triopa Feliĉa",
        vacunaRabica: "Rabiema",
        vacunaLeucemia: "Feliĉa Leŭkemio",
        botonAgregarVacuna: "Aldoni Vakcinon",
        tituloNotoj: "Notoj",
        placeholderNotas: "Skribu ĉi tie pliajn observadojn...",
        botonDescargar: "Elŝuti PDF",
        imagenAutorUrl: "esperanto.png"
    },
    fr: {
        etiquetaNombre: "Nom",
        tituloDatosGato: "Données du Chat :",
        etiquetaGenero: "Genre",
        opcionMacho: "Mâle",
        opcionHembra: "Femelle",
        etiquetaEsterilizado: "Stérilisé",
        opcionSi: "Oui",
        opcionNo: "Non",
        etiquetaTiempoVida: "Durée de vie",
        etiquetaFechaAdopcion: "Date d'adoption",
        etiquetaPeso: "Poids :",
        etiquetaAltura: "Taille :",
        etiquetaDesparasitado: "Déparasité",
        etiquetaFecha: "Date :",
        tituloVacunas: "Vaccins du Chat",
        vacunaTriple: "Triple Félin",
        vacunaRabica: "Antirabique",
        vacunaLeucemia: "Leucémie Féline",
        botonAgregarVacuna: "Ajouter un Vaccin",
        tituloNotas: "Notes",
        placeholderNotas: "Écrivez ici toute observation supplémentaire...",
        botonDescargar: "Télécharger le PDF",
        imagenAutorUrl: "autorfr.png"
    },
    pt: {
        etiquetaNombre: "Nome",
        tituloDatosGato: "Dados do Gato:",
        etiquetaGenero: "Gênero",
        opcionMacho: "Macho",
        opcionHembra: "Fêmea",
        etiquetaEsterilizado: "Castrado",
        opcionSi: "Sim",
        opcionNo: "Não",
        etiquetaTiempoVida: "Tempo de vida",
        etiquetaFechaAdopcion: "Data de adoção",
        etiquetaPeso: "Peso:",
        etiquetaAltura: "Altura:",
        etiquetaDesparasitado: "Desparasitado",
        etiquetaFecha: "Data:",
        tituloVacunas: "Vacinas do Gato",
        vacunaTriple: "Tríplice Felina",
        vacunaRabica: "Antirrábica",
        vacunaLeucemia: "Leucemia Felina",
        botonAgregarVacuna: "Adicionar Vacina",
        tituloNotas: "Notas",
        placeholderNotas: "Escreva aqui qualquer observação adicional...",
        botonDescargar: "Baixar PDF",
        imagenAutorUrl: "autorpt.png"
    },
    gsw: {
        etiquetaNombre: "Name",
        tituloDatosGato: "Chatzedate:",
        etiquetaGenero: "Gschlächt",
        opcionMacho: "Männli",
        opcionHembra: "Wybli",
        etiquetaEsterilizado: "Kastriert",
        opcionSi: "Ja",
        opcionNo: "Nei",
        etiquetaTiempoVida: "Läbeszyt",
        etiquetaFechaAdopcion: "Adoptionsdatum",
        etiquetaPeso: "Gwicht:",
        etiquetaAltura: "Grössi:",
        etiquetaDesparasitado: "Entwurmt",
        etiquetaFecha: "Datum:",
        tituloVacunas: "Chatzeimpfunge",
        vacunaTriple: "Drüfachimpfig",
        vacunaRabica: "Tollwuet",
        vacunaLeucemia: "Chatzeleukämy",
        botonAgregarVacuna: "Impfig hinzuefüege",
        tituloNotas: "Notize",
        placeholderNotas: "Schryb da zuesätzlechi Bemerkige...",
        botonDescargar: "PDF abelade",
        imagenAutorUrl: "suiza.png"
    },
    it: {
        etiquetaNombre: "Nome",
        tituloDatosGato: "Dati del Gatto:",
        etiquetaGenero: "Genere",
        opcionMacho: "Maschio",
        opcionHembra: "Femmina",
        etiquetaEsterilizado: "Sterilizzato",
        opcionSi: "Sì",
        opcionNo: "No",
        etiquetaTiempoVida: "Tempo di vita",
        etiquetaFechaAdopcion: "Data di adozione",
        etiquetaPeso: "Peso:",
        etiquetaAltura: "Altezza:",
        etiquetaDesparasitado: "Sverminato",
        etiquetaFecha: "Data:",
        tituloVacunas: "Vaccini del Gatto",
        vacunaTriple: "Trivalente Felina",
        vacunaRabica: "Antirabbica",
        vacunaLeucemia: "Leucemia Felina",
        botonAgregarVacuna: "Aggiungi Vaccino",
        tituloNotas: "Note",
        placeholderNotas: "Scrivi qui eventuali osservazioni aggiuntive...",
        botonDescargar: "Scarica PDF",
        imagenAutorUrl: "autorit.png"
    },
    cs: {
        etiquetaNombre: "Jméno",
        tituloDatosGato: "Údaje o kočce:",
        etiquetaGenero: "Pohlaví",
        opcionMacho: "Kocour",
        opcionHembra: "Kočka",
        etiquetaEsterilizado: "Kastrovaný",
        opcionSi: "Ano",
        opcionNo: "Ne",
        etiquetaTiempoVida: "Délka života",
        etiquetaFechaAdopcion: "Datum adopce",
        etiquetaPeso: "Váha:",
        etiquetaAltura: "Výška:",
        etiquetaDesparasitado: "Odčervený",
        etiquetaFecha: "Datum:",
        tituloVacunas: "Očkování",
        vacunaTriple: "Trojkombinace",
        vacunaRabica: "Vzteklina",
        vacunaLeucemia: "Kočičí leukémie",
        botonAgregarVacuna: "Přidat očkování",
        tituloNotas: "Poznámky",
        placeholderNotas: "Zde napište jakékoliv další postřehy...",
        botonDescargar: "Stáhnout PDF",
        imagenAutorUrl: "chequia.png"
    },
    et: {
        etiquetaNombre: "Nimi",
        tituloDatosGato: "Kassi andmed:",
        etiquetaGenero: "Sugu",
        opcionMacho: "Isane",
        opcionHembra: "Emane",
        etiquetaEsterilizado: "Kastreeritud",
        opcionSi: "Jah",
        opcionNo: "Ei",
        etiquetaTiempoVida: "Eluiga",
        etiquetaFechaAdopcion: "Lapsendamise kuupäev",
        etiquetaPeso: "Kaal:",
        etiquetaAltura: "Kõrgus:",
        etiquetaDesparasitado: "Parasiiditõrje tehtud",
        etiquetaFecha: "Kuupäev:",
        tituloVacunas: "Vaktsiinid",
        vacunaTriple: "Kolmikvaktsiin",
        vacunaRabica: "Marutaud",
        vacunaLeucemia: "Kasside leukeemia",
        botonAgregarVacuna: "Lisa vaktsiin",
        tituloNotas: "Märkmed",
        placeholderNotas: "Kirjutage siia kõik täiendavad märkused...",
        botonDescargar: "Laadi alla PDF",
        imagenAutorUrl: "estonia.png"
    }
};

// Función para cambiar los textos y mensajes de la página según el idioma elegido
function cambiarIdiomaDePagina(idiomaSeleccionado) {
    const diccionarioActual = traduccionesDeInterfaz[idiomaSeleccionado];
    if (!diccionarioActual) return;

    document.querySelectorAll('[data-traduccion]').forEach(elementoConTraduccion => {
        const claveTraduccion = elementoConTraduccion.getAttribute('data-traduccion');
        if (diccionarioActual[claveTraduccion]) {
            elementoConTraduccion.textContent = diccionarioActual[claveTraduccion];
        }
    });

    const campoNotasMascota = document.getElementById('notaMascota');
    if (campoNotasMascota && diccionarioActual.placeholderNotas) {
        campoNotasMascota.placeholder = diccionarioActual.placeholderNotas;
    }

    const imagenAutorElemento = document.getElementById('imagenAutor');
    if (imagenAutorElemento && diccionarioActual.imagenAutorUrl) {
        imagenAutorElemento.src = diccionarioActual.imagenAutorUrl;
    }
}

// Evento para detectar el cambio en el menú desplegable de idiomas
const selectorIdiomaElemento = document.getElementById('selectorIdioma');
if (selectorIdiomaElemento) {
    selectorIdiomaElemento.addEventListener('change', function(eventoDeCambio) {
        cambiarIdiomaDePagina(eventoDeCambio.target.value);
    });
}

// Función auxiliar para convertir colores hexadecimales a RGB para variables de diseño
function convertirHexadecimalARgb(hexadecimal) {
    const resultado = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexadecimal);
    return resultado ? `${parseInt(resultado[1], 16)}, ${parseInt(resultado[2], 16)}, ${parseInt(resultado[3], 16)}` : null;
}

// Eventos para cambiar los colores de la interfaz de forma dinámica
const colorAcentoElemento = document.getElementById('colorAcento');
if (colorAcentoElemento) {
    colorAcentoElemento.addEventListener('input', function(evento) {
        const valorHexadecimal = evento.target.value;
        const valorRgb = convertirHexadecimalARgb(valorHexadecimal);
        if (valorRgb) {
            raiz.style.setProperty('--colorAcentoRgb', valorRgb);
        }
    });
}

const colorFondoElemento = document.getElementById('colorFondo');
if (colorFondoElemento) {
    colorFondoElemento.addEventListener('input', function(evento) {
        raiz.style.setProperty('--fondoOscuro', evento.target.value);
    });
}

const colorTarjetaElemento = document.getElementById('colorTarjeta');
if (colorTarjetaElemento) {
    colorTarjetaElemento.addEventListener('input', function(evento) {
        raiz.style.setProperty('--fondoTarjeta', evento.target.value);
    });
}

// Evento para cargar la foto del gato seleccionada por el usuario
const fotoGatoElemento = document.getElementById('fotoGato');
if (fotoGatoElemento) {
    fotoGatoElemento.addEventListener('change', function(evento) {
        const archivoImagen = evento.target.files[0];
        if (archivoImagen) {
            const lectorArchivo = new FileReader();
            lectorArchivo.onload = function(eventoLector) {
                const cajaVistaPrevia = document.getElementById('vistaPreviaFoto');
                if (cajaVistaPrevia) {
                    cajaVistaPrevia.style.backgroundImage = `url(${eventoLector.target.result})`;
                    const iconoCamara = document.getElementById('iconoCamara');
                    if (iconoCamara) iconoCamara.style.display = 'none';
                    cajaVistaPrevia.style.border = '2px solid var(--colorAcento)';
                }
            };
            lectorArchivo.readAsDataURL(archivoImagen);
        }
    });
}

// Sincronizar entradas de texto en tiempo real para el documento y la captura del PDF
document.querySelectorAll('input, textarea').forEach(campoEntrada => {
    campoEntrada.addEventListener('input', function() {
        if (this.type === 'checkbox' || this.type === 'radio') {
            if (this.checked) {
                this.setAttribute('checked', 'checked');
            } else {
                this.removeAttribute('checked');
            }
        } else if (this.tagName === 'TEXTAREA') {
            this.textContent = this.value;
        } else {
            this.setAttribute('value', this.value);
        }
    });
});

// --- Función para la descarga del archivo PDF (informegato.pdf) ---
const botonDescargaElemento = document.getElementById('botonDescarga');
if (botonDescargaElemento) {
    botonDescargaElemento.addEventListener('click', function() {
        const elementoTarjetaMascota = document.getElementById('tarjetaMascota');
        const manijaDeArrastre = document.querySelector('.handle-arrastre-tarjeta');
        
        // Obtenemos los colores actuales calculados para fijarlos durante la exportación
        const colorActualTarjeta = getComputedStyle(raiz).getPropertyValue('--fondoTarjeta').trim() || '#1e1e1e';
        
        // Forzamos la sincronización de todas las entradas antes de capturar el lienzo
        const todasLasEntradas = elementoTarjetaMascota.querySelectorAll('input, textarea');
        todasLasEntradas.forEach(entrada => {
            if (entrada.type === 'text' || entrada.type === 'date' || entrada.type === 'number') {
                entrada.setAttribute('value', entrada.value);
            } else if (entrada.tagName === 'TEXTAREA') {
                entrada.textContent = entrada.value;
            } else if (entrada.type === 'checkbox' || entrada.type === 'radio') {
                if (entrada.checked) {
                    entrada.setAttribute('checked', 'checked');
                } else {
                    entrada.removeAttribute('checked');
                }
            }
        });

        const opcionesPdf = {
            margin:       10,
            filename:     'informegato.pdf',
            image:        { type: 'jpeg', quality: 0.98 },
            html2canvas:  { 
                scale: 2, 
                useCORS: true, 
                backgroundColor: colorActualTarjeta,
                windowWidth: 794 // Ancho fijo estándar para evitar recortes laterales
            },
            jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };
        
        // Ocultamos elementos interactivos innecesarios para la impresión
        this.style.display = 'none';
        if (manijaDeArrastre) manijaDeArrastre.style.display = 'none';
        
        const anchoOriginal = elementoTarjetaMascota.style.width;
        elementoTarjetaMascota.style.width = '794px';
        
        html2pdf().set(opcionesPdf).from(elementoTarjetaMascota).save().then(() => {
            elementoTarjetaMascota.style.width = anchoOriginal;
            this.style.display = 'flex';
            if (manijaDeArrastre) manijaDeArrastre.style.display = 'block';
        }).catch((errorDePdf) => {
            console.error('Error al generar el PDF:', errorDePdf);
            elementoTarjetaMascota.style.width = anchoOriginal;
            this.style.display = 'flex';
            if (manijaDeArrastre) manijaDeArrastre.style.display = 'block';
        });
    });
}

// Cargar imagen de fondo personalizada
const fondoImagenElemento = document.getElementById('fondoImagen');
if (fondoImagenElemento) {
    fondoImagenElemento.addEventListener('change', function(evento) {
        const archivo = evento.target.files[0];
        if (archivo) {
            const lector = new FileReader();
            lector.onload = function(eventoLector) {
                document.body.style.backgroundImage = `url(${eventoLector.target.result})`;
                document.body.style.backgroundSize = 'cover';
                document.body.style.backgroundPosition = 'center';
                document.body.style.backgroundRepeat = 'no-repeat';
            };
            lector.readAsDataURL(archivo);
        }
    });
}

// Limpiar la imagen de fondo actual
const limpiarFondoElemento = document.getElementById('limpiarFondo');
if (limpiarFondoElemento) {
    limpiarFondoElemento.addEventListener('click', function() {
        document.body.style.backgroundImage = 'none';
        document.body.style.backgroundSize = '';
        document.body.style.backgroundPosition = '';
        document.body.style.backgroundRepeat = '';
        const fondoImg = document.getElementById('fondoImagen');
        if (fondoImg) fondoImg.value = '';
    });
}

// Mostrar u ocultar la fecha de desparasitación dependiendo de la opción seleccionada
const selectoresDesparasitado = document.querySelectorAll('input[name="desparasitado"]');
const contenedorFechaDesparasitado = document.getElementById('fechaDesparasitado');

function actualizarFechaDesparasitado() {
    const seleccionado = document.querySelector('input[name="desparasitado"]:checked');
    if (contenedorFechaDesparasitado) {
        if (seleccionado && seleccionado.value === 'si') {
            contenedorFechaDesparasitado.style.display = 'flex';
        } else {
            contenedorFechaDesparasitado.style.display = 'none';
        }
    }
}

selectoresDesparasitado.forEach(selector => {
    selector.addEventListener('change', actualizarFechaDesparasitado);
});
actualizarFechaDesparasitado();

// Capturar los cambios dentro de la tarjeta para las entradas generales
const tarjetaMascotaElemento = document.getElementById('tarjetaMascota');
if (tarjetaMascotaElemento) {
    tarjetaMascotaElemento.addEventListener('input', function(evento) {
        const objetivo = evento.target;
        if (objetivo.tagName === 'INPUT' && objetivo.type !== 'checkbox' && objetivo.type !== 'radio') {
            objetivo.setAttribute('value', objetivo.value);
        }
    });
    tarjetaMascotaElemento.addEventListener('change', function(evento) {
        const objetivo = evento.target;
        if (objetivo.tagName === 'INPUT' && (objetivo.type === 'checkbox' || objetivo.type === 'radio')) {
            if (objetivo.checked) {
                objetivo.setAttribute('checked', 'checked');
            } else {
                objetivo.removeAttribute('checked');
            }
        }
    });
}

// Asignar el evento de eliminación a los botones de borrar vacunas
function configurarBotonEliminar(boton) {
    boton.addEventListener('click', function() {
        const filaVacuna = this.closest('.filaVacuna');
        if (filaVacuna) {
            filaVacuna.remove();
        }
    });
}

document.querySelectorAll('.botonEliminarVacuna').forEach(boton => {
    configurarBotonEliminar(boton);
});

// Función para agregar nuevas filas de vacunas de manera dinámica
function agregarFilaVacuna() {
    const contenedor = document.getElementById('contenedorVacunas');
    if (!contenedor) return;

    const nuevaFila = document.createElement('div');
    nuevaFila.className = 'filaVacuna';

    const etiqueta = document.createElement('label');
    const casillaDeSeleccion = document.createElement('input');
    casillaDeSeleccion.type = 'checkbox';
    const entradaNombre = document.createElement('input');
    entradaNombre.type = 'text';
    entradaNombre.className = 'inputNombreVacuna';
    entradaNombre.placeholder = 'Nombre vacuna';
    etiqueta.appendChild(casillaDeSeleccion);
    etiqueta.appendChild(entradaNombre);

    const envolturaFecha = document.createElement('div');
    envolturaFecha.className = 'envolturaFecha';
    const etiquetaDeFecha = document.createElement('span');
    etiquetaDeFecha.textContent = 'Fecha:';
    const entradaFecha = document.createElement('input');
    entradaFecha.type = 'date';
    envolturaFecha.appendChild(etiquetaDeFecha);
    envolturaFecha.appendChild(entradaFecha);

    const botonEliminar = document.createElement('button');
    botonEliminar.type = 'button';
    botonEliminar.className = 'botonEliminarVacuna';
    botonEliminar.title = 'Eliminar vacuna';
    botonEliminar.innerHTML = '<i class="fas fa-trash-alt"></i>';
    configurarBotonEliminar(botonEliminar);

    nuevaFila.appendChild(etiqueta);
    nuevaFila.appendChild(envolturaFecha);
    nuevaFila.appendChild(botonEliminar);
    contenedor.appendChild(nuevaFila);
}

const agregarVacunaElemento = document.getElementById('agregarVacuna');
if (agregarVacunaElemento) {
    agregarVacunaElemento.addEventListener('click', agregarFilaVacuna);
}

// Lógica para permitir que el usuario arrastre la tarjeta usando el cursor
const manejadorDeArrastre = document.querySelector('.handle-arrastre-tarjeta');
let estaArrastrando = false;
let inicioX, inicioY;
let actualX = 0;
let actualY = 0;

if (manejadorDeArrastre && tarjetaMascotaElemento) {
    manejadorDeArrastre.addEventListener('mousedown', (evento) => {
        estaArrastrando = true;
        inicioX = evento.clientX - actualX;
        inicioY = evento.clientY - actualY;
        manejadorDeArrastre.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', (evento) => {
        if (estaArrastrando) {
            evento.preventDefault();
            actualX = evento.clientX - inicioX;
            actualY = evento.clientY - inicioY;
            tarjetaMascotaElemento.style.transform = `translate(${actualX}px, ${actualY}px)`;
        }
    });

    document.addEventListener('mouseup', () => {
        if (estaArrastrando) {
            estaArrastrando = false;
            manejadorDeArrastre.style.cursor = 'grab';
        }
    });
}

// Botón para alternar el tema visual entre modo claro y modo oscuro
document.addEventListener('DOMContentLoaded', function() {
    const boton = document.getElementById('alternarTema');
    if (!boton) return;

    function actualizarBoton() {
        const esOscuro = document.body.classList.contains('tema-oscuro');
        boton.innerHTML = esOscuro
            ? '<i class="fas fa-sun"></i> Modo Claro'
            : '<i class="fas fa-moon"></i> Modo Oscuro';
    }

    boton.addEventListener('click', function() {
        document.body.classList.toggle('tema-oscuro');
        actualizarBoton();
    });

    actualizarBoton();
});