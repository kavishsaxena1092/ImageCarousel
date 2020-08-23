import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import './index.scss';

const ImageCarosel = ({ imagesURL }) => {
  const [selectedNumber, setSelectedNumber] = useState(0);

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
    }, 3000);

    return () => {
      clearInterval(timeInterval);
    };
  }, [ selectedNumber ]);

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

  return <div className="image-carosel-container">
      {imagesURL && imagesURL.map((url, index) => {
        if (index  === Number(selectedNumber)) {
          return <div className="image-container fade">
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
}

export default ImageCarosel;