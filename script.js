function mountainLongest(mountain) {
	const arrLength = mountain.length;
	//array duplication
	const mountainSecond = mountain.map(row => row.slice());

	console.log(mountainSecond);

	//Algorithm starts from the second last level of the mountain
	for (let i = arrLength - 2; i >= 0; i--) {
		console.log(mountainSecond[i]);
		//We check each element of the row and see what options it can inherit
		//(look at the next row, each element of the row can inherit one of two elements in the next row)
		//We sum up the element from the current row with the elements that it can inherit and from the two sums we select the larger one and put it in place of this element
		//And so we move further along the row and move to the row above and wish the same thing
		//As a result at the top of the mountain we get the number that inherited the largest sums from all options
		for (let j = 0; j < mountain[i].length; j++) {
			mountainSecond[i][j] += Math.max(mountainSecond[i + 1][j], mountainSecond[i + 1][j + 1] || 0);
		}
	}

	return mountainSecond[0][0];
}

const mountain = [[6], [7, 10], [12, 11, 9], [90, 25, 13, 14]];
console.log(mountainLongest(mountain));
