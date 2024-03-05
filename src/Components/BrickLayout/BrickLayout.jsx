import styles from "./BrickLayout.module.css"
import image1 from "../../Assets/image1.png";
import image2 from "../../Assets/image2.png";
import image3 from "../../Assets/image3.png";
import image4 from "../../Assets/image4.png";
import image5 from "../../Assets/image5.png";
import image6 from "../../Assets/image6.png";
import image7 from "../../Assets/image7.jpeg";
import image8 from "../../Assets/image8.png";

import image9 from "../../Assets/image9.png";
import image10 from "../../Assets/image10.jpeg";
const BrickLayout = () => {
  return (
    <div className={styles["brick-layout"]}>
      <div className={styles["brick-column"]}>
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image1} alt="" />
      </div>
      <div className={styles["brick-column"]}>
        <img src={image4} alt="" />
        <img src={image5} alt="" />
        <img src={image6} alt="" />
        <img src={image4} alt="" />

      </div>
      <div className={styles["brick-column"]}>
        <img src={image7} alt="" />
        <img src={image8} alt="" />
        <img src={image9} alt="" />
        <img src={image7} alt="" />

      </div>
    </div>
  )
}

export default BrickLayout