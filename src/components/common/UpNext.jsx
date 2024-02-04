
import { Box, Typography, styled } from '@mui/material';


const Component = styled(Box)`
width: 40%;
display: flex;
flex-direction: column;
align-items: baseline;
padding-left: 20px;
// background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(34,34,34,1) 50%, rgba(0,0,0,1) 100%);
background: linear-gradient(180deg, rgba(31,31,31,1) 0%, rgba(20,20,20,1) 50%, rgba(0,0,0,1) 100%);
&>p{
    color: #F5C518;
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 10px;
}
`
const Poster = styled('img')({
    width: 88
})
const Wrapper = styled(Box)`
color: #FFFFFF;
display: flex;
&>p {
   margin-left: 20px; 
}
`

const UpNext = ({ movies }) => {
    return (
        <Component>
            <Typography style={{ paddingTop: 10, fontSize: 20 }}>Up Next</Typography>
            {
                movies.splice(0, 3).map(movie => (
                    <Wrapper>
                        <Poster src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt='Poster' />
                        <Typography>{movie.original_title}</Typography>
                    </Wrapper>
                ))
            }
        </Component>)
}

export default UpNext;