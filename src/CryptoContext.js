import React, { useContext, useEffect, useState } from 'react';
import { createContext} from 'react';
import axios from 'axios';
import { CoinList } from './config/api';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from "./firebase";

const Crypto = createContext();

const CryptoContext = ({ children }) => {
    const [currency, setCurrency] = useState("USD");
    const [symbol, setSymbol] = useState("$");
    const [coins, setCoins] = useState([])
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [alert, setAlert] = useState({
        open: false,
        message: "",
        type: "success",
    });
    const [watchlist, setWatchlist] = useState([])

    useEffect(() => {
      onAuthStateChanged(auth, user => {
        if(user) setUser(user);
        else setUser(null);
      });
    }, [])


    const fetchCoins = async () => {
        setLoading(true);

        const { data } = await axios.get(CoinList(currency));

        setCoins(data);
        setLoading(false);
    };

    useEffect(() => {
        if(currency === "USD") setSymbol("$");
        else if(currency === "EUR") setSymbol("€")
        else if(currency === "GBP") setSymbol("£")
        else if(currency === "ETH") setSymbol("Ξ")
        
    }, [currency]);

    return (
    <Crypto.Provider 
    value={{
        currency, 
        symbol, 
        setCurrency, 
        coins, 
        loading, 
        fetchCoins,
        alert,
        setAlert,
        user,
        watchlist,
    }}>
        {children}
    </Crypto.Provider>
  )
};

export default CryptoContext;

export const CryptoState = () => {
    return useContext(Crypto);
}