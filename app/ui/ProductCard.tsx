import Image from "next/image";
import type { Product } from "@/types/ProductTypes";

export function ProductCard({ product }: { product: Product }) {

    const { name, image, description, price, link, url } = product

    interface ShopLogo {
        [key: string]: string
    }

    const shopLogos: ShopLogo = {
        'Amazon': '/amazon.png',
        'Mercado Libre': '/mercadoLibre.png',
        'Newegg': '/newegg.png',
    }

    return (
        <section
            key={name}
            className='border-1 border-slate-400 dark:border-slate-600 dark:bg-slate-700 w-[300px] min-h-[500px] flex flex-col gap-4 rounded-lg overflow-hidden dark:text-white'
        >
            <div className="relative w-[300px] h-[300px] bg-slate-100 dark:bg-white overflow-hidden">
                <Image
                    src={image}
                    alt="Product image"
                    fill
                    className="object-contain p-8"
                />
            </div>

            <aside
                className='flex flex-col justify-center items-start gap-2 px-4'
            >
                <div
                    className='flex items-center gap-4'
                >
                    <div
                        className='max-h-12 border-1 border-slate-400 dark:bg-white rounded-lg flex items-center justify-center px-8'
                    >
                        <Image
                            src={shopLogos[name]}
                            alt="Shop logo"
                            width={80}
                            height={80}
                        />
                    </div>
                    <span className='font-semibold text-xl'>{price}</span>
                </div>
                <h2
                    className="line-clamp-3"
                    title={description}
                >
                    {description}
                </h2>
                <a
                    href={url}
                    className="w-full text-white bg-gradient-to-r from-amber-400 to-orange-800 dark:from-cyan-500 dark:to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                    Go to the shop
                </a>
                <a
                    href={link}
                    className="w-full text-white bg-gradient-to-r from-orange-800 to-amber-400 dark:from-blue-500 dark:to-cyan-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                    See more
                </a>
            </aside>
        </section>
    )

}