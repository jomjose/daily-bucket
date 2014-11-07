var output = document.getElementById('output');

function assert( outcome, description ) {
	var li = document.createElement('li');
	li.className = outcome ? 'pass' : 'fail';
	li.appendChild( document.createTextNode( description ) );
	output.appendChild(li);
};

//
function add(num1, num2) {
	return num1 + num2;
}

var result = add(5, 20);
assert( result == 24, 'Checking the add function');

// OR
assert( add( 4, 20 ) == 24, 'Checking the add function');


//Closures
var someArray = [1,2,3,4,5],
	len = someArray.length,
	i = 0;
	
var count = 0;

for ( ; i < len; i++ ) {
	setTimeout(function() {
		assert( count++ === i, 'Checking the value of: ' + i );
	}, i * 300);
}

var f = 0;
var count2 = 0;


setTimeout(function() {
  for ( ; f < len; f++ ) (function(f) {
	  setTimeout(function() {
      console.log  (count2, f )
		  assert(  count2++ === f, 'Checking the value of: ' + f );
	  }, f * 300);   
  })(f);
}, (len+2)*300 );



