'use strict';

var utils = require('../utils/writer.js');
var ServiceBindings = require('../service/ServiceBindingsService');

module.exports.serviceBinding.binding = function serviceBinding.binding (req, res, next, body, accepts_incomplete, instance_id, binding_id, xBrokerAPIVersion, xBrokerAPIOriginatingIdentity) {
  ServiceBindings.serviceBinding.binding(body, accepts_incomplete, instance_id, binding_id, xBrokerAPIVersion, xBrokerAPIOriginatingIdentity)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.serviceBinding.get = function serviceBinding.get (req, res, next, xBrokerAPIVersion, instance_id, binding_id, xBrokerAPIOriginatingIdentity, service_id, plan_id) {
  ServiceBindings.serviceBinding.get(xBrokerAPIVersion, instance_id, binding_id, xBrokerAPIOriginatingIdentity, service_id, plan_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.serviceBinding.lastOperation.get = function serviceBinding.lastOperation.get (req, res, next, xBrokerAPIVersion, instance_id, binding_id, service_id, plan_id, operation) {
  ServiceBindings.serviceBinding.lastOperation.get(xBrokerAPIVersion, instance_id, binding_id, service_id, plan_id, operation)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.serviceBinding.unbinding = function serviceBinding.unbinding (req, res, next, xBrokerAPIVersion, instance_id, binding_id, service_id, plan_id, xBrokerAPIOriginatingIdentity, accepts_incomplete) {
  ServiceBindings.serviceBinding.unbinding(xBrokerAPIVersion, instance_id, binding_id, service_id, plan_id, xBrokerAPIOriginatingIdentity, accepts_incomplete)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
