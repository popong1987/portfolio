import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const TitleDiv = styled.div`
    font-family: 'Hind Madurai', sans-serif;
  font-size: 2rem;
  color: black;
  padding-top: 2%;
`

const ChevronBtn = styled.button`
  font-size: 2rem;
  letter-spacing: 3px;
  padding-right: 1%;
  color: black;
  font-weight: 200;
  background: none;
  border: none;
  &:hover {
    cursor: pointer;
  }
`

const ComponentTitle = ({title, isOpen, toggleIsOpen}) => {
    return (
        <TitleDiv>
            <ChevronBtn onClick={toggleIsOpen}>
                <FontAwesomeIcon icon={isOpen ? faChevronDown : faChevronUp}/>
            </ChevronBtn>
            {title}
        </TitleDiv>
    )
}

const Component = ({ title, children, isOpen, toggleIsOpen}) => {
    

    return (
        <div className='component'>
            <ComponentTitle title={title} isOpen={isOpen} toggleIsOpen={toggleIsOpen}/>
            {isOpen && children}
        </div>
    )
}

export default Component;