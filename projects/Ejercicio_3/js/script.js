const lista = document.getElementsByName("resto");
for (let restoValue = 0; restoValue < lista.length; restoValue++) {
    lista[restoValue].addEventListener("click", () => {
        sessionStorage.setItem("restoValue", restoValue);
        window.location.href = "restaurantes/info.html";
    });
}