//1
function compareArrays(arr1, arr2) {
	return arr1.length === arr2.length && arr1.every((element, index) => element === arr2[index]);
}

//2
function getUsersNamesInAgeRange(people, gender) {
	return result = people
		.filter(people => people.gender === gender)
		.map(people => people.age)
		.reduce((average, age, index, array) => {
			return average + age / array.length;
		}, 0);
}