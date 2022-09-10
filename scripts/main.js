function loadLazyImage() {
  const timelineImages = document.querySelectorAll(".timeline img");

  const timelineImagesOptions = {
    rootMargin: "200px 0px",
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
}

loadLazyImage();
