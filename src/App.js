import React, { Suspense } from "react";
import styles from './App.module.scss';

const Todos = React.lazy(() => import('./components/todos/TodosComponent'));

export const App = () => {
    return (
      <div className={styles.App}>
        <header className={styles["App-header"]}>
          <p>A simple project for use Redux Toolkit.</p>
          <code>https://jsonplaceholder.typicode.com/todos</code>
        </header>
        <Suspense fallback={""}>
          <Todos></Todos>
        </Suspense>
      </div>
    );
}

export default App;
