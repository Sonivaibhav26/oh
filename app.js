var getData = (ele) => {

    fetch('https://www.googleapis.com/customsearch/v1?key=AIzaSyBPyD7liSzu-uh9ocKKXNWYoRtrfQ_XdVU&cx=018264299595958242005:dvoe66zacxy&q=' + ele.value)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            res = data.items;
            for (i = 0; i < res.length; i++) {
                var node = document.createElement("LI");  // Create a <li> node
                node.innerHTML = `<a class="list-group-item list-group-item-action">
                <p class="mb-1">${res[i].displayLink}</p>
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">${res[i].title}</h5>
                  </div>
                <small class="text-muted">${res[i].snippet}</small>
              </a>`;
                document.getElementById("list-group").appendChild(node); ///append Item
            }
        }
        );


}