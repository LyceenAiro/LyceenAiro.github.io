document.addEventListener("DOMContentLoaded", function() {
    var lazyImages = [].slice.call(document.querySelectorAll("img[data-src]"));
  
    if ("IntersectionObserver" in window) {
      let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            let lazyImage = entry.target;
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.classList.remove("lazy");
            lazyImageObserver.unobserve(lazyImage);
          }
        });
      });
  
      lazyImages.forEach(function(lazyImage) {
        lazyImageObserver.observe(lazyImage);
      });
    } else {
      // 如果浏览器不支持 IntersectionObserver，则加载所有图片
      lazyImages.forEach(function(lazyImage) {
        lazyImage.src = lazyImage.dataset.src;
        lazyImage.classList.remove("lazy");
      });
    }
  });
  