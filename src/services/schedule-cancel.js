import {apiConfig} from "./api-config.js"

export async function scheduleCancel({id}){
    console.log({id})
   try {
    await fetch(`${apiConfig.baseUrl}/schedules/${id}`,{
        method: "DELETE",
    })
   } catch (error) {
    console.log(error)
    alert("Nao foi possível cancelar o agendamento")
   }
}