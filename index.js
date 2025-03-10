var customerName = 'bob';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  window.bestCustomer = 'not bob';
}

function overwriteBestCustomer(newName) {
  window.bestCustomer = newName;
}

const leastFavoriteCustomer = 'Alice';

function changeLeastFavoriteCustomer() {

  leastFavoriteCustomer = 'Bob';
}
