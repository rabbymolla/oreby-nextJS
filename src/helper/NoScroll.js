import { useEffect } from "react";

export default function NoScroll(modal, fun) {
  useEffect(() => {
    const scroll = document.body;
    if (modal) {
      scroll.classList.add("no-scroll");
    } else {
      scroll.classList.remove("no-scroll");
    }

    return () => {
      scroll.classList.remove("no-scroll");
    };
  }, [modal, fun]);
}
