import { userTabbing } from "./styles.scss";

function handleMouseDownOnce() {
  document.body.classList.remove(userTabbing);

  window.removeEventListener("mousedown", handleMouseDownOnce);
  // eslint-disable-next-line no-use-before-define
  window.addEventListener("keydown", handleFirstTab);
}

function handleFirstTab(e) {
  if (e.keyCode === 9) {
    document.body.classList.add(userTabbing);
    window.removeEventListener("keydown", handleFirstTab);
    window.addEventListener("mousedown", handleMouseDownOnce);
  }
}

window.addEventListener("keydown", handleFirstTab);

export default userTabbing;

