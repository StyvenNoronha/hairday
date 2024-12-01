import {apiConfig} from "./api-config.js"
import dayjs from "dayjs"


export async function scheduleFetchByDay({date}) {
    try {
        //Fazendo a requisição
        const response = await fetch(`${apiConfig.baseUrl}/schedules`)

        //converte para JSON
        const data = await response.json()


        //Filtra os agendamentos pelo dia selecionado
        const dailySchedules = data.filtre((schedule)=>
        dayjs(date).isSame(schedule.when, "day"))


        return dailySchedules

    } catch (error) {
        console.log(error)
        alert("Não foi possível buscar os agendamentos do dia selecionado")
    }
}
