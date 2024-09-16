const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);
window.addEventListener("resize", checkBoxes);

checkBoxes();

function checkBoxes(){
    const triggerBtn = window.innerHeight / 5 * 4.3;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if(boxTop < triggerBtn){
            box.classList.add("show");
        }else{
            box.classList.remove("show");
        }
    })
}


function checkBoxes(){
    const triggerBtn = window.innerHeight / 1.2;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if(boxTop < triggerBtn){
            box.classList.add("show");
        }else{
            box.classList.remove("show");
        }
    })
}
