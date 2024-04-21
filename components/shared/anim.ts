export const opacity = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 0.75,
    transition: { duration: 1, delay: 0.2 },
  },
};

export const slideUp = {
  initial: {
    top: 0,
  },
  exit: {
    top: "-100vh",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
};

export const Curve = (initialPath: any, targetPath: any) => {
  return {
    initial: {
      d: initialPath,
    },

    enter: {
      d: targetPath,

      transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
    },

    exit: {
      d: initialPath,

      transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
    },
  };
};

export const translate = {
  initial: {
    top: "-100px",
  },

  enter: {
    top: "-100vh",

    transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },

    transitionEnd: {
      top: "100vh",
    },
  },

  exit: {
    top: "-100px",

    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
  },
};

// heading variants
export const headingVariant = {
  initial: {
    x: 300,
    opacity: 0,
  },
  enter: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      opacity: {
        duration: 1,
      },
      x: {
        duration: 1, // duration of x axis animation
        delay: 0.3 + i * 0.03, // incrementing delay for element
        ease: [0.215, 0.61, 0.355, 1],
      },
      delay: 0.5, // overall delay for the animation to start
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
  exit: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.3, ease: [0.76, 0, 0.24, 1] },
  },
};

// for viewport in
export const slide = {
  initial: {
    top: "-100vh",
  },
  enter: {
    top: "0",
    // [0.61, 1, 0.88, 1]
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    top: "100vh",
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1], delay: 0.1 },
  },
};

// nav options animation props
export const navOptionVariant = {
  initial: {
    opacity: 0,
    x: 200,
  },
  enter: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      opacity: {
        duration: 1.2,
      },
      x: {
        duration: 1,
      },
      delay: 0.5 + i * 1, // incrementing delay for element
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
  exit: {
    opacity: 0,
    x: 0,
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
  },
};

// get in touch animate variants
export const getInTouchVariants = {
  initial: {
    y: 30,
    opacity: 0,
  },
  enter: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      opacity: 1,
      y: {
        duration: 1,
      },
      delay: 0.3 + i * 0.2,
      ease: [0.76, 0, 0.24, 1],
    },
  }),
  exit: {
    y: 0,
    opacity: 0,
    transition: { duration: 0.3, ease: [0.76, 0, 0.24, 1] },
  },
};
