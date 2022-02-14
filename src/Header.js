import React from 'react'
import { ThemeContext, themes } from './ThemeContext'


const Header = () => {
  const [darkMode, setDarkMode] = React.useState(true);
  return (
    
          <ThemeContext>
            {({ changeTheme }) => (
              <button
                onClick={() => {
                  setDarkMode(!darkMode);
                  changeTheme(darkMode ? themes.light : themes.dark);
                }}
              >
                Toggle
              </button>
            )}
          </ThemeContext>
  )
}

export default Header