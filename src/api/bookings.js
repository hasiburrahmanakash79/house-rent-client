import { useQuery } from "@tanstack/react-query";

export const bookingHouse = () => {
    const { data: bookings = [] } = useQuery({
        queryKey: ["bookings"],
        queryFn: async () => {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/bookings`);
            return res.json();
        },
    });
    return [bookings];
};
