var loader = (function() {

    'use strict';
    var palette;
    var body, loader, squares;
    var interval;

    var initPeriod = 8;

    /* -------------------------
    /* UTILS
    /* -------------------------*/

    // Soft object augmentation
    function extend( target, source ) {

        for ( var key in source ) {
            if ( !( key in target ) ) {
                target[ key ] = source[ key ];
            }
        }

        return target;
    }

    function init() {
    	start();
    }

    function start() {

    	interval = setInterval( iterateColors, 50 );
    }

    function iterateColors() {

		var i = 0;
		for( var i; i < palette.length; i++ ) {
			squares[i].style.backgroundColor = '#' + palette[i];
		}

		// Move last item in array to first
		palette.splice(0, 0, palette.splice(palette.length - 1, 1)[0]);
    }

    function stop() {
    	clearInterval( interval );
        loader.style.display = 'none';
    }

    function main( colors ) {

        // There is always 5 colors.
        palette = [
            colors[0],
            colors[1],
            colors[2],
            colors[3],
            colors[4],
            colors[3],
            colors[2],
            colors[1],
            colors[0]
        ];

        // Caching
        body               = document.body;
        loader             = document.querySelector( '.loader' );
        var squareElements = document.querySelectorAll( '.loader .square' );
        
        // Arranged square elements so they look snake like!
        squares = [
            squareElements[0],
            squareElements[1],
            squareElements[2],
            squareElements[5],
            squareElements[8],
            squareElements[7],
            squareElements[6],
            squareElements[3],
            squareElements[4]
        ]

        // Initialize
        init();
    }

    return extend( main, {
        stop: stop
    });

})();


// All palettes from colour lovers!
var palettes = [
  ["CCF390", "E0E05A", "F7C41F", "FC930A", "FF003D"],
  ["EDE7BE", "BDEECD", "A7BFA0", "929073", "7C6146"],
  ["B1E6D1", "77B1A9", "3D7B80", "270A33", "451A3E"],
  ["452632", "91204D", "E4844A", "E8BF56", "E2F7CE"],
  ["5C323E", "A82743", "E15E32", "C0D23E", "E5F04C"],
  ["FF3366", "C74066", "8F4D65", "575A65", "1F6764"],
  ["343838", "005F6B", "008C9E", "00B4CC", "00DFFC"],
  ["6DA67A", "99A66D", "A9BD68", "B5CC6A", "C0DE5D"],
  ["280904", "680E34", "9A151A", "C21B12", "FC4B2A"]
]

loader( palettes[ Math.floor( Math.random() * palettes.length) ] );
