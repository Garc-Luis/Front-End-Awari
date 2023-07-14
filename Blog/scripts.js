document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contato-form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = form.elements["nome"].value;
        const email = form.elements["email"].value;
        const message = form.elements["mensagem"].value;

        const result = `${name}\n${email}\n${message}`

        alert(result)
    });
})