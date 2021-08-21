const panels = document.querySelectorAll('.panel');
const body = document.querySelector('body');

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeClassActive()
        panel.classList.add('active');
        if(panel == panels[0]){
            body.classList.add('spring');
        } else if(panel == panels[1]){
            body.classList.add('summer');
        } else if(panel == panels[2]){
            body.classList.add('autumn');
        } else if(panel == panels[3]){
            body.classList.add('winter');
        }
    })
})

function removeClassActive(){
    panels.forEach(panel => {
        panel.classList.remove('active');
        body.classList.remove('spring');
        body.classList.remove('summer');
        body.classList.remove('autumn');
        body.classList.remove('winter');
    })
}


