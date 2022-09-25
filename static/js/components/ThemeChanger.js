const ThemeChanger = () => {
  const themes = {
    silenced: {
      "--themecolour": "#ef795b",
      "--themecolour2": "#db6547",
      "--bs-body-color": "#212529",
      "--bodybg": "#ffffff",
    },
    soulstealer: {
      "--themecolour": "#f58abf",
      "--themecolour2": "#D883AD",
      "--bs-body-color": "#212529",
      "--bodybg": "#f4fffe",
    },
    warlord: {
      "--themecolour": "#95C183",
      "--themecolour2": "#83A874",
      "--bs-body-color": "#212529",
      "--bodybg": "#f3e5dc",
    },
    assassin: {
      "--themecolour": "#dbdbdb",
      "--themecolour2": "#414b54",
      "--bs-body-color": "#bec6cf",
      "--bodybg": "#141414",
    },
  };
  document.querySelectorAll(".color-button").forEach((el) => {
    el.addEventListener("click", () => {
      const theme = themes[el.dataset.theme];
      for (var variable in theme) {
        document.documentElement.style.setProperty(variable, theme[variable]);
      }
    });
  });
  return <></>;
};

export default ThemeChanger;
