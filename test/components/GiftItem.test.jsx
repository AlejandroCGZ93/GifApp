import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GiftItem";


describe('Test en <GifItem />', () => {
    
    const title = 'Dragon Ball';
    const url = 'https://dragon-ball.com/goku.jpg';

    test('Debe coincidir con el snapshot ', () => {  
        
        const {container} = render( <GifItem title={title} url={url} /> );

        expect( container ).toMatchSnapshot(); 
        
    });

    test('Debe encontrar un texto', ()=>{

        const {getByText} = render( <GifItem title={title} url={url} />);

        expect( getByText(title) ).toBeTruthy();

    });
   
    test('Debe encontrar por test-id',() =>{

        const {getByTestId} = render( <GifItem title={title} url={url} />);

        expect( getByTestId('test-title').innerHTML ).toContain(title);


    })

    test('Debe mostrar URL y ALT', ()=>{

        render( <GifItem title={title} url={url} /> )

        //screen.debug();

        const {src, alt} = screen.getByRole( 'img' );
        expect ( src ).toContain(url);
        expect ( alt ).toContain('gif');
    });
    
});

    

