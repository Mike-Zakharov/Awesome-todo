import { useEffect, useState } from "react";

import { Icon } from "./icon.tsx";
import { useLocation } from "react-router";
import { HeaderTitle, type headerTitleProps } from "./header-title.tsx";
import buttonStyles from "../styles/button.module.css";
import styles from "../styles/header.module.css";
import { Search } from "./search.tsx";

export function Header() {
  const location = useLocation();
  const [titleType, setTitleType] = useState<headerTitleProps["title"]>(
    location.pathname as headerTitleProps["title"]
  );

  const titleTypes = [
    "/",
    "/vital-task",
    "/my-task",
    "/task-categories",
    "/account-info",
  ] as const;

  type TitleType = (typeof titleTypes)[number];

  useEffect(() => {
    if (titleTypes.includes(location.pathname as TitleType)) {
      setTitleType(location.pathname as TitleType);
    } else {
      setTitleType("/");
    }
  }, [location.pathname]);

  return (
    <header className={styles.header}>
      <HeaderTitle title={titleType} />
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
        <div>Calendar</div>
      </div>
    </header>
  );
}
