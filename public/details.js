const recipeDetails = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    console.log(id)
    const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=6f85c215e6eb4d3a9b0961dfd5bcd146`, {
        headers: {
            "Content-Type": "application/json",
        }
    })
    const result = await response.json()
    document.title = result.title
    const title = document.getElementById('title')
    title.textContent = result.title
    const topImage = document.getElementById('top_img')
    topImage.src = result.image
    const summary = document.getElementById('summary')
    summary.innerHTML = result.summary
    const Instructions = document.getElementById('Instructions')
    Instructions.innerHTML = result.instructions
    const ul = document.getElementById('ingredientList')
    result.extendedIngredients.forEach((ingred) => {
        const li = document.createElement('li')
        const img = document.createElement('img')
        img.src = `https://spoonacular.com/cdn/ingredients_100x100/${ingred.image}`
        const para = document.createElement('p')
        para.innerHTML = `Ingredient Name: ${ingred.name}`
        const p = document.createElement('p')
        p.textContent = `Amount: ${ingred.amount}${ingred.unit}`
        const original = document.createElement('p')
        original.textContent = `Original Name: ${ingred.original}`
        li.append(img, para, p, original)
        ul.append(li)
    })
    const veg = document.getElementById('veg')
    if (result.vegetarian == false) {
        veg.textContent = "Vegetarian"
    }
    else { veg.textContent = "Non-Vegetarian" }
    const healthScore = document.getElementById('healthScore')
    healthScore.textContent = `Health Score: ${result.healthScore}`
    const url = document.getElementById('url')
    url.href = result.sourceUrl
    url.textContent = "Source URL"
    const readyInMinutes = document.getElementById('readyInMinutes')
    readyInMinutes.textContent = `ReadyinMinutes: ${result.readyInMinutes}`
    const loader = document.getElementById('loader')
    loader.style.display = 'none'
}

recipeDetails()

