var _jsxFileName = "/Users/kavish/VS Code Project/ImageCarosel/src/lib/textInput/index.js";
import React from "react";
import "./index.scss";

const TextInput = ({
  type = "text",
  label,
  value,
  onChange
}) => /*#__PURE__*/React.createElement("div", {
  className: "simple-form-group",
  __self: this,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 3
  }
}, label && /*#__PURE__*/React.createElement("label", {
  className: "simple-text-label",
  __self: this,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 15
  }
}, label), /*#__PURE__*/React.createElement("input", {
  type: type,
  className: "simple-text-input",
  value: value,
  onChange: e => onChange && onChange(e.target.value),
  __self: this,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }
}));

export default TextInput;