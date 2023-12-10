import { useEffect, useState } from "react";
import axios from 'axios';

const APIKEY = import.meta.env.COINMARKETCAP_API;

const useFetch = () => {
    const [liqUrl, setLiqUrl] = useState("");

    const url = "https://cors-anywhere.herokuapp.com/pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
        qString = "?CMC_PRO_API_KEY=345081cd-816a-4de5-8468-7bdbaecd2f2b&sort=market_cap&start=1&limit=10&cryptocurrency_type=tokens&convert=USD";

    const fetchLiqPrice = async () => {
        try {
            // const response = await axios
            //     .get(`${url + qString}`)
            //     .then(response => {
            //         const wanted = ['bitcoin']
            //         const result = response.data.filter(currency =>
            //             wanted.includes('bitcoin'),
            //         )
            //         this.setState({ data: result })
            //     }).
            //     catch(err => console.log(err))
            let qs = `?CMC_PRO_API_KEY=345081cd-816a-4de5-8468-7bdbaecd2f2b`
            // const response = await axios('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest' + qs, {
            //     headers: {
            //         'Access-Control-Allow-Origin': 'http://localhost:',
            //         'Access-Control-Allow-Credentials': 'true'
            //     }
            // }).then((res) => console.log(res.data))
            //     .catch((err) => console.error(err));
            const response = await fetch({
                url: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
                // method: 'get',
                headers: {
                    // 'Access-Control-Allow-Origin': 'https://pro-api.coinmarketcap.com',
                    // 'Access-Control-Allow-Credentials': 'true'
                }
            })
                .then(response => {
                    // console.log(JSON.stringify(response))
                    console.log(response.text())
                }).
                catch(err => console.log(err))
            // response = await axios.get(`${url + qString}`);


            setLiqUrl('$ 0,07078');
        } catch (error) {
            console.log(error);
            setLiqUrl(" -(Api failed)");
        }
    };

    useEffect(() => {
        fetchLiqPrice();
    }, []);

    return liqUrl;
};

export default useFetch;