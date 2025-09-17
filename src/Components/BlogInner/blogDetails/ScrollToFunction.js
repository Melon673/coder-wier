export const scrollToEl = (id) => {
  if (typeof window !== "undefined" && typeof document !== "undefined") {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = window.innerHeight * 0.1;
      const elementTop = el.getBoundingClientRect().top + window.scrollY;
      const scrollTo = elementTop - topOffset;

      window.scrollTo({ top: scrollTo, behavior: "smooth" });
    }
  }
};
