import React from 'react';
import Swal from 'sweetalert2';
import { useTasksStore } from '@/stores';
import type { TaskStatus } from '@/interfaces';

interface Options {
  status: TaskStatus;
}

export function useTasks({ status }: Options) {
  const isDragging = useTasksStore((state) => !!state.draggingTaskId);
  const addTask = useTasksStore((state) => state.addTask);
  const onTaskDrop = useTasksStore((state) => state.onTaskDrop);

  const [onDragOver, setOnDragOver] = React.useState(false);

  const handleAddTask = async () => {
    const { isConfirmed, value } = await Swal.fire({
      title: 'Nueva tarea',
      input: 'text',
      inputLabel: 'Nombre de la tarea',
      inputPlaceholder: 'Ingrese el nombre de la tarea',
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) return 'Debe ingresar un nombre para la tarea';
      },
    });

    if (!isConfirmed) return;
    addTask(value, status);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setOnDragOver(true);
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setOnDragOver(false);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setOnDragOver(false);
    onTaskDrop(status);
  };

  return {
    isDragging,
    onDragOver,

    handleAddTask,
    handleDragOver,
    handleDragLeave,
    handleDrop,
  };
}
