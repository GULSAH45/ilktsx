import FetchData, { ApiResponse } from "./fetchData";
import { Button, Container } from "react-bootstrap";
import { CharacterCard } from "./CharacterCardComponent";
import "./App.css";

function App() {
  return (
    <>
      <Container>
        <h1>Rick And Morty Characters List</h1>
        <FetchData
          url="https://rickandmortyapi.com/api/character"
          render={(data: ApiResponse) => (
            <div>
              {data.results.map((character) => (
                <CharacterCard
                  key={character.id}
                  name={character.name}
                  image={character.image}
                >
                  <Button href="{character.url}" target="_blank">
                    Go details
                  </Button>
                </CharacterCard>
              ))}
            </div>
          )}
        />
      </Container>
    </>
  );
}

export default App;
