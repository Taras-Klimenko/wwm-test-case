document.addEventListener('DOMContentLoaded', () => {
  const getCookie = (name) => {
    return document.cookie
      .split('; ')
      .some((cookie) => cookie.startsWith(`${name}=`));
  };

  const setCookie = (name, value, days) => {
    const expires = new Date(
      Date.now() + days * 24 * 60 * 60 * 1000
    ).toUTCString();
    document.cookie = `${name}=${value}; path=/; expires=${expires}`;
  };

  const ageModal = document.getElementById('age-verification-modal');
  const ageVerificationPass = document.getElementById('age-yes');
  const ageVerificationFail = document.getElementById('age-no');

  const notification = document.getElementById('cookie-notification');
  const overlay = document.getElementById('cookie-overlay');
  const rejectButton = document.getElementById('reject-cookies');
  const allowNecessaryButton = document.getElementById('allow-necessary');
  const allowAllButton = document.getElementById('allow-all');

  const showCookieNotification = () => {
    const cookieConsent = getCookie('cookieConsent');

    if (!cookieConsent) {
      overlay.classList.add('active');
      notification.classList.add('active');
    }

    const closeNotification = () => {
      overlay.classList.remove('active');
      notification.classList.remove('active');
    };

    rejectButton.addEventListener('click', () => {
      setCookie('cookieConsent', 'reject', 30);
      closeNotification();
    });

    allowNecessaryButton.addEventListener('click', () => {
      setCookie('cookieConsent', 'necessary', 30);
      closeNotification();
    });

    allowAllButton.addEventListener('click', () => {
      setCookie('cookieConsent', 'all', 30);
      closeNotification();
    });
  };

  const ageVerification = getCookie('ageVerification');

  if (!ageVerification) {
    ageModal.style.display = 'flex';

    ageVerificationPass.addEventListener('click', () => {
      setCookie('ageVerification', 'true', 30);
      ageModal.style.display = 'none';
      showCookieNotification();
    });

    ageVerificationFail.addEventListener('click', () => {
      window.location.href = './privacy.html';
    });
  } else {
    showCookieNotification();
  }
});
