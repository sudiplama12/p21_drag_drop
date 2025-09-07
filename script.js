const lists = document.getElementsByClassName("list");
const rightbox = document.getElementById("right");
const leftbox = document.getElementById("left");

Array.from(lists).forEach(list => {
    list.addEventListener("dragstart", function (e) {
        let selected=e.target;
        rightbox.addEventListener('dragover',function(e){
            e.preventDefault();
        })
        rightbox.addEventListener("drop",function(e){
            rightbox.appendChild(selected);
            selected=null
        })
        leftbox.addEventListener('dragover',function(e){
            e.preventDefault()
        })
        leftbox.addEventListener('drop',function(e){
            leftbox.appendChild(selected);
            selected=null
        })
      
    });
});
