var counterContainer = document.querySelector(".viewcounter");
var visitCount = localStorage.getItem("page_view");
localStorage.setItem("page_view", 1);
counterContainer.innerHTML = visitCount;