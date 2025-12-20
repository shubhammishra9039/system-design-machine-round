import React from "react";
import styles from "./css/app.module.css";
import Img from "./assets/image.jpg"
function App() {
  return (
    <div className={styles.container}>
      <div className={styles.mainLeft}>hello</div>
      <div className={styles.mainRight}>
        {/* <img 
        src={Img}
        className={styles.Image}
        
        /> */}
      </div>
    </div>
  );
}

export default App;
