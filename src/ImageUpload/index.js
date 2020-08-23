import React, { useState } from 'react';
import PluswithCircleIcon from '../SVGIcons/PlusWithCircleIcon';
import CloseIcon from '../SVGIcons/CloseIcon';
import ImageInput from '../ImageInput';
import Button from '../Button';
import './index.scss';

const ImageUpload = ({ setImagesURL, imagesURL, onImageUploadSubmit, onDeleteButtonClick }) => {
  const [crossButtonVisible, setCrossButtonVisible] = useState(false);
  const [howeredImageIndex, setHoweredImageIndex] = useState('');
  let fileInputRef = null;

  const onMouseLeave = () => {
    setCrossButtonVisible(false);
    setHoweredImageIndex('');
  }

  const onMouseHover = index => {
    setCrossButtonVisible(true);
    setHoweredImageIndex(index)
  }

  const onUploadClick = e => {
    console.log('On Upload Click');
    fileInputRef.click();
    e.stopPropagation();
  }

  const getInputCompRef = ref => {
    fileInputRef = ref;
  }

  const addPopup = () => {
    console.log('Image Upload Successfully');
  }

  const fileToBase64 = (file, resolve) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  const onImageInput = (formData, file) => {
    fileToBase64(file.fileName).then(result => {
      setImagesURL([...imagesURL, result]);
    })
  }

  return <div className="image-upload-container">
    <div className="select-image-container">
      <div className="select-image-header">
        Upload Image for Carousel
      </div>
      <div className="upload-image-container">
      { imagesURL && imagesURL.length > 0 &&
        imagesURL.map((imageURL, index) =>
            <div onMouseEnter={_ => onMouseHover(index)}
              onMouseLeave={_ => onMouseLeave(index)}
              className="image-thumbnail-wrapper" onClick={_ => onDeleteButtonClick(index)}>
              <img src={imageURL} alt="IMAGEID" width="130" height="104"/>
              {crossButtonVisible && howeredImageIndex === index &&
                <div className="close-icon-wrapper"><CloseIcon /></div>}
            </div>
        )
          }
        <ImageInput
          getInputCompRef={getInputCompRef}
          onImageInput={onImageInput}
          addPopup={addPopup}
          fileName={'image'}
        />
        <div className="upload-image" onClick={onUploadClick}>
          <PluswithCircleIcon width="32" height="32" viewBox="0 0 32 32" />
          <div className="upload-image-text">
            Select Image
          </div>
        </div>
      </div>
      <div className="image-submit-container">
          <Button
            title={'Submit'}
            onClick={onImageUploadSubmit}
          />
        </div>
    </div>
  </div>
}

export default ImageUpload;
