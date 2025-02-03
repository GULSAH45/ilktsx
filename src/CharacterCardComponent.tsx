interface CharacterCardProps {
    name: string;
    image: string;
    children: React.ReactNode
}

const characterCard ({name, image, children}: CharacterCardProps) => {
    return(
        <Card style={{ width: '18rem' }}>
        <Card.Img src={image} variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
         {children}
          <Button variant="primary">Go details</Button>
        </Card.Body>
      </Card>

    )
};

export default characterCard