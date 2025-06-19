import { defineConfig, presetUno } from "unocss";

const systemFonts = {
  sans: `, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
  serif: `, ui-serif, Georgia, Cambria, "Times New Roman", Times, serif`,
  mono: `, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
};

export default defineConfig({
  preflights: [
    {
      getCSS: ({ theme }) => `
        body {
          font-family: ${(theme as any).fontFamily.inter};
        }
        h1, h2, h3, h4, h5, h6 {
          font-family: ${(theme as any).fontFamily.clashDisplay};
          font-weight: 600;
        }
        ::selection {
          background-color: ${(theme as any).colors.brand.yellow.DEFAULT};
          color: #000000;
        }
      `,
    },
  ],
  presets: [presetUno()],
  shortcuts: {
    "screen-container":
      "w-full md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl 3xl:max-w-screen-3xl",
    container: "mx-auto px-3 screen-container lg:px-10 md:px-5",
  },
  theme: {
    fontFamily: {
      clashDisplay: `"Clash Display"` + systemFonts.sans,
      inter: `"Inter"` + systemFonts.sans,
    },
    breakpoints: {
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1366px",
      "3xl": "1536px",
      "4xl": "1920px",
    },
    colors: {
      surface: "#050505",
      brand: {
        red: {
          DEFAULT: "#dd154b",
          "50": "#fcf2f9",
          "100": "#fce6f3",
          "200": "#f7c1de",
          "300": "#f29bc5",
          "400": "#e8568e",
          "500": "#dd154b",
          "600": "#c7123f",
          "700": "#a60c30",
          "800": "#850823",
          "900": "#630417",
          "950": "#40020c",
        },
        green: {
          DEFAULT: "#053D3B",
          "50": "#e9f5f5",
          "100": "#d5ebea",
          "200": "#9fcfce",
          "300": "#70b3b1",
          "400": "#2b7875",
          "500": "#053d3b",
          "600": "#043834",
          "700": "#032e27",
          "800": "#02241c",
          "900": "#011c14",
          "950": "#00120b",
        },
        brown: {
          DEFAULT: "#840037",
          "50": "#faedf6",
          "100": "#f2daeb",
          "200": "#e0a8cc",
          "300": "#cf7cac",
          "400": "#a8326d",
          "500": "#840037",
          "600": "#780030",
          "700": "#630024",
          "800": "#4f001a",
          "900": "#3b0012",
          "950": "#26000a",
        },
        yellow: {
          DEFAULT: "#FFA400",
          "50": "#fffdf2",
          "100": "#fffae6",
          "200": "#fff1bf",
          "300": "#ffe699",
          "400": "#ffc94d",
          "500": "#ffa400",
          "600": "#e68e00",
          "700": "#bf6c00",
          "800": "#994f00",
          "900": "#733600",
          "950": "#4a1f00",
        },
      },
    },
  },
});
