const NAVBAR_OFFSET = 64;

export const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (!element) return;

  const top = element.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;
  window.scrollTo({ top, behavior: 'smooth' });
};

export const getSectionIdFromPath = (pathname) => {
  const pathMap = {
    '/': 'home',
    '/services': 'services',
    '/projects': 'projects',
    '/countries': 'countries',
    '/teams': 'teams',
  };

  return pathMap[pathname] || null;
};
