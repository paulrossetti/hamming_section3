//code from https://github.com/korgankd/hamming_section1/blob/master/hamming

var compute;

// this function computes the hamming distance between two strands of nucleotides
compute = function(first, second) {
	//declare our output variable 
	//default is identical strand,
	//i.e. distance = 0
	var count = 0;
	
	// calculate the actual hamming distance
	if (first.length != second.length) 
		throw new Error('DNA strands must be of equal length.');

	//charAt returns character in the strings specific index
	//charAt-- give me character at location
	for( i = 0; i < first.length; i++ ) {
		if (first.charAt(i) != second.charAt(i)) 
			count++;
	}
	//output of the hamming distance
	return count;
};

module.exports = {
	compute: compute
};  