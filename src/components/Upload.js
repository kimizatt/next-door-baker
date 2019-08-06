import React, { Component } from 'react';
// import './App.css';
import axios from 'axios';
import { v4 as randomString } from 'uuid';
import Dropzone from 'react-dropzone';
// import ReactCrop from 'react-image-crop'
// import 'react-image-crop/dist/ReactCrop.css'



class Upload extends Component {
  constructor() {
    super();
    this.state = {
      isUploading: false,
      url: 'http://via.placeholder.com/200',
      crop: {
          aspect: 1/1
      }
    };
  }

  getSignedRequest = ([file]) => {
    console.log(file)
    this.setState({ isUploading: true });
    // We are creating a file name that consists of a random string, and the name of the file that was just uploaded with the spaces removed and hyphens inserted instead. This is done using the .replace function with a specific regular expression. This will ensure that each file uploaded has a unique name which will prevent files from overwriting other files due to duplicate names.
    const fileName = `${randomString()}-${file.name.replace(/\s/g, '-')}`;

    // We will now send a request to our server to get a "signed url" from Amazon. We are essentially letting AWS know that we are going to upload a file soon. We are only sending the file-name and file-type as strings. We are not sending the file itself at this point.
    axios
      .get('/api/signs3', {
        params: {
          'file-name': fileName,
          'file-type': file.type,
        },
      })
      .then(response => {
        const { signedRequest, url } = response.data;
        this.uploadFile(file, signedRequest, url);
      })
      .catch(err => {
        console.log(err);
      });
  };

  uploadFile = (file, signedRequest, url) => {
    const options = {
      headers: {
        'Content-Type': file.type,
      },
    };

    axios
      .put(signedRequest, file, options)
      .then(response => {
        this.setState({ isUploading: false, url });
        axios.put('/api/updateimage', { url }).then(res => {
            console.log(res);
            let data =  JSON.parse(res.config.data)
            this.setState({
              url: data.url
            })
        }).catch(console.log);
        // THEN DO SOMETHING WITH THE URL. SEND TO DB USING POST REQUEST OR SOMETHING
    //bakerDashboard  })
    //   .catch(err => {
    //     this.setState({
    //       isUploading: false,
    //     });
    //     if (err.response.status === 403) {
    //       alert(
    //         `Your request for a signed URL failed with a status 403. Double check the CORS configuration and bucket policy in the README. You also will want to double check your AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY in your .env and ensure that they are the same as the ones that you created in the IAM dashboard. You may need to generate new keys\n${
    //           err.stack
    //         }`
    //       );
    //     } else {
    //       alert(`ERROR: ${err.status}\n ${err.stack}`);
    //    }
    //  console.log(err)
      });
  };

  handleOnCropChange = (crop) => {
      this.setState({crop})
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.url !== this.state.url) {
      console.log('hit comp update')
      setTimeout(() => this.render(), 3000)
    }
  }

  render() {
    console.log('this.state :', this.state);
    const { url, isUploading } = this.state;
    return (
      <div className='dropzone'>
        
                <Dropzone
                onDropAccepted={this.getSignedRequest}
                     >
                {({getRootProps, getInputProps}) => (
                <section>
                    <div {...getRootProps({className:"dropzone"})}>
                        <input {...getInputProps()} />
                    <img src={url} alt=""  />
                    <div className='file-upload-instructions'>Drag 'n' drop a file or click to select files</div>
                    {isUploading ? (<div style={{fontSize: 16}}>
                      Loading...
                    </div>):(null) 
                      }
                </div>
                </section>
            )}
        </Dropzone>
        
       

        
      </div>
    );
  }
}

export default Upload;

