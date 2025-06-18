import DefaultLayout from "@/layouts/default";
import ProductListItem from "@/pages/product-list-item.tsx";
import products from "@/pages/products.ts";
import { categories } from "@/pages/tabs";
import { Tabs, Tab } from "@heroui/tabs";
import React from "react";

export default function IndexPage() {
    const [searchQuery] = React.useState<string>("");
    const [activeCategory, setActiveCategory] = React.useState<string | null>("all");

    const filteredProducts = searchQuery
        ? products.filter(
              (product) =>
                  product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  product.description.toLowerCase().includes(searchQuery.toLowerCase())
          )
        : activeCategory === "all" || !activeCategory
        ? products
        : products.filter((product) => product.categoryKey === activeCategory);

    return (
        <DefaultLayout>
            <div className="w-full max-w-full overflow-x-auto scrollbar-hide mt-3 px-4">
                <Tabs
                    radius={"full"}
                    color={"primary"}
                    selectedKey={activeCategory || "all"}
                    onSelectionChange={(key) => setActiveCategory(key as string)}
                    className="flex whitespace-nowrap"
                >
                    {categories.map((tab) => (
                        <Tab key={tab.key} title={tab.name} />
                    ))}
                </Tabs>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-2">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <ProductListItem key={product.id} {...product} />
                    ))
                ) : (
                    <p className="col-span-full text-center text-default-500">Товаров не найдено</p>
                )}
            </div>
        </DefaultLayout>
    );
}