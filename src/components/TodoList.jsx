import { AddTasks } from "./AddTasks";
import {Box, Table, TableContainer, TableHead, Typography} from "@mui/material";
import { GetTasks } from "./GetTasks";
import { useTaks } from "../hooks/useTaks";

export const TodoList = () => {
  const { tasksItems, createNewTask, toggleTask, handleDelete } = useTaks();

  return (
    <>
    {/* CONTENEDOR PRINCIPAL */}
      <TableContainer sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        {/* CONTENEDOR DE TITULOS */}
        <Box
          sx={{
            border: 5,
            // bgcolor: "#F5EBFF",
            borderRadius: 3,
            textAlign: "center",
            borderColor: "secondary.main",
            width: "50%",
            borderStyle:"double",
           opacity: 0.7,
 
          }}
        >
          <Typography variant="h3" sx={{ fontWeight: "bold" }}>
            LISTA DE TAREAS
          </Typography>
          <Typography variant="h5">
            <b>Todas las Tareas:</b> {tasksItems.length}
          </Typography>
          <Typography variant="h5">
            <b>Pendientes:</b> {tasksItems.filter((task) => !task.done).length}{" "}
          </Typography>
        </Box>
        {/* CONTENEDOR DE TABLA */}
        <Box
          sx={{
            minHeight: 250,
            border: 10,
            bgcolor: "#D59FC1",
            borderRadius: 3,
            textAlign: "center",
            borderColor: "secondary.main",
            width: "50%",
            mt: 1,
            borderStyle:"groove",
            opacity: 0.6,
          }}
        >
          {/* FORMULARIO */}
          <AddTasks createNewTask={createNewTask} />
         

          {/* LISTA DE TAREAS QUE SE VA AGREGANDO */}
          <Table>
            <TableHead>
              {tasksItems.map((task) => (
              // TACHAR LA TAREA COMPLETADA Y BORRAR
                <GetTasks
                  key={task.id}
                  task={task}
                  toggleTask={toggleTask}
                  handleDelete={handleDelete}
                />
              ))}
            </TableHead>
          </Table>
        </Box>
      </TableContainer>
    </>
  );
};
