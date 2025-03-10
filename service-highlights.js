document.addEventListener('DOMContentLoaded', function() {
    // Before/After Image Toggle
    const beforeImage = document.getElementById('beforeImage');
    const afterImage = document.getElementById('afterImage');
    const toggleButton = document.getElementById('toggleImage');
    const beforeContainer = document.querySelector('.before-image-container');

    let isBeforeOnTop = true;

    toggleButton.addEventListener('click', function() {
        if (isBeforeOnTop) {
            beforeContainer.style.transform = 'translateX(10px)';
            afterImage.style.transform = 'translateX(-10px)';
            setTimeout(function() {
                beforeImage.style.zIndex = 1;
                afterImage.style.zIndex = 2;
                beforeContainer.style.transform = 'translateX(0)';
                afterImage.style.transform = 'translateX(0)';
                isBeforeOnTop = false; // Moved inside setTimeout
            }, 200);

            toggleButton.textContent = '←';
        } else {
            beforeContainer.style.transform = 'translateX(-10px)';
            afterImage.style.transform = 'translateX(10px)';
            setTimeout(function() {
                beforeImage.style.zIndex = 2;
                afterImage.style.zIndex = 1;
                beforeContainer.style.transform = 'translateX(0)';
                afterImage.style.transform = 'translateX(0)';
                isBeforeOnTop = true; // Moved inside setTimeout
            }, 200);

            toggleButton.textContent = '→';
        }
    });

    // Horizontal Scroll Control
    const scrollContainer = document.querySelector('.horizontal-scroll-container');
    const scrollImages = document.querySelector('.horizontal-scroll-images');
    const scrollSpeedControl = document.querySelector('.scroll-speed-control');

    let scrollSpeed = 50; // Initial scroll speed

    scrollSpeedControl.addEventListener('input', function() {
        scrollSpeed = parseInt(this.value);
    });

    function scrollImagesVertically() {
        let scrollPosition = scrollContainer.scrollTop;
        let contentHeight = scrollImages.offsetHeight;
        let containerHeight = scrollContainer.offsetHeight;

        scrollPosition += (50 - scrollSpeed) / 10; // Adjust scrolling speed

        if (scrollPosition > contentHeight - containerHeight) {
            scrollPosition = 0;
        }

        scrollContainer.scrollTop = scrollPosition;
        requestAnimationFrame(scrollImagesVertically);
    }

    scrollImagesVertically(); // Start the scrolling
});
