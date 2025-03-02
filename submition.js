function calculateVAT(price) {
  if (isNaN(price) || price <= 0) {
    return "Invalid";
  }
  const vat = 7.5 / 100;
  return price * vat;
}

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
