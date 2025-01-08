document.addEventListener('DOMContentLoaded', () => {
  const ageModal = document.getElementById('age-verification-modal');
  const ageVerificationPass = document.getElementById('age-yes');
  const ageVerificationFail = document.getElementById('age-no');

  const cookieName = 'ageVerification';

  const ageVerification = document.cookie
    .split('; ')
    .some((cookie) => cookie.startsWith(`${cookieName}=true`));
  console.log(ageVerification);

  if (!ageVerification) {
    ageModal.style.display = 'flex';
  }

  ageVerificationPass.addEventListener('click', () => {
    document.cookie = `${cookieName}=true; path=/; max-age=${
      60 * 60 * 24 * 30
    }`;
    ageModal.style.display = 'none';
  });

  ageVerificationFail.addEventListener('click', () => {
    window.location.href = 'privacy.html';
  });
});
