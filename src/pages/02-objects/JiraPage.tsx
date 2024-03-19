import { JiraTasks } from '@/components';
import { useTasksStore } from '@/stores';

export const JiraPage = () => {
  const pendingTasks = useTasksStore((state) => state.getTaskByStatus('open'));
  const inProgressTasks = useTasksStore((state) => state.getTaskByStatus('in-progress'));
  const doneTasks = useTasksStore((state) => state.getTaskByStatus('done'));

  return (
    <>
      <h1>Tareas</h1>
      <p>Manejo de estado con objectos de Zustand</p>
      <hr />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <JiraTasks title="Pendientes" tasks={pendingTasks} value="open" />

        <JiraTasks title="Avanzando" tasks={inProgressTasks} value="in-progress" />

        <JiraTasks title="Terminadas" tasks={doneTasks} value="done" />
      </div>
    </>
  );
};
