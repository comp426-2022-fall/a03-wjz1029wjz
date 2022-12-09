/*export function roll(sidesnum, dicenum, rollnum){
	const result = [];
	for(var i = 0; i < rollnum; i++){
		let cur = 0;
		for(var j = 0; j < dicenum; j++){
			cur += randdice(sidesnum);
		}
	result.push(cur);
	}

	const res = {
		sides: sidesnum,
		dice: dicenum,
		rolls: rollnum,
		results: result
	};
	return result;
}

function randdice(side){
	var result = Math.floor(Math.random() * side) + 1;
	return result;
}
*/

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
