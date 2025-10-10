import styles from "./Menu.module.css";

function Menu({ isShowed, setIsShowed }) {
  return (
    <div
      className={styles.menu}
      style={{ display: isShowed ? "block" : "none" }}
    >
      <button
        onClick={() => {
          setIsShowed(false);
        }}
      >
        ←
      </button>
    </div>
  );
}

export default Menu;
