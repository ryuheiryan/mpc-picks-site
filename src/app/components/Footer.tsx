export default function Footer() {
  return (
    <div className="bg-white h-16 sticky bottom-0">
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <defs>
          <pattern
            id="pattern_white"
            patternUnits="userSpaceOnUse"
            width="30"
            height="20"
            patternTransform="rotate(135)"
          >
            <line
              x1="0"
              y="0"
              x2="0"
              y2="30"
              stroke="#0CC0DF"
              stroke-width="50"
            />
          </pattern>
          <pattern
            id="pattern_black"
            patternUnits="userSpaceOnUse"
            width="30"
            height="20"
            patternTransform="rotate(135)"
          >
            <line x1="0" y="0" x2="0" y2="30" stroke="#000" stroke-width="50" />
          </pattern>
        </defs>
        <rect
          width="25%"
          height="100%"
          fill="url(#pattern_black)"
          opacity="1"
        />
        <rect
          width="75%"
          height="100%"
          x="25%"
          fill="url(#pattern_white)"
          opacity="1"
        />
      </svg>
    </div>
  );
}
