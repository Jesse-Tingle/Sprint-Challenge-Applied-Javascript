// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>



// let ax = axios.get('https://lambda-times-backend.herokuapp.com/topics');
// let git = axios.get('https://api.github.com/users/Jesse-Tingle')
// console.log(ax);
// console.log(git);

// let tabSection = document.querySelector('.tabs');
// let tabArray = [];
// axios.get('https://lambda-times-backend.herokuapp.com/topics')
//     .then(topics => {
//         tabArray = topics.data.map(topic => topic)
//     .catch(error => {
//         console.error(error);
//     });
//     })

// function TabCreator() {
//     let tabDiv = document.createElement('div');
//     tabDiv.classList.add('tab');

//     return tabDiv;
// }

// console.log(TabCreator());