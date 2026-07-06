const WHATSAPP_NUMBER = '97332009540';

export const contactInfo = {
  phone: '+97332009540',
  phoneHref: 'tel:+97332009540',
  email: 'it.solutions@pmigroup.me',
  emailHref: 'mailto:it.solutions@pmigroup.me',
  whatsappNumber: WHATSAPP_NUMBER,
  whatsappHref:
    `https://wa.me/${WHATSAPP_NUMBER}?text=` +
    encodeURIComponent("Hi! I'm interested in your services. Can you provide more information?"),
  instagramHref: 'https://www.instagram.com/pmi_it?igsh=MW9ydjRtdWRwMWgweQ==',
  websiteHref: 'https://pmi-me.net',
  websiteLogo:
    'https://res.cloudinary.com/dvybb2xnc/image/upload/v1763543451/accounts/orvtk0dzfxyj7mrgnfts.jpg',
  linkedinHref: null,
  location: null,
};

export const getWhatsAppUrl = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
