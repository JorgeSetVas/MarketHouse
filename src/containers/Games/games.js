import { useEffect, useState } from 'react';
import games from '../../components/games';
import axios from '../../axios';

const game = (props) => {

    const [gamesState, setGamesState] = useState({
        ZeldaGames: []
    });

    useEffect(() => {
        axios.get('/games')
        .then(response => {
            let gamesInfo = response.data.results;
            gamesInfo = gamesInfo.map(game => ({
                
                
            }));
        })
    }, [input])
}