// var photoArray = [];
let div = document.getElementById("test");
let tr;
let fd;
var page = 1;
data();
function data() {
    // const myheaders = new Headers();
    fetch('http://localhost:4000/photos/' + page, {
            method: 'GET',
        })
        .then(Response => Response.json())
        .then(result => {
          tr = result.photos
          fd = tr.length
          page++
          for(let i=0 ; i<fd ; i++) {
    div.innerHTML += `<img src = "${tr[i]}" class = "img"/>`
          }
        });
}

// function addData() {
//     console.log(photoArray);
//     var doc = photoArray.map((photo, index) => {
//         // console.log(photo);
//         return `<img class="cl" src="${photo.url}" data-id="${index}" onClick="togglePhoto(event)">`;
//     });
//     document.getElementById('test').innerHTML = doc.join('');
// }
// photoArray = photoArray.concat(result);