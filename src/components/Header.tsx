import "../styles/header.css";

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
          <button>1</button>
          <button>2</button>
        </div>
        <div>Calendar</div>
      </div>
    </header>
  );
}
