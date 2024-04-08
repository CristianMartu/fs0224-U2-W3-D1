class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName
    this.lastname = _lastName
    this.age = _age
    this.location = _location
  }

  static differenceAge(user, user2) {
    if (user.age > user2.age) {
      return console.log(
        user.firstName + ' è più vecchio di ' + user2.firstName
      )
    } else if (user.age < user2.age) {
      return console.log(
        user2.firstName + ' è più vecchio di ' + user.firstName
      )
    } else {
      return console.log(
        user.firstName + ' ha la stessa età di ' + user2.firstName
      )
    }
  }
}

const me = new User('Cristian', 'Martucci', 23, 'Reggio Emilia')
const person = new User('Mario', 'Rossi', 25, 'Milano')
const person2 = new User('Federico', 'Verdi', 20, 'Torino')
const person3 = new User('Luca', 'Bianchi', 20, 'Torino')

User.differenceAge(person, me)
User.differenceAge(person2, person)
User.differenceAge(person3, person2)

const form = document.getElementById('myForm')
const posList = document.querySelector('section ol')

class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName
    this.ownerName = _ownerName
    this.species = _species
    this.breed = _breed
  }

  static showPet(pet) {
    return `Name: ${pet.petName}  owner: ${pet.ownerName}  species: ${pet.species}  breed: ${pet.breed}`
  }

  static sameName(pet, pet2) {
    return console.log(pet.petName === pet2.petName)
  }
}

const listPet = []
listPet.push(new Pet('Argos', 'Rocco', 'Cane', 'Labrador'))

const handleSubmit = (event) => {
  event.preventDefault()

  const inputPetName = document.getElementById('petName').value
  const inputOwnerName = document.getElementById('ownerName').value
  const inputSpecies = document.getElementById('species').value
  const inputBreed = document.getElementById('breed').value

  const pet = new Pet(inputPetName, inputOwnerName, inputSpecies, inputBreed)

  const li = document.createElement('li')
  li.innerText = Pet.showPet(pet)
  posList.appendChild(li)

  listPet.push(pet)
  console.log(listPet)
  form.reset()
}

form.addEventListener('submit', handleSubmit)

const checkName = (n1, n2) => {
  Pet.sameName(listPet[n1], listPet[n2])
}
