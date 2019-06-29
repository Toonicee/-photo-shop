window.onload = function(e){
var linkLog = document.querySelector('.user-list__log');
var popup = document.querySelector('.modal-login');
var modalBtn = document.querySelector('.modal__close');

  linkLog.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal__activ");
    console.log ("11");
  });

  modalBtn.addEventListener("click", function (evt){
    evt.preventDefault();
    popup.classList.remove("modal__activ")
  });
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



