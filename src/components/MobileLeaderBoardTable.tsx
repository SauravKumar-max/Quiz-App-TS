import { Grid, GridItem, Box } from "@chakra-ui/react";
import { UsersScores } from "../pages/private/Leaderboard";


export function MobileLeaderBoardTable({ sortedScores }: { sortedScores: UsersScores[] }){
    return(
        <Grid
            w="100%"
            h="fit-content"
            templateColumns="repeat(1, 1fr)"
        >
            <GridItem 
                w="100%" 
                display="flex" 
                alignItems="center" 
                justifyContent="space-around"
                color="#a0aec0"
                borderBottom="solid 1px #2d3748"
                py="0.6rem"
                fontSize="0.8rem" 
                fontWeight="bold"
            >
                <Box w="3rem"> RANK </Box>
                <Box w="4rem"> PLAYER </Box>
                <Box w="5rem"> ASTRNOMY	</Box>
                <Box w="4rem"> SCIENCE </Box>
                <Box w="4rem"> FRIENDS </Box>
            </GridItem>

            {
                sortedScores.map((user:UsersScores, index:number) => {
                    return (
                        <GridItem 
                            w="100%" 
                            display="flex" 
                            alignItems="center" 
                            justifyContent="space-around"
                            borderBottom="solid 1px #2d3748"
                            py="0.6rem"
                            fontSize="1rem" 
                            textAlign="center"
                        >
                            <Box w="3rem"> { index+1 } </Box>
                            <Box w="4rem"> { user.name } </Box>
                            <Box w="5rem"> { user.score.astronomy }	</Box>
                            <Box w="4rem"> { user.score.science } </Box>
                            <Box w="4rem"> { user.score.friends } </Box>
                        </GridItem>
                      
                    )
                })
            }
        </Grid>
    )
}