import { useAccessibility } from '../../../context/AccessibilityContext';

const ContrastSlider = () => {
  const { contrast, setContrast } = useAccessibility();

  return (
    <div className="mt-4">
      <label htmlFor="contrast-slider" className="text-xs font-medium block mb-1">
        Kontras: <span className="font-bold">{contrast}%</span>
      </label>
      <input
        id="contrast-slider"
        type="range"
        min="50"
        max="200"
        value={contrast}
        onChange={(e) => setContrast(Number(e.target.value))}
        className="w-full accent-blue-600"
        aria-valuemin={50}
        aria-valuemax={200}
        aria-valuenow={contrast}
        aria-label="Slider tingkat kontras"
      />
    </div>
  );
};

export default ContrastSlider;
