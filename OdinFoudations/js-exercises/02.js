const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

const first = document.createElement("p");
first.classList.add("first");
first.style.color = "red";
first.textContent = "Hey I'm red!";
container.appendChild(first);

const second = document.createElement("h3");
second.classList.add("second");
second.style.color = "blue";
second.textContent = "I'm a blue second!";
container.appendChild(second);

const last = document.createElement("div");
last.classList.add("last");
last.style.backgroundColor = "pink";
last.style.borderColor = "black";
const last2 = document.createElement("h1");
last2.classList.add("last2");
last2.textContent = "i'm in a div";
last.appendChild(last2);
const last3 = document.createElement("p");
last3.classList.add("last3");
last3.textContent = "ME TOO!";
last.appendChild(last3);
container.appendChild(last);