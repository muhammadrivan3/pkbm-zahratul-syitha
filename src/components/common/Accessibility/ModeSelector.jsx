import { useAccessibility } from '../../../context/AccessibilityContext';
import { Eye, Palette, Droplet, FlaskConical } from 'lucide-react';
const colorBlindnessModes = [
  { key: 'normal', label: 'Normal', icon: <Eye className="w-4 h-4" /> },
  { key: 'protanopia', label: 'Protanopia', icon: <Palette className="w-4 h-4" /> },
  { key: 'deuteranopia', label: 'Deuteranopia', icon: <Droplet className="w-4 h-4" /> },
  { key: 'tritanopia', label: 'Tritanopia', icon: <FlaskConical className="w-4 h-4" /> },
  { key: 'achromatopsia', label: 'Achromatopsia', icon: <Palette className="w-4 h-4" /> },
  { key: 'anomalous', label: 'Anomalous Trichromacy', icon: <Droplet className="w-4 h-4" /> },
  { key: 'grayscale', label: 'Grayscale', icon: <Palette className="w-4 h-4" /> },
  { key: 'invert', label: 'Invert', icon: <Droplet className="w-4 h-4" /> },
];
const ColorBlindnessSelector = () => {
  const { colorBlindnessMode, setColorBlindnessMode } = useAccessibility();

  return (
    <div className="flex flex-col gap-2">
      {colorBlindnessModes.map((mode) => (
        <button
          key={mode.key}
          aria-label={`Mode ${mode.label}`}
          className={`flex items-center gap-2 text-sm px-3 py-1 rounded transition
            ${colorBlindnessMode === mode.key ? 'bg-blue-600 text-white' : 'bg-gray-100 hover:bg-gray-200'}
          `}
          onClick={() => setColorBlindnessMode(mode.key)}
        >
          <span className="text-lg">{mode.icon}</span>
          {mode.label}
        </button>
      ))}
    </div>
  );
};

export default ColorBlindnessSelector;
