import { useState } from "react"
import { Button, FormControl, OutlinedInput} from "@mui/material";


export const AddTasks = ({createNewTask}) => {
  const [tareas, setTareas] = useState([])
 
  const handleSubmit = (e)=>{
    e.preventDefault();
    createNewTask(tareas)
    setTareas("")
  }
  

  return (
    <>
    {/* FORMULARIO */}
      <form 
        onSubmit={handleSubmit}>
          <FormControl 
          sx={{padding:2}}>
            <OutlinedInput 
              type="text"
              placeholder="Agregar Tareas"
              value={tareas}
              onChange={(e)=> setTareas(e.target.value)}/>
          </FormControl>
      
          <Button 
            type="submit"
            variant="contained" 
            color="secondary" 
            sx={{ml:3, mt:3}} 
          >
              Agregar
          </Button>
          
      </form>
    </>
  )
}
