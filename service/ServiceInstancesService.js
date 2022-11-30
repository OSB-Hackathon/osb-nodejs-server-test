'use strict';


/**
 * deprovision a service instance
 *
 * xBrokerAPIVersion String version number of the Service Broker API that the Platform will use
 * instance_id String id of instance being deleted
 * service_id String id of the service associated with the instance being deleted
 * plan_id String id of the plan associated with the instance being deleted
 * xBrokerAPIOriginatingIdentity String identity of the user that initiated the request from the Platform (optional)
 * accepts_incomplete Boolean asynchronous deprovision supported (optional)
 * returns Object
 **/
exports.serviceInstance.deprovision = function(xBrokerAPIVersion,instance_id,service_id,plan_id,xBrokerAPIOriginatingIdentity,accepts_incomplete) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = { };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * get a service instance
 *
 * xBrokerAPIVersion String version number of the Service Broker API that the Platform will use
 * instance_id String instance id of instance to fetch
 * xBrokerAPIOriginatingIdentity String identity of the user that initiated the request from the Platform (optional)
 * service_id String id of the service associated with the instance (optional)
 * plan_id String id of the plan associated with the instance (optional)
 * returns ServiceInstanceResource
 **/
exports.serviceInstance.get = function(xBrokerAPIVersion,instance_id,xBrokerAPIOriginatingIdentity,service_id,plan_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "metadata" : {
    "attributes" : { },
    "labels" : { }
  },
  "maintenance_info" : {
    "description" : "description",
    "version" : "version"
  },
  "service_id" : "service_id",
  "dashboard_url" : "dashboard_url",
  "parameters" : { },
  "plan_id" : "plan_id"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * get the last requested operation state for service instance
 *
 * xBrokerAPIVersion String version number of the Service Broker API that the Platform will use
 * instance_id String instance id of instance to find last operation applied to it
 * service_id String id of the service associated with the instance (optional)
 * plan_id String id of the plan associated with the instance (optional)
 * operation String a provided identifier for the operation (optional)
 * returns LastOperationResource
 **/
exports.serviceInstance.lastOperation.get = function(xBrokerAPIVersion,instance_id,service_id,plan_id,operation) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "instance_usable" : true,
  "update_repeatable" : true,
  "description" : "description",
  "state" : "in progress"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * provision a service instance
 *
 * body ServiceInstanceProvisionRequestBody parameters for the requested service instance provision
 * accepts_incomplete Boolean asynchronous operations supported (optional)
 * instance_id String instance id of instance to provision
 * xBrokerAPIVersion String version number of the Service Broker API that the Platform will use
 * xBrokerAPIOriginatingIdentity String identity of the user that initiated the request from the Platform (optional)
 * returns ServiceInstanceProvisionResponse
 **/
exports.serviceInstance.provision = function(body,accepts_incomplete,instance_id,xBrokerAPIVersion,xBrokerAPIOriginatingIdentity) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "metadata" : {
    "attributes" : { },
    "labels" : { }
  },
  "dashboard_url" : "dashboard_url"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * update a service instance
 *
 * body ServiceInstanceUpdateRequestBody parameters for the requested service instance update
 * accepts_incomplete Boolean asynchronous operations supported (optional)
 * instance_id String instance id of instance to update
 * xBrokerAPIVersion String version number of the Service Broker API that the Platform will use
 * xBrokerAPIOriginatingIdentity String identity of the user that initiated the request from the Platform (optional)
 * returns Object
 **/
exports.serviceInstance.update = function(body,accepts_incomplete,instance_id,xBrokerAPIVersion,xBrokerAPIOriginatingIdentity) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = { };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

