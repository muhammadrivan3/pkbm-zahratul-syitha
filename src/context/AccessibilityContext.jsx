// context/AccessibilityContext.jsx
import { createContext, useContext, useEffect, useState } from 'react';

const AccessibilityContext = createContext();

export const AccessibilityProvider = ({ children }) => {
  const [colorBlindnessMode, setColorBlindnessMode] = useState(() => localStorage.getItem('a11y-colorBlindnessMode') || 'normal');
  const [colorBlindnessIntensity, setColorBlindnessIntensity] = useState(() => {
    const stored = localStorage.getItem('a11y-colorBlindnessIntensity');
    return stored ? Number(stored) : 100;
  });
  const [fontSize, setFontSize] = useState(() => {
    const stored = localStorage.getItem('a11y-fontSize');
    return stored ? Number(stored) : 100;
  });
  const [contrast, setContrast] = useState(() => Number(localStorage.getItem('a11y-contrast') || 100));

  // Apply combined color blindness and contrast filter with intensity
  useEffect(() => {
    localStorage.setItem('a11y-colorBlindnessMode', colorBlindnessMode);
    localStorage.setItem('a11y-contrast', contrast);
    localStorage.setItem('a11y-colorBlindnessIntensity', colorBlindnessIntensity);

    let filterString = '';

    if (colorBlindnessMode && colorBlindnessMode !== 'normal') {
      // Quantize intensity to nearest 0, 25, 50, 75, 100
      const intensities = [0, 25, 50, 75, 100];
      const closestIntensity = intensities.reduce((prev, curr) =>
        Math.abs(curr - colorBlindnessIntensity) < Math.abs(prev - colorBlindnessIntensity) ? curr : prev
      );
      filterString += `url(#${colorBlindnessMode}-${closestIntensity}) `;
    }

    if (contrast !== 100) {
      filterString += `contrast(${contrast}%)`;
    }

    document.documentElement.style.filter = filterString.trim();
  }, [colorBlindnessMode, contrast, colorBlindnessIntensity]);

  // Apply font size style
  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}%`;
    localStorage.setItem('a11y-fontSize', fontSize.toString());
  }, [fontSize]);

  return (
    <AccessibilityContext.Provider
      value={{
        colorBlindnessMode,
        setColorBlindnessMode,
        colorBlindnessIntensity,
        setColorBlindnessIntensity,
        fontSize,
        setFontSize,
        contrast,
        setContrast,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => useContext(AccessibilityContext);
