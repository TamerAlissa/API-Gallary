var photoArray = [];
var page = 1;
data();
function data() {
    const myheaders = new Headers();
    fetch('http://localhost:3000/photos/' + page++, {
            method: 'GET',
        })
        .then(Response => Response.json())
        .then(result => {
            photoArray = photoArray.concat(result);
            addData();
        });
}

function addData() {
    console.log(photoArray);
    var doc = photoArray.map((photo, index) => {
        // console.log(photo);
        return `<img class="cl" src="${photo.url}" data-id="${index}" onClick="togglePhoto(event)">`;
    });
    document.getElementById('test').innerHTML = doc.join('');
}