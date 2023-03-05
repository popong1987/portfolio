import Card from 'react-bootstrap/Card';

const ExperienceCard = ({title, place, period, skills }) => {


    return (<Card className={"experienceCard"}>
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{place} | {period}</Card.Subtitle>

            {skills.map(v => <div key={v.id}>{v.skill}</div>)}
        </Card.Body>
    </Card>)
}

export default ExperienceCard;