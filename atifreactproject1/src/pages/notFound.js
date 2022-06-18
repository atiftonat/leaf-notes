import React from "react";
import {Col, Container, Row as BootstrapRow} from 'react-bootstrap';

function NotFound(){
    return (
        <Container fluid>
            <BootstrapRow>
                <Col>
                    <p>404 Error: Page Not Found</p>
                    <p>There's nothing here!</p>
                </Col>
            </BootstrapRow>
        </Container>
    );
}

export { NotFound };