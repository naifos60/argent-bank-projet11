import PropTypes  from "prop-types";

function Feature({children, title, content}){
    return(
            <div className="feature-item">
                {children}
                <h3 className="feature-item-title">{title}</h3>
                <p>
                    {content}
                </p>
            </div>
    )
}

Feature.propsTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
}

export default Feature;