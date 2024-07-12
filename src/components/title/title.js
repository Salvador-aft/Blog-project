import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './title.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

function Title() {
    return (
        <div>
            <Container fluid="md">
                <Row className="d-flex align-items-center">
                    <Col><h1>Latest blogs uploaded</h1></Col>
                    <Col className='d-flex justify-content-end'>
                        <Link to="/upload" className='text-dark'>
                            <FontAwesomeIcon icon={faCirclePlus} size="lg" />
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Title;