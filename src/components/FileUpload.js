import React, {Component} from 'react';

class FileUpload extends Component {
    constructor() {
        super();
        this.state = {selectedFile: ''}
    }

    onFileChangeHandler = (event) => {
        event.preventDefault();
        const isValidSize = this.validateSize(event);
        if (isValidSize) {
            console.log("add selected file");
            this.setState({
                selectedFile: event.target.files[0]
            });
        }

    };

    validateSize = (event) => {
        let maxSize = 100000000; // 100 MB
        let err = '';
        let file = event.target.files[0];
        console.log('file', file.name, 'file size =', file.size);
        if (file.size > maxSize) {
            err = file.name + ' exceeds the size limit of 100MB\n';
            alert(err);
            return false
        }
        return true
    };

    uploadFile = () => {
        let file = this.state.selectedFile;
        const formData = new FormData();
        formData.append('file', file);
        // TODO - implement upload of file
        // fetch('http://localhost:8080/upload', {
        //     method: 'post',
        //     body: formData
        // }).then(res => {
        //     if(res.ok) {
        //         console.log(res.data);
        //         alert("File uploaded successfully.")
        //     }
        // });
        console.log("Upload file", file.name);
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group files">
                                <label>Upload File </label>
                                <input type="file" className="form-control" name="file"
                                       onChange={this.onFileChangeHandler}/>
                            </div>
                            <div className="col-md-6 pull-right">
                                <button width="100%" className="btn btn-info" onClick={this.uploadFile}>Upload</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FileUpload