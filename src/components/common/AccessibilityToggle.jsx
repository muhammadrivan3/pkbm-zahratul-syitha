import ColorBlindnessSelector from './Accessibility/ModeSelector';
import ColorBlindnessIntensitySlider from './Accessibility/ColorBlindnessIntensitySlider';
import FontSizeSelector from './Accessibility/FontSizeSelector';
import ContrastSlider from './Accessibility/ContrastSlider';
import ResetButton from './Accessibility/ResetButton';
import { useState } from 'react';

const AccessibilityToggle = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-0 right-4 z-50 font-sans">
      <button
        onClick={() => setOpen(!open)}
        className="bg-blue-600 text-white text-sm px-4 py-2 rounded shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        aria-label="Buka panel aksesibilitas"
      >
        Aksesibilitas
      </button>

      {open && (
        <div className="mt-2 w-80 bg-white/95 backdrop-blur-md border border-gray-300 p-5 rounded-lg shadow-xl max-h-[90vh] overflow-auto">
          <h2 className="font-bold text-lg mb-4 border-b border-gray-300 pb-2">Pengaturan Aksesibilitas</h2>
          <section className="mb-4">
            <h3 className="font-semibold text-sm mb-2">Mode Buta Warna</h3>
            <ColorBlindnessSelector />
            <ColorBlindnessIntensitySlider />
          </section>
          <section className="mb-4">
            <h3 className="font-semibold text-sm mb-2">Ukuran Font</h3>
            <FontSizeSelector />
          </section>
          <section className="mb-4">
            <h3 className="font-semibold text-sm mb-2">Kontras</h3>
            <ContrastSlider />
          </section>
          <section className="pt-2 border-t border-gray-300">
            <ResetButton />
          </section>
        </div>
      )}
    </div>
  );
};

export default AccessibilityToggle;
