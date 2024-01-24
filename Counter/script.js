const add = document.getElementById("add");
const reset = document.getElementById("reset");
const remove = document.getElementById("remove");
const counter = document.getElementById("count");

let count = 0;

counter.innerHTML = count;

const setCounter = (nr) => {
    counter.innerHTML = nr;
}

const addNumber = () => {
    count++;
    setCounter(count);
}

const resetNumber = () => {
    count = 0;
    counter.innerHTML = 0;
}

const removeNumber = () => {
    count--;
    setCounter(count);
}

add.addEventListener("click", addNumber);
reset.addEventListener("click", resetNumber);
remove.addEventListener("click", removeNumber);