const periods = document.querySelectorAll(".period");
//Gera evento click para cada lista (manhã, tarde e noite)

//gera  evento click para cada lista manhã, tarde e noite
periods.forEach((period)=>{
 period.addEventListener("click",(e)=>{
    if(e.target.classList.contains("cancel-icon")) {
        const item = e.target.closest("li")
        const {id} = item.dataset

        if(id){
            const isConfirm = confirm(
                "Tem certeza"
            )

            if(isConfirm){
                console.log("removido")
            }
        }
    }
 })
})
