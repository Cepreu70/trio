(function() {

    app.controller('pSmartAstanaController', function($scope, $routeParams, $http) {
        this.animations = {
            motionBars: function(){

                var
                    svg = d3.select('.graph-d3').append('svg'),
                    height = 170,
                    dataArray = [],
                    sideArray = [],
                    countOfBars = 337;

                for (var i = 0; i < countOfBars; i++) {
                    dataArray[i] = {
                        height: Math.floor(Math.random() * (6)) + 6,
                        side: Math.floor(Math.random() * (3)) - 1
                    }
                }


                var
                    bars = svg.selectAll("rect")
                    .data(dataArray)
                    .enter()
                    .append("rect")
                    .attr("x", function(d, i){ return i * 8})
                    .attr("width", 4)
                    .attr("height", function(d){ return d.height * 10 })
                    .attr("y", 0)
                    .attr("fill", "#b2cab7"),


                    animateRectangles = function(){
                        bars.transition()
                            .ease('linear')
                            .duration( 4000)
                            .attr("height", function(d){return (d.height + d.side * 2) * 10})
                            .transition()
                            .duration( 4000 )
                            .ease('linear')
                            .attr("height", function(d){return d.height * 10})
                            .each("end", function(d,i){if (!i) animateRectangles(); });
                    };
                animateRectangles();
            }
        };
        this.animations.motionBars();
    });
})();