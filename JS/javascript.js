function openNav() {
	  document.getElementById("myNav").style.display = "block";/*Show the curtain menu*/
	}

function closeNav() {
	  document.getElementById("myNav").style.display = "none";/*Hide the curtain menu*/
	}

window.addEventListener("DOMContentLoaded",event=>{window.addEventListener("message",event=>{if(event.data.appHeight&&"9c8d4"==event.data.inst){let container=document.querySelector("#scoreaxis-widget-9c8d4 iframe");container&&(container.style.height=parseInt(event.data.appHeight)+"px")}},!1)});

function messageReceived() {
  alert("Thank You!");
}

function toggleMap1() {
  var x = document.getElementById("maplink1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function toggleMap2() {
  var x = document.getElementById("maplink2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function toggleMap3() {
  var x = document.getElementById("maplink3");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function toggleMap4() {
  var x = document.getElementById("maplink4");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

toggleMap1()
toggleMap2()
toggleMap3()
toggleMap4()

