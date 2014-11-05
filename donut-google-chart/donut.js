google.load("visualization", "1", {
  packages: ["corechart"]
});

google.setOnLoadCallback(function() {
  var chart, data, options;
  data = google.visualization.arrayToDataTable([['Choice', 'Percentage'], ['Work', 20], ['Eat', 10], ['Commute', 8], ['Watch TV', 5], ['Sleep', 3], ['...', 2], ['...', 1.8], ['...', 1.75], ['...', 1.7], ['...', 1.5], ['...', 1.25], ['...', 1], ['...', .98], ['...', .9], ['...', .86], ['...', .82], ['...', .80], ['...', .75], ['...', .7], ['...', .5], ['...', .5], ['...', .45], ['...', .40], ['...', .39], ['...', .35], ['...', .35], ['...', .28], ['...', .28], ['...', .25], ['...', .25], ['...', .25], ['...', .25], ['...', .25], ['...', .15], ['...', .15]]);
  options = {
    title: 'What are your daily activities?',
    pieHole: 0.6,
    colors: ['#fc9d00', '#faae4a', '#fcc075', '#fed29c', '#ffe6c7', '#30bbe6', '#64c5e9', '#89d0ed', '#aadcf1', '#caeaf6', '#514186', '#6c5d97', '#897aab', '#a99dc4', '#d0c9e4', '#a5ce38', '#b3d459', '#c2db7d', '#d0e39c', '#deebbd'],
    pieSliceBorderColor: "transparent"
  };
  chart = new google.visualization.PieChart(document.getElementById('donutchart'));
  return chart.draw(data, options);
});
