/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorFunctionsComponent = (element) => {
    const getId = idGenerator();

    const button = document.createElement('button');
    button.innerText = 'Click me';
    element.append(button);

    const renderValue = () => {
        const { value } = getId.next();
        button.innerText = `Click ${value}`;
    }

    button.addEventListener('click', renderValue);
    /*const myGenerator = myFisrtGeneratorFunction();

    console.log(myGenerator.next());
    console.log(myGenerator.next());
    console.log(myGenerator.next());
    console.log(myGenerator.next());
    console.log(myGenerator.next());
    console.log(myGenerator.next());*/
}

function* idGenerator() {
    let id = 0;
    while(true) {
        yield ++id;
    }
}

function* myFisrtGeneratorFunction() {
    yield 'Primer valor';
    yield 'Segundo valor';
    yield 'Tercer valor';
    yield 'Cuarto valor';
    return 'Ya no hay valores';
}