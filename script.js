var topLeftRotationActive = true;
var topRightRotationActive = true;
var bottomLeftRotationActive = true;
var bottomRightRotationActive = true;

$(document).ready(function() {
    $("#expand-doc").click(function() {
        $("#documentation-content").toggle();
        $("#icon-circle").toggleClass("expanded");
    });
});

$(document).ready(function() {
    $("#center-circle").click(function() {
        /*Color switch circles*/
        $("#center-circle").toggleClass("circles");
        $("#top-circle").toggleClass("circles");
        $("#bottom-circle").toggleClass("circles");
        $("#circle1").toggleClass("circles");
        $("#circle2").toggleClass("circles");
        $("#circle3").toggleClass("circles");
        $("#circle4").toggleClass("circles");
        /*Start/stop circle animation*/
        $("#top-circle").toggleClass("top-circle");
        $("#bottom-circle").toggleClass("bottom-circle");
        $("#circle1").toggleClass("circle1");
        $("#circle2").toggleClass("circle2");
        $("#circle3").toggleClass("circle3");
        $("#circle4").toggleClass("circle4");

        /*toggle alternate rectangle-animation*/
        if (!topLeftRotationActive) {
            $("#top-left-movable-rect-1").toggleClass("rect-1-alternate");
            $("#top-left-movable-rect-2").toggleClass("rect-2-alternate");
            $("#top-left-movable-rect-3").toggleClass("rect-3-alternate");
            $("#top-left-movable-rect-4").toggleClass("rect-4-alternate");
        }

        if (!bottomLeftRotationActive) {
            $("#bottom-left-movable-rect-1").toggleClass("rect-1-alternate");
            $("#bottom-left-movable-rect-2").toggleClass("rect-2-alternate");
            $("#bottom-left-movable-rect-3").toggleClass("rect-3-alternate");
            $("#bottom-left-movable-rect-4").toggleClass("rect-4-alternate");
        }

        if (!topRightRotationActive) {
            $("#top-right-movable-rect-1").toggleClass("rect-1-alternate");
            $("#top-right-movable-rect-2").toggleClass("rect-2-alternate");
            $("#top-right-movable-rect-3").toggleClass("rect-3-alternate");
            $("#top-right-movable-rect-4").toggleClass("rect-4-alternate");
        }

        if (!bottomRightRotationActive) {
            $("#bottom-right-movable-rect-1").toggleClass("rect-1-alternate");
            $("#bottom-right-movable-rect-2").toggleClass("rect-2-alternate");
            $("#bottom-right-movable-rect-3").toggleClass("rect-3-alternate");
            $("#bottom-right-movable-rect-4").toggleClass("rect-4-alternate");
        }
    });
});

$(document).ready(function() {
    $("#top-left-rect-group").click(function() {
        $("#top-left-movable-rect-1").toggleClass("rect-1-rotate");
        $("#top-left-movable-rect-2").toggleClass("rect-2-rotate");
        $("#top-left-movable-rect-3").toggleClass("rect-3-rotate");
        $("#top-left-movable-rect-4").toggleClass("rect-4-rotate");
        topLeftRotationActive = !topLeftRotationActive;
    })
});

$(document).ready(function() {
    $("#top-right-rect-group").click(function() {
        $("#top-right-movable-rect-1").toggleClass("rect-1-rotate");
        $("#top-right-movable-rect-2").toggleClass("rect-2-rotate");
        $("#top-right-movable-rect-3").toggleClass("rect-3-rotate");
        $("#top-right-movable-rect-4").toggleClass("rect-4-rotate");
        topRightRotationActive = !topRightRotationActive;
    })
});

$(document).ready(function() {
    $("#bottom-left-rect-group").click(function() {
        $("#bottom-left-movable-rect-1").toggleClass("rect-1-rotate");
        $("#bottom-left-movable-rect-2").toggleClass("rect-2-rotate");
        $("#bottom-left-movable-rect-3").toggleClass("rect-3-rotate");
        $("#bottom-left-movable-rect-4").toggleClass("rect-4-rotate");
        bottomLeftRotationActive = !bottomLeftRotationActive;
    })
});

$(document).ready(function() {
    $("#bottom-right-rect-group").click(function() {
        $("#bottom-right-movable-rect-1").toggleClass("rect-1-rotate");
        $("#bottom-right-movable-rect-2").toggleClass("rect-2-rotate");
        $("#bottom-right-movable-rect-3").toggleClass("rect-3-rotate");
        $("#bottom-right-movable-rect-4").toggleClass("rect-4-rotate");
        bottomRightRotationActive = !bottomRightRotationActive;
    })
});
