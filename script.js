const boxes = document.querySelectorAll(".box");

function checkBoxes() {
    const triggerBottom = window.innerHeight + window.scrollY;

    boxes.forEach(box => {
        const boxTop = box.offsetTop;

        if (boxTop < triggerBottom) {
            box.classList.add("show");
        } else {
            box.classList.remove("show");
        }
    });

    requestAnimationFrame(checkBoxes); // Chama a função de forma contínua para sempre verificar
}

requestAnimationFrame(checkBoxes); // Inicia o loop de verificação contínua
