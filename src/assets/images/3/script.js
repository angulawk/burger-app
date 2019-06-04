(function () {
  const showRandomCat = document.querySelector(".showRandomCat");
  let randomKitty = document.getElementById("random-kitty");

  showRandomCat.addEventListener("click", async() => {
    let apiData;
    await fetch("http://upload.giphy.com/v1/gifs/search?q=cat&api_key=mrynWfpee5IlFHioGP2UNoIc968zcvc4&limit=25")
      .then(resp => resp.json())
      .then(resp => apiData = resp.data)
        
    let cat = apiData[Math.floor(Math.random() * apiData.length)];
    let catUrl = cat.url;
    let catTitle = cat.title;

    randomKitty.src = catUrl;
    randomKitty.alt = catTitle;
  })
})();