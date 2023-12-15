import React, { useEffect, useState } from "react";
import axios from "axios";

const TokenSupply = () => {
  const [totalSupply, setTotalSupply] = useState(null);
  const [circulatingSupply, setCirculatingSupply] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch total supply
        const totalSupplyResponse = await axios.get(
          "https://liq-stg-totalsupply.herokuapp.com/totalSupply"
        );
        setTotalSupply(totalSupplyResponse.data.totalSupply);

        // Fetch circulating supply
        const circulatingSupplyResponse = await axios.get(
          "https://liq-stg-circulatingsupply.herokuapp.com/circulatingSupply"
        );
        setCirculatingSupply(circulatingSupplyResponse.data.circulatingSupply);
      } catch (error) {
        console.error("Error fetching supply:", error);
      }
    };

    fetchData();
  }, []); // Run only once on component mount

  return (
    <div>
      <h2>Total Supply: {totalSupply}</h2>
      <h2>Circulating Supply: {circulatingSupply}</h2>
    </div>
  );
};

export default TokenSupply;
