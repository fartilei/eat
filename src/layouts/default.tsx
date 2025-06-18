import {Input} from "@heroui/input";
import {Kbd} from "@heroui/kbd";
import {SearchIcon} from "@/components/icons.tsx";
import {Icon} from "@iconify/react";
import {Avatar, Badge, Navbar, NavbarBrand} from "@heroui/react";
import { useNavigate, useLocation } from "react-router-dom";
import { useCart } from "@/CartProvider";




export default function DefaultLayout({
    children,
    searchQuery,
    setSearchQuery,
}: {
    children: React.ReactNode;
    searchQuery?: string;
    setSearchQuery?: React.Dispatch<React.SetStateAction<string>>;
}) {
const navigate = useNavigate();
const location = useLocation();
const tabs = [
    {id: "menu", icon: "lucide:utensils", path:"/"},
    {id: "cart", icon: "lucide:shopping-cart", path:"/cart"},
    {id: "user", icon: "lucide:user", path:"/user"},
];
 const { cart } = useCart();

    return (
        <div className="relative h-screen">
            {searchQuery !== undefined && setSearchQuery !== undefined && ( 
                <Navbar isBordered>
                <div className="flex flex-col w-full ">
                    <div className="w-full max-w-full">
                        <Input
                            aria-label="Search"
                            classNames={{
                                inputWrapper: "bg-default-100",
                                input: "text-sm",
                            }}
                            endContent={
                                <Kbd className="hidden lg:inline-block" keys={["command"]}>
                                    K
                                </Kbd>
                            }
                            labelPlacement="outside"
                            placeholder="Поиск..."
                            startContent={
                                <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0"/>
                            }
                            type="search"
                            value={searchQuery || ""}
                            onChange={(e) => setSearchQuery?.(e.target.value)}
                        />
                    </div>
                </div>
            </Navbar>
            )}
            <main className="container mx-auto max-w-7xl px-2 flex-grow">
                {children}
                <div style={{height: 100}}/>
            </main>
            <Navbar
                isBordered
                className="fixed left-0 right-0 z-50  top-auto bottom-0"
                style={{height: "54px"}}
            >
                <NavbarBrand className="w-full">
                    <div className="flex justify-around items-center w-full h-full">
                        {tabs.map((tab, index) => (
                            <button
                                key={tab.id}
                                onClick={() => navigate(tab.path)}
                                className={`flex flex-col items-center justify-center w-full h-full relative ${
                                    location.pathname === tab.path ? "text-primary" : "text-default-500"
                                }`}
                            >
                                {index === 0 && ( <Icon
                                    icon={tab.icon}
                                    width={24}
                                    height={24}
                                    className="mb-1"
                                    style={{
                                        color:
                                        location.pathname === tab.path
                                            ? "var(--primary-color)"
                                            : "currentColor",
                                    }}
                                />
                                )}
                                {index === 1 && ( <Badge color="primary" content={cart.length}>
                                    <Icon
                                        icon={tab.icon}
                                        width={24}
                                        height={24}
                                        className="mb-1"
                                        style={{
                                        color:
                                        location.pathname === tab.path
                                            ? "var(--primary-color)"
                                            : "currentColor",
                                    }}
                                    />
                                </Badge>
                                )}
                                {index == 2 ? <Avatar src="/images/user/1.jpg"/> : null}
                            </button>
                        ))}
                    </div>
                </NavbarBrand>
            </Navbar>
        </div>
    );
}
