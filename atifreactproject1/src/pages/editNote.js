import React, { useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {Button, Col, Container, Form, Row as BootstrapRow} from 'react-bootstrap';
import { Storage } from '../services/index.js'
import { InfoIcon } from '../components/index.js'

function EditNote(){

    const { id } = useParams();
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
                const filtered_array = notes.filter(n => n.index != id); // Remove old note from collection
                let new_note_input = {title: titleInput, content: contentInput, index: id, lastModified: Date.now()};
                let new_notes_array = [...filtered_array, new_note_input]; // Add new note to collection
                let sorted_array = new_notes_array.sort((a, b) => a.index > b.index ? 1 : -1); //True, order b before a, False order a before b. Sort to put updated noteObj in correct position
                Storage.setLocalStorage("notes", sorted_array);
                Storage.clearSessionStorage();
                navigate("/");
            }
        }
    };

    const isValid = (string) => string.trim().length > 0 ? true : false;

    const paramsValid = (storage_notes_length) => id >= 0 && id < storage_notes_length ? true : false; // Route id value is within logical range

    useEffect(() => { //Local Storage
        let storage_notes = Storage.getLocalStorage("notes");
        if(storage_notes){
            setNotes(storage_notes);
            if (paramsValid(storage_notes.length)) {
                setTitleInput(storage_notes[id].title);
                setContentInput(storage_notes[id].content);
            }
            else{
                navigate("*");
            }
        }
    }, []);

    useEffect(() => { //Session Storage
        let in_progress_title = Storage.getSessionStorage("title");
        let in_progress_content = Storage.getSessionStorage("content");

        if(in_progress_title) setTitleInput(in_progress_title);
        if(in_progress_content) setContentInput(in_progress_content);
    }, []);

    return(
        <Container fluid>
            <BootstrapRow>
                <Col>
                    <Form noValidate validated={formValidated} onSubmit={handleSubmit}>    

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control value={titleInput} onChange={onTitleInputChange} type='text' placeholder="title" required pattern=".*\S+.*" />
                            <Form.Control.Feedback type="invalid">A title is required to save a note</Form.Control.Feedback>
                            <Form.Control 
                                value={contentInput} 
                                onChange={onContentInputChange} 
                                as="textarea" 
                                rows="10" 
                                placeholder="your notes go here" 
                            />
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

 export { EditNote };
