import React, { useEffect } from 'react';
import { Button, Col, Container, ListGroup, Row as BootstrapRow} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { Storage } from '../services/index.js'
import { Row as MyRow } from '../components/index.js'
import { v4 as uuidv4 } from 'uuid';

function Home(props){
    
    //Display length configuration based on max viewport width
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    let vwContent = vw / 10;
    let vwTitle = vwContent / 2;
    
    //If string exceeds maxLength shorten string & add ellipses at end
    const getSubstring = (str, maxLength) => {
        if(str.length > maxLength) return `${str.substring(0,maxLength).trimEnd()}...`;
        else return str;
    }

    const onDeleteNoteClick = (index) => {

        const new_array = props.notes.filter(n => n.index != index);

        for(let i = 0; i < new_array.length; i++){ // Update index prop values once an existing note is removed
            new_array[i].index = i;
        }

        props.setNotes(new_array);

        new_array.length == 0 ? Storage.clearLocalStorage() : Storage.setLocalStorage("notes", new_array); // To avoid empty array storage
    };

    const renderNote = props.notes.map(function (note, index) {
        return (
            <MyRow 
                key={uuidv4()} 
                index={index} 
                noteObject={{title: getSubstring(note.title, vwTitle), content: getSubstring(note.content, vwContent), lastModified: note.lastModified}} 
                onDeleteNoteClick={onDeleteNoteClick}
            />
        );
    });

    useEffect(() => {

        Storage.clearSessionStorage(); // For event user navigates to home via header link rather then save button

        let storage_notes = Storage.getLocalStorage("notes");

        if(storage_notes){
            props.setNotes(storage_notes);
        }

    }, []);

    return(
        <Container fluid>
            <BootstrapRow>
                <Col>
                
                    <ListGroup as="ol" className="mb-3">
                        {renderNote}
                    </ListGroup>

                    <Link to="/addNote">
                        <Button variant="outline-success">
                            New Leaf
                        </Button>
                    </Link>

                </Col>
            </BootstrapRow>
        </Container>
    );
}

export { Home };