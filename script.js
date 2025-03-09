document.addEventListener('DOMContentLoaded', function() {
    let items = [
        {
            "serviceImage": "IMG_2147.jpg", //Before picture
            "serviceTitle": "Lawn Care",
            "serviceDescription": "Professional lawn mowing and maintenance services."
        },
        {
            "serviceImage": "IMG_2163.jpg", //After picture
            "serviceTitle": "Landscape Design",
            "serviceDescription": "Custom landscape design and installation."
        },
        // Add more services here
    ];

    let repeater = document.getElementById('repeater1');

    items.forEach(item => {
        let repeaterItem = document.createElement('div');
        repeaterItem.classList.add('repeater-item');

        repeaterItem.innerHTML = `
            <img src="${item.serviceImage}" alt="${item.serviceTitle}">
            <h3>${item.serviceTitle}</h3>
            <p>${item.serviceDescription}</p>
        `;

        repeater.appendChild(repeaterItem);
    });
});