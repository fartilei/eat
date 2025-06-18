import { Card, Button } from "@heroui/react";
import { useAuth } from "@/AuthProvider";

export default function ProfilePage() {
    const { user, logout } = useAuth();

    return (
        <div className="p-4 max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-6">Профиль</h1>

            {user ? (
                <Card className="p-4 mb-4">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-default-200 flex items-center justify-center">
                            {user.firstName[0]}
                        </div>
                        <div>
                            <p className="font-semibold">{user.firstName} {user.lastName}</p>
                            {user.username && <p className="text-sm text-default-500">@{user.username}</p>}
                        </div>
                    </div>
                    <Button color="danger" fullWidth className="mt-4" onPress={logout}>
                        Выйти
                    </Button>
                </Card>
            ) : (
                <p className="text-default-500">Пользователь не найден</p>
            )}
        </div>
    );
}