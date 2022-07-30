module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      backgroundImage: {
        squgily: "url('/src/assets/divider.svg')",
        topbar:
        "linear-gradient(to right, rgb(217, 70, 239), rgb(220, 38, 38), rgb(251, 146, 60))",
        button:
        "linear-gradient(to right, rgba(118,184,255,1), rgba(107,151,255,1), rgba(68,211,255,1))",
        error_msg:
          "linear-gradient(to right, rgb(255, 99, 117), rgb(255, 53, 77), rgb(251, 146, 60))",

      },
    },
    colors: {
      p_text: "#ccc",
      input_black: "#000000",
      warning: "#ffff",
      head_text: "#eaeaea",
      navbar_back: "rgba(17, 17, 17, 0.8)",
      item_back: "#161616",
      item_hover_back: "#1d1d1d",
      action_back: "#242424",
      action_border: "#363636",
      border_sm: "rgba(54, 54, 54, 0.6)",
      action_text: "#d9d9d9",
      btn_back: "#2e2e2e",
      btn_text: "#f6f6f6",
      link_text_hover: "#6366F1",
      highlight_text: "#99c0ff",
      link_border_hover: "rgb(99,102,241, 0.4)",
      link_border: "#6c6c6c",
      link: "#d9d9d9",
      background: "#111111",
      selectionBack: "rgba(40,41,96)",
    },
    fontFamily: {
      logo: "Southam Demo",
      theme: ["MonoLisa", "Monaco", "Source Code Pro"],
      theme_bold: ["MonoLisaBold", "Monaco", "Source Code Pro"],
    },
    screens: {
      sm: "640px",
      md: "768px",
      slg: "978px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
