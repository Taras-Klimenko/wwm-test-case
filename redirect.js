const ageVerification = document.cookie
  .split('; ')
  .some((cookie) => cookie.startsWith('ageVerification=true'));

if (!ageVerification) {
  window.location.href = 'index.html';
}
