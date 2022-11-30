'use strict';

var utils = require('../utils/writer.js');
var Catalog = require('../service/CatalogService');

module.exports.catalog.get = function catalog.get (req, res, next, xBrokerAPIVersion) {
  Catalog.catalog.get(xBrokerAPIVersion)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
