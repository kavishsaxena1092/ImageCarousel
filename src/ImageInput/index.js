import React, { Component } from 'react';

export default class ImageInput extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const { onImageInput, fileName } = this.props;
    const file = event.target.files[0];
    if (file && ((file.size / 1024) <= 5 * 1000)) {
      const data = new FormData();
      if (fileName) {
        data.append(fileName, file);
      }
      else {
        data.append('image_name', file);
      }
      onImageInput(data, { fileName: file });
    }
  }

  onClick(event) {
    event.target.value = '';
  }

  render() {
    const { getInputCompRef, format } = this.props;
    let formatModel = ['.png', '.jpg', '.jpeg', 'application/pdf'];
    formatModel = format ? format : formatModel;
    const inputFormat = formatModel.join(',');
    return (
      <div>
        <input type="file" onChange={this.onChange} style={{ display: 'none' }} ref={ref => getInputCompRef(ref)}
          accept={inputFormat} onClick={this.onClick}/>
      </div>
    )
  }
}
