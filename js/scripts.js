$(document).ready(function () {

$("#submitBtn").click(function() {
    sum = 0;
    var p = parseInt($("#principal").val());
    var r = parseInt($("#intrest_rate").val());
    var n = parseInt($("#num_months").val());
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
  out = out +"<tr><td>"+i+"</td><td>"+pay+"</td><td>"+p1+"</td><td>"+i1+"</td><td>"+bal+"</td></tr>";

}
$("#amortization-table tbody").html(out);
});


function calcPayment(principal, interest_rate, num_months){
    var interestCalc = Math.pow((1 + interest_rate), num_months);
    var payment = interest_rate*principal*interestCalc;
    payment = payment / (interestCalc - 1);
    return payment;
}
function generate_table(m,){
for(i=0;i<m;i++){
  $("#app").append("<tr></tr>")

}
}