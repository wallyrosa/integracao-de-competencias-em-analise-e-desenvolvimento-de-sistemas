// scroll suave para os links internos
function scrollToContent(event, id) {
    event.preventDefault();

    const mainContainer = document.querySelector(".main");
    const targetSection = document.querySelector(`#${id}`);

    const topPosition = targetSection.offsetTop;

    mainContainer.scrollTo({
        top: topPosition,
        behavior: "smooth",
    });
}

// Para abrir e fechar o menu no mobile
function showMenu() {
    const menu = document.querySelector(".dropdown-menu");

    // Alterna a classe para mostrar/ocultar o menu
    menu.classList.toggle("show");

    if (menu.classList.contains("show")) {
        document.addEventListener("click", handleOutsideClick);
    } else {
        document.removeEventListener("click", handleOutsideClick);
    }
}

// Fecha o menu ao clicar fora dele
function handleOutsideClick(event) {
    const menu = document.querySelector(".dropdown-menu");
    const menuButton = document.querySelector(".dropdown-button");

    if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
        menu.classList.remove("show");
        document.removeEventListener("click", handleOutsideClick);
    }
}
