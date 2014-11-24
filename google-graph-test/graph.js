google.load("visualization", "1", {
    packages: ["corechart"]
});
google.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Year', 'Share of U.S. Income'],
        ['1942', 36],
        ['1947', 34.5],
        ['1952', 33.5],
        ['1957', 33.0],
        ['1962', 34.1],
        ['1967', 34.7],
        ['1972', 34.1],
        ['1977', 34.5],
        ['1982', 35.2],
        ['1987', 38.5],
        ['1992', 41.0],
        ['1997', 44.8],
        ['2002', 43.8],
        ['2007', 49.5],
        ['2012', 50.5]
    ]);

    var options = {
        title: 'How Much Did the Top 10% Take Home?',
        curveType: 'function',
        legend: 'none',
        backgroundColor: '#dddddd',
        lineWidth: '4',
        pointShape: 'circle',
        pointSize: '8',
        vAxis: {
            title: 'Percent of U.S. Income',
            titleTextStyle: {
                color: '#888'
            }
        },
        hAxis: {
            textPosition: 'out'
        },
        hAxis: {
            slantedText: true,
            slantedTextAngle: 60
        },

    };

    var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}
