"use strict";

exports.__esModule = true;
exports.default = void 0;

var _core = require("@superset-ui/core");

var _chartControls = require("@arthanasti/chart-controls");

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
var _default = {
  controlPanelSections: [{
    label: (0, _core.t)('Query'),
    expanded: true,
    controlSetRows: [['entity'], [{
      name: 'country_fieldtype',
      config: {
        type: 'SelectControl',
        label: (0, _core.t)('Country Field Type'),
        default: 'cca2',
        choices: [['name', 'Full name'], ['cioc', 'code International Olympic Committee (cioc)'], ['cca2', 'code ISO 3166-1 alpha-2 (cca2)'], ['cca3', 'code ISO 3166-1 alpha-3 (cca3)']],
        description: (0, _core.t)('The country code standard that Superset should expect ' + 'to find in the [country] column')
      }
    }], ['metric'], ['adhoc_filters'], ['custom_filters'], ['row_limit']]
  }, {
    label: (0, _core.t)('Options'),
    expanded: true,
    controlSetRows: [[{
      name: 'show_bubbles',
      config: {
        type: 'CheckboxControl',
        label: (0, _core.t)('Show Bubbles'),
        default: false,
        renderTrigger: true,
        description: (0, _core.t)('Whether to display bubbles on top of countries')
      }
    }], ['secondary_metric'], [{
      name: 'max_bubble_size',
      config: {
        type: 'SelectControl',
        freeForm: true,
        label: (0, _core.t)('Max Bubble Size'),
        default: '25',
        choices: (0, _chartControls.formatSelectOptions)(['5', '10', '15', '25', '50', '75', '100'])
      }
    }], ['color_picker'], ['linear_color_scheme']]
  }],
  controlOverrides: {
    entity: {
      label: (0, _core.t)('Country Column'),
      description: (0, _core.t)('3 letter code of the country')
    },
    metric: {
      label: (0, _core.t)('Metric for Color'),
      description: (0, _core.t)('Metric that defines the color of the country')
    },
    secondary_metric: {
      label: (0, _core.t)('Bubble Size'),
      description: (0, _core.t)('Metric that defines the size of the bubble')
    },
    color_picker: {
      label: (0, _core.t)('Bubble Color')
    },
    linear_color_scheme: {
      label: (0, _core.t)('Country Color Scheme')
    }
  }
};
exports.default = _default;