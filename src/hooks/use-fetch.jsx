import { useState } from "react";
import { useSession } from "@clerk/clerk-react";

const useFetch = (cb, options = {}) => {
    const [data, setData] = useState(undefined);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const { session } = useSession();

    const fn = async (...args) => {
        setLoading(true);
        setError(null);
        try {
            const supabaseAccessToken = await session.getToken({
                template: "supabase",
            });

            const response = await cb(supabaseAccessToken, options, ...args);
            setData(response);
        } catch (error) {
            console.error("Fetch error:", error);
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    return { fn, data, loading, error };
};

export default useFetch;
