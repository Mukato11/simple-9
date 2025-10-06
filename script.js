// about posts

let mainPostWraper = document.getElementById("post-wraper");


let layPost = document.getElementById("lay-block");
let layDescr = document.getElementById("lay-descr");
let closeIcon = document.getElementById("lay-icon");



function mainPost() {
    let request = new XMLHttpRequest();
    request.open("GET", "https://jsonplaceholder.typicode.com/posts");
    request.addEventListener("load", function() {
        console.log(this);
       /* let response = this.responseText;
        let responseJs = JSON.parse(response); */

        let responseNewJs = JSON.parse(this.responseText);
        console.log(responseNewJs);

        responseNewJs.forEach((element ) => {
          console.log(element);
          createPostDiv(element); 
        });
    });
    
   request.addEventListener("error", function() {
        console.log("server error");
    });
   
  request.send();
}

function createPostDiv(item) {
    let divPost = document.createElement('div');
    divPost.classList.add('post-div');
    divPost.setAttribute("data-id", item.id)
    let h2Title = document.createElement('h2');
    h2Title.textContent = item.id;

     let h3Title = document.createElement('h3');
    h3Title.textContent = item.title;

    divPost.appendChild(h2Title);
    divPost.appendChild(h3Title);

    divPost.addEventListener('click', function() {
        layPost.classList.add('active');
    })
    mainPostWraper.appendChild(divPost);

}

closeIcon.addEventListener('click', function() {
  layPost.classList.remove('active');
})
 mainPost();




