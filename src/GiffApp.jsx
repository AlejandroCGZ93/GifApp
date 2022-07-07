import React, { useState, createContext } from "react";
import { AddCategory } from "./components/AddCategoty";
import { GifGrid } from "./components/GifGrid";
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';


export const ThemeContext = createContext(null);


export const GifApp = () => {
  const [categories, setCategories] = useState([]);
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light" ));
  };
  const handleAddCategory = (value) => {

    setCategories([value, ...categories]);
    
  };

  const handleReset = () => {
    setCategories(categories.filter((category)=> category !== category));
  }
  
  const handleDelete = index => {
    const value = [...categories]
    value.splice(index,1);
    setCategories(value);
  }
 
  return (
    <> 
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="GiffApp" id={theme}>
      <h1>GifApp</h1>
      
      <AddCategory addCategory={handleAddCategory} />
      <div className="botones">
      <Stack direction="row" spacing={2}>
      </Stack>
      <Button variant="outlined" startIcon={<RotateLeftIcon />} className="reset" onClick={handleReset}>Reset</Button>{ "  " }
      <Button variant="outlined" startIcon={<DeleteIcon />} className="delete" onClick={handleDelete} >Delete</Button>
      </div> 
   <div className="switch">
        
          <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          <Switch onChange={toggleTheme} checked={theme === "dark"} />
    </div>
  
      {
      categories.map((category) => (
        <GifGrid key={category} category={category}/>
      ))
      }
        <div className="Container"></div>
      
      </div>
      
    </ThemeContext.Provider>
   

    </>
  );
};

