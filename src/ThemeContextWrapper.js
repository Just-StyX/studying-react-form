import React from 'react'
import { ThemeContext, themes } from './ThemeContext'

const ThemeContextWrapper = (props) => {
  const [theme, setTheme] = React.useState(themes.dark)
  const changeTheme = () => {
    setTheme(theme)
  }
  React.useEffect(() => {
    switch (theme) {
      case themes.light:
        document.body.classList.add('white-content');
        break;
      case themes.dark:
      default:
        document.body.classList.remove('white-content');
        break;
    }
  }, [theme])
  return (
      <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
        {props.children}
      </ThemeContext.Provider>
  )
}

export default ThemeContextWrapper