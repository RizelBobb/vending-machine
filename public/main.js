var thumbUp = document.getElementsByClassName("fa-thumbs-up");
var trash = document.getElementsByClassName("fa-trash");
var twizzlers = document.getElementById('twizzlers');
var doritos = document.getElementById('doritos');
var crunch = document.getElementById('crunch');
var fanta = document.getElementById('fanta') ;
var pretzels = document.getElementById('pretzels') ;

Array.from(thumbUp).forEach(function(element) {
      element.addEventListener('click', function(){
        element.classList.add("complete")
        const snack = this.parentNode.parentNode.childNodes[1].innerText
        // const count = this.parentNode.parentNode.childNodes[3].innerText
        const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
        console.log(this.parentNode.parentNode.childNodes[5].innerText)
        fetch('messages', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'snack': snack,
            // 'count': count,
            'thumbUp':thumbUp


          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {

          window.location.reload(true)
        })
      });
});

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const snack = this.parentNode.parentNode.childNodes[1].innerText
        fetch('messages', {
          method: 'delete',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'snack': snack
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});

twizzlers.addEventListener('click', function() {
      //  const snack = this.parentNode.parentNode.childNodes[1].innerText
    //  debugger;
const thumbUp =
parseInt(document.getElementById("makeGreen").innerText) - 1
          fetch('messages-decrease', {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
        'snack': 'twizzlers' ,
        'thumbUp': thumbUp
        })
        })
        .then(response => {
        if (response.ok) return response.json()

        })
        .then(data => {

        window.location.reload() //page reload (another get request is triggered)
        })

        });

doritos.addEventListener('click', function() {
//  const snack = this.parentNode.parentNode.childNodes[1].innerText
//  debugger;
const thumbUp =
parseInt(document.getElementById("makeGreen").innerText) - 1
    fetch('messages-decrease', {
  method: 'put',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({
  'snack': 'doritos' ,
  'thumbUp': thumbUp
  })
  })
  .then(response => {
  if (response.ok) return response.json()

  })
  .then(data => {

  window.location.reload() //page reload (another get request is triggered)
  })

  });

  crunch.addEventListener('click', function() {
  //  const snack = this.parentNode.parentNode.childNodes[1].innerText
  //  debugger;
  const thumbUp =
  parseInt(document.getElementById("makeGreen").innerText) - 1
      fetch('messages-decrease', {
    method: 'put',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
    'snack': 'crunch' ,
    'thumbUp': thumbUp
    })
    })
    .then(response => {
    if (response.ok) return response.json()

    })
    .then(data => {

    window.location.reload() //page reload (another get request is triggered)
    })

  });


fanta.addEventListener('click', function() {
//  const snack = this.parentNode.parentNode.childNodes[1].innerText
//  debugger;
const thumbUp =
parseInt(document.getElementById("makeGreen").innerText) - 1
    fetch('messages-decrease', {
  method: 'put',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({
  'snack': 'fanta' ,
  'thumbUp': thumbUp
  })
  })
  .then(response => {
  if (response.ok) return response.json()

  })
  .then(data => {

  window.location.reload() //page reload (another get request is triggered)
  })

  });

pretzels.addEventListener('click', function() {
//  const snack = this.parentNode.parentNode.childNodes[1].innerText
//  debugger;
const thumbUp =
parseInt(document.getElementById("makeGreen").innerText) - 1
    fetch('messages-decrease', {
  method: 'put',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({
  'snack': 'pretzels' ,
  'thumbUp': thumbUp
  })
  })
  .then(response => {
  if (response.ok) return response.json()

  })
  .then(data => {

  window.location.reload() //page reload (another get request is triggered)
  })

  });
