import React from 'react'
import { useTheme } from '../themes/ThemeContext';

const Button = () => {
    const {theme, changeTheme} = useTheme();

    const toggleThemeMode =() => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        changeTheme(newTheme);
    }
    return (
        <button onClick = {toggleThemeMode}>Change mode</button>
    )
}

export default Button;