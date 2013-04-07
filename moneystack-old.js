     
    //Settings    
    var margin = {top: 20, right: 20, bottom: 30, left: 50},
    width = 600,
    height = 300,
    
    //Internal Data
    nums = [2, 4, 5, 8, 1, 7, 4, 5, 7,2,9,8,-4,5,6],
    tCost = [
        {"Date": "2013-01-01", "Cost": "3.68"},
        {"Date": "2013-01-02", "Cost": "1.08"},
        {"Date": "2013-01-03", "Cost": "5.68"},
        {"Date": "2013-01-04", "Cost": "7.00"},
        {"Date": "2013-01-05", "Cost": "0.38"}
    ];

/*

//ACTUAL PROJECT =P

//Date formatter
var parseDate = d3.time.format("%m/%d/%Y").parse;

//Axes setup
var x = d3.time.scale()
    .range([0, width]);

var y = d3.linear.scale()
    .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

//Defining the area graph parameters
var area = d3.svg.area()
    .x(function (d) {return d.date;})
    .y0(height)
    .y1(function (d) {return d.cost;});

//Create SVG (for area)
var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    //Grouping SVG Elements ?
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
    //Test text
    .append("title").text("This should be on the area SVG");    

d3.csv("testCost.csv", function (data) {
    
    //if(error) {return console.warn("Error");}
    
    data.forEach(function (d) {
        d.date = parseDate(d.date);
        d.cost = +d.cost;
    });

    x.domain(d3.extent(data, function (d) {return d.date;}));
    y.domain([0, d3.max(data, function (d) {return d.cost;})]);

    svg.append("path")
        .datum(data)
        .attr("class", "area")
        .attr("d", area);

    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis);
    
    svg.append("g")
    .text("Anything?");

});



//Circles
var svg1 = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

svg1.selectAll("circle")
    .data(nums)
    .enter().append("circle")
    .style("fill", "blue")
    .attr("cx", function (d, i) {
    return (i * 30);
})
    .attr("cy", 30)
    .attr("r", function (d) {
    return d;
});

*/


//Line graph


//Date formatter
var parseDate = d3.time.format("%Y-%m-%d").parse;

/*
//Axes setup
var x = d3.time.scale()
    .domain(d3.extent(function(d) {return d.Date;}))
    .range([0, width]);

var y = d3.linear.scale()
    .domain([0, d3.max(function(d) {return d.Cost;})])
    .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");
*/

//SVG Setup
var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
//  .append("g")
//    .attr("transform", "translate("+margin.left+","+margin.top+")";

var line = d3.svg.line()
    .x(function (d) {
    d.Date = parseDate(d.Date);
    return d.Date;})
    .y(function (d) {
    d.Cost = +d.Cost;
    return d.Cost;});

//SVG Creation
svg.append("svg:g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

svg.append("svg:g")
        .attr("class", "y axis")
        .call(yAxis);

svg.append("svg:path")
    .datum(tCost)
    .attr("class", "line")
    .attr("d", line);
        
