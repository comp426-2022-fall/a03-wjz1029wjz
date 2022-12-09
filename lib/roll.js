export default function (sides, dice, rolls) {
	const results = []
	for (var j=0; j < rolls; j++){
		var sum=0
		for (var i=0; i < dice; i++){
			sum = sum + Math.floor(Math.random() * sides) + 1
		}
		results.push(sum)
	}
	return results
}
