'use client'

import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import type { Product } from "@/types/ProductTypes";
import { ProductCard } from "@/app/ui/ProductCard";

export default function Product() {
    const [productsData, setProductsData] = useState<Product[]>([]);
    const [displayProducts, setDisplayProducts] = useState<Product[]>([]);

    useEffect(() => {
        const search = sessionStorage.getItem("search");
        if (!search) redirect("/");

        fetch("/scraper")
            .then(res => {
                if (!res.ok) console.error(res);
                return res.json();
            })
            .then(data => {
                if (Array.isArray(data.storesInfo)) {
                    setProductsData(data.storesInfo);

                    setDisplayProducts([...data.storesInfo].sort((a, b) => a.orderByPrice - b.orderByPrice));

                    console.log('Dentro del fetch:', 'productsData: ', productsData, 'DisplayProducts: ', displayProducts)
                } else if (data.status === 408) {
                    redirect("/");
                }
            });
    }, []);

    const handleChangePriceFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const prevProducts = [...productsData];

        if (event.target.value === "lower") {
            prevProducts.sort((a, b) => a.orderByPrice - b.orderByPrice);
        } else if (event.target.value === "higher") {
            prevProducts.sort((a, b) => b.orderByPrice - a.orderByPrice);
        }

        console.log('dentro del handleChange: ', 'ProductsData: ', productsData, 'prevProducts: ', prevProducts)
        setDisplayProducts(prevProducts);
    };

    return (
        <div className="h-full flex flex-col items-center justify-center gap-8 py-8 dark:bg-slate-800 dark:text-white">
            <h1 className="text-center font-semibold text-4xl">Comparador de precios</h1>

            <div className="w-full flex justify-center mb-12">
                <label htmlFor="filters-select" className="font-semibold mr-2">Ordenar por:</label>
                <select name="filters" id="filters-select" onChange={handleChangePriceFilter}>
                    <option value="lower" className="dark:text-black">Más bajo</option>
                    <option value="higher" className="dark:text-black">Más alto</option>
                </select>
            </div>

            <section className="w-full grid grid-cols-[repeat(auto-fit,_300px)] justify-center gap-8">
                {displayProducts.length > 0 &&
                    displayProducts.map(item => (
                        <ProductCard
                            key={item.name}
                            product={item}
                        />
                    ))
                }
            </section>
        </div>
    );
}
