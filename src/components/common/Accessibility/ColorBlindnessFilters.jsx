
const ColorBlindnessFilters = () => (
  <svg aria-hidden="true" style={{ position: 'absolute', width: 0, height: 0, pointerEvents: 'none', userSelect: 'none' }}>
  <defs>
    {[0, 25, 50, 75, 100].map((intensity) => (
      <filter key={`protanopia-${intensity}`} id={`protanopia-${intensity}`} colorInterpolationFilters="sRGB">
        <feColorMatrix
          type="matrix"
          values="
            0.567, 0.433, 0,     0, 0,
            0.558, 0.442, 0,     0, 0,
            0,     0.242, 0.758, 0, 0,
            0,     0,     0,     1, 0
          "
        />
        <feComponentTransfer>
          <feFuncR type="linear" slope={intensity / 100} />
          <feFuncG type="linear" slope={intensity / 100} />
          <feFuncB type="linear" slope={intensity / 100} />
        </feComponentTransfer>
      </filter>
    ))}
    {[0, 25, 50, 75, 100].map((intensity) => (
      <filter key={`deuteranopia-${intensity}`} id={`deuteranopia-${intensity}`} colorInterpolationFilters="sRGB">
        <feColorMatrix
          type="matrix"
          values="
            0.625, 0.375, 0,     0, 0,
            0.7,   0.3,   0,     0, 0,
            0,     0.3,   0.7,   0, 0,
            0,     0,     0,     1, 0
          "
        />
        <feComponentTransfer>
          <feFuncR type="linear" slope={intensity / 100} />
          <feFuncG type="linear" slope={intensity / 100} />
          <feFuncB type="linear" slope={intensity / 100} />
        </feComponentTransfer>
      </filter>
    ))}
    {[0, 25, 50, 75, 100].map((intensity) => (
      <filter key={`tritanopia-${intensity}`} id={`tritanopia-${intensity}`} colorInterpolationFilters="sRGB">
        <feColorMatrix
          type="matrix"
          values="
            0.95,  0.05,  0,     0, 0,
            0,     0.433, 0.567, 0, 0,
            0,     0.475, 0.525, 0, 0,
            0,     0,     0,     1, 0
          "
        />
        <feComponentTransfer>
          <feFuncR type="linear" slope={intensity / 100} />
          <feFuncG type="linear" slope={intensity / 100} />
          <feFuncB type="linear" slope={intensity / 100} />
        </feComponentTransfer>
      </filter>
    ))}
    {[0, 25, 50, 75, 100].map((intensity) => (
      <filter key={`grayscale-${intensity}`} id={`grayscale-${intensity}`} colorInterpolationFilters="sRGB">
        <feColorMatrix
          type="matrix"
          values="
            0.33, 0.33, 0.33, 0, 0,
            0.33, 0.33, 0.33, 0, 0,
            0.33, 0.33, 0.33, 0, 0,
            0,    0,    0,    1, 0
          "
        />
        <feComponentTransfer>
          <feFuncR type="linear" slope={intensity / 100} />
          <feFuncG type="linear" slope={intensity / 100} />
          <feFuncB type="linear" slope={intensity / 100} />
        </feComponentTransfer>
      </filter>
    ))}
    {[0, 25, 50, 75, 100].map((intensity) => (
      <filter key={`invert-${intensity}`} id={`invert-${intensity}`} colorInterpolationFilters="sRGB">
        <feComponentTransfer>
          <feFuncR type="table" tableValues="1 0" />
          <feFuncG type="table" tableValues="1 0" />
          <feFuncB type="table" tableValues="1 0" />
          <feFuncA type="linear" slope={intensity / 100} />
        </feComponentTransfer>
      </filter>
    ))}
  </defs>
  </svg>
);

export default ColorBlindnessFilters;
