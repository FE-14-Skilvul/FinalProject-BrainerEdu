import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

const KelasContext = createContext();

const KelasProvider = ({ children }) => {
    const [kelas, setKelas] = useState([]);
    const [loading, setLoading] = useState(true);
    const getKelas = async () => {
        try {
            setLoading(false);
            let response = await axios.get(`${API}/kelas`);
            setKelas(response.data);
            console.log(response.data);
        } catch (e) {
            setLoading(false);
            console.log(e.message);
        }
    }

    useEffect(() => {
        getKelas()
    }, [])

    return (
        <KelasContext.Provider value={{ kelas, loading }}>
            {children}
        </KelasContext.Provider>
    )
}

export { KelasContext, KelasProvider }
