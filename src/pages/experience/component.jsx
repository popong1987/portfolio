import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { Col } from 'react-bootstrap';

const TitleDiv = styled.div`
    
  font-size: 1.8rem;
  font-weight: bold;
  color: black;
  padding-top: 2%;
  padding-bottom: 1.5%;
`

const ChevronBtn = styled.span`

  font-size: 2rem;
  letter-spacing: 3px;
  padding-right: 1%;
  font-weight: 200;
  border: none;
  &:hover {
    cursor: pointer;
  }
`

const ComponentTitle = ({ title, isOpen, toggleIsOpen, color, background }) => {
    const style = {
        fontSize: '1.8rem',
        fontWeight: 'bold',
        paddingTop: '2%',
        paddingBottom: '1.5%',
    }


    return (
        <div style={style} >
            <ChevronBtn onClick={toggleIsOpen} >
                <FontAwesomeIcon icon={isOpen ? faChevronDown : faChevronUp} />
            </ChevronBtn>
            {title}
        </div>
    )
}

const Component = ({ title, children, isOpen, toggleIsOpen }) => {
    const style = {

        paddingBottom: '5%',
        
    }

    return (
        <div style={style} >
            <ComponentTitle title={title} isOpen={isOpen} toggleIsOpen={toggleIsOpen} />
            {isOpen && children}
        </div>
    )
}

export default Component;