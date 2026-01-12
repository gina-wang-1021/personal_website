export const cardReveal = {
  initial: { opacity: 0, y: 20 },
  animate: (delayIndex) => ({
    opacity: 1,
    y: 0,
    transition: { delay: delayIndex * 0.15, duration: 0.55, ease: "easeout" },
  }),
};

export const sectionReveal = {
  initial: { opacity: 0, y: 24 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeout",
    },
  },
};

export const rowStagger = {
  animate: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};
