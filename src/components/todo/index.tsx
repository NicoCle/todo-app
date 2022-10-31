import { FC, FormEventHandler, MouseEventHandler } from "react";

import styles from "./todo.module.css";

const Todo: FC<ITodo> = ({ deleteTask, createTask, task, menu }) => {
  const handleCreate: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const description = data.get("description");

    createTask(String(description));
  };

  const handleDelete: MouseEventHandler<HTMLSpanElement> = (event) => {
    const id = event.currentTarget.id;
    deleteTask(Number(id));
  };

  return (
    <div className={styles.todoContainer}>
      {menu === "active" && (
        <div className={styles.addDetailsContainer}>
          <form
            className={styles.formAddDetails}
            onSubmit={handleCreate}
            autoComplete="off"
          >
            <input
              className={styles.inputAddDetails}
              type="text"
              name="description"
              id="description"
              placeholder="add details"
            />
            <button className={styles.buttonAddDetails} type="submit">
              Add
            </button>
          </form>
          <div className={styles.listTask}>
            {task.map((task, index) => {
              return (
                <li className={styles.itemsTask} key={task.id}>
                  <input
                    className={styles.checkboxTask}
                    type="checkbox"
                    id="task"
                  />
                  <label className={styles.labelTask} htmlFor="task">
                    {task.description}
                  </label>
                </li>
              );
            })}
          </div>
        </div>
      )}
      {menu === "complete" && (
        <div className={styles.addDetailsContainerCompleted}>
          <div className={styles.listTaskCompleted}>
            {task.map((task, index) => {
              return (
                <li className={styles.itemsTaskCompleted} key={task.id}>
                  <div className={styles.checboxTaskContainer}>
                    <input
                      className={styles.checkboxTask}
                      type="checkbox"
                      id="task"
                    />
                    <label className={styles.labelTask} htmlFor="task">
                      {task.description}
                    </label>
                  </div>
                  <span
                    id={String(task.id)}
                    className={`material-symbols-outlined ${styles.Trash}`}
                    onClick={handleDelete}
                  >
                    delete_forever
                  </span>
                </li>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Todo;
