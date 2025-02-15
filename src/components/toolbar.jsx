import React, { useRef } from 'react';

const ToolBar = ({ onReset, onRun, onSave, onFileUpload, fileName, onChange }) => {
    const fileUpload = useRef();

    const onFileInput = () => {
        const inputFile = fileUpload.current.files[0];
        onFileUpload(inputFile);
    };

    const uploadClicked = () => {
        fileUpload.current.click();
    };

    return (
        <div className="toolbar">
            <button 
            className='editor-header-button m-2'
            onClick={onReset}
            title="Reset">
                <span className="material-icons">replay</span> 
            </button>

            <button 
            className='editor-header-button m-2'
            onClick={onSave}
            title="Save">
                <span className="material-icons">download</span> 
            </button>

            <input 
            type="file" 
            id="fileUpload"
            ref={fileUpload}
            onChange={onFileInput}
            accept='.raag'
            hidden/>

            <button 
            className='editor-header-button m-2'
            onClick={uploadClicked}
            title="Upload">
                <span className="material-icons">upload</span>
            </button>

            {/* <span
            id="toolbar-filename"
            title="File Name">
                {fileName}
            </span> */}

            <input 
            type="text" 
            value={fileName} 
            id="toolbar-filename"
            onChange={onChange}
            spellCheck="false"
            placeholder="filename.."/>

            

            <button 
            className='editor-header-button m-2 float-right'
            onClick={onRun}
            title="Run">
                <span className="material-icons">fast_forward</span>
            </button>
        </div>
    );
};
 
export default ToolBar;