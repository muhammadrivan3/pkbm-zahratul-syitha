const HeroCTA = ({ text, onClick }) => (
  <button
    onClick={onClick}
    className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-md transition duration-300"
  >
    {text}
  </button>
);

export default HeroCTA;
