import { CaretDown, CaretRight } from "@phosphor-icons/react/dist/ssr";
import { useState } from 'react';
import { Container } from './styles';

interface CollapseProps {
  title: string;
  content: string;
}

const Collapse = ({ title, content }: CollapseProps) => {
  const [isOpen, setIsOpen] = useState(true)

  const toggleCollapse = () => {
    setTimeout(() => {
      setIsOpen(!isOpen)
    }, 300)
  }

  return (
    <Container>
      <div className="collapse-header" onClick={toggleCollapse}>
        <h2>
          {title}
          <button
          className="collapse-button">
            {isOpen ? <CaretDown size={22} cursor="pointer" color="#f1f2f3"/> : <CaretRight size={22} cursor="pointer" color="#f1f2f3"/>}
          </button>
        </h2>
      </div>
      {isOpen && <p className="collapse-content">{content}</p>}
    </Container>
  );
};

export default Collapse;
