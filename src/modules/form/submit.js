import dayjs from "dayjs"

const form = document.querySelector("form")
const selectedDate = document.getElementById("date")

//Date atual para o input
const inputToday =   dayjs(new Date()).format("YYYY-MM-DD")

//Carrega a data atual
selectedDate.value = inputToday

//Define a data minima como dendo a data atual
selectedDate.min = inputToday



form.onsubmit = (e) =>{
    //Previne o comportamento padrão de carregar a página
    e.preventDefault()

    alert("enviado")
}