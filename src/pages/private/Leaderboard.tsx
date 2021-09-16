import {
  Container,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Spinner,
  Box,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

export type Scores = {
  _id: string;
  name: string;
  score: {
    astronomy: number;
    friends: number;
    science: number;
  };
};

export function Leaderboard(): JSX.Element {
  const [userScores, setScores] = useState([] as Scores[]);
  const [spinner, setSpinner] = useState(false);
  const sortedScores = getSortedScores();

  function getSortedScores(): Scores[] {
    return userScores
      .sort(
        (a, b) =>
          (b.score.astronomy + b.score.science + b.score.friends) - 
          (a.score.astronomy + a.score.science + a.score.friends)
      )
      .slice(0, 10);
  }

  useEffect(() => {
    (async () => {
      setSpinner(true);
      try {
        const api = "https://quizapp.sauravkumar007.repl.co/scores/allscores";
        const response = await axios.get(api);
        setSpinner(false);
        setScores(response.data.allScores);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      {spinner ? (
        <Box
          height="100vh"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Spinner size="lg" />
        </Box>
      ) : (
        <Container
          maxW="container.md"
          px="-0.5"
          mt="10rem"
          borderLeft="solid 1px rgb(45, 55, 72)"
          borderRight="solid 1px rgb(45, 55, 72)"
          borderTop="solid 1px rgb(45, 55, 72)"
        >
          <Table maxW="container.md" variant="simple">
            <Thead>
              <Tr>
                <Th borderColor="rgb(45, 55, 72)" textAlign="center">
                  Rank
                </Th>
                <Th borderColor="rgb(45, 55, 72)" textAlign="center">
                  Player
                </Th>
                <Th borderColor="rgb(45, 55, 72)" textAlign="center">
                  Astrnomy
                </Th>
                <Th borderColor="rgb(45, 55, 72)" textAlign="center">
                  Science
                </Th>
                <Th borderColor="rgb(45, 55, 72)" textAlign="center">
                  Friends
                </Th>
              </Tr>
            </Thead>

            <Tbody>
              {sortedScores.map((user, index) => {
                return (
                  <Tr key={user._id}>
                    <Td borderColor="rgb(45, 55, 72)" textAlign="center">
                      {index + 1}
                    </Td>
                    <Td borderColor="rgb(45, 55, 72)" textAlign="center">
                      {user.name}
                    </Td>
                    <Td borderColor="rgb(45, 55, 72)" textAlign="center">
                      {user.score.astronomy}
                    </Td>
                    <Td borderColor="rgb(45, 55, 72)" textAlign="center">
                      {user.score.science}
                    </Td>
                    <Td borderColor="rgb(45, 55, 72)" textAlign="center">
                      {user.score.friends}
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </Container>
      )}
    </>
  );
}
