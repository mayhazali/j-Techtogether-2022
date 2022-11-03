google.load("visualization", "1", {packages:["corechart"]});

var water= 0;
var tea= 0;
var coffee= 0;
var juice= 0;

var greenie= 100;
var plastic= 0;
var paper= 0;
var plantation= 0;

function incrementWater(){
    water++;
    plastic++;
    document.getElementById('waterVal').value = water;
    displayChart();
}
 function incrementTea(){
    tea++;
    paper++;
    plantation++;
    document.getElementById("teaVal").value = tea;
    displayChart();
 }
 function incrementCoffee(){
    coffee++;
    paper++;
    Plantation++;
    document.getElementById("coffeeVal").value = coffee;
    displayChart();
 }
 function incrementJuice(){
    juice++;
    plastic++;
    document.getElementById("juiceVal").value = juice;
    displayChart();
 }

 function susWater(){
  water++;
  document.getElementById('waterVal').value = water;
  displayChart();
}
function susTea(){
  tea++;
  document.getElementById("teaVal").value = tea;
  displayChart();
}
function susCoffee(){
  coffee++;
  document.getElementById("coffeeVal").value = coffee;
  displayChart();
}
function susJuice(){
  juice++;
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

function drawSusChart(greenie, plastic, paper, plantation) {
  var data = google.visualization.arrayToDataTable([
    ['Material', 'Impact'],
    ['Greenie', Number(greenie)],
    ['Plastic',   Number(plastic)],
    ['Paper',Number(paper)],
    ['Plantation', Number(plantation)]
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
    drawSusChart(greenie, plastic, paper, plantation)
}
