import React, {Component} from 'react'

class UploadCropped extends Component {

    


// on change show image with crop options
upload.addEventListener('change', (e) => {
  if (e.target.files.length) {
		// start file reader
    const reader = new FileReader();
    reader.onload = (e)=> {
      if(e.target.result){
				// create new image
				let img = document.createElement('img');
				img.id = 'image';
				img.src = e.target.result
				// clean result before
				result.innerHTML = '';
				// append new image
        result.appendChild(img);
				// show save btn and options
				save.classList.remove('hide');
				options.classList.remove('hide');
				// init cropper
				cropper = new Cropper(img);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  }
});

// save on click
save.addEventListener('click',(e)=>{
  e.preventDefault();
  // get result to data uri
  let imgSrc = cropper.getCroppedCanvas({
		width: img_w.value // input value
	}).toDataURL();
  // remove hide class of img
  cropped.classList.remove('hide');
	img_result.classList.remove('hide');
	// show image cropped
  cropped.src = imgSrc;
  dwn.classList.remove('hide');
  dwn.download = 'imagename.png';
  dwn.setAttribute('href',imgSrc);
});

    render () {
        let result = document.querySelector('.result'),
img_result = document.querySelector('.img-result'),
img_w = document.querySelector('.img-w'),
img_h = document.querySelector('.img-h'),
options = document.querySelector('.options'),
save = document.querySelector('.save'),
cropped = document.querySelector('.cropped'),
dwn = document.querySelector('.download'),
upload = document.querySelector('#file-input'),
cropper = '';
        return (
            <div className="page">
	        <h2>Upload ,Crop and save.</h2>
	            {/* <!-- input file --> */}
	        <div class="box">
		        <input type="file" id="file-input"/>
	        </div>
	            {/* <!-- leftbox --> */}
	        <div class="box-2">
		        <div class="result"></div>
	            </div>
	            {/* <!--rightbox--> */}
	        <div class="box-2 img-result hide">
		        {/* <!-- result of crop --> */}
		    <img class="cropped" src="" alt="" />
	        </div>
	        {/* <!-- input file --> */}
	    <   div class="box">
		    <div class="options hide">
			<label> Width</label>
			    <input type="number" class="img-w" value="300" min="100" max="1200" />
		    </div>
		    {/* <!-- save btn --> */}
		    <button class="btn save hide">Save</button>
		    {/* <!-- download btn --> */}
		    <button href="" class="btn download hide">Download</button>
	    </div>
        </div>
        )
    }
}