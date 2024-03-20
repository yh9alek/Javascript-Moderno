/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorFunctionsComponent = (element) => {
    const myGenerator = myFisrtGeneratorFunction();

    console.log(myGenerator.next());
    console.log(myGenerator.next());
    console.log(myGenerator.next());
    console.log(myGenerator.next());
    console.log(myGenerator.next());
    console.log(myGenerator.next());
}

function* myFisrtGeneratorFunction() {
    yield 'Primer valor';
    yield 'Segundo valor';
    yield 'Tercer valor';
    yield 'Cuarto valor';
    return 'Ya no hay valores';
}