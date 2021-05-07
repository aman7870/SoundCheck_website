import React, { useRef } from 'react';

const ToolBar = ({ onReset, onRun, onSave, onFileUpload }) => {
    const fileUpload = useRef();

    const onFileInput = () => {
        const inputFile = fileUpload.current.files[0];
        onFileUpload(inputFile);
    };

    const uploadClicked = () => {
        fileUpload.current.click();
    };

    // const handleDragOver = event => {
    //     event.stopPropagation();
    //     event.preventDefault();
    //     event.dataTransfer.dropEffect = 'copy';
    // };

    // const handleDrop = event => {
    //     event.stopPropagation();
    //     event.preventDefault();
    //     const files = event.dataTransfer.files;
        
    //     if(files.length > 1) {
    //         alert('More than one file cannot be uploaded !');
    //         return;
    //     }

    //     onFileUpload(files[0]);
    // };

    return (
        <div className="toolbar button-group">
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
            // onDragOver={handleDragOver}
            // onDrop={handleDrop}
            title="Upload">
                <span className="material-icons">upload</span> 
            </button>

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