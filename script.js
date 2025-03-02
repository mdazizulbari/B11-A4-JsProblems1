function calculateVAT(price) {
  if (isNaN(price) || price <= 0) {
    return "Invalid";
  }
  const vat = 7.5 / 100;
  return price * vat;
}
// console.log(calculateVAT(1500))

function validContact(contact) {
  if (typeof contact !== "string") {
    return "Invalid";
  }
  for (let i = 0; i < contact.length; i++) {
    if (contact[i] === " " || isNaN(Number(contact[i]))) {
      return false;
    }
  }
  if (contact.length != 11 || !contact.startsWith("01")) {
    return false;
  }
  return true;
}
// console.log(validContact("01819234567"));
// console.log(validContact("0181923 4567"));
// console.log(validContact("018192345679"));
// console.log(validContact(["01987654321"]));
// console.log(validContact("01345678900"));
// console.log(validContact("02145678900"));
// console.log(validContact(true));



function willSuccess(marks) {
  if (!Array.isArray(marks)) {
    return "Invalid";
  }
  let passed = 0,
    failed = 0;
  for (let i = 0; i < marks.length; i++) {
    if (marks[i] >= 50) {
      passed++;
    } else failed++;
  }
  return passed > failed;
}
// console.log(willSuccess([60, 70, 80, 40, 30]));
// console.log(willSuccess([48, 48, 92, 100]));
// console.log(willSuccess([48, 48, 50, 50, 100]));
// console.log(willSuccess([]));
// console.log(willSuccess([90]));
// console.log(willSuccess([90, 99, 87, 48, 34, 49]));
// console.log(willSuccess("100 , 100"));
// console.log(willSuccess(90));



function validProposal(person1, person2) {
  if (typeof person1 !== "object" || typeof person2 !== "object") {
    return "Invalid";
  }
  if (person1.gender === person2.gender) {
    return false;
  }
  let ageDifference = Math.abs(person1.age - person2.age);
  return ageDifference <= 7;
}
// console.log(
//   validProposal(
//     { name: "Rahul", gender: "male", age: 28 },
//     { name: "Joya", gender: "female", age: 21 }
//   )
// );
// console.log(
//   validProposal(
//     { name: "milon", gender: "male", age: 20 },
//     { name: "sumi", gender: "female", age: 25 }
//   )
// );
// console.log(
//   validProposal(
//     { name: "shuvo", gender: "male", age: 20 },
//     { name: "joy", gender: "male", age: 25 }
//   )
// );
// console.log(
//   validProposal(
//     { name: "toya", gender: "female", age: 20 },
//     { name: "kader", gender: "male", age: 25 }
//   )
// );
// console.log(
//   validProposal(
//     { name: "toya", gender: "female", age: 24 },
//     { name: "bjoy", gender: "male", age: 32 }
//   )
// );
// console.log(validProposal("Mizan", { name: "mitu", gender: "male", age: 32 }));
// console.log(validProposal({ name: "mitu", gender: "male", age: 32 }, "Mizan"));



function calculateSleepTime(times) {
  let totalOfficeSleepTime = 0;
  for (let i = 0; i < times.length; i++) {
    if (typeof times[i] !== "number" || isNaN(times[i])) {
      return "Invalid";
    }
    totalOfficeSleepTime += times[i];
  }
  let hour = Math.floor(totalOfficeSleepTime / 3600);
  let min = Math.floor((totalOfficeSleepTime % 3600) / 60);
  let sec = totalOfficeSleepTime % 60;
  return {
    hour: hour,
    minute: min,
    second: sec,
  };
}
// console.log(calculateSleepTime([1000, 499, 519, 300]));
// console.log(calculateSleepTime([1000, 2000, 725]));
// console.log(calculateSleepTime([100, 3800]));
// console.log(calculateSleepTime([]));
// console.log(calculateSleepTime([5600]));
// console.log(calculateSleepTime([100, 3800, "90"]));
