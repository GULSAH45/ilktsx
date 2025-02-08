import { Button, Card } from "react-bootstrap";

export interface CharacterCardProps {
  name: string;
  image: string;
  children?: React.ReactNode;
}

export const CharacterCard: React.FC<CharacterCardProps> = ({
  name,
  image,
  children,
}: CharacterCardProps) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img src={image} variant="top" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        {children}
        <Button variant="primary">Go details</Button>
      </Card.Body>
    </Card>
  );
};

export default CharacterCard;
