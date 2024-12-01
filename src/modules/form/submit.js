import dayjs from "dayjs"

import { scheduleNew} from "../../services/schedule-new.js"

const form = document.querySelector("form")
const clientName = document.getElementById("client")
const selectedDate = document.getElementById("date")

//Date atual para o input
const inputToday =   dayjs(new Date()).format("YYYY-MM-DD")

//Carrega a data atual
selectedDate.value = inputToday

//Define a data minima como dendo a data atual
selectedDate.min = inputToday



form.onsubmit = async (e) =>{
    //Previne o comportamento padrão de carregar a página
    e.preventDefault()

    try {
        //recuperando o nome do cliente
        const name = clientName.value.trim()

        //verificar se digitou o nome do cliente
        if(!name){
            return alert("informe o nome do cliente")
        }

        //recupera o horário selecionado
        const hourSelected = document.querySelector(".hour-selected")

        //verifica se voi selecionado um horário
        if(!hourSelected){
            return alert("selecione a hora.")
        }
        
        //recupera somente a hora
        const [hour]  = hourSelected.innerText.split(":")
        console.log(hour)

        //Insere a hora na data
        const when = dayjs(selectedDate.value).add(hour, "hour")
        
        //Gera um ID
        const id = new Date().getTime()

        await scheduleNew({
            id,
            name,
            when,
        })
    } catch (error) {
        alert("não foi possível realizar o agendamento")
        console.log(error)
    }
}

