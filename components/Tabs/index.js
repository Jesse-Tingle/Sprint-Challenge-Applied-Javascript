// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


let tabSection = document.querySelector('.topics');
axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then((response) => {
        tabArray = response.data.topics;
        tabArray.forEach((e) => tabSection.appendChild(TabCreator(e)));
    })
    .catch((error) => {
        console.log(error);
    })

function TabCreator(data) {
    let tabDiv = document.createElement('div');
    tabDiv.classList.add('tab');
    tabDiv.textContent = data;

    return tabDiv;
}