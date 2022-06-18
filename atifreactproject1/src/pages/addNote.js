import React, {useState, useEffect} from 'react';
import {Button, Col, Container, Form, Row as BootstrapRow} from 'react-bootstrap';
import { Storage } from '../services/index.js'
import {useNavigate} from 'react-router-dom';
import { InfoIcon } from '../components/index.js'

function AddNote() {
    
    const navigate = useNavigate();
    const [notes, setNotes] = useState([]);
    const [titleInput, setTitleInput] = useState("");
    const [contentInput, setContentInput] = useState("");   
    const [formValidated, setFormValidated] = useState(false);

    const onTitleInputChange = (event) => {
        setTitleInput(event.target.value);
        Storage.setSessionStorage("title", event.target.value);
    }

    const onContentInputChange = (event) => {
        setContentInput(event.target.value);
        Storage.setSessionStorage("content", event.target.value);
    }

    // Bootstrap form validation
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        setFormValidated(true);
        onSaveClick(true);
    };

    const onSaveClick = (isFormValidated) => {
        if(isFormValidated){
            if(isValid(titleInput)){
                let new_note_input = {title: titleInput, content: contentInput, lastModified: Date.now(), index: `${notes.length}`}; //Length corresponds to correct index for new obj
                let new_notes_array = [...notes, new_note_input];
                Storage.setLocalStorage("notes", new_notes_array);
                Storage.clearSessionStorage();
                navigate("/");
            };
        }
        //else
    };

    const isValid = (string) => string.trim().length > 0 ? true : false;

    useEffect(() => { //Local Storage       
        let storage_notes = Storage.getLocalStorage("notes");
        if(storage_notes) setNotes(storage_notes);
    }, []);

    useEffect(() => { //Session Storage
        let in_progress_title = Storage.getSessionStorage("title");
        let in_progress_content = Storage.getSessionStorage("content");
        if(in_progress_title) setTitleInput(in_progress_title);
        if(in_progress_content) setContentInput(in_progress_content);       
    }, []);

    return (
        <Container fluid>
            <BootstrapRow>
                <Col>
                    <Form noValidate validated={formValidated} onSubmit={handleSubmit}>    

                        <Form.Group className="mb-3">
                            <Form.Control value={titleInput} onChange={onTitleInputChange} type='text' placeholder="title" required pattern=".*\S+.*" />
                            <Form.Control.Feedback type="invalid">A title is required to save a note</Form.Control.Feedback>
                            <Form.Control value={contentInput} onChange={onContentInputChange} as="textarea" rows={3} placeholder="your notes go here"/>
                        </Form.Group>

                        <Button variant="outline-success" type="submit">
                            Save
                        </Button>

                        <InfoIcon />

                    </Form>
                </Col>
            </BootstrapRow>
        </Container>
    );
}

export { AddNote };