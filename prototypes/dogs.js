let xhr = new XMLHttpRequest();
let instances = [];    


let Breed = function (name, varieties) {
  this.name = name;
  this.varieties = varieties;
  this.img;
}

Breed.prototype.getPhoto = function() {
  xhr.open('GET',  `https://dog.ceo/api/breed/${this.name}/images/random`, false);
  xhr.onreadystatechange = function() {
    console.log(JSON.parse(this.responseText).message);
  };
  xhr.send();
};

xhr.open('GET', 'https://dog.ceo/api/breeds/list/all', true);

xhr.onreadystatechange = function() {
  let breeds = JSON.parse(this.responseText).message;
  if (this.readyState == 4 && this.status == 200) {
    for (let breed in breeds) {
      instances.push(new Breed(breed, breeds[breed]));
    }
    console.log(instances);
    instances[Math.floor(Math.random()*(instances.length))].getPhoto();
  }
};

xhr.send();
