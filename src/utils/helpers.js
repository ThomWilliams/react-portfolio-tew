export function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export function checkFirstName(input) {
  const firstName = /^[A-Za-z]\w{2,14}$/;
  if (input.match(firstName)) {
    return true;
  }
  return alert("please complete all required fields");
}

export function checkLastName(input) {
  const lastName = /^[A-Za-z]\w{2,14}$/;
  if (input.match(lastName)) {
    return true;
  }
  return alert("please complete all required fields");
}

export function checkMessage(input) {
  const message = /^[A-Za-z]\w{2,200}$/;
  if (input.match(message)) {
    return true;
  }
  return alert("please complete all required fields");
}
