import { useAccessibility } from '../../../context/AccessibilityContext';

const ResetButton = () => {
  const { setColorBlindnessMode, setFontSize, setContrast } = useAccessibility();

  const handleReset = () => {
    setColorBlindnessMode('normal');
    setFontSize(100);
    setContrast(100);
  };

  return (
    <button
      onClick={handleReset}
      className="mt-4 text-xs px-3 py-1 rounded bg-red-100 hover:bg-red-200 text-red-800 transition"
    >
      Reset ke Default
    </button>
  );
};

export default ResetButton;
