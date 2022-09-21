import React, {Fragment} from 'react';
import CSSTransition from 'react-transition-group';

import {
    Row, Col
} from 'reactstrap';

import CarouselDefault from './Carousel';

const Carousel = (props) => {
    return (
        <Fragment>
            <CSSTransition
                component="div"
                transitionName="TabsAnimation"
                transitionAppear={true}
                transitionAppearTimeout={0}
                transitionEnter={false}
                transitionLeave={false}>
                <Row className="slick-slider-md">
                    <Col lg="12">
                        <CarouselDefault/>
                    </Col>
                </Row>
            </CSSTransition>
        </Fragment>
    );
};

export default Carousel;