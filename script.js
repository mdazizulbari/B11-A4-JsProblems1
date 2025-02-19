let productVat;
function calculateVAT(price) {
  const vat = 7.5 / 100;
  productVat = price * vat;
  return;
}
let price = 1500;
calculateVAT(price);
console.log(productVat);

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

let willheSuccess;
function willSuccess(marks) {}
let results = [55, 75, 41, 33, 0, 87, 91, 30];
willSuccess(results)