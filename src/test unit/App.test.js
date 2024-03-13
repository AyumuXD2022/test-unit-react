import { fireEvent, render,screen } from "@testing-library/react"
import App from "../App"

describe("App Componentes renderizando", ()=>{
    it("Prueba de texto", ()=> {
        render(<App/>)
        const textH1 = screen.getByText("Vite + React")
        expect(textH1).toBeInTheDocument();
        expect(screen.getByText("count is 0")).toBeInTheDocument();
    })

    it("Hace la suma al dar un clik 0 + 1 = 1", ()=>{
        const { getByText } = render(<App/>)
        const button = getByText("count is 0").closest("button")

        //Verifica si el contador esta en 0
        expect(screen.getByText("count is 0")).toBeInTheDocument();

        //Se hace un ejemplo de un click
        fireEvent.click(button)

        //Verifica si el contador se aumento a 1
        expect(screen.getByText("count is 1")).toBeInTheDocument();

    })
})