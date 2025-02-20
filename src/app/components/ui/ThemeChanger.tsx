"use client";

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react';
import Button from './Button';

const ThemeChanger = () => {
    const { theme, setTheme } = useTheme();
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    return (
        <div className='text-foreground'>
            {isClient ? (
                <>
                    The current theme is: {theme}
                    <br />
                    <button onClick={() => setTheme('light')}>Light Mode</button>
                    <br />
                    <button onClick={() => setTheme('dark')}>Dark Mode</button>
                </>
            ) : (
                <div className='animate-pulse'>
                    <br />
                    <Button className='w-[120px] h-10 bg-gray-500'>{""}</Button>
                    <br />
                    <Button className='w-[120px] h-10 bg-gray-500'>{""}</Button>
                    <br />
                </div>
            )
            }
        </div>
    )
}

export default ThemeChanger;