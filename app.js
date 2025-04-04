function toggleContent(id) {
    const section = document.getElementById(id);

    // Cierra todos los contenidos abiertos si quieres efecto acordeón:
    document.querySelectorAll(".contenido").forEach((div) => {
        if (div.id !== id) {
            div.style.display = "none";
        }
    });

    // Alterna visibilidad
    if (section.style.display === "block") {
        section.style.display = "none";
    } else {
        section.style.display = "block";
    }
}
