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

export const ascendingPrice = () => {
    const { data: ascPrice = [] } = useQuery({
        queryKey: ["ascPrice"],
        queryFn: async () => {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/ascendingPrice`);
            return res.json();
        },
    });
    return [ascPrice];
};


export const descendingPrice = () => {
    const { data: dscPrice = [] } = useQuery({
        queryKey: ["dscPrice"],
        queryFn: async () => {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/descendingPrice`);
            return res.json();
        },
    });
    return [dscPrice];
};
