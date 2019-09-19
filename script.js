var wrapDiv = document.body.querySelector("#wrap");
var array = [
  { message: "HULLO", color: "red" },
  { message: "Hi there!", color: "blue" },
  { message: "Sup homie", color: "green" }
];

function find_write() {
  for (var i = 0; i < array.length; i++) {
    var arrayEle = document.createElement("div");// create a div
    arrayEle.classList.add("height-width");//add the style
    var messageEle = document.createElement("p");// create h1
    messageEle.innerHTML = array[i].message; //write whats in the message to h1
    //messageEle.style.color = array[i].color; //could be used to hide it
    arrayEle.appendChild(messageEle); //append 
    arrayEle.style.backgroundColor = array[i].color; //add color
    
    arrayEle.addEventListener("click", function(){
      var h1Select = this.getElementsByTagName("p")[0];//this instance of the select
      if(h1Select.style.display === "none"){//if the display is nothing
        h1Select.style.display = "block";//make it something
      }else{
        h1Select.style.display = "none";//anythingelse make it nothing
      }
    });
    
    wrapDiv.appendChild(arrayEle);// append what the message is
  }
}

find_write();