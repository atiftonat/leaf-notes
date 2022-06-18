import React from 'react';
import { Button, ListGroup} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import style from './styles/row.module.css';
import { Calendar } from '../services/index.js'

//Custom Row component, import as MyRow to avoid ambiguity with Bootstrap Row
function Row(props) {

    const navigate = useNavigate();

    const onDeleteNoteClick = () => {
        props.onDeleteNoteClick(props.index);
    };

    const onRowClick = () => {
        navigate(`/editNote/${props.index}`);
    };
    
    return(
        <ListGroup.Item as="li" className="d-flex align-items-start" action>
            
            <div className={style.container} role="button" onClick={onRowClick}>
                
                <div className="fw-bold">{props.noteObject.title}</div>
                <span>{props.noteObject.content}</span>
                <br />
                <span className={style.date}>{Calendar.getLocalDate(props.noteObject.lastModified)}</span>

            </div>

            <Button variant="outline-danger" size="sm" className="py-0 px-2 rounded" onClick={onDeleteNoteClick}>
                Delete
            </Button>

        </ListGroup.Item>
    );
}

export { Row };