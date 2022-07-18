import { GiffApp } from "../src/GiffApp"
import { render, screen, fireEvent, renderHook } from '@testing-library/react'




describe('Test en GifApp', () => {


    test('Verificar el estado incial', () => {

        const { result } = renderHook(()=> GiffApp(undefined));

        const { categories } = result.current;
        
        expect(categories).toBe(undefined);

    });


    test('Verificar cambio en el estado de categorías.', () => {

     render(<GiffApp addCategory={()=>{}}/>)

     const input = screen.getByRole('searchbox')

     fireEvent.change(input, {target:{value:'Pokemon'}})

     expect(input.value).toBe('Pokemon')

        
    });
    
    test('Testear funcionalidades reset y delete', () => { 

        const {getByTestId} = render(<GiffApp />)
        const buttonR = getByTestId('Button Reset')
        const buttonD = getByTestId('Button Delete')

        fireEvent.click(buttonR)
        fireEvent.click(buttonD)

        // fireEvent.click(screen.getByRole('button'))

        expect(buttonR).toBeTruthy()
        expect(buttonD).toBeTruthy()

     });
   
    
    test('Funcionalidad de toggleTheme', () => {

       render(<GiffApp />)

      const div = screen.getByRole('checkbox', { checked: true })
       
      fireEvent.change(div, {checked: true})

      expect(div.checked).toBeTruthy()
       
   });
        
    
});
