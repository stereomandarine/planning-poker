import React from 'react';
import AnimatedCard from './animatedCard';
import SimpleCard from './simpleCard';

const Card = (props) => {
    return(
        <React.Fragment>
            { props.zenMode ? <SimpleCard {...props} /> : <AnimatedCard {...props} />  }
        </React.Fragment>
    )
}

export default Card