const square = document.querySelectorAll(".square");
const gold = document.querySelector(".gold");
const blue = document.querySelector(".blue");
const lime = document.querySelector(".lime");
const p = document.querySelector("p");
const add = document.querySelector(".add");
const remove = document.querySelector(".remove");
const toggle = document.querySelector(".toggle");
const divTask = document.querySelector(".divTask");
const taskTwo = document.querySelector(".tasktwo");

// Delegacja zdarzeń
const div = document.createElement("div");
div.classList.add("square", "purple");
gold.append(div);

const test = (e) => {
	if (e.target.matches(".square2")) {
		console.log("test");
	}
};

const testTwo = (e) => {
	if (e.target.matches(".square3")) {
		console.log(
			"%c Klikamy na niebieski kwadrat",
			"color: blue; text-transform: uppercase;"
		);
	}
};

lime.addEventListener("click", test);
lime.addEventListener("click", testTwo);

// Przyciski
const addClass = () => {
	divTask.classList.add("test");
};
const removeClass = () => {
	divTask.classList.remove("test");
};
const toggleClass = () => {
	divTask.classList.toggle("test");
};

// Stylowanie
p.style.fontSize = "30px";
p.style.color = "gold";
p.style.padding = "30px 20px";

// Dodawanie, usuwanie i przełącznik na przyciskach
add.addEventListener("click", addClass);
remove.addEventListener("click", removeClass);
toggle.addEventListener("click", toggleClass);

// Zadanie 2
const ul = document.createElement("ul");
document.body.append(ul);
const numbers = 11;

taskTwo.append(ul);

for (let i = 1; i < numbers; i++) {
	const liTask = document.createElement("li");
	liTask.textContent = i;
	ul.append(liTask);
}

lastli = document.querySelector("li:last-child");
lastli.textContent = "Jestem ostatnim elementem";

lastli.style.backgroundColor = "gold";
lastli.style.padding = "20px 40px";
lastli.style.fontSize = "34px";
lastli.style.width = "470px";
lastli.style.hight = "50px";
lastli.style.textAlign = "center";

// Zadanie 3
const hi = document.querySelector(".hi");
const change = document.querySelector(".change");
const color = document.querySelector(".color");
const squarethree = document.querySelector(".squarethree");
const threediv = document.querySelector(".threediv");
const returnTask = document.querySelector(".return");

const hiTask = () => {
	threediv.textContent = "Cześć";
};
const changeTask = () => {
	threediv.textContent = "Zmieniłem tekst";
};

const returnT = () => {
	threediv.textContent = "Tekst będzie zmieniał się";
	squarethree.style.backgroundColor = "white";
};

const colorT = () => {
	squarethree.style.backgroundColor = "blue";
};
change.addEventListener("click", changeTask);
returnTask.addEventListener("click", returnT);
color.addEventListener("click", colorT);
hi.addEventListener("click", hiTask);
