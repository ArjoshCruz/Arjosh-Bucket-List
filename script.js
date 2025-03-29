function addNewElement() {
    var myInput = document.getElementById("newBucketList").value;
    var ul = document.querySelector('ul');
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(myInput));
    ul.appendChild(li);
}

function changeFontFamily() {
    document.getElementById('container').style.fontFamily = 'Arial,sans-serif';
}

function makeBold() {
    document.getElementById('container').style.fontWeight = 'bold';
}