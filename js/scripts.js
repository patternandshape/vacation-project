$(document).ready(function(){
  $("form#vacayForm").submit(function(event) {

    var points = 0;

    var q1 = $("input#q1").val();
    var q2 = $("input#q2").val();
    var q3 = $("input#q3").val();
    var q4 = $("input#q4").val();
    var q5 = $("input#q5").val();
    var q6 = $("input#q6").val();


    if (q1 === "yes"){
      $(".q1").addClass("has-success");
      points += 1;
    }
    else if (q1 === "sometimes"){
      $(".q1").addClass("has-success");
      points += 2;
    }
    else if (q1 === "no"){
      $(".q1").addClass("has-success");
      points += 3;
    }
    else{
        $(".q1").addClass("has-error");
    };

    if (q2 === "yes"){
      $(".q2").addClass("has-success");
      points += 2;
    }
    else if (q2 === "sometimes"){
      $(".q2").addClass("has-success");
      points += 3;
    }
    else if (q2 === "no"){
      $(".q2").addClass("has-success");
      points += 1;
    }else{
        $(".q2").addClass("has-error");
    };


    if (q3 === "yes"){
      $(".q3").addClass("has-success");
      points += 3;
    }
    else if (q3 === "sometimes"){
      $(".q3").addClass("has-success");
      points += 2;
    }
    else if (q3 === "no"){
      $(".q3").addClass("has-success");
      points += 1;
    }else{
        $(".q3").addClass("has-error");
    };

    if (q4 === "yes"){
      $(".q4").addClass("has-success");
      points += 3;
    }
    else if (q4 === "sometimes"){
      $(".q4").addClass("has-success");
      points += 2;
    }
    else if (q4 === "no"){
      $(".q4").addClass("has-success");
      points += 1;
    }else{
        $(".q4").addClass("has-error");

    };

    if (q5 === "yes"){
      $(".q5").addClass("has-success");
      points += 1;
    }
    else if (q5 === "sometimes"){
      $(".q5").addClass("has-success");
      points += 2;
    }
    else if (q5 === "no"){
      $(".q5").addClass("has-success");
      points += 3;
    }else{
      $(".q5").addClass("has-error");
    };

    if (q6 === "yes"){
      $(".q6").addClass("has-success");
      points += 1;
    }
    else if (q6 === "sometimes"){
      $(".q6").addClass("has-success");
      points += 2;
    }
    else if (q6 === "no"){
      $(".q6").addClass("has-success");
      points += 3;
    }else{
        $(".q6").addClass("has-error");
    };


    if (0 < points && points < 7){
      $(".results").append("You should plan a trip to Tokyo, Japan!");
      $("#tokyo").show();
    }
      else if (6 < points && points <= 12) {
        $(".results").append("We think you'd love Antofagasta, Chile!");
        $("#antofagasta").show();
    }
      else if (points > 12){
        $(".results").append("You would probably enjoy a trip to Big Sur, CA!");
        $("#bigsur").show();
    }
      else {
        $(".results").text("You're a bit complicated. We recommend you stay home!");
    };

    event.preventDefault();

  });
});
