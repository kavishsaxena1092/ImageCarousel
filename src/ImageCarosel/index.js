import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import ClosePopupWhiteIcon from '../SVGIcons/ClosePopupWhiteIcon';
import './index.scss';

const ImageCarosel = ({ imagesURL }) => {
  const [selectedNumber, setSelectedNumber] = useState(0);
  const [showImageModal, setShowImageModal] = useState(false);
  const [imageModelIndex, setImageModalIndex] = useState('');

  useEffect(() => {
    const changeNextSlide = indexDelta => {
      console.log('In OnNextSlide');
      const numOfImages = imagesURL.length;
      let newSelectedNumber = (selectedNumber + indexDelta)%numOfImages;
      if (newSelectedNumber < 0) {
        newSelectedNumber = numOfImages + newSelectedNumber;
      }
      setSelectedNumber(newSelectedNumber);
    }
  
    const timeInterval = setInterval(() => {
      changeNextSlide(1);
    }, 4000);

    return () => {
      clearInterval(timeInterval);
    };
  }, [ selectedNumber , imagesURL ]);

  const onNextSlide = indexDelta => {
    console.log('In OnNextSlide');
    const numOfImages = imagesURL.length;
    let newSelectedNumber = (selectedNumber + indexDelta)%numOfImages;
    if (newSelectedNumber < 0) {
      newSelectedNumber = numOfImages + newSelectedNumber;
    }
    setSelectedNumber(newSelectedNumber);
  }

  const selectImage = index => {
    setSelectedNumber(index);
  }

  const showImage = index => {
    setShowImageModal(true);
    setImageModalIndex(index);
  }

  const closeImageModal = () => {
    setShowImageModal(false);
    setImageModalIndex('');
  }

  const renderImageModal = () => {
    return <div className="image-modal-container">
      <div className="image-poup-container">
        <div className="image-popup-wrapper">
          <img src={imagesURL[imageModelIndex]} alt="IMAGEID" style={{ width: '100%' }}/>
        </div>
        <div className="close-icon-conatiner" onClick={closeImageModal}>
          <ClosePopupWhiteIcon />
        </div>
      </div>
    </div>
  }

  return <div className="image-component-wrapper">
  <div className="image-carosel-container">
      {imagesURL && imagesURL.map((url, index) => {
        if (index  === Number(selectedNumber)) {
          return <div className="image-container fade" onClick={_ => showImage(index)}>
            <img src={url} alt="IMAGEID" style={{ width: '100%' }}/>
          </div>
        }
        return null;
      }
      )}
      <div className="prevImage" onClick={e => onNextSlide(-1)}>&#10094;</div>
      <div className="nextImage" onClick={e => onNextSlide(1)}>&#10095;</div>
      <div className="dot-index-container">
      {imagesURL && imagesURL.map((url, index) => <div className={classnames('image-dot',
        { 'active': index === selectedNumber }
      )} onClick={_ => selectImage(index)}>        
      </div>)}
      </div>
  </div>
  {showImageModal &&
    renderImageModal()
  }
  </div>
}

export default ImageCarosel;