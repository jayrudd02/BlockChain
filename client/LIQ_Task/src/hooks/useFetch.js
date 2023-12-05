import { useEffect, useState } from "react";

const APIKEY = import.meta.env.COINMARKETCAP_API;

const useFetch = () => {
    const [liqUrl, setLiqUrl] = useState("");
    const fetchLiqPrice = async () => {
        try {
            const response = await fetch(`https://api.coinmarketcap.com/currencies/liquidus?convert=USD&CMC_PRO_API_KEY=${APIKEY}&limit=1`);
            const { data } = await response.json();

            console.log(data);

            // setLiqUrl(data[0]?.images?.downsized_medium.url);
        } catch (error) {
            setLiqUrl("https://coinmarketcap.com/currencies/liquidus?convert=USD");
        }
    };

    useEffect(() => {
        useFetch();
    }, []);

    return liqUrl;
};

export default useFetch;