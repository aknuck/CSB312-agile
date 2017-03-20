$(document).ready(function () {

$("#submitBtn").click(function() {
    sum = 0;
    var p = parseInt($("#principal").val());
    var r = parseFloat($("#interest_rate").val());
    var m = parseInt($("#num_months").val());
    var ins = parseInt($("#annual_insurance").val());
    var t = parseInt($("#annual_tax").val());
    var pay = calcPayment(p, r,m);

    

  $("#result").html( "Payment:  "+pay);
  var p1;
  var i1;
  var bal = p;
  var out = "";
for(i=1;i<=m;i++){
  
  i1 = bal * r;
  p1 = pay - i1;
  bal= bal - p1;
  out = out +"<tr><td>"+i+"</td><td>"+pay.toFixed(2)+"</td><td>"+p1.toFixed(2)+"</td><td>"+i1.toFixed(2)+"</td><td>"+bal.toFixed(2)+"</td></tr>";

}
$("#amortization-table tbody").html(out);
});


function calcPayment(principal, interest_rate, num_months){
    var interestCalc = Math.pow((1 + interest_rate), num_months);
    var payment = interest_rate*principal*interestCalc;
    payment = payment / (interestCalc - 1);
;    return payment.toFixed(2);
}


});
