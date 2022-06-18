import React from "react";
import { Route, Routes } from "react-router-dom";
import { AddNote, EditNote, Home, NotFound} from "../pages/index.js";

function Router(props){
    return (
        <Routes>
            <Route path="/" element={<Home notes={props.notes} setNotes={props.setNotes}/>}/>
            <Route path="/addNote" element={<AddNote />} />
            <Route path="/editNote/:id" element={<EditNote />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export { Router };