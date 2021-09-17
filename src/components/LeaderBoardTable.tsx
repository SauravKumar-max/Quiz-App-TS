import {
    Table,
    Thead,
    Tr,
    Th,
    Tbody,
    Td,
  } from "@chakra-ui/react";
import { UsersScores } from "../pages/private/Leaderboard";


export function LeaderBoardTable({ sortedScores }: { sortedScores: UsersScores[] } ){
    return (
        <Table w="100%" variant="simple">
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
              {sortedScores.map((user:UsersScores, index:number) => {
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
                )
              })}
            </Tbody>
          </Table>
    )
}