import Card from 'react-bootstrap/Card';

const ExperienceCard = ({title, place, period, skills }) => {


    return (<Card className={"experienceCard"}>
        <Card.Body>
            <Card.Title><h2>{title.toUpperCase()}</h2></Card.Title>
            <Card.Subtitle className="mb-4 mt-2">{place} | {period}</Card.Subtitle>

            {skills.map(v => <div key={v.id}>- {v.skill}</div>)}
        </Card.Body>
    </Card>)
}

export default ExperienceCard;