import React, {Component} from 'react';

class QuotePage extends Component {
    onFileChangeHandler = (e) => {
         e.preventDefault();
         this.setState({
            selectedFile: e.target.files[0]
        });

        console.log("on file change handler");
    };


    uploadFile = () => {
        // const formData = new FormData();
        // formData.append('file', this.state.selectedFile);
        // fetch('http://localhost:8080/upload', {
        //     method: 'post',
        //     body: formData
        // }).then(res => {
        //     if(res.ok) {
        //         console.log(res.data);
        //         alert("File uploaded successfully.")
        //     }
        // });
        console.log("Upload file", this.state.selectedFile.name);
    }

    render() {
        return(
            <div>
                <div>
                    <div>
                        <div className="form-group">
                            <label>Upload Your File</label>
                            <input type="file" className="form-control" name="file" onChange={this.onFileChangeHandler}/>
                            <input type="button" name="upload" value="Upload" onClick={this.uploadFile}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default QuotePage