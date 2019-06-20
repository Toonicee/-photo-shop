window.onload = function(e){

//     var inp1 = document.querySelector('input[name=number]');
//     var inp2 = document.querySelector('input[name=13x18]');
//     var td = document.querySelector('.res');
//     var price document.querySelector('.price');

//     var buttons = document.querySelectorAll('input[type=button]');

//     for(var i = 0; i < buttons.length; i++){
//         buttons[i].onclick = function(){
//             var op = this.getAttribute('data-op');
//             calcForm(op);
//         }
//     }

//     function calcForm(op){
//         var a = parseInt(inp1.value);
//         var b = parseInt(inp2.value);
//         var res;

//         if(op === '+'){
//             res = a + b;
//         }
//         else if{
//             res = 'странная операция';
//         }

//         td.innerHTML = res;
//     }

  document.querySelector("form").onsubmit = function () {
    alert(422);
  }
}


$(document).ready(function() {
  $('.minus').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
    });
  $('.plus').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
    });
});

