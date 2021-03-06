const modhash = window.reddit.modhash;
var sec = 0, index = 0;
setInterval(() => console.log("Drawing in " + (sec--) + " seconds"), 1e3);
const draw = seconds => {
    index++
    sec = seconds = Math.ceil(seconds)
    setTimeout(() => {
        const x = index % 66;
        const y = Math.floor(index / 66);
        const logoColors =
        [[0,0,0,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,0,0,0],
		[0,0,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,0,0],
		[0,0,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,0,0],
		[0,0,0,0,6,8,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,6,6,0,0,6,8,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,8,6,0,0,0,0],
		[0,0,0,0,6,8,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,6,8,8,8,6,6,8,8,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,8,6,0,0,0,0],
		[0,0,0,6,8,8,8,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,6,6,0,6,6,8,8,8,8,8,8,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,8,8,8,6,0,0,0],
		[0,0,0,6,8,8,8,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,8,8,8,8,8,8,8,8,8,8,8,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,8,8,8,6,0,0,0],
		[0,0,0,6,8,8,8,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,8,8,6,6,6,8,8,8,8,8,8,8,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,8,8,8,6,0,0,0],
		[0,0,6,8,8,8,8,8,6,0,0,0,0,0,0,0,0,0,0,0,0,0,6,8,6,0,0,0,6,8,8,8,8,8,8,8,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,8,8,8,8,8,6,0,0],
		[0,0,6,8,8,8,8,8,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,6,6,8,8,8,8,8,8,8,8,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,8,8,8,8,8,6,0,0],
		[0,0,6,8,8,8,8,8,8,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,8,8,8,6,8,8,8,8,8,8,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,8,8,8,8,8,8,6,0,0],
		[0,6,8,8,8,8,8,8,8,8,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,6,6,0,6,8,8,8,8,8,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,8,8,8,8,8,8,8,8,6,0],
		[0,6,8,8,8,8,8,8,8,8,8,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,8,8,8,8,8,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,8,8,8,8,8,8,8,8,8,6,0],
		[0,6,8,8,8,8,8,8,8,8,8,8,6,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,8,6,8,6,8,6,8,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,6,8,8,8,8,8,8,8,8,8,8,6,0],
		[0,6,8,8,8,8,8,8,8,8,8,8,8,8,6,6,6,0,0,0,0,0,0,0,0,0,0,0,6,8,6,8,6,8,6,8,6,6,0,0,0,0,0,0,0,0,0,0,0,6,6,6,8,8,8,8,8,8,8,8,8,8,8,8,6,0],
		[6,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,6,6,6,0,0,0,0,0,0,0,6,8,6,8,6,8,6,8,6,8,6,6,0,0,0,0,0,0,0,6,6,6,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,6],
		[6,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,6,0,0,0,0,0,0,6,6,8,6,8,6,8,6,8,6,8,6,0,0,0,0,0,0,6,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,6],
		[6,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,6,0,0,0,0,6,6,8,6,8,6,8,6,8,6,8,6,8,6,0,0,0,0,6,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,6],
		[6,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,6,0,0,0,6,8,6,8,6,8,6,8,6,8,6,8,6,6,0,0,0,6,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,6],
		[6,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,6,0,6,8,6,8,6,8,6,8,6,8,6,8,6,8,6,6,0,6,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,6],
		[0,6,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,6,8,6,8,6,8,6,8,6,8,6,8,6,8,6,8,6,6,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,6,0],
		[0,6,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,6,0],
		[0,0,6,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,6,0,0],
		[0,0,6,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,6,0,0],
		[0,0,6,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,6,0,0],
		[0,0,0,6,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,6,0,0,0],
		[0,0,0,6,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,6,0,0,0],
		[0,0,0,0,6,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,6,0,0,0,0],
		[0,0,0,0,6,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,6,0,0,0,0],
		[0,0,0,0,0,6,8,8,8,8,8,8,8,8,8,8,8,8,8,8,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,8,8,8,8,8,8,8,8,8,8,8,8,8,8,6,0,0,0,0,0],
		[0,0,0,0,0,0,6,8,8,8,8,8,8,8,8,8,8,8,8,8,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,8,8,8,8,8,8,8,8,8,8,8,8,8,6,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,6,8,8,8,8,8,8,8,8,8,8,8,8,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,8,8,8,8,8,8,8,8,8,8,8,8,6,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,6,8,8,8,8,8,8,8,8,8,8,8,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,8,8,8,8,8,8,8,8,8,8,8,6,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,6,08,8,8,8,8,8,8,8,8,,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,8,8,8,8,8,8,8,8,8,8,6,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,6,6,6,8,8,8,8,8,6,6,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,6,6,8,8,8,8,8,6,6,6,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,6,6,6,6,6,0,0,6,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,6,0,0,6,6,6,6,6,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,8,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,8,8,8,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,8,8,8,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,8,8,8,8,8,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,8,8,8,8,8,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,8,8,8,8,8,8,8,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,8,8,8,8,8,8,8,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,8,8,8,8,8,8,8,8,6,3,0,0,0,0,0,0,0,0,0,0,0,0,3,6,8,8,8,8,8,8,8,8,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,6,8,8,8,8,8,8,8,6,0,6,3,3,0,0,0,0,0,0,0,0,3,3,6,0,6,8,8,8,8,8,8,8,6,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0],
		[0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,0,0,6,8,8,8,8,8,6,0,0,6,8,8,3,3,3,3,3,3,3,3,8,8,6,0,0,6,8,8,8,8,8,6,0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0],
		[0,0,0,0,0,0,3,5,3,0,0,0,0,0,0,0,0,6,8,8,8,6,6,0,0,0,6,8,8,8,8,8,8,8,8,8,8,8,8,6,0,0,0,6,6,8,8,8,6,0,0,0,0,0,0,0,0,3,5,3,0,0,0,0,0,0],
		[0,0,0,3,3,3,5,5,5,3,0,0,0,0,0,0,6,8,8,8,6,0,0,0,0,6,8,8,8,8,8,8,8,8,8,8,8,8,8,8,6,0,0,0,0,6,8,8,8,6,0,0,0,0,0,0,3,5,5,0,3,3,3,0,0,0],
		[0,0,0,0,3,0,0,5,5,5,3,0,3,0,0,0,6,8,8,6,0,0,0,0,0,6,8,8,8,8,8,8,8,8,8,8,8,8,8,8,6,0,0,0,0,0,6,8,8,6,0,0,0,3,0,3,5,5,0,0,0,3,0,0,0,0],
		[0,0,0,0,0,3,0,0,5,5,5,3,5,3,0,0,6,8,6,0,0,0,0,0,6,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,6,0,0,0,0,0,6,8,6,0,0,3,5,3,5,5,0,0,0,3,0,0,0,0,0],
		[0,0,0,0,0,0,3,0,0,5,3,5,5,5,6,6,8,8,6,0,0,0,0,0,6,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,6,0,0,0,0,0,6,8,8,6,6,5,5,5,3,0,0,0,3,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,3,0,3,0,0,5,6,8,8,8,6,0,6,0,0,0,6,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,6,0,0,0,6,0,6,8,8,8,6,5,0,0,3,0,3,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,3,0,3,0,6,8,8,8,6,3,6,0,0,0,0,6,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,6,0,0,0,0,6,3,6,8,8,8,6,0,3,0,3,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,6,8,8,8,6,5,5,3,3,0,0,6,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,6,0,0,3,3,5,5,6,8,8,8,6,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,6,8,6,0,5,5,5,5,3,3,6,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,6,3,3,5,5,5,0,0,6,8,6,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,0,5,5,5,5,3,3,3,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,3,3,3,5,5,5,5,0,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,5,5,5,5,5,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,5,5,5,5,5,0,0,0,0,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,0,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,0,0,0,0,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,0,0,0,0,0,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];

        const logoColor = logoColors[y][x];
        const xChange = logoColor != logoColors[y][x - 1] || logoColor != logoColors[y][x + 1];
        const yChange = (logoColors[y - 1] && logoColor != logoColors[y - 1][x]) || (logoColors[y + 1] && logoColor != logoColors[y + 1][x]);
        if  (!xChange && !yChange) {
            return draw(0);
        }
        const ax = 201 - x;
        const ay = y + 039;

        $.get("https://www.reddit.com/api/place/pixel.json?x=" + ax + "&y=" + ay)
        .then(res => {
 
            if (res.color == logoColor) {
                console.log("Skipping " + (ax + ", " + ay) + " because it's already correct");
                return draw(1);
            }
            console.log("Drawing at " + ax + ", " + ay + " (https://www.reddit.com/r/place/#x=" + ax + "&y=" + ay + ")");
            $.ajax({ url: "https://www.reddit.com/api/place/draw.json", type: "POST",
                headers: { "x-modhash": modhash }, data: { x: ax, y: ay, color: logoColor }
            })
            .done(data => draw(data.wait_seconds))
            .error(data => draw(data.responseJSON.wait_seconds));
        });
    }, seconds * 1000);
}
draw(0);
