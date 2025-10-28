import buttonStyles from "../styles/button.module.css";
import { Icon } from "./icon";
import styles from "../styles/search.module.css";

export function Search() {
  return (
    <div className={styles.wrapper}>
      <input type="search" placeholder="  Search your task here..." />
      <button className={buttonStyles.btn}>
        <Icon name="search-icon" size="s" color="white" />
      </button>
    </div>
  );
}
