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
          <div className={styles.iconsNavbar}>
            <img width="25" height="25" src="/add.svg" alt="" />
          </div>
          <div className={styles.iconsNavbar}>
            <img width="25" height="25" src="/chat.svg" alt="" />
          </div>
          <div className={styles.iconsNavbar}>
            <img width="25" height="25" src="/noti.svg" alt="" />
          </div>
          <div className={styles.iconsNavbar}>
            <img className="rounded-full" src="https://i.pravatar.cc/25" alt="user" />
          </div>
        </div>
      </nav>
      <div className="flex">
        <div className="w-1/4 h-screen bg-gray-100">
          <div className={styles.itemsLeft}>
            <img className="rounded-full mx-3" src="https://i.pravatar.cc/40" alt="user" />
            Breno Henrique Ferreira Silva
          </div>
          <div className={styles.itemsLeft}>
            <img className="mx-3" src="/shield.svg" alt="" width="40" height="40" />
            COVID-19 Information Center
          </div>
          <div className={styles.itemsLeft}>
            <img className="mx-3" src="/people.svg" alt="" width="40" height="40" />
            Find Friends
          </div>
          <div className={styles.itemsLeft}>
            <img className="mx-3" src="/groups.svg" alt="" width="40" height="40" />
            Groups
          </div>
          <div className={styles.itemsLeft}>
            <img className="mx-3" src="/home1.svg" alt="" width="40" height="40" />
            Marketplace
          </div>
          <div className={styles.itemsLeft}>
            <img className="mx-3" src="/ondemand.svg" alt="" width="40" height="40" />
            Videos
          </div>
          <div className={styles.itemsLeft}>
            <img className="mx-3" src="/event.svg" alt="" width="40" height="40" />
            Events
          </div>
          <div className={styles.itemsLeft}>
            <img className="mx-3" src="/update.svg" alt="" width="40" height="40" />
            Memories
          </div>
          <div className={styles.itemsLeft}>
            <img className="mx-3" src="/turned.svg" alt="" width="40" height="40" />
            Saved
          </div>
          <div className={styles.itemsLeft}>
            <img className="mx-3" src="/flag.svg" alt="" width="40" height="40" />
            Pages
          </div>
          <div className={styles.itemsLeft}>
            <img className="mx-3 bg-gray-300 rounded-full px-1 py-1" src="/expand.svg" alt="" width="40" height="40" />
            See more
          </div>
        </div>
        <div className="flex-grow h-screen bg-gray-100 flex flex-col items-center">
          <div className="shadow bg-white my-3 mx-6 w-3/5 h-16 flex items-center rounded-md">
            <div>
              <img className="bg-blue-100 rounded-full mx-3 p-1" src="/add1.svg" alt="" width="40" height="40" />
            </div>
            <div>
              <h4 className="text-md font-bold">Create story</h4>
              <span className="text-sm text-gray-500">Share a photo or write something</span>
            </div>
          </div>
          <div className="shadow bg-white mb-3 mx-6 w-3/5 h-32 flex flex-col justify-between rounded-md">
            <div className="flex items-center w-full px-2 pt-2">
              <div className="bg-white m-3">
                <img className="rounded-full" src="https://i.pravatar.cc/30" alt="user" />
              </div>
              <input
                className="bg-gray-100 rounded-full flex-grow w-full px-3 py-1 text-gray-600"
                placeholder="What's on your mind, Breno?"
                type="text"
              />
            </div>
            <hr className="w-5/6 mx-auto" />
            <div className="flex justify-evenly pb-3">
              <div className={styles.itemsComment}>
                <img src="/cam.svg" width="25" height="25" alt="" />
                <span>Live Video</span>
              </div>
              <div className={styles.itemsComment}>
                <img src="/photo.svg" width="25" height="25" alt="" />
                <span>Photo/Video</span>
              </div>
              <div className={styles.itemsComment}>
                <img src="/emoji.svg" width="25" height="25" alt="" />
                <span>Feeling/Activity</span>
              </div>
            </div>
          </div>
          {/* <div className="shadow bg-white mb-3 mx-6 w-3/5 h-20 flex items-center rounded-md">asdsadasdawsdasd</div>
          <div className="shadow bg-white mb-3 mx-6 w-3/5 h-20 flex items-center rounded-md">asdsadasdawsdasd</div>
          <div className="shadow bg-white mb-3 mx-6 w-3/5 h-20 flex items-center rounded-md">asdsadasdawsdasd</div> */}
        </div>
        <div className="w-1/4 h-screen p-4">
          <div className="text-xl text-gray-500">Sponsored</div>
          <div className={styles.itemsRight}>
            <img className="w-28 rounded-lg" src="https://picsum.photos/500" alt="user" />
            <div className="m-3">
              <div className="text-md">Sign up Free Now</div>
              <div className="text-sm text-gray-400">brenincd.com</div>
            </div>
          </div>
          <div className={styles.itemsRight}>
            <img className="w-28 rounded-lg" src="https://picsum.photos/499" alt="user" />
            <div className="m-3">
              <div className="text-md">Sign up Free Now</div>
              <div className="text-sm text-gray-400">brenincd.com</div>
            </div>
          </div>
          <hr className="mt-3 w-full mx-auto bg-gray-300 rounded-full h-1" />
          <div className="flex items-center mt-3">
            <img className="bg-gray-200 rounded-full mx-3" width="30" height="30" src="/add.svg" alt="" />
            <span>Create New Group</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
