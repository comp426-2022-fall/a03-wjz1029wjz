export default function (sides, dice, rolls) {
	const results = []
	for (const j=0; j < rolls; j++){
		const sum=0
		for (const i=0; i < dice; i++){
			sum += Math.floor(Math.random() * sides) + 1
		}
		results.push(sum)
	}
	return results
}
