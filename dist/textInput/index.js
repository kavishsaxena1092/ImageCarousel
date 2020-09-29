import React from "react";
import "./index.css";

var TextInput = function TextInput(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? "text" : _ref$type,
      label = _ref.label,
      value = _ref.value,
      _onChange = _ref.onChange;
  return /*#__PURE__*/React.createElement("div", {
    className: "simple-form-group"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "simple-text-label"
  }, label), /*#__PURE__*/React.createElement("input", {
    type: type,
    className: "simple-text-input",
    value: value,
    onChange: function onChange(e) {
      return _onChange && _onChange(e.target.value);
    }
  }));
};

export default TextInput;