//tradução de schedules é  agenda
import {hoursLoad} from "../form/hours-load.js"
import {scheduleFetchByDay} from "../../services/schedule-fetch-by-day.js"
const selectedDate = document.getElementById("date")
export async function schedulesDay(){

    //obtem a data do input
    const date = selectedDate.value

    //Busca na API os agendamentos  
    const dailySchedules = await scheduleFetchByDay({date})
    console.log(dailySchedules)
    hoursLoad({date})
}