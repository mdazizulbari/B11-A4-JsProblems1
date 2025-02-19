let price = 1500;
let productVat;
function calculateVAT(price) {
  const vat = 7.5 / 100;
  productVat = price * vat;
  return;
}
// calculateVAT(price);
// console.log(productVat);

let contactNumber = "01819234567";
let isValidContact;
function validContact(contact) {
  for (let i = 0; i < contact.length; i++) {
    if (isNaN(contact[i])) {
      isValidContact = false;
      return;
    }
  }
  let digits = contact.length;
  if (digits != 11) {
    isValidContact = false;
    return;
  }
  if (!contact.startsWith("01")) {
    isValidContact = false;
    return;
  }
  if (contact.includes(" ")) {
    isValidContact = false;
    return;
  }
  isValidContact = true;
}
// validContact(contactNumber);
// console.log(isValidContact);

let results = [48, 48, 50, 50, 100];
let willSuccessresult;
function willSuccess(marks) {
  let passed = 0;
  let failed = 0;
  for (let i = 0; i < marks.length; i++) {
    if (marks[i] >= 50) {
      passed++;
    } else failed++;
  }
  if (passed > failed) {
    willSuccessresult = true;
  } else willSuccessresult = false;

  // console.log(passed);
  // console.log(failed);
  return;
}
// willSuccess(results);
// console.log(willSuccessresult);

let persons = [
  { name: "Rahul", gender: "male", age: 28 },
  { name: "Joya", gender: "female", age: 21 },
];
let isValidProposal;
function validProposal(person1, person2) {
  if (person1.gender === person2.gender) {
    isValidProposal = false;
  } else {
    let ageDifference = Math.abs(person1.age - person2.age);
    if (ageDifference >= 7) {
      isValidProposal = false;
    } else {
      isValidProposal = true;
    }
  }
  return;
}
validProposal(persons[0], persons[1]);
// console.log(isValidProposal)

officeSleepTimes = [1000, 499, 519, 300];
let calculatedSleepTime;
function calculateSleepTime(times) {
  totalOfficeSleepTime = 0;
  for (let i = 0; i < officeSleepTimes.length; i++) {
    totalOfficeSleepTime += officeSleepTimes[i];
  }
  let hour = Math.floor(totalOfficeSleepTime / 3600);
  let min = Math.floor((totalOfficeSleepTime % 3600) / 60);
  let sec = totalOfficeSleepTime % 60;
  calculatedSleepTime = {
    hour: hour,
    minuite: min,
    second: sec,
  };
}
calculateSleepTime(officeSleepTimes);
console.log(calculatedSleepTime)