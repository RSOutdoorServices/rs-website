document.addEventListener('DOMContentLoaded', function() {
    // Before/After Image Toggle
    const beforeImage = document.getElementById('beforeImage');
    const afterImage = document.getElementById('afterImage');
    const toggleButton = document.getElementById('toggleImage');

    let isBeforeOnTop = true;

    toggleButton.addEventListener('click', function() {
        if (isBeforeOnTop) {
            beforeImage.style.zIndex = -2; // Move before image behind
            afterImage.style.zIndex = -1; // Move after image in front
            toggleButton.textContent = '←';
        } else {
            beforeImage.style.zIndex = -1; // Move before image in front
            afterImage.style.zIndex = -2; // Move after image behind
            toggleButton.textContent = '→';
        }
        isBeforeOnTop = !isBeforeOnTop;
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
