const NavNoScroll = (disableScroll) => {
  if (typeof window !== "undefined") {
    const body = document.body;
    if (disableScroll) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "";
    }
  }
};

export default NavNoScroll;
