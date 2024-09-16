const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);
window.addEventListener("resize", checkBoxes); // Para garantir que o cálculo seja atualizado quando a tela redimensionar

checkBoxes();

function checkBoxes(){
    const triggerBtn = window.innerHeight / 0.6; // Adaptação para diferentes tamanhos de tela

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top; // Mantendo getBoundingClientRect
        
        if (boxTop < triggerBtn) {
            box.classList.add("show");
        } else {
            box.classList.remove("show");
        }
    });
}
