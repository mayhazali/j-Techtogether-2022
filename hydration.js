google.load("visualization", "1", {packages:["corechart"]});

var water= 0;
var tea= 0;
var coffee= 0;
var juice= 0;

var greenie= 100;
var plastic= 0;
var carbon= 0;
var deforestation= 0;

function incrementWater(){
    water++;
    plastic++;
    document.getElementById('waterVal').value = water;
    displayChart();
}
 function incrementTea(){
    tea++;
    carbon++;
    deforestation++;
    document.getElementById("teaVal").value = tea;
    displayChart();
 }
 function incrementCoffee(){
    coffee++;
    carbon++;
    deforestation++;
    document.getElementById("coffeeVal").value = coffee;
    displayChart();
 }
 function incrementJuice(){
    juice++;
    plastic++;
    document.getElementById("juiceVal").value = juice;
    displayChart();
 }
    
function drawChart(water, tea, coffee, juice) {
  var data = google.visualization.arrayToDataTable([
    ['Beverage', 'Consumption'],
    ['Water', Number(water)],
    ['Tea',   Number(tea)],
    ['Coffee',Number(coffee)],
    ['Juice', Number(juice)]
  ]);

  var options = {
    title: 'Hydration',
    is3D: true,
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
  chart.draw(data, options);
}

function drawSusChart() {
  var data = google.visualization.arrayToDataTable([
    ['Sustainability', 'Impact'],
    ['Deforestation', Number(deforestation)],
    ['Plastic',   Number(plastic)],
    ['Carbon Footprint',Number(carbon)],
    ['Greenie!', Number(greenie)]
  ]);

  var options = {
    title: 'Sustainability',
    is3D: true,
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechartSus_3d'));
  chart.draw(data, options);
}

function displayChart() {
    drawChart(water, tea, coffee, juice)
    drawSusChart()
}
