import { useEffect, useState } from 'react';

//components
import Header from '../components/common/Header';
import Banner from '../components/common/Banner';
import UpNext from '../components/common/UpNext';
import Slide from '../components/common/Slide';

import { categoryMovies } from '../services/api';
import { NOWPLAYING_API_URL } from '../constants/constant';

import { Box, Typography, styled } from '@mui/material';

const Wrapper = styled(Box)`
display: flex;
padding: 20px 0;
`
const Component = styled(Box)`
padding: 0 115px;`

const Featured = styled(Typography)`
color: #FEBD00;
font-size: 22px;
font-weight: 800;
`

const Home = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const getData = async () => {
            let response = await categoryMovies(NOWPLAYING_API_URL);
            setMovies(response.results);
        }
        getData();

    }, [])

    return (
        <>
            <Header />
            <Component>
                <Wrapper>
                    <Banner movies={movies} />
                    <UpNext movies={movies} />
                </Wrapper>
                <Featured>Featured today</Featured>
                <Slide movies={movies} />
            </Component>
        </>
    )
}

export default Home;