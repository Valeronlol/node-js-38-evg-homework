(async () => {
    const cats = (await fetch('http://localhost:3000/cats').then((resp) => resp.json())) || []

    const root = document.getElementById('root')

    cats.forEach(cat => {
        const catParagraph = document.createElement('p')
        catParagraph.innerHTML = cat.name
        root.appendChild(catParagraph)
    });

    const imageContainer = document.getElementById('imageContainer')
    const imageContainerButton = document.getElementById('imageContainerButton')

    imageContainerButton.onclick = async () => {
        const { paths } = (await fetch('http://localhost:3000/pets/images').then((resp) => resp.json())) || {}
        paths.forEach((petPath) => {
            const img = document.createElement('img');
            img.src = petPath;
            img.classList.add('image')
            imageContainer.appendChild(img);
        })
    }
})()
