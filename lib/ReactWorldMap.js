"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@superset-ui/core");

var _WorldMap = _interopRequireDefault(require("./WorldMap"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
const ReactWorldMap = (0, _core.reactify)(_WorldMap.default);

const WorldMapComponent = ({
  className,
  ...otherProps
}) => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: className
  }, /*#__PURE__*/_react.default.createElement(ReactWorldMap, otherProps));
};

WorldMapComponent.propTypes = {
  className: _propTypes.default.string.isRequired
};

var _default = (0, _core.styled)(WorldMapComponent)`
  .superset-legacy-chart-world-map {
    position: relative;
    svg {
      background-color: #feffff;
    }
  }
`;

exports.default = _default;