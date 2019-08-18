// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {
    var div = document.createElement('div');
    div.classList.add('header');

    let span = document.createElement('span');
    span.classList.add('date');
    span.textContent = 'SMARCH 28, 2019';

    return div
}

Header();