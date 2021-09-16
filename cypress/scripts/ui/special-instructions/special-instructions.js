import { elements } from "./elements";

export const createInstruction ={

    pgf: async ()=>{
        return cy
            .get(elements.instructionSelectDropdown).click()
            .get('.listitem > a').click();
    }
}