(function homepage () {

  function addMenuToggle () {
    var button = document.getElementById("asidetoggle")
    var aside = document.querySelector("body > aside")
    var main = document.getElementById("main")

    button.addEventListener("click", function () {
      aside.classList.toggle("open")
      main.classList.toggle("wrapped")
    })
  }

  function addHeaderEffect () {
    var el = document.getElementById("siteheader")
    var h1 = document.querySelector("#siteheader h1")
    var h2 = document.querySelector("#siteheader h2")
    var elH = el.offsetHeight
    var elW = el.offsetWidth
    var elX = el.offsetLeft
    var elY = el.offsetTop
    var trigger = 10

    el.addEventListener("mousemove", function(evt) {
      if (trigger--) return
      if (trigger <= 0) trigger = 10

      var x = Math.round((evt.layerX - elX) * 100.0 / elW)
      var y = Math.round((evt.layerY - elY) * 100.0 / elH)
      var xDelta = 100 - x
      var yDelta = 40 + y / 5

      el.style.backgroundPosition = xDelta + 'px ' + yDelta + '%'
      h1.style.marginLeft = -xDelta + 'px'
      h2.style.marginLeft = -xDelta + 'px'
      h1.style.marginTop = -(50 - y) + 'px'
    })

    el.addEventListener("mouseleave", function () {
      el.style.backgroundPosition = ""
      h1.style.marginLeft = ""
      h2.style.marginLeft = ""
      h1.style.marginTop = ""
    })
  }


  addMenuToggle()
  addHeaderEffect()
})()

