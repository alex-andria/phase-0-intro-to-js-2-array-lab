// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    return cats.push(name);
}

function destructivelyPrependCat(name){
    return cats.unshift(name);
}

function destructivelyRemoveLastCat(){
    return cats.pop();
}

function destructivelyRemoveFirstCat(){
    return cats.shift();    
}

function appendCat(name){
    return [...cats, name];
}

const prependCat = (name) => [name, ...cats];

const removeLastCat = () => cats.slice(0, cats.length - 1);

const removeFirstCat = () => cats.slice(1);