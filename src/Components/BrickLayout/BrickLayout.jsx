import styles from "./BrickLayout.module.css"

const BrickLayout = () => {
  return (
    <div className={styles["brick-layout"]}>
      <div className={styles["brick-column"]}>
        <img className={styles["img1"]} src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTYyMDF8MHwxfHNlYXJjaHwxOHx8Y2FzaCUyMGdpZnR8ZW58MHx8fHwxNzA4MzkxMTYwfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="" />
        <img className={styles["img2"]} src={"https://images.unsplash.com/photo-1609421141652-f33a94b43944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTYyMDF8MHwxfHNlYXJjaHwyfHxnaWZ0aW5nfGVufDB8fHx8MTcwODM5MTAzNnww&ixlib=rb-4.0.3&q=80&w=1080"} alt="" />
        <img className={styles["img3"]} src={"https://images.unsplash.com/photo-1607344645866-009c320b63e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTYyMDF8MHwxfHNlYXJjaHw1fHxnaWZ0fGVufDB8fHx8MTcwODM5MTA2M3ww&ixlib=rb-4.0.3&q=80&w=1080"} alt="" />
        
      </div>
      <div className={styles["brick-column"]}>
        <img className={styles["img4"]}  src={"https://images.unsplash.com/photo-1575384043001-f37f48835528?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTYyMDF8MHwxfHNlYXJjaHwzfHxnaWZ0fGVufDB8fHx8MTcwODM5MTA2M3ww&ixlib=rb-4.0.3&q=80&w=1080"} alt="" />
        <img className={styles["img5"]} src={"https://images.unsplash.com/photo-1608111282834-aca8bf1791c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTYyMDF8MHwxfHNlYXJjaHw5fHxtb25leSUyMGdpZnR8ZW58MHx8fHwxNzA4MzkxMTAxfDA&ixlib=rb-4.0.3&q=80&w=1080"} alt="" />
        <img className={styles["img6"]} src={"https://images.unsplash.com/photo-1510284876186-b1a84b94418f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTYyMDF8MHwxfHNlYXJjaHwxOXx8Z2lmdHxlbnwwfHx8fDE3MDgzOTEwNjN8MA&ixlib=rb-4.0.3&q=80&w=1080"} alt="" />
        

      </div>
      <div className={styles["brick-column"]}>
        <img className={styles["img7"]} src={"https://images.unsplash.com/photo-1513780194864-9ac1138f93ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTYyMDF8MHwxfHNlYXJjaHwzfHxiYWJ5JTIwZ2lmdHxlbnwwfHx8fDE3MDgzOTEyNzR8MA&ixlib=rb-4.0.3&q=80&w=1080"} alt="" />
        <img className={styles["img8"]} src={"https://images.unsplash.com/photo-1557492992-fe5f3e3f12bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTYyMDF8MHwxfHNlYXJjaHwxMHx8Z2lmdGluZ3xlbnwwfHx8fDE3MDgzOTEwMzZ8MA&ixlib=rb-4.0.3&q=80&w=1080"} alt="" />
        <img className={styles["img9"]} src={"https://images.unsplash.com/photo-1595062584313-47018e0ee5cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTYyMDF8MHwxfHNlYXJjaHwxfHxmdW5lcmFsfGVufDB8fHx8MTcwODM5MTI1MHww&ixlib=rb-4.0.3&q=80&w=1080"} alt="" />
      

      </div>
    </div>
  )
}

export default BrickLayout