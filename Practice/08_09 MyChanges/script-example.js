/**
 * Practice: Pass values between functions
 *
 * Create two functions:
 * - Main function
 *  - Creates new <article> element
 *  - Populates <article> with content (see const content below)
 *  - Returns <article> element to where function is called
 * - Helper image function
 *  - Creates new <figure> element
 *  - Adds <img> markup pointing to frogpack.image
 *  - Adds <figcaption> element with image description
 *  - Returns <figure> element to where function is called
 */

//Object 
const myObj = {
  company: "Amazon",
  area: "Sales",
  employees: 10000,
  image: "../../assets/images/amazonlogo.png",
  description: "From our home to yours!",
}

// Baseline HTML output
const content = `
    <h1 class="company">${myObj.company}</h1>
    <ul class="company__features">
      <li class="packprop company">Company: <span> ${
        myObj.company
      }<li</span></li>
      <li class="packprop area">Area: <span> ${
        myObj.area
      }</span></li>
      <li class="packprop employees">Quantity of employees: <span> ${
        myObj.employees
      }
    </ul>  
`;

/**
 * addFigure function
 * - Receives dataObj
 * - Creates <figure> <img> <figcaption>
 * - Returns <figure>
 */
const addFigure = (obj) => {
  let newFigure = document.createElement("figure");
  let newImg = document.createElement("img");
  newImg.setAttribute("src", obj.image);
  newImg.setAttribute("alt", "");
  let newDesc = document.createElement("figcaption");
  newDesc.innerText = obj.description;
  newFigure.append(newImg, newDesc);
  return newFigure;
}


/**
 * createArticle function
 * - Receives backpack object
 * - Creates <article>
 * - Calls addFigure()
 * - Returns <article>
 */

const addArticle = () => {
let newArticle = document.createElement("article");
newArticle.innerHTML = content;
newArticle.prepend(addFigure (myObj));
return newArticle;
}

document.querySelector('main').append(addArticle(myObj))
