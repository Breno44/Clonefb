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
        <div className="h-full flex">
          <div className="bg-gray-200 rounded-full px-5 py-1 text-sm mx-3 my-2">Find Friends</div>
          <div className="bg-gray-200 rounded-full p-1 mx-3 my-2">
            <img width="25" height="25" src="/add.svg" alt="" />
          </div>
          <div className="bg-gray-200 rounded-full p-1 mx-3 my-2">
            <img width="25" height="25" src="/chat.svg" alt="" />
          </div>
          <div className="bg-gray-200 rounded-full p-1 mx-3 my-2">
            <img width="25" height="25" src="/noti.svg" alt="" />
          </div>
          <div className="bg-gray-200 rounded-full p-1 mx-3 my-2">
            <img className="rounded-full" src="https://i.pravatar.cc/25" alt="user" />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
