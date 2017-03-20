$(document).ready(function () {

$("#submitBtn").click(function() {
    sum = 0;
    var i1 = parseInt($("#int1").val());
    var i2 = parseInt($("#int2").val());
    sum = i1 +i2;
  $(".modal-body").html( "Sum is "+sum);
});

});