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
      <div className="flex">
        <div className="w-1/4 h-screen bg-gray-100">
          <div className="flex text-md px-3 py-2 items-center hover:bg-gray-200 rounded-lg m-2">
            <img className="rounded-full mx-3" src="https://i.pravatar.cc/40" alt="user" />
            Breno Henrique Ferreira Silva
          </div>
          <div className="flex text-md px-3 py-2 items-center hover:bg-gray-200 rounded-lg m-2">
            <img className="mx-3" src="/shield.svg" alt="" width="40" height="40" />
            COVID-19 Information Center
          </div>
          <div className="flex text-md px-3 py-2 items-center hover:bg-gray-200 rounded-lg m-2">
            <img className="mx-3" src="/people.svg" alt="" width="40" height="40" />
            Find Friends
          </div>
          <div className="flex text-md px-3 py-2 items-center hover:bg-gray-200 rounded-lg m-2">
            <img className="mx-3" src="/groups.svg" alt="" width="40" height="40" />
            Groups
          </div>
          <div className="flex text-md px-3 py-2 items-center hover:bg-gray-200 rounded-lg m-2">
            <img className="mx-3" src="/home1.svg" alt="" width="40" height="40" />
            Marketplace
          </div>
          <div className="flex text-md px-3 py-2 items-center hover:bg-gray-200 rounded-lg m-2">
            <img className="mx-3" src="/ondemand.svg" alt="" width="40" height="40" />
            Videos
          </div>
          <div className="flex text-md px-3 py-2 items-center hover:bg-gray-200 rounded-lg m-2">
            <img className="mx-3" src="/event.svg" alt="" width="40" height="40" />
            Events
          </div>
          <div className="flex text-md px-3 py-2 items-center hover:bg-gray-200 rounded-lg m-2">
            <img className="mx-3" src="/update.svg" alt="" width="40" height="40" />
            Memories
          </div>
          <div className="flex text-md px-3 py-2 items-center hover:bg-gray-200 rounded-lg m-2">
            <img className="mx-3" src="/turned.svg" alt="" width="40" height="40" />
            Saved
          </div>
          <div className="flex text-md px-3 py-2 items-center hover:bg-gray-200 rounded-lg m-2">
            <img className="mx-3" src="/flag.svg" alt="" width="40" height="40" />
            Pages
          </div>
          <div className="flex text-md px-3 py-2 items-center hover:bg-gray-200 rounded-lg m-2">
            <img className="mx-3 bg-gray-300 rounded-full px-1 py-1" src="/expand.svg" alt="" width="40" height="40" />
            See more
          </div>
        </div>
        <div className="flex-grow h-screen bg-green-300">this is a test</div>
        <div className="w-1/4 h-screen bg-yellow-300">this is a test</div>
      </div>
    </div>
  );
}

export default App;
