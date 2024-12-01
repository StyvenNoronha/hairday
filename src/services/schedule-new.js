import {apiConfig} from "./api-config.js"

export async function scheduleNew({id,name,when}) {
    try {
        //Faz a requisição para enviar os dados do agendamento
        await fetch(`${apiConfig.baseUrl}/schedules`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify({id, name, when})
        })
        //envia uma mensagem que o cadastro deu tudo certo
        alert("agendamento realizado com sucesso")
    } catch (error) {
        console.log(error)
        alert("não foi possível agendar.Tente novamente mais tarde")
    }
    
}