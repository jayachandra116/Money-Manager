import classes from "./NavBar.module.css";

const NavBar = () => {
  return (
    <ul className={classes["side-navbar"]}>
      <div className={`${classes["side-navbar__item"]} ${classes["active"]}`}>
        <span className="material-symbols-outlined">search_insights</span>
        <a>Insights</a>
      </div>
      <div className={classes["side-navbar__item"]}>
        <span className="material-symbols-outlined">receipt_long</span>
        <a>Transactions</a>
      </div>
      <div className={classes["side-navbar__item"]}>
        <span className="material-symbols-outlined">manage_accounts</span>
        <a>Accounts</a>
      </div>
    </ul>
  );
};

export default NavBar;
