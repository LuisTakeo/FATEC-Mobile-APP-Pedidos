import { useWindowDimensions } from 'react-native';

export const useResponsive = () => {
  const { width, height } = useWindowDimensions();
  
  const isSmall = width < 480;
  const isMedium = width >= 480 && width < 768;
  const isLarge = width >= 768 && width < 1024;
  const isXLarge = width >= 1024;
  
  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;
  const isDesktop = width >= 1024;

  return {
    width,
    height,
    isSmall,
    isMedium,
    isLarge,
    isXLarge,
    isMobile,
    isTablet,
    isDesktop,
  };
};

export const responsiveSize = (mobile: number, tablet?: number, desktop?: number) => {
  return { mobile, tablet: tablet || mobile, desktop: desktop || tablet || mobile };
};
