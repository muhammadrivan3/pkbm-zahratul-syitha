import { useAccessibility } from '../../../context/AccessibilityContext';
import { Type } from 'lucide-react';

const FontSizeSelector = () => {
  const { fontSize, setFontSize } = useAccessibility();

  const marks = [
    { value: 50, label: '50%' },
    { value: 100, label: '100%' },
    { value: 150, label: '150%' },
    { value: 200, label: '200%' },
  ];

  return (
    <div className="flex flex-col gap-2 mt-4">
      <label htmlFor="font-size-slider" className="text-xs font-medium mb-1 flex items-center gap-1">
        <Type /> Ukuran Font: <span className="font-bold">{fontSize}%</span>
      </label>
      <input
        id="font-size-slider"
        type="range"
        min="50"
        max="200"
        step="1"
        value={fontSize}
        onChange={(e) => setFontSize(Number(e.target.value))}
        className="w-full accent-blue-600"
        aria-valuemin={50}
        aria-valuemax={200}
        aria-valuenow={fontSize}
        aria-label="Slider ukuran font"
      />
      <div className="flex justify-between text-xs text-gray-500 select-none mt-1">
        {marks.map((mark) => (
          <span key={mark.value}>{mark.label}</span>
        ))}
      </div>
    </div>
  );
};

export default FontSizeSelector;
