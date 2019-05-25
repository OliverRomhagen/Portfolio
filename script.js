fetch("projectList.json")
.then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    myJson.forEach(element => {
      let node = document.createElement("li");
      node.className = 'grid__item'
      node.innerHTML = ` 
      <div>
        <a>
          <img src="${element.posterUrl}" alt="" />
          <div class="grid__item--overlay">${element.projectName}</div>
        </a>
      </div> `
      document.querySelector(".grid").appendChild(node);
  });
  });



