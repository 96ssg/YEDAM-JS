// dom.js
console.log(document);
let show = document.getElementById('show');
console.log('show');
let head = show.getElementsByTagName('h3');
console.log(head);

let pTag = document.createElement('p'); //<p></p>
pTag.setAttribute('id', 'hello');
pTag.setAttribute('class', 'world');
let text = document.createTextNode(`Hello, World`);
pTag.appendChild(text);
console.log(pTag);
document.body.appendChild(pTag);


// 이름을 <li>이창호</li>
// id="list" 하위에 appendChild()
let listTag = document.createElement('li'); //<li></li>
let text1 = document.createTextNode('서승교');
listTag.appendChild(text1); //부모자식관계형성
console.log(listTag);
document.body.appendChild(listTag);

// list의 하위 요소에 추가
document.getElementById('list').appendChild(listTag);

let list = document.getElementById('list');
console.log(list.childNodes);

list.childNodes[1].remove();

list.childNodes