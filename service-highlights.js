document.addEventListener('DOMContentLoaded', function() {
    // Before/After Image Toggle
    const beforeImage = document.getElementById('beforeImage');
    const afterImage = document.getElementById('afterImage');
    const toggleButton = document.getElementById('toggleImage');

    let isBeforeVisible = true;

    toggleButton.addEventListener('click', function() {
        if (isBeforeVisible) {
            beforeImage.style.opacity = 0;
            afterImage.style.opacity = 1;
            toggleButton.textContent = '←';
        } else {
            beforeImage.style.opacity = 1;
            afterImage.style.opacity = 0;
            toggleButton.textContent = '→';
        }
        isBeforeVisible = !isBeforeVisible;
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