(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.primary-nav');
  const form = document.querySelector('#contact-form');
  const status = document.querySelector('#form-status');
  const year = document.querySelector('#year');

  // Configure one of these before publishing:
  // 1) CONTACT_EMAIL = 'hello@yourdomain.ae' to open a pre-filled email draft.
  // 2) FORM_ENDPOINT = 'https://your-form-service-endpoint' to POST JSON to your form provider.
  const CONTACT_EMAIL = '';
  const FORM_ENDPOINT = '';

  year.textContent = new Date().getFullYear();

  menuButton?.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
    nav.classList.toggle('open', !isOpen);
  });

  nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.setAttribute('aria-label', 'Open navigation');
  }));

  form?.addEventListener('submit', async (event) => {
    event.preventDefault();
    status.textContent = '';
    if (!form.reportValidity()) return;
    const data = Object.fromEntries(new FormData(form).entries());
    const subject = `CoreBridge website enquiry – ${data.interest}`;
    const body = [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Company: ${data.company || 'Not provided'}`,
      `Area of interest: ${data.interest}`,
      '',
      'Challenge:',
      data.message
    ].join('\n');

    if (FORM_ENDPOINT) {
      const submitButton = form.querySelector('button[type="submit"]');
      submitButton.disabled = true;
      submitButton.textContent = 'Sending…';
      try {
        const response = await fetch(FORM_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify(data)
        });
        if (!response.ok) throw new Error(`Request failed (${response.status})`);
        status.textContent = 'Thank you. Your enquiry has been sent.';
        form.reset();
      } catch (error) {
        status.textContent = 'The enquiry could not be sent. Please try again or contact the company directly.';
      } finally {
        submitButton.disabled = false;
        submitButton.innerHTML = 'Prepare enquiry <span aria-hidden="true">↗</span>';
      }
      return;
    }

    if (CONTACT_EMAIL) {
      const mailto = `mailto:${encodeURIComponent(CONTACT_EMAIL)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailto;
      status.textContent = 'Your email application should open with the enquiry prepared. Review it and send it from your email account.';
      return;
    }

    try {
      await navigator.clipboard.writeText(`${subject}\n\n${body}`);
      status.textContent = 'The enquiry has been copied. The form is a preview until a business email or form endpoint is configured.';
    } catch {
      status.textContent = 'The form is a preview only. Configure CONTACT_EMAIL or FORM_ENDPOINT in script.js before publishing.';
    }
  });
})();
