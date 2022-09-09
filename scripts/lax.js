window.onload = () => {
  lax.init();

  // Add a driver that we use to control our animations
  lax.addDriver("scrollY", () => window.scrollY);

  // ===== INTRO ===== //

  lax.addElements(".intro__background", {
    scrollY: {
      translateY: [
        [0, "elOutY"],
        {
          769: [0, "elHeight"],
          1400: [0, "elHeight"],
        },
      ],
    },
  });

  lax.addElements(".intro__mountain-1", {
    scrollY: {
      translateY: [
        [0, "elOutY"],
        {
          769: [0, 400],
          1400: [0, 1000],
        },
      ],
    },
  });

  lax.addElements(".intro__mountain-2", {
    scrollY: {
      translateY: [
        [0, "elOutY"],
        {
          769: [0, 300],
          1400: [0, 900],
        },
      ],
    },
  });

  lax.addElements(".intro__mountain-4", {
    scrollY: {
      translateY: [
        [0, "elOutY"],
        {
          769: [0, 200],
          1400: [0, 700],
        },
      ],
    },
  });

  lax.addElements(".intro__standing", {
    scrollY: {
      translateY: [
        [0, "elOutY"],
        {
          769: [0, 100],
          1400: [0, 600],
        },
      ],
    },
  });

  lax.addElements(".intro__ladder", {
    scrollY: {
      translateY: [
        [0, "elOutY", "elOutY+elHeight", "elOutY+elHeight*2"],
        [0, "elHeight", "elHeight*2", "elHeight*3"],
      ],
    },
  });

  // ===== TITLE ===== //

  lax.addElements(".title", {
    scrollY: {
      scaleX: [
        ["elInY", "elCenterY"],
        [0.5, 1],
      ],
      scaleY: [
        ["elInY", "elCenterY"],
        [0.5, 1],
      ],
      opacity: [
        ["elInY", "elCenterY"],
        [0, 1],
      ],
    },
  });

  // ===== FEELING ===== //

  lax.addElements(".feeling__frame", {
    scrollY: {
      opacity: [
        ["elInY", "elInY+elHeight/2"],
        [0, 1],
      ],
    },
  });

  // ===== TIMELINE ===== //

  const timelineImages = document.querySelectorAll(".timeline img");

  const timelineImagesOptions = {
    rootMargin: "-200px 0px 0px 0px",
  };

  timelineImages.forEach((image, i) => {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const lazyImage = entry.target;
          const src = lazyImage.dataset.src;

          if (lazyImage.tagName.toLowerCase() === "img") {
            lazyImage.src = src;
          }

          lazyImage.removeAttribute("data-src");
          observer.unobserve(lazyImage);
        }
      });
    }, timelineImagesOptions);

    imageObserver.observe(image);
  });

  lax.addElements(".timeline__img-container", {
    scrollY: {
      translateX: [
        ["elInY", "elCenterY"],
        {
          769: [0, 0],
          1400: ["elWidth/2", 0],
        },
      ],
      translateY: [
        ["elInY", "elCenterY-elHeight/2"],
        {
          769: [100, 0],
          1400: [0, 0],
        },
      ],
      opacity: [
        ["elInY", "elCenterY"],
        {
          769: [0, 1],
          1400: [1, 1],
        },
      ],
    },
  });

  lax.addElements(".timeline__text", {
    scrollY: {
      translateX: [
        ["elInY", "elCenterY"],
        {
          769: [0, 0],
          1400: ["-elWidth/2", 0],
        },
      ],
      translateY: [
        ["elInY", "elCenterY-elHeight*5"],
        {
          769: [100, 0],
          1400: [0, 0],
        },
      ],
      opacity: [
        ["elInY", "elCenterY"],
        {
          769: [0, 1],
          1400: [1, 1],
        },
      ],
    },
  });

  lax.addElements(".timeline__content--reversed .timeline__img-container", {
    scrollY: {
      translateX: [
        ["elInY", "elCenterY"],
        {
          769: [0, 0],
          1400: ["-elWidth/2", 0],
        },
      ],
      translateY: [
        ["elInY", "elCenterY-elHeight/2"],
        {
          769: [100, 0],
          1400: [0, 0],
        },
      ],
      opacity: [
        ["elInY", "elCenterY"],
        {
          769: [0, 1],
          1400: [1, 1],
        },
      ],
    },
  });

  lax.addElements(".timeline__content--reversed .timeline__text", {
    scrollY: {
      translateX: [
        ["elInY", "elCenterY"],
        {
          769: [0, 0],
          1400: ["elWidth/2", 0],
        },
      ],
      translateY: [
        ["elInY", "elCenterY-elHeight*5"],
        {
          769: [100, 0],
          1400: [0, 0],
        },
      ],
      opacity: [
        ["elInY", "elCenterY"],
        {
          769: [0, 1],
          1400: [1, 1],
        },
      ],
    },
  });
};
