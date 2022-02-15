// makeTable.js

var members = ["이효림","장예빈","윤희철","이웅재"];

var table = '<table border="1">';
table += '<thead>';
table += '<tr>';
table += '<th>순번</th>';
table += '<th>이름</th>'
table += '<th>버튼</th>';
table += '</tr>'
table += '</thead>'
table += '<tbody>'



for(i = 0; i < members.length; i++){
    table += '<tr>';
    table += '<td>'+ (i+1) +'</td>';
    table += '<td>'+ members[i]+'</td>';
    table += '</tr>'

}
var num = 0;
for(let member of members){
    if(num%2 == 0){
        table += '<tr>';
    }else{
        table += '<tr style="background-color: yellow">';
    }
    table += '<td>'+ (++num) +'</td>';
    table += '<td>'+ member+'</td>';
    table += '<td><button>삭제</button></td>';
    table += '</tr>'
}
var nam = 0; 
for(let memb of members){
    table += `<tr>`;
    table += `<td> ${++nam} </td>`;
    table += `<td> ${memb} </td>`;
    table += `</tr>`;
}
table += '</tbody>'
table += '</table>'
console.log(table);
document.write(table);