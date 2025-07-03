// Utility function to get correct image paths for both development and production
export const getImagePath = (path) => {
  // In development, process.env.PUBLIC_URL is empty
  // In production, it contains the base URL
  return `${process.env.PUBLIC_URL}${path}`;
};

// Predefined image paths
export const IMAGES = {
  // Slider images
  SLIDER_1: getImagePath('/sliders/slider1.jpg'),
  SLIDER_2: getImagePath('/sliders/slider2.jpg'),
  SLIDER_3: getImagePath('/sliders/slider3.jpg'),
  SLIDER_4: getImagePath('/sliders/slider4.jpg'),
  SLIDER_5: getImagePath('/sliders/slider5.jpg'),
  SLIDER_6: getImagePath('/sliders/slider6.jpg'),
  SLIDER_7: getImagePath('/sliders/slider7.jpg'),
  
  // Logo images
  PMI_LOGO: getImagePath('/logo/logo.png'),
  FUTURECITIES_LOGO: getImagePath('/logo/futurecities-logo.png'),
  
  // Team images
  TEAM_1: getImagePath('/team/team1.jpg'),
  TEAM_2: getImagePath('/team/team2.jpg'),
  TEAM_3: getImagePath('/team/team3.jpg'),
  TEAM_4: getImagePath('/team/team4.jpg'),
  TEAM_5: getImagePath('/team/team5.jpg'),
  
  // Company logos
  COMPANY_1: getImagePath('/logos/Company1.jpg'),
  COMPANY_2: getImagePath('/logos/Company2.jpg'),
  COMPANY_3: getImagePath('/logos/Company3.jpg'),
  COMPANY_4: getImagePath('/logos/Company4.jpg'),
  COMPANY_5: getImagePath('/logos/Company5.jpg'),
  COMPANY_6: getImagePath('/logos/Company6.jpg'),
  COMPANY_7: getImagePath('/logos/Company7.jpg'),
  COMPANY_8: getImagePath('/logos/Company8.jpg'),
  COMPANY_9: getImagePath('/logos/Company9.jpg'),
  COMPANY_10: getImagePath('/logos/Company10.jpg'),
  COMPANY_11: getImagePath('/logos/Company11.jpg'),
  COMPANY_12: getImagePath('/logos/Company12.jpg'),
  COMPANY_13: getImagePath('/logos/Company13.jpg'),
  
  // Other images
  PARTNERSHIP_AGREEMENT: getImagePath('/partnership-agreement.jpg'),
}; 