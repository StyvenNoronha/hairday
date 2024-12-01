import { schedulesDay } from "./load.js";
import { scheduleCancel } from "../../services/schedule-cancel.js";
const periods = document.querySelectorAll(".period");
//Gera evento click para cada lista (manhã, tarde e noite)

//gera  evento click para cada lista manhã, tarde e noite
periods.forEach((period) => {
  period.addEventListener("click", async (e) => {
    if (e.target.classList.contains("cancel-icon")) {
      const item = e.target.closest("li");

      //pega o id para remover
      const { id } = item.dataset;


      if (id) {
        const isConfirm = confirm("Tem certeza");

        if (isConfirm) {
            await scheduleCancel({id})
            schedulesDay()
        }
      }
    }
  });
});
