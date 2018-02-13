$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (500) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 500, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });
})

$(document).ready(function(){
  $.get("/api/measurement/currtemp", function(data, status){
    document.getElementById("currtemp").innerHTML = (data[0].value/data[0].scale)+" C";
    document.getElementById("timestamptemp").innerHTML = (data[0].create_date);
  });
  $.get("/api/measurement/currhum", function(data, status){
    document.getElementById("currhum").innerHTML = (data[0].value/data[0].scale)+"%";
    document.getElementById("timestamphum").innerHTML = (data[0].create_date);
  });
});

$(document).ready(function(){
  var tempdata = [];
  var curdata = [];
  var timedata = [];
  $.get("/api/measurement/temp", function(data, status){
    data.reverse();
    data.forEach(element => {
      tempdata.push((element.value)/(element.scale));
      timedata.push(element.create_date);
      //console.log(timedata);
      //console.log((element.value)/(element.scale));
    });
    $.jqplot('tempchart1',  [tempdata,timedata]);
    $.jqplot('tempchart2',  [tempdata,timedata]);
  });
  var humdata = [];
  $.get("/api/measurement/hum", function(data, status){
    data.reverse();
    data.forEach(element => {
      humdata.push((element.value)/(element.scale));
     // console.log(chardata);
      //console.log((element.value)/(element.scale));
    });

    $.jqplot('humchart1',  [humdata],{
      seriesDefaults: {
        rendererOptions: {
            smooth: true
        }
    }
    });
    $.jqplot('humchart2',  [humdata]);
  });
  $.get("/api/measurement/cur", function(data, status){
    data.reverse();
    data.forEach(element => {
      curdata.push((element.value)/(element.scale));
      timedata.push(element.create_date);
    });
    $.jqplot('curchart2',  [tempdata,timedata]);
  });
});

$(document).ready(function(){
  // Initialize Tooltip
  $('[data-toggle="tooltip"]').tooltip();

  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {

      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
})

/*function geturl(url) {
    $.get(url, function(data, status){
    alert("Data: " + data + "\nStatus: " + status);
    });
}*/

function haabNexaSend(command) {
  //console.log(command);
    $.post("http://node.haab.space/haabnexa/send", {"command": command}, function(data, status) {
    //alert("Data: " + data + "\nStatus: " + status);
    });
}


$(document).ready(function(){
	n =  new Date();
	y = n.getFullYear();
	m = n.getMonth() + 1;
	d = n.getDate();

	document.getElementById("date").innerHTML = d+"/"+ m +"/"+y;
	//document.getElementById("date").innerHTML = Date();
})
