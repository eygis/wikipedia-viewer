let searchLink = "https://en.wikipedia.org/w/api.php?action=opensearch&search=";

let randomLink = "https://en.wikipedia.org/wiki/Special:Random";

 

$("#random").click(function() {
  window.open(randomLink)
})

$("#search").on("keypress", function(e) {
  if (e.which !== 13) {
    $("#results").html("");
  }
})

$("#search").on("keypress", function(e) {
 
  if (e.which == 13) {
    //console.log("test")
    let query = $("#search").val();
    //console.log(query);
    let newLink = searchLink + query + "&origin=*";
    //console.log(newLink);
    
    let bui = new XMLHttpRequest();
  
    
    bui.open("GET", newLink, true);
    bui.send();
    bui.onload = () => {
   //console.log("test") 
   let res = JSON.parse(bui.responseText)
   let names = res[1];
   let links = res[3];
   //console.log(names)
    links.forEach(function(links, i) {
      $("#results").append("<div class='article'><a href=" + links + " target='_blank'><div id='information'><h3>" + names[i] + "</h3></div></div>")
  })  
  }                                  
  }
})

/*

<div class='article'><a href=" + links + " target='_blank'><div id='information'><h3>" + names[i] + "</h3></div></div>

*/