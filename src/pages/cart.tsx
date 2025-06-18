import { useCart } from "@/CartProvider";
import { Card, Button } from "@heroui/react";
import {Icon} from "@iconify/react";

export default function CartPage() {
    const { cart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = useCart(); // Получаем корзину из контекста

    // Рассчитываем общую сумму
    const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
);

    return (
            <div className="p-4 max-w-2xl mx-auto">
                <h1 className="text-2xl font-bold mb-4">Корзина</h1>

                {cart.length === 0 ? (
                    <p className="text-default-500">Ваша корзина пуста</p>
                ) : (
                    <>
                        {cart.map((item) => (
                            <Card
                                key={item.id}
                                className="mb-4 p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
                            >
                            <div className="flex items-start gap-4 min-w-0">
                                <img
                                    src={`/images/sushi/${item.id}.jpg`}
                                    alt={item.name}
                                    className="w-24 h-24 object-cover rounded"
                                />
                            <div className="min-w-0">
                                <h3 className="font-semibold truncate">{item.name}</h3>
                                <p className="text-primary">{item.price} ₽</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 self-end md:self-auto">
                                <Button 
                                    size="sm" 
                                    color="primary" 
                                    variant="flat"
                                    onPress={() => decreaseQuantity(item.id)}>
                                    -
                                </Button>
                                    <span className="w-6 text-center">{item.quantity || 1}</span>
                                <Button 
                                    size="sm" 
                                    color="primary" 
                                    variant="flat"
                                    onPress={() => increaseQuantity(item.id)}>
                                    +
                                </Button>
                                <Button
                                    color="danger"
                                    size="sm"
                                    onPress={() => removeFromCart(item.id)}
                                    className="ml-2"
                                >
                                    <Icon icon="lucide:circle-minus" width={22} />
                                </Button>
                            </div>
                            </Card>
                        ))}

                        <div className="mt-4 text-right">
                            <p className="text-lg font-bold">
                                Итого: {totalPrice} ₽
                            </p>
                        </div>

                        <Button color="primary" fullWidth className="mt-6">
                            Оформить заказ
                        </Button>
                        <Button color="danger" fullWidth className="mt-1" onPress={clearCart}>
                            Очистить корзину
                        </Button>
                    </>
                )}
            </div>
    );
}