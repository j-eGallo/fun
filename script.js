// Tableau de citations
let citations = [
    ["Lou est machiavellique", "Jean-Emmanuel Gallo"],
    ["Pratiquer la musculation nous rapproche de Dieu", "Marc-Aurèle"],
    ["Je te vends ma formation 5000€ pour être riche","Christ ou bien Vanessa"],
    ["J'ai besoin d'attention","Lou"],
    ["Je fais des incantations sapphiques","Clara, voisine de Jean-Emmanuel"]
  ];

let ncitation = document.getElementById('citation')


let btn = document.getElementById('nouveau');

btn.addEventListener('click', () => {
    newCitation();
})

function newCitation() {
    return ncitation.innerHTML = citations[Math.floor(Math.random() * citations.length)];
}

