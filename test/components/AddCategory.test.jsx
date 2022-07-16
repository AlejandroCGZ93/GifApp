import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategoty"

describe('Test en <AddCategory />', () => {

    test('Debe cambiar el valor del input', ()=>{

        render( <AddCategory addCategory={()=>{}} /> );
        
        const input = screen.getByRole('searchbox')

        fireEvent.change( input, {target: {value: 'Goku'}});
        expect(input.value).toBe('Goku');

    })

    test('Debe llamar la funcion si el input tiene valor', () => { 
        const inputValue = 'Goku';

        const addCategory = jest.fn();

        render( <AddCategory addCategory={ addCategory } /> )

        const input = screen.getByRole('searchbox');
        const form = screen.getByRole('form');

        fireEvent.change( input, {target: {value: inputValue}});
        expect(input.value).toBe('Goku');

        fireEvent.submit( form );

        screen.debug();

        expect( input.value ).toBe( '' );

        expect( addCategory ).toHaveBeenCalled();

        expect ( addCategory ).toHaveBeenCalledWith( inputValue );


     });


     test('No se debe llamar la funcion addCategory, si el input esta vacio', () => {
        
        const addCategory = jest.fn();
        render( <AddCategory addCategory={addCategory}/>)

        const form = screen.getByRole('form');
        fireEvent.submit( form );
        
        expect( addCategory ).not.toHaveBeenCalled();

     });
     

})