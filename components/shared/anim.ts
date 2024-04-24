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

// loaer anim variants
export const slideDown = {
  initial: {
    top: "0",
  },
  enter: {
    top: "0",
    // [0.61, 1, 0.88, 1]
    transition: {
      duration: 0.6,
      ease: [0.76, 0, 0.24, 1],
      top: {
        delay: 1,
      },
    },
  },
  exit: {
    top: "100vh",
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1], delay: 0.1 },
  },
};

// banner h1 motion variants
export const firstHeadingVariants = {
  initial: {
    x: 200,
    opacity: 0,
  },
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      opacity: {
        duration: 1.2,
      },
      // x: {
      //   duration: 1,
      // },
      // delay: 0.5, // incrementing delay for element
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};

export const secondHeadingVariants = {
  initial: {
    x: 200,
    opacity: 0,
  },
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      opacity: {
        duration: 1.2,
      },
      // x: {
      //   duration: 1,
      // },
      // delay: 0.5, // incrementing delay for element
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};

export const thirdHeadingVariants = {
  initial: {
    x: 200,
    opacity: 0,
  },
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      opacity: {
        duration: 1.2,
      },
      // x: {
      //   duration: 1,
      // },
      // delay: 0.5, // incrementing delay for element
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};

export const firstHeadingLetterVariant = {
  initial: {
    x: 300,
    opacity: 0,
  },
  enter: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      opacity: {
        duration: 1,
      },
      x: {
        duration: 0.65, // duration of x axis animation
        delay: 0.2 + i * 0.02, // incrementing delay for element
        ease: [0.215, 0.61, 0.355, 1],
      },
      // delay: 0.5, // overall delay for the animation to start
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
};

// banner h2 motion variants

export const secondHeadingLetterVariant = {
  initial: {
    x: 300,
    opacity: 0,
  },
  enter: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      opacity: {
        duration: 1,
      },
      x: {
        duration: 0.65, // duration of x axis animation
        delay: 0.3 + i * 0.03, // incrementing delay for element
        ease: [0.215, 0.61, 0.355, 1],
      },
      // delay: 0., // overall delay for the animation to start
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
};

// banner 3rd h1 motion variants

export const thirdHeadingLetterVariant = {
  initial: {
    x: 300,
    opacity: 0,
  },
  enter: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      opacity: {
        duration: 1,
      },
      x: {
        duration: 0.65, // duration of x axis animation
        delay: 0.4 + i * 0.04, // incrementing delay for element
        ease: [0.215, 0.61, 0.355, 1],
      },
      // delay: 0., // overall delay for the animation to start
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
};

// banner btn container anim variants
export const opacityContainer = {
  initial: {
    opacity: 0,
    x: 15,
  },
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.2,
      opacity: {
        delay: 0.8,
      },
      x: {
        delay: 0.4,
      },
      // ease: [0.76, 0, 0.24, 1],
      ease: [0.215, 0.61, 0.355, 1],
    },
    // ease: [0.76, 0, 0.24, 1],
  },
};

// banner mobile btn container
export const mobileBtnContainer = {
  initial: {
    opacity: 0,
    y: 10,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      opacity: {
        duration: 0.65,
        delay: 0.3,
      },
      ease: [0.215, 0.61, 0.355, 1],
      delay: 0.3,
    },
  },
};

// banner image anim variants
export const imgVariants = {
  initial: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: {
      duration: 1,
      opacity: {
        delay: 0.8,
        ease: [0.215, 0.61, 0.355, 1],
      },
      ease: [0.76, 0, 0.24, 1],
    },
  },
};
