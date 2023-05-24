$(function () {
    ("use strict");

    // total_revenue
    var optionsSpark1 = {
        series: [
            {
                name: "Operation Income",
                data: [82, 38, 35, 62, 41, 45, 57, 40, 55, 22, 75, 90],
            },
            {
                name: "Pharmacy Income",
                data: [21, 35, 25, 38, 40, 24, 48, 28, 55, 45, 70, 49],
            },
            {
                name: "Hospital Expenses",
                data: [59, 35, 30, 36, 28, 45, 58, 59, 19, 58, 70, 28],
            },
        ],
        chart: {
            type: "line",
            height: 350,
            sparkline: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },
        stroke: {
            show: true,
            curve: "smooth",
            colors: undefined,
            width: 1,
            dashArray: 0,
        },
        dataLabels: {
            enabled: false,
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val + "K";
                },
            },
        },
        xaxis: {
            show: true,
            categories: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ],
        },
        yaxis: {
            show: true,
            categories: [
                "12K",
                "11K",
                "10K",
                "9K",
                "8K",
                "7K",
                "6K",
                "5K",
                "4K",
                "3K",
                "2K",
                "1K",
            ],
        },
        legend: {
            show: false,
            position: "top",
            horizontalAlign: "center",
        },
    };
    var chartSpark1 = new ApexCharts(document.querySelector("#total_revenue"), optionsSpark1);
    chartSpark1.render();


    //////////
    // Visitors_chart
    var d = [
        [1196463600000, 0],
        [1196550000000, 0],
        [1196636400000, 0],
        [1196722800000, 77],
        [1196809200000, 3636],
        [1196895600000, 3575],
        [1196982000000, 2736],
        [1197068400000, 1086],
        [1197154800000, 676],
        [1197241200000, 1205],
        [1197327600000, 906],
        [1197414000000, 710],
        [1197500400000, 639],
        [1197586800000, 540],
        [1197673200000, 435],
        [1197759600000, 301],
        [1197846000000, 575],
        [1197932400000, 481],
        [1198018800000, 591],
        [1198105200000, 608],
        [1198191600000, 459],
        [1198278000000, 234],
        [1198364400000, 1352],
        [1198450800000, 686],
        [1198537200000, 279],
        [1198623600000, 449],
        [1198710000000, 468],
        [1198796400000, 392],
        [1198882800000, 282],
        [1198969200000, 208],
        [1199055600000, 229],
        [1199142000000, 177],
        [1199228400000, 374],
        [1199314800000, 436],
        [1199401200000, 404],
        [1199487600000, 253],
        [1199574000000, 218],
        [1199660400000, 476],
        [1199746800000, 462],
        [1199833200000, 448],
        [1199919600000, 442],
        [1200006000000, 403],
        [1200092400000, 204],
        [1200178800000, 194],
        [1200265200000, 327],
        [1200351600000, 374],
        [1200438000000, 507],
        [1200524400000, 546],
        [1200610800000, 482],
        [1200697200000, 283],
        [1200783600000, 221],
        [1200870000000, 483],
        [1200956400000, 523],
        [1201042800000, 528],
        [1201129200000, 483],
        [1201215600000, 452],
        [1201302000000, 270],
        [1201388400000, 222],
        [1201474800000, 439],
        [1201561200000, 559],
        [1201647600000, 521],
        [1201734000000, 477],
        [1201820400000, 442],
        [1201906800000, 252],
        [1201993200000, 236],
        [1202079600000, 525],
        [1202166000000, 477],
        [1202252400000, 386],
        [1202338800000, 409],
        [1202425200000, 408],
        [1202511600000, 237],
        [1202598000000, 193],
        [1202684400000, 357],
        [1202770800000, 414],
        [1202857200000, 393],
        [1202943600000, 353],
        [1203030000000, 364],
        [1203116400000, 215],
        [1203202800000, 214],
        [1203289200000, 356],
        [1203375600000, 399],
        [1203462000000, 334],
        [1203548400000, 348],
        [1203634800000, 243],
        [1203721200000, 126],
        [1203807600000, 157],
        [1203894000000, 288],
    ];

    // first correct the timestamps - they are recorded as the daily
    // midnights in UTC+0100, but Flot always displays dates in UTC
    // so we have to add one hour to hit the midnights in the plot

    for (var i = 0; i < d.length; ++i) {
        d[i][0] += 60 * 60 * 1000;
    }

    // helper for returning the weekends in a period

    function weekendAreas(axes) {
        var markings = [],
            d = new Date(axes.xaxis.min);

        // go to the first Saturday

        d.setUTCDate(d.getUTCDate() - ((d.getUTCDay() + 1) % 7));
        d.setUTCSeconds(0);
        d.setUTCMinutes(0);
        d.setUTCHours(0);

        var i = d.getTime();

        // when we don't set yaxis, the rectangle automatically
        // extends to infinity upwards and downwards

        do {
            markings.push({ xaxis: { from: i, to: i + 2 * 24 * 60 * 60 * 1000 } });
            i += 7 * 24 * 60 * 60 * 1000;
        } while (i < axes.xaxis.max);

        return markings;
    }

    var options = {
        xaxis: {
            mode: "time",
            tickLength: 5,
        },
        selection: {
            mode: "x",
        },
        grid: {
            markings: weekendAreas,
            borderColor: "#eaeaea",
            tickColor: "#eaeaea",
            hoverable: true,
            borderWidth: 1,
        },
    };

    var plot = $.plot("#Visitors_chart", [d], options);

    // now connect the two

    $("#Visitors_chart").bind("plotselected", function (event, ranges) {
        // do the zooming
        $.each(plot.getXAxes(), function (_, axis) {
            var opts = axis.options;
            opts.min = ranges.xaxis.from;
            opts.max = ranges.xaxis.to;
        });
        plot.setupGrid();
        plot.draw();
        plot.clearSelection();

        // don't fire event on the overview to prevent eternal loop

        overview.setSelection(ranges, true);
    });

    // patient_history
    var options = {
        series: [
            {
                name: "ICU",
                data: [23, 32, 45, 23, 56, 20],
            },
            {
                name: "IN-Patinet",
                data: [25, 83, 92, 26, 23, 25],
            },
            {
                name: "Out-Patinet",
                data: [12, 52, 25, 35, 19, 52],
            },
        ],
        chart: {
            type: "bar",
            stacked: true,
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
            },
        },
        stroke: {
            width: 1,
            colors: ["#fff"],
        },
        colors: ["#f79647", "#4aacc7", "#9bbb58"],
        dataLabels: {
            enabled: false,
        },
        xaxis: {
            categories: ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6"],
            labels: {
                formatter: function (val) {
                    return val + "";
                },
            },
        },
        yaxis: {
            title: {
                text: undefined,
            },
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val + "K";
                },
            },
        },
        fill: {
            opacity: 1,
        },
        legend: {
            position: "top",
            horizontalAlign: "center",
            offsetX: 0,
        },
    };
    var chart = new ApexCharts(document.querySelector("#patient_history"), options);
    chart.render();
});