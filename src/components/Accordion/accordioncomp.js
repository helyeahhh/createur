import React, {useState, useRef} from 'react';
import PropTypes from 'prop-types';
import Chevron from './chevron'
import '../../App.css';

const Accordion = ({title, sectionContent, iconHeight, iconWidth, iconColor}) => {
    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");

    const content = useRef(null);

    const toggleAccordion = () => {
        setActiveState(setActive === "" ? "active" : "");
        setHeightState(
            setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
        );
        console.log(content.current.scrollHeight);
    };

    return (
        <div className="accordion-section">
            <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
                <h4 className="accordion-title">{title}</h4>
                <Chevron height={iconHeight} width={iconWidth} color={iconColor} />
            </button>
            <div 
                ref={content}
                style={{ maxHeight: `${setHeight}` }}
                className="accordion-content"
            >
                <div 
                    className="accordion-text"
                    dangerouslySetInnerHTML={{ __html: sectionContent}}>
                </div>
            </div>
        </div>
    )
};

Accordion.propTypes = {
    title: PropTypes.string.isRequired,
    sectionContent: PropTypes.string.isRequired,
}

export default Accordion;