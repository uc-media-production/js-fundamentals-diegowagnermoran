/* Write yor code here */

// var, const, key
// one-word, -,_, camelCase
//123name
// first name =
const person = {
  firstName: 'Diego',
  lastName: 'Wagner',
  age: '22',
  major: 'Media Production'

}

const favoriteBands = [ 
'100 gecs', 
'M83', 
'Sophie']

function  getFullName(person) 
{
  return person.firstName + ' ' + person.lastName
}

function printBiography (person, bands) {
  console.log('My name is ' + getFullName(person) + ' ' + person.lastName + '. I am ' + person.age + 'years old. I am studying ' + person.major + 'at the University of Cincinnati. My favorite musical acts are:')
  // bands.forEach (function(band))
  bands.forEach(function(band) {
    console.log(band)
  })
}


/*document.addEventListener('DOMContentLoaded', function() {

// const button = document.querySelector('button')

// button.addEventListener('click', function ()
// {alertMe()})

  // console.log ('100 gecs')
  // const fullName = getFullName(person)

  console.log(printBiography(person, favoriteBands))

  // Execute your functions here
  // ex: printBiography(person, bands)
})
*/
