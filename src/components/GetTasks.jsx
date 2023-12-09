import { Button, Divider } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import React from "react";

export const GetTasks = ({task, toggleTask, handleDelete}) => {
  return (
    // IR TACHANDO LA ACTIVIDAD COMPLETADA
    <tr key={task.name}>
      <td
        style={{ textDecoration: task.done ? "line-through" : "none" }}
        onClick={() => toggleTask(task.id)}
      >
        {task.name}
        
      </td>
      <td>
        {/* BOTON BORRAR LA TAREA DE LA LISTA */}
        <Button
          startIcon={<DeleteIcon />}
          color="secondary"
          onClick={() => handleDelete(task.id)}
        ></Button>
        <Divider />
      </td>
    </tr>
  );
};
