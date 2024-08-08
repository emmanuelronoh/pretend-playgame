function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var nodeCopy = document.getElementById(data).cloneNode(true);
    nodeCopy.id = data + "-cooked"; // Change id to avoid duplicate
    event.target.appendChild(nodeCopy);
}

document.querySelectorAll('.ingredient').forEach(item => {
    item.addEventListener('dragstart', drag);
});

document.getElementById('serveButton').addEventListener('click', function() {
    alert('Order served!');
});
