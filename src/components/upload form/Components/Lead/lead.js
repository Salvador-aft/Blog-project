import React, { useState } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const RichTextEditor = () => {
    const maxLines = 3;
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    const handleEditorChange = (newEditorState) => {
        const contentState = newEditorState.getCurrentContent();
        const rawContentState = convertToRaw(contentState);
        const blocks = rawContentState.blocks;
        let lines = 0;
        blocks.forEach(block => {
            const blockLength = block.text.trim().split(/\r\n|\r|\n/).length;
            lines += blockLength;
        });
        if (lines <= maxLines) {
            setEditorState(newEditorState);
        }
    };

    return (
        <div>
            <h3>Lead</h3>
            <h6 className='py-1'>Create a brief description of your news for the thumbnail (Max 3 lines)</h6>
            <div style={{ backgroundColor: 'white', padding: '10px', marginTop: '10px', maxHeight: '12em', }}>
                <Editor
                    editorState={editorState}
                    onEditorStateChange={handleEditorChange}
                />
            </div>
        </div>
    );
}

export default RichTextEditor;