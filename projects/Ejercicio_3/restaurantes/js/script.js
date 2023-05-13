// get JSON
const restaurants = "json/restaurants.json";

loadRestaurants()
.then(data => {
    loadWeb(data.restaurants[sessionStorage.getItem("restoValue")]);
});

async function loadRestaurants() {
    const response = await fetch(restaurants);
    const data = await response.json();
    return data;
}

function loadWeb(restaurant) {
    //Detalles
    header.style.backgroundImage = "url("+restaurant.img+")";
    rateResto.innerHTML += restaurant.rate;

    for (let i = 0; i < restaurant.price; i++) {
        const priceList = document.createElement("span");
        priceList.classList.add("material-icons-outlined");
        priceList.textContent = "attach_money";
        rangoPrecio.appendChild(priceList);
    }

    restaurantName = document.getElementsByName("restaurantName");
    restaurantName.forEach(resto => resto.textContent = restaurant.name);
    restaurantLocation.textContent = restaurant.location;
    restaurantSchedule.textContent = restaurant.schedule;
    restaurantDistance.textContent = restaurant.distance;

    if (restaurant.delivery) {
        const li = document.createElement("li");
            const i = document.createElement("i");
            i.classList.add("material-icons-outlined", "fs30", "yellow");
            i.textContent = "delivery_dining";
            const h6 = document.createElement("h6");
            h6.textContent = "Delivery";
        li.appendChild(i);
        li.appendChild(h6);
        ulDescription.appendChild(li);
    }

    restaurantMsg.textContent = restaurant.principalMsg;

    //Menu
    let platesValues = Object.values(restaurant.menu);
    platesValues.forEach(plato => {
        const article = document.createElement("article");
        article.classList.add("plato");
        article.addEventListener("click", () => { 
            headerFood.style.backgroundImage = "url("+plato.img+")";
            priceFood.textContent = "$"+plato.price;
            foodName.textContent = plato.name;
            foodDescription.textContent = plato.description;
            setTimeout(() => {
                backgroundFood.classList.add("active");
                food.classList.add("active");
            }, 1)
        });
            const imagenDiv = document.createElement("div");
            imagenDiv.classList.add("imagen");
                const img = document.createElement("img");
                img.src = plato.img;
                const rateDiv = document.createElement("div");
                rateDiv.classList.add("rate", "rate__card", "ubuntu");
                rateDiv.textContent = "$"+plato.price;
            imagenDiv.appendChild(img);
            imagenDiv.appendChild(rateDiv);
            const descripDiv = document.createElement("div");
            descripDiv.classList.add("descrip");
                const datosDiv = document.createElement("div");
                datosDiv.classList.add("datosresto");
                    const h3 = document.createElement("h3");
                    h3.classList.add("black", "poppins");
                    h3.textContent = plato.name;
                    const span = document.createElement("span");
                    span.classList.add("ibm", "grey");
                    span.textContent = plato.ingredients;
                datosDiv.appendChild(h3);
                datosDiv.appendChild(span);
            descripDiv.appendChild(datosDiv);
        article.appendChild(imagenDiv);
        article.appendChild(descripDiv);
        platos.appendChild(article);
    });

    //Opiniones
    let opinionValues = Object.values(restaurant.opinions);
    opinionValues.forEach(opinion => {
        const article = document.createElement("article");
        article.classList.add("opinion");
            const imagenDiv = document.createElement("div");
            imagenDiv.classList.add("imagen-perfil");
                const img = document.createElement("img");
                img.src = opinion.picture;
            imagenDiv.appendChild(img);
            const descripDiv = document.createElement("div");
            descripDiv.classList.add("descrip");
                const textDiv = document.createElement("div");
                textDiv.classList.add("texto-opinion");
                    const h3 = document.createElement("h3");
                    h3.classList.add("black", "fs15", "ibm");
                    h3.textContent = opinion.user;
                    const commentarySpan = document.createElement("span");
                    commentarySpan.classList.add("ubuntu", "grey");
                    commentarySpan.textContent = opinion.comment;
                textDiv.appendChild(h3);
                textDiv.appendChild(commentarySpan);
            descripDiv.appendChild(textDiv);
            const starsDiv = document.createElement("div");
            starsDiv.classList.add("estrellas");
                for (let stars = 0; stars < 5; stars++) {
                    const starSpan = document.createElement("span");
                    starSpan.classList.add("material-icons-outlined");
                    if (stars < opinion.rate) {
                        starSpan.textContent = "star";
                    } else {
                        starSpan.textContent = "grade";
                    }
            starsDiv.appendChild(starSpan);
                }
        article.appendChild(imagenDiv);
        article.appendChild(descripDiv);
        article.appendChild(starsDiv);
        listaOpiniones.appendChild(article);
    });
}

//Sections transitions
detallesButton.classList.add("active");
menu.style.display = "none";
opiniones.style.display = "none";
detallesButton.addEventListener("click", () => {
    detalles.style.display = "block";
    setTimeout(() => {
        detalles.classList.add("display");
        menu.classList.remove("display");
        opiniones.classList.remove("display");
        detallesButton.classList.add("active");
        menuButton.classList.remove("active");
        opinionesButton.classList.remove("active");
    }, 1)
    setTimeout(() => {
        menu.style.display = "none";
        opiniones.style.display = "none";
    }, 300)
});
menuButton.addEventListener("click", () => {
    menu.style.display = "block";
    setTimeout(() => {
        detalles.classList.remove("display");
        menu.classList.add("display");
        opiniones.classList.remove("display");
        detallesButton.classList.remove("active");
        menuButton.classList.add("active");
        opinionesButton.classList.remove("active");
    }, 1)
    setTimeout(() => {
        detalles.style.display = "none";
        opiniones.style.display = "none";
    }, 300)
});
opinionesButton.addEventListener("click", () => {
    opiniones.style.display = "block";
    setTimeout(() => {
        detalles.classList.remove("display");
        menu.classList.remove("display");
        opiniones.classList.add("display");
        detallesButton.classList.remove("active");
        menuButton.classList.remove("active");
        opinionesButton.classList.add("active");
    }, 1)
    setTimeout(() => {
        detalles.style.display = "none";
        menu.style.display = "none";
    }, 300)
});

//Food section
const arrowBack = document.getElementById("arrowBack");
arrowBack.addEventListener("click", () => {
    setTimeout(() => {
        backgroundFood.classList.remove("active");
        food.classList.remove("active");
    }, 1)
});

minus.addEventListener("click", () => {
    let count = parseInt(counter.value);
    if (count != 1) {
        count -= 1;
        counter.value = count;
    }
});

plus.addEventListener("click", () => {
    let count = parseInt(counter.value);
    count += 1;
    counter.value = count;
});