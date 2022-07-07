import { useFetchGif } from "../hooks/useFetchGif";
import { GifItem } from "./GiftItem";
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';



export const GifGrid = ({category}) => {

  const {imagenes, loading} = useFetchGif(category);
  
  
  return (
    <>
       
        <h3>{category}</h3>     
       
        <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
          
        <div className="card-grid">
        
          {
            loading ? <CircularProgress color="secondary" /> :
            imagenes.map(imagen => <GifItem key={imagen.id} {...imagen} />)
          }
          
        </div>
        </Stack>      

       
    </>
  )
}
