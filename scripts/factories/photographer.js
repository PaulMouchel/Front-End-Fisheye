function photographerFactory(data) {
    const { name, portrait, id, tagline, city, country, price } = data;

    const picture = `assets/photographers/${portrait}`;
    const location = `${city}, ${country}`
    const pricePerDay = `${price}€/jour`

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        img.setAttribute("alt", `Photo de ${name}`)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        article.appendChild(img);
        article.appendChild(h2);
        const locationNode = document.createElement( 'div' );
        locationNode.classList.add('location')
        locationNode.textContent = location

        const taglineNode = document.createElement( 'div' );
        taglineNode.classList.add('tagline')
        taglineNode.textContent = tagline

        const priceNode = document.createElement( 'div' );
        priceNode.classList.add('price')
        priceNode.textContent = pricePerDay

        article.appendChild(locationNode)
        article.appendChild(taglineNode)
        article.appendChild(priceNode)

        return (article);
    }
    return { name, picture, getUserCardDOM }
}