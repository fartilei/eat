"use client";

import React from "react";
import {Button, cn, Image} from "@heroui/react";
import {ProductItem} from "@/pages/products.ts";
import { useCart } from "@/CartProvider";

export type ProductListItemProps = Omit<React.HTMLAttributes<HTMLDivElement>, "id"> & {
    removeWrapper?: boolean;
} & ProductItem;


const ProductListItem = React.forwardRef<HTMLDivElement, ProductListItemProps>(
    (
        {
            id,
            name,
            price,
            description,
            imageSrc,
            categoryKey,
            removeWrapper,
            className,
            ...props
        },
        ref,
    ) => {
        
        const { addToCart } = useCart();
        const handleAddToCart = () => {
            addToCart({ id, name, price, description, imageSrc, categoryKey });
        };

        return (
            <div
                ref={ref}
                className={cn(
                    "relative flex w-72 max-w-full flex-none scroll-ml-6 flex-col gap-4 pt-3",
                    className,
                )}
                {...props}
            >
                <Image
                    removeWrapper
                    alt={name}
                    className="z-0 hover:scale-110 rounded-medium h-288 h-288 w-288"
                    src={`/images/sushi/${id}.jpg`}
                />
                <div className="flex flex-col gap-2">
                    <h3 className="text-medium font-medium ">{name}</h3>
                    {description ? (
                        <p className="text-small text-default-500 line-clamp-2">{description}</p>
                    ) : null}
                    <div className="flex gap-2">
                        <Button
                            fullWidth
                            className="font-medium text-medium"
                            color="primary"
                            radius="lg"
                            variant={"solid"}
                            onPress={handleAddToCart}
                        >
                            {price} ₽
                        </Button>
                    </div>
                </div>
            </div>
        );
    },
);

ProductListItem.displayName = "ProductListItem";

export default ProductListItem;
