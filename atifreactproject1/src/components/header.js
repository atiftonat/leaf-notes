import React, { useState } from 'react';
import { Button, Container, Dropdown, Offcanvas, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Storage } from '../services/index.js';
import style from './styles/header.module.css';

function Header(props) {

    // Offcanvas configuration
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const onClearStorageClick = () => {
        Storage.clearLocalStorage();
        props.setNotes([]);
        handleClose();
    };

    const onThemeSelect = (theme) => {
        Storage.setLocalStorage("theme", theme);
        window.location.reload(false); //Forced page reload due to inconsistent theme implementation results via state hook. Possible future implementation.
    };

    return(
        <Navbar bg="light" expand={false} className="mb-3">
            <Container fluid>

                <Link to="/" className={style.navLink}>
                    <Navbar.Brand>
                        <span className="text-success">Leaf</span> Notes
                    </Navbar.Brand>
                </Link>
                
                <Navbar.Toggle onClick={handleShow} />

                <Navbar.Offcanvas placement="end" show={show} onHide={handleClose}>

                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title />
                    </Offcanvas.Header>

                    <Offcanvas.Body>
                        <Nav>
                            <Link to="/">
                                <Button variant="outline-success" className={style.bttn} onClick={onClearStorageClick}>
                                    Clear All
                                </Button>
                            </Link>

                            <Dropdown>
                                <Dropdown.Toggle className={style.bttn} variant="outline-success">
                                    Themes
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={() => onThemeSelect("journal")}>Journal</Dropdown.Item>
                                    <Dropdown.Item onClick={() => onThemeSelect("lumen")}>Lumen</Dropdown.Item>
                                    <Dropdown.Item onClick={() => onThemeSelect("lux")}>Lux</Dropdown.Item>
                                    <Dropdown.Item onClick={() => onThemeSelect("morph")}>Morph</Dropdown.Item>
                                    <Dropdown.Item onClick={() => onThemeSelect("solar")}>Solar</Dropdown.Item>
                                    <Dropdown.Item onClick={() => onThemeSelect("vapor")}>Vapor</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>

            </Container>
        </Navbar>
    );
};

export { Header };