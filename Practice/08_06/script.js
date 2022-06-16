/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */

let person1 = {
    name: "Fabio",
    age: 32,
}

function user (person1) {
    let newarticle = `
    <main>
        <div> Name: ${person1.name}</div>
        <div> Age: ${person1.age} years old</div>    
    </main>
    `
    return newarticle
};

console.log(user(person1))

let main = document.querySelector("main")
main.append(user(person1))



const user2 = (person1) => {
    person1.name = "Joao";
    let newarticle =document.createElement("article")
    
    newarticle.innerHTML=`
    <ul>
        <div> Name: ${person1.name}</div>
        <div> Age: ${person1.age} years old</div>    
    </ul>
    `
    return newarticle
};

console.log(user2(person1))

main.append(user2(person1))