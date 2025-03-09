document.addEventListener('DOMContentLoaded', function() {
    let items = [
        {
            "serviceImage": "placeholder-service1.jpg",
            "serviceTitle": "Lawn Care",
            "serviceDescription": "Professional lawn mowing and maintenance services."
        },
        {
            "serviceImage": "placeholder-service2.jpg",
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