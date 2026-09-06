/* Edit the values below when your final brand assets and messaging are ready. */
const siteContent = {
  brand: 'QuoVex',
  eyebrow: 'AI automation and software tools',
  headline: 'Make work<br><em>move</em> forward.',
  intro: 'QuoVex designs practical AI automations and software tools that turn complex work into clear, reliable solutions.',
  project1Name: 'Ops Intelligence',
  project1Type: 'AI automation · Workflow systems',
  project2Name: 'Signal Console',
  project2Type: 'Software tool · Product engineering',
  project3Name: 'Human Loop',
  project3Type: 'AI integration · Custom solutions',
  aboutHeadline: 'Technology that<br><em>solves the real work.</em>',
  aboutText: 'QuoVex helps companies find useful places for AI, then turns those opportunities into dependable automations and software tools. From the first workflow map to the final interface, we build solutions that fit the way your team actually works.',
  contactHeadline: 'Let’s build<br><em>your next solution.</em>',
  email: 'hello@quovex.studio'
};

document.querySelectorAll('[data-content]').forEach((element) => {
  const key = element.dataset.content;
  if (siteContent[key]) {
    element.innerHTML = siteContent[key];
    if (element.tagName === 'A' && key === 'email') element.href = `mailto:${siteContent[key]}`;
  }
});

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));
