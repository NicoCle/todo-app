import { useState, MouseEventHandler } from "react";
import { NextPage } from "next";

import useTask from "hooks/useTask";
import Todo from "components/todo";
import styles from "styles/Home.module.css";

const Home: NextPage = () => {
  const { task, deleteTask, createTask } = useTask();

  const [menu, setMenu] = useState<Menu>("active");

  const handleNavigate: MouseEventHandler<HTMLLIElement> = (event) => {
    setMenu(event.currentTarget.id as Menu);
  };

  return (
    <div className={styles.homePage}>
      <h1 className={styles.homeTitle}>#todo</h1>
      <nav className={styles.homeNav}>
        <li id="active" className={styles.homeItems} onClick={handleNavigate}>
          Active
        </li>
        <li id="complete" className={styles.homeItems} onClick={handleNavigate}>
          Complete
        </li>
      </nav>
      <Todo
        deleteTask={deleteTask}
        createTask={createTask}
        task={task}
        menu={menu}
      />
    </div>
  );
};

export default Home;
