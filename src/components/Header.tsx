import "../styles/header.css";
import Icon from "./Icon";

export default function Header() {
  return (
    <header className="header">
      <div>Заголовок страницы</div>
      <div>
        <input type="search" placeholder="Search your task here..." />
        <button>Поиск</button>
      </div>
      <div className="btn-group">
        <div>
          <button className="btn">
            <Icon name="bell" className="icon" size={20} />
          </button>
          <button className="btn">
            <Icon name="calendar" className="icon" size={20} />
          </button>
        </div>
        <div>Calendar</div>
      </div>
    </header>
  );
}
