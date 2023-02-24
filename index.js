function receivesAFunction(callback) { 
	callback(); 
}

function returnsANamedFunction() {
	return function b () {}
}

function returnsAnAnonymousFunction () {
	return () => {
		
	} 
}