function getName1(name) {
    return name;
}

const getName2 = function (name) {
    return name;
}

const getName3 = name => {
    return name;
}

console.log(getName1("Andrey"));
console.log(getName2("Andrey"));
console.log(getName3("Andrey"));