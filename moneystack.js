(function(d3) {
    var margin = {top: 20, right: 20, bottom: 30, left: 50},
        width = 960 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;
        
    console.log(margin);

    var x = d3.time.scale()
        .range([0,width]);
        
    var y = d3.scale.linear()
        .range([height,0]);
        
    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");
        
    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left");
        
    var area = d3.svg.area()
        .x(function(d) {return x(d.date)})
        .y0(function(d) {return d.y0;})
        .y1(function(d) {return d.y0 + d.y1;});
        
    var stack = d3.layout.stack()
        .values(function(d) {return d.values;});
        
    var svg = d3.select("body").append("svg")
        
    d3.csv("splitwise.csv", function(error, data) {
        console.log(data);
        console.log(error);
    });
})(d3);