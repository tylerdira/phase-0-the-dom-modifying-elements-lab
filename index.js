// Write your code here!
// const ul = document.createElement("ul");
//       for (let i = 0; i < 3; i++) {
//         const li = document.createElement("li");
//         li.textContent = (i + 1).toString();
//         ul.append(li);
//       }

document.getElementById("main").remove()

const newHeader = document.createElement('h1')
newHeader.textContent = 'Tyler is the champion'
newHeader.id = 'victory'
document.body.append(newHeader)



// const main = document.getElementById("main")
// main.remove()