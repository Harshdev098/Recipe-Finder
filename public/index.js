console.log("harsh")
const search= async ()=>{
    const loader=document.getElementById('loader')
    loader.style.display='block'
    const input = document.getElementsByTagName('input');
    const searchQuery = input[0].value;
    const searchText=document.getElementById('searchText')
    searchText.innerHTML=`Search results for "${searchQuery}"`
    input[0].value=""
    console.log(searchQuery);
    const response=await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${searchQuery}&apiKey=6f85c215e6eb4d3a9b0961dfd5bcd146`,{
        headers:{
            'Content-Type':'application/json',
        }
    })
    const data=await response.json()
    console.log(data)
    let result=document.getElementById('searchdata')
    if(data.results.length===0){
        console.log("No results found")
        result.innerHTML = "<p>No results found</p>"
        result.style.fontSize="4rem"
        result.style.alignItems="center"
    }
    else{
        result.innerHTML=""
    const filter=document.getElementById('filter')
    const sort=document.getElementById('sort')
    filter.style.display='block'
    sort.style.display='block'
    data.results.forEach(recipe => {
        const li=document.createElement('li')
        const h4=document.createElement('h4')
        h4.textContent=recipe.title;
        const img=document.createElement('img')
        img.src=recipe.image
        const recipeid=recipe.id
        const btn=document.createElement('button') 
        btn.textContent="View"
        li.append(img,h4,btn)
        result.appendChild(li)
        btn.onclick=()=>{
            showDetail(recipeid)
        }
      });
    }
    loader.style.display='none'
}

const showDetail=async(id)=>{
    window.open(`recipeDetail.html?id=${id}`, '_blank');
}