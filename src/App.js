import React, { useState } from 'react';
import ImageUpload from './ImageUpload';
import ImageCarosel from './ImageCarosel';

import './App.css';

function App() {
  const [ imagesURL , setImagesURL ] = useState([]);
  const [showImageUpload, setShowImageUpload] = useState(true);
  const [showImageCarosel, setShowImageCarosel] = useState(false);

  const onImageUploadSubmit = images => {
    setShowImageUpload(false);
    setShowImageCarosel(true);
  }

  const onDeleteButtonClick = index => {
    imagesURL.splice(index, 1);
    setImagesURL(imagesURL);
  }

  return (
    <div className={'app-container'}>
      {/* {false && <Search
        onTakeIdClick={onTakeIdClick}
        booking={booking}
        onSearchSuccess={onSearchSuccess}
      />} */}
      {showImageUpload &&
      <ImageUpload
        setImagesURL={setImagesURL}
        imagesURL={imagesURL}
        onImageUploadSubmit={onImageUploadSubmit}
        onDeleteButtonClick={onDeleteButtonClick}
      />
      }
      {showImageCarosel &&
      <ImageCarosel
        imagesURL={imagesURL}
      />
      }
    </div>
  )
}

export default App;
