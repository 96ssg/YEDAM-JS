// object1.js
// 생성자
function Member(first_name, last_name, age, score) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.age = age;
    this.score = score;
    this.fullName = function () {
        return this.last_name + '' + this.first_name;
    }
    this.isAdult = function () {
        return this.age >= 20 ? true : false;
    }
}

var member1 = new Member('길동', '홍', 15, 80);
var member2 = new Member('익수', '황', 25, 90);
var member3 = new Member('찬호', '박', 30, 88);


var members = [member1, member2, member3, new Member('찬호', '김', 33, 99)];

console.log(member1.first_name, member1.last_name, member1.fullName());

var table = '<table border="1">';
table += '<thead>';
table += '<tr>';
table += '<th>순번</th>';
table += '<th>이름</th>'
table += '<th>점수</th>';
table += '<th>성인여부</th>'
table += '</tr>'
table += '</thead>'
table += '<tbody>'



/*for(i = 0; i < members.length; i++){
    table += '<tr>';
    table += '<td>'+ (i+1) +'</td>';
    table += '<td>'+ members[i]+'</td>';
    table += '</tr>'

}*/
var num = 0;
for (let member of members) {
    table += '<tr>';
    table += `<td>${member.fullName()}</td>`;
    table += `<td>${member.age}</td>`;
    table += `<td>${member.score}</td>`;
    if (member.isAdult()) {
        table += `<td>성인</td>`;
    } else {
        table += `<td>청소년</td>`;
    }
    table += '</tr>';
}

table += '</tbody>';
table += '</table>';
console.log(table);
document.write(table);