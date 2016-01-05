(function() {

  var el = document.getElementById("siteheader"),
      h1 = document.querySelector("#siteheader h1"),
      h2 = document.querySelector("#siteheader h2"),
      elH = el.offsetHeight,
      elW = el.offsetWidth,
      elX = el.offsetLeft,
      elY = el.offsetTop,
      trigger = 10

  el.addEventListener("mousemove", function(evt) {

    if(trigger--) return
    if(trigger <= 0) trigger = 10

    var x = Math.round((evt.x - elX) * 100.0 / elW),
        y = Math.round((evt.y - elY) * 100.0 / elH),
        xDelta = 50-x,
        yDelta = 40+y/5

    el.style.backgroundPosition = xDelta+"px "+yDelta+"%"
    h1.style.marginLeft = (-xDelta)+"px"
    h2.style.marginLeft = (-xDelta)+"px"
    h1.style.marginTop = (-(50-y))+"px"
  })

  el.addEventListener("mouseleave", function() {
    el.style.backgroundPosition = ""
    h1.style.marginLeft = ""
    h2.style.marginLeft = ""
    h1.style.marginTop = ""
  })

})()
