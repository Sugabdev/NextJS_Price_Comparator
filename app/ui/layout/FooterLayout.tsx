'use client'

import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

export function FooterLayout() {

    const themeContext = useContext(ThemeContext)
    const { theme } = themeContext!

    return (
        <footer className="w-full flex justify-between items-center py-4 sm:py-2 px-8 dark:border-t-2 dark:border-slate-600 dark:bg-slate-800 dark:text-white">
            <p className="text-center">© 2025. All Rights Reserved.</p>
            {
                theme === 'light' ? (
                    <div className="flex gap-4 justify-center items-center">
                        <Image
                            src="/github.svg"
                            alt="Github logo"
                            width={30}
                            height={30}
                        />
                        <Image
                            src="/linkedin.svg"
                            alt="Linkedin logo"
                            width={30}
                            height={30}
                        />
                    </div>
                ) : (
                    <div className="flex gap-4 justify-center items-center">
                        <a href="https://github.com/Sugabdev">
                            <Image
                                src="/github-white.svg"
                                alt="Github logo"
                                width={30}
                                height={30}
                                className="hover:scale-110"
                            />
                        </a>
                        <a href="www.linkedin.com/in/sugabdev">
                            <Image
                                src="/linkedin-white.svg"
                                alt="Linkedin logo"
                                width={30}
                                height={30}
                                className="hover:scale-110"
                            />
                        </a>
                    </div>
                )
            }

        </footer>
    )
}