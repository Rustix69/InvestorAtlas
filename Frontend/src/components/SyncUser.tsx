import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";

const SyncUser = () => {
    const { user, isSignedIn } = useUser();

    useEffect(() => {
        if (isSignedIn && user) {
            const userData = {
                userId: user.id,
                email: user.primaryEmailAddress?.emailAddress,
                name: user.fullName,
            };
            console.log("Syncing user Before Store:", userData);
            fetch("http://localhost:3001/api/users/sync-user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            })
                .then(response => response.json())
                .then(data => {
                    console.log("Syncing user After Store:", data);
                    if (!data.success) {
                        console.error("Failed to sync user:", data.error);
                    }
                })
                .catch(error => {
                    console.error("Error syncing user:", error);
                });
        }
    }, [isSignedIn, user]);

    return null;
};

export default SyncUser; 