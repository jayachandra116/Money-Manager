import classes from "./Header.module.css";

type headerProps = {
  onCreateNew: () => void;
};

const Header = ({ onCreateNew }: headerProps) => {
  return (
    <nav className={classes["nav-bar"]}>
      <div className="brand">
        <header>
          <a href="#">
            <h1>Money Manager</h1>
          </a>
        </header>
      </div>
      <ul className={classes["header__buttons"]}>
        <li>
          <button
            type="button"
            className={classes["header__button"]}
            title="Add New item"
            onClick={onCreateNew}
          >
            <span className="material-symbols-outlined">add_circle</span>
          </button>
        </li>
        <li>
          <button
            type="button"
            className={classes["header__button"]}
            title="Profile"
          >
            <span className="material-symbols-outlined">person</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
