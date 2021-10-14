import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div className="flex items-center">
          <img className="rounded-full mx-3 my-1" width="35" height="35" src="/fb.svg" alt="facebook" />
          <div className={styles.containerLogo}>
            <img src="/search.svg" alt="busca" width="25" height="25" />
            <input type="text" className={styles.searchFacebook} placeholder="Search Facebook" />
          </div>
        </div>
        <div className="w-48 h-full flex justify-between">
          <div className={`${styles.icons} border-b-2 border-blue-400`}>
            <img width="25" height="25" src="/home.svg" alt="Tela inicial" />
          </div>
          <div className={styles.icons}>
            <img width="25" height="25" src="/people.svg" alt="Tela inicial" />
          </div>
          <div className={styles.icons}>
            <img width="25" height="25" src="/groups.svg" alt="Tela inicial" />
          </div>
        </div>
        <div className="w-48 h-full"></div>
      </nav>
    </div>
  );
}

export default App;
