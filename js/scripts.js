var things = [];

$(function() {
  $("button[name='reverse-array']").click(function() {
    things.reverse();
    $(".output").append("<p>You reversed: " + things + ".</p>");
  });
  $("button[name='pop']").click(function() {
    var popped = things.pop();
    $(".output").append("<p>You removed " + popped + ".</p>");
    console.log(things);
  });

 $("form").change(function() {
  things = [
    $("input[name='thing1']").val(),
    $("input[name='thing2']").val(),
    $("input[name='thing3']").val()
  ];

   $(".output").append("<p>You listed: " + things + ".</p>");
   });
 });
