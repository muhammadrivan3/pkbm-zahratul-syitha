import { useAccessibility } from '../../../context/AccessibilityContext';

const ColorBlindnessIntensitySlider = () => {
  const { colorBlindnessIntensity, setColorBlindnessIntensity, colorBlindnessMode } = useAccessibility();

  if (colorBlindnessMode === 'normal') {
    return null; // No intensity control for normal mode
  }

  return (
    <div className="flex flex-col gap-2 mt-2">
      <label htmlFor="colorblindness-intensity-slider" className="text-xs font-medium mb-1">
        Intensitas Buta Warna: <span className="font-bold">{colorBlindnessIntensity}%</span>
      </label>
      <input
        id="colorblindness-intensity-slider"
        type="range"
        min="0"
        max="100"
        value={colorBlindnessIntensity}
        onChange={(e) => setColorBlindnessIntensity(Number(e.target.value))}
        className="w-full accent-blue-600"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={colorBlindnessIntensity}
        aria-label="Slider intensitas buta warna"
      />
    </div>
  );
};

export default ColorBlindnessIntensitySlider;
