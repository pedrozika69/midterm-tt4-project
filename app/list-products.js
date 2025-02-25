document.addEventListener("DOMContentLoaded", function () {
    const products = [
        { title: "Fujifilm Camera", price: "$599", img: "assets/images/pexels-enginakyurt-4458519.jpg" },
        { title: "Canon Camera", price: "$799", img: "assets/images/pexels-quang-viet-nguyen-107013384-9561297.jpg" },
        { title: "Nikon Camera", price: "$699", img: "assets/images/pexels-yaazhini-17307532.jpg" },
        { title: "Sony Alpha", price: "$899", img: "assets/images/sony-camera.jpg" },
        { title: "GoPro Hero 9", price: "$399", img: "assets/images/gopro-hero9.jpg" },
        { title: "DJI Drone", price: "$999", img: "assets/images/dji-drone.jpg" },
        { title: "Samsung Galaxy S23", price: "$1099", img: "assets/images/samsung-s23.jpg" },
        { title: "iPhone 14 Pro", price: "$1299", img: "assets/images/iphone14.jpg" },
        { title: "MacBook Pro", price: "$2499", img: "assets/images/macbook-pro.jpg" },
        { title: "Dell XPS 13", price: "$1499", img: "assets/images/dell-xps.jpg" },
        { title: "Bose Headphones", price: "$299", img: "assets/images/bose-headphones.jpg" },
        { title: "Apple Watch", price: "$399", img: "assets/images/apple-watch.jpg" }
    ];

    const productList = document.getElementById("product-list");

    products.forEach(product => {
        const col = document.createElement("div");
        col.classList.add("col-md-4", "mb-4");

        col.innerHTML = `
            <div class="card">
                <img src="${product.img}" class="card-img-top" alt="${product.title}">
                <div class="card-body">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text">Price: ${product.price}</p>
                    <button class="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        `;

        productList.appendChild(col);
    });
});
