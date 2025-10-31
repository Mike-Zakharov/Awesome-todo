import styles from "./current-date.module.css";

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const CurrentDate: React.FC = () => {
  const date = new Date();
  const dayName = daysOfWeek[date.getDay()];

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return (
    <div className={styles.wrapper}>
      <span>{dayName}</span>
      {day}/{month}/{year}
    </div>
  );
};
