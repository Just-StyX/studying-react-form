import React from 'react'

const themes = {
  dark: "",
  light: "white-content"
}

const ThemeContext = React.createContext({
  theme: themes.dark,
  changeTheme: () => {}
})

export { themes, ThemeContext }