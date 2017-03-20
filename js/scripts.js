$(document).ready(function () {

$("#submitBtn").click(function() {
    sum = 0;
    var i1 = parseInt($("#principal").val());
    var i2 = parseInt($("#intrst_rate").val());
    var i2 = parseInt($("#num_months").val());
    var i2 = parseInt($("#annual_insurance").val());
    var i2 = parseInt($("#annual_tax").val());
    sum = i1 +i2;
  $(".modal-body").html( "Sum is "+sum);
});

});

function intrestCalc(a,b,c){

}