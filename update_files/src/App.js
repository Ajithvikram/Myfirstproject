import React, { Component } from 'react';
var uploadImage;
var imageFile;
var newPath;
var data;

class Upload extends Component {
  constructor(props) {
    super(props);
    this.state={
      file:'',
      imagepreviewurl:''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleImagaChange = this.handleImagaChange.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log('handle uploading', this.state.file);
  }
  handleImagaChange(event) {
    event.preventDefault();
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file:file,
        imagepreviewurl: reader.result
      });
    }
    reader.readAsDataURL(file)
  }
  render()  {
    let{imagepreviewurl} = this.state;
    let $imagePreview = null;
    if(imagepreviewurl) {
      $imagePreview = (<img src={imagepreviewurl}/>);
    }
    else{
      $imagePreview = (<div>please select the image</div>);
    }
    return(
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input type="file" onChange={(event) => this.handleImagaChange(event)}/>
          <button type="submit" onClick={(event) => this.handleSubmit(event)}>Upload</button>
        </form>
        <div>
          {$imagePreview}
        </div>
      </div>
    );
  }
}
export default Upload;

uploadImage(imageFile); {
  return new Promise((resolve,reject) => {
      let imageFormData = new FormData();
      imageFormData.append('imageFile',imageFile);
      var ajax = new XMLHttpRequest();
      ajax.open('post' , '/upload', true);
      ajax.onload = function() {
        if(this.status==200) {
          resolve(this.response);
        } else {
          reject(this.statusText);
        }
      };
      ajax.send(imageFormData);
  });
}

let multiparty = require('multiparty');
let fs =require('fs');

function saveImage(request,response) {
  let form = new multiparty.Form();
  form.parse(request, (err, fields,files) => {
    let{path : tempPath ,orginalFilename} = files.imageFile[0];
    let copyToPath = "./component/" + orginalFilename;
    fs.readFile(tempPath, (err,fields,files) => {
      fs.writeFile(newPath, data, (err) => {
        fs.unlink("File to upload:" + newPath);
      });
    });
  })
}

