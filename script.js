document.addEventListener('DOMContentLoaded', () => {
    const pcButton = document.getElementById('view-pc');
    const androidButton = document.getElementById('view-android');
    const body = document.body;

    // Función para aplicar estilos de PC
    function setPcView() {
        body.classList.remove('android-view'); // Quita la clase 'android-view' del body
        pcButton.classList.add('active'); // Marca el botón de PC como activo
        androidButton.classList.remove('active'); // Desactiva el botón de Android
        localStorage.setItem('viewMode', 'pc'); // Guarda la preferencia en el almacenamiento local
        console.log("Modo de vista: PC");
    }

    // Función para aplicar estilos de Android
    function setAndroidView() {
        body.classList.add('android-view'); // Añade la clase 'android-view' al body
        androidButton.classList.add('active'); // Marca el botón de Android como activo
        pcButton.classList.remove('active'); // Desactiva el botón de PC
        localStorage.setItem('viewMode', 'android'); // Guarda la preferencia en el almacenamiento local
        console.log("Modo de vista: Android");
    }

    // Event listeners para los botones
    pcButton.addEventListener('click', setPcView);
    androidButton.addEventListener('click', setAndroidView);

    // Intentar cargar la preferencia del usuario al cargar la página
    const savedViewMode = localStorage.getItem('viewMode');

    if (savedViewMode === 'android') {
        setAndroidView(); // Si la última vez el usuario eligió Android, lo aplica
    } else if (savedViewMode === 'pc') {
        setPcView(); // Si la última vez el usuario eligió PC, lo aplica
    } else {
        // Detección automática inicial si no hay preferencia guardada
        // Si el ancho de la ventana es menor o igual a 768px, asume que es Android
        if (window.innerWidth <= 768) { // Usamos el mismo breakpoint que en el CSS
            setAndroidView();
        } else {
            setPcView();
        }
    }
});
