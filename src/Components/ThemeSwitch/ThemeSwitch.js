import { ThemeContainer } from './ThemeContainer'
import darkTheme from '../../assets/dark-theme.svg'
import lightTheme from '../../assets/light-theme.svg'
import { useState } from 'react'

export const ThemeSwitch = () => {
  const [isDarkMode, setDarkMode] = useState(false)
  return (
  <ThemeContainer id="ThemeContainer">
    <img alt='light theme' src={lightTheme}  className={isDarkMode ? 'dark' : ''}/>
    <ThemeContainer.Check 
      onClick={(e)=> {
        setDarkMode(e.target.checked)
        localStorage.setItem("isDarkMode", e.target.checked);
        }}
      type="switch"
      id="custom-switch"
    />
    <img alt='dark theme' src={darkTheme}  className={isDarkMode ? 'dark' : ''}/>
  </ThemeContainer>
  )
}
