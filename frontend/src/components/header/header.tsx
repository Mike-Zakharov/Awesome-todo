import { Icon } from "../icon.tsx";
import { HeaderTitle } from "../header-title/header-title.tsx";
import buttonStyles from "../button/button.module.css";
import styles from "./header.module.css";
import { Search } from "../search/search.tsx";
import { CurrentDate } from "../current-date/current-date.tsx";

export function Header() {
  return (
    <header className={styles.header}>
      <HeaderTitle />
      <Search />
      <div className={styles.btn_group}>
        <div className={styles.btns_wrapper}>
          <button className={buttonStyles.btn}>
            <Icon name="bell" size="s" color="white" />
          </button>
          <button className={buttonStyles.btn}>
            <Icon name="calendar" size="s" color="white" />
          </button>
        </div>
        <CurrentDate />
      </div>
    </header>
  );
}
