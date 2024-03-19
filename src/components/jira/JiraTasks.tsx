import React from 'react';
import { IoCheckmarkCircleOutline, IoEllipsisHorizontalOutline } from 'react-icons/io5';
import classNames from 'classnames';
import { SingleTask } from './SingleTask';
import { useTasksStore } from '@/stores';
import type { Task, TaskStatus } from '@/interfaces';

interface Props {
  title: string;
  tasks: Task[];
  value: TaskStatus;
}

export const JiraTasks = ({ title, tasks, value }: Props) => {
  const isDragging = useTasksStore((state) => !!state.draggingTaskId);
  const onTaskDrop = useTasksStore((state) => state.onTaskDrop);

  const [onDragOver, setOnDragOver] = React.useState(false);

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
    onTaskDrop(value);
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={classNames(
        '!text-black border-4 relative flex flex-col rounded-[20px]  bg-white bg-clip-border shadow-3xl shadow-shadow-500  w-full !p-4 3xl:p-![18px]',
        {
          'border-dotted border-blue-500': isDragging,
          'border-dotted border-green-500': isDragging && onDragOver,
        }
      )}
    >
      {/* Task Header */}
      <div className="relative flex flex-row justify-between">
        <div className="flex items-center justify-center">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100">
            <span className="flex justify-center items-center h-6 w-6 text-brand-500">
              <IoCheckmarkCircleOutline style={{ fontSize: '50px' }} />
            </span>
          </div>

          <h4 className="ml-4 text-xl font-bold text-navy-700">{title}</h4>
        </div>

        <button>
          <IoEllipsisHorizontalOutline />
        </button>
      </div>

      {/* Task Items */}
      <div className="h-full w-full">
        {tasks.map((task) => (
          <SingleTask key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};
