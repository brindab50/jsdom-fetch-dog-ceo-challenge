let breeds = []
document.addEventListener('DOMContentLoaded', function () {
  loadImages();
  loadBreeds()

  // declare a function that fetches all images and
  // and call that function in dom content loaded so 
  // web page populates when loaded 
});

// create a function that fetches images from api 
// converts that data to json and then iterates 
// through the images and creates a html element 
// in the dom and appends each one on to the dom 
// through a callback function
// call that call back function and give it a argument for each image

function loadImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
      .then(res=> res.json())
      .then(results => {
        results.message.forEach(image => addImage(image))
      });
  }
  
// create a callback function that takes a argument of a dogpic
// grabs the element/ container of the parent element of where you want to
// place the element 
// create an element of the image tag 
// set the newly created html element to 
// the argument (images)
// appendd that newly created html element to the 
// parent container declared 

  function addImage(dogPicUrl) {
    let container = document.querySelector('#dog-image-container');
    let newImageEl = document.createElement('img');
    newImageEl.src = dogPicUrl;
    container.appendChild(newImageEl);
  }
// create a function that fetches breeds from the url 
// and renders breeds to the page 

  function loadBreeds(){
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(result => {
        breeds = Object.keys(result.message)

    })
}

// make a fetch call to 
// convert the response to json
// use the method object.keys on the result.message
// which is the array returned from the fetch 
// to grab all the keys



function updateBreedList(breeds){
    let ul = document.querySelector('#dog-breeds')
    removeChildren(ul)
    breeds.forEach(breed => addBreed(breed))


}

// create a function that updates the breed list 
// give it a argument of breeds
// grab the dog breed element 
// use the removeChildern method 
// iterate through the breeds for each breed call the breed call back function 

function removeChildren(element) {
    let child = element.lastElementChild;
    while (child) {
      element.removeChild(child);
      child = element.lastElementChild;
    }
  }

  // create a function the removes childern and give it 
  // an atgument of childern 
  
  function selectBreedsStartingWith(letter) {
    updateBreedList(breeds.filter(breed => breed.startsWith(letter)));
  }
  
  function addBreedSelectListener() {
    let breedDropdown = document.querySelector('#breed-dropdown');
    breedDropdown.addEventListener('change', function (event) {
      selectBreedsStartingWith(event.target.value);
    });
  }
  
  function addBreed(breed) {
    let ul = document.querySelector('#dog-breeds');
    let li = document.createElement('li');
    li.innerText = breed;
    li.style.cursor = 'pointer';
    ul.appendChild(li);
    li.addEventListener('click', updateColor);
  }
  
  function updateColor(event) {
    event.target.style.color = 'palevioletred';
  }




