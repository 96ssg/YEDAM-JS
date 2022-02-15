// gugudan.js

/*document.write('<table>');
var num = 5;
for(let i = 1; i <= 9; i++){
    document.write('<tr class="row">');
    document.write(`<td>${num}</td><td>X</td><td>${i}</td><td> = ${num*i}</td>`);
    document.write('</tr>');

}

document.write('</table>');
*/


//반복문 : 반복문을 사용.


for (let b = 2; b <= 9; b++) {
    document.write('<div>');
    document.write(`<p><h3>${b}단</h3></p>`);
    for (let c = 1; c <= 9; c++) {
        document.write(`<p>${b}X${c}=${b*c}</p>`);
    }
    document.write('</div>');
}

var start_nums = [2,3,4,5,6,7,8,9];
var end_nums = [1,2,3,4,5,6,7,8,9];

for(let start_n of start_nums){
    document.write('<div>');
    document.write(`<p><h3>${start_n}X</h3></p>`);
    for(let end_n of end_nums){
        document.write(`<p>${start_n} X ${end_n} = ${start_n*end_n}</p> `);
    }
    document.write('</div>');
}
