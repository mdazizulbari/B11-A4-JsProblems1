let productVat;
function calculateVAT(price) {
  const vat = 7.5 / 100;
  productVat = price * vat;
  return;
}
let price = 1500;
calculateVAT(price);
// console.log(productVat);

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
let contactNumber = "01819234567";
validContact(contactNumber);
// console.log(isValidContact);

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
let results = [48, 48, 50, 50, 100];
willSuccess(results);
// console.log(willSuccessresult);
