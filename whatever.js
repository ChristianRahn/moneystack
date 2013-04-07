(function(d3) {
    var margin = {top: 20, right: 20, bottom: 30, left: 50},
        width = 960 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;
        
    console.log(margin);


    d3.csv("splitwise.csv", function(error, data) {
        console.log(data);
    });
})(d3);