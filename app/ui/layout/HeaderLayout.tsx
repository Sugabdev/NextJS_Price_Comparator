import Image from "next/image";
import { ThemeButton } from "@/app/ui/layout/ThemeButton";

export function HeaderLayout() {
    return (
        <header className='flex flex-row items-center justify-between px-4 py-2 shadow-[0_4px_6px_lightgray] dark:bg-slate-800 dark:border-b-2 dark:border-b-slate-600 dark:shadow-none'>
            <Image
                src="/Logo.png"
                alt="Logo de la página"
                width={40}
                height={40}
                className="rounded-full"
            />
            <ThemeButton />
        </header>
    )
}
