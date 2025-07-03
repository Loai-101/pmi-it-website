// Utility function to get correct image paths for both development and production
export const getImagePath = (path) => {
  // In development, process.env.PUBLIC_URL is empty
  // In production, it contains the base URL
  return `${process.env.PUBLIC_URL}${path}`;
};

// Predefined image paths
export const IMAGES = {
  // All image entries removed as per user request
}; 