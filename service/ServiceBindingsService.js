'use strict';


/**
 * generate a service binding
 *
 * body ServiceBindingRequest parameters for the requested service binding
 * accepts_incomplete Boolean asynchronous operations supported (optional)
 * instance_id String instance id of instance to create a binding on
 * binding_id String binding id of binding to create
 * xBrokerAPIVersion String version number of the Service Broker API that the Platform will use
 * xBrokerAPIOriginatingIdentity String identity of the user that initiated the request from the Platform (optional)
 * returns ServiceBindingResponse
 **/
exports.serviceBinding.binding = function(body,accepts_incomplete,instance_id,binding_id,xBrokerAPIVersion,xBrokerAPIOriginatingIdentity) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "metadata" : {
    "expires_at" : "expires_at",
    "renew_before" : "renew_before"
  },
  "route_service_url" : "route_service_url",
  "endpoints" : [ {
    "protocol" : "tcp",
    "host" : "host",
    "ports" : [ "ports", "ports" ]
  }, {
    "protocol" : "tcp",
    "host" : "host",
    "ports" : [ "ports", "ports" ]
  } ],
  "credentials" : { },
  "syslog_drain_url" : "syslog_drain_url",
  "volume_mounts" : [ {
    "mode" : "r",
    "driver" : "driver",
    "device_type" : "shared",
    "device" : {
      "volume_id" : "volume_id"
    },
    "container_dir" : "container_dir"
  }, {
    "mode" : "r",
    "driver" : "driver",
    "device_type" : "shared",
    "device" : {
      "volume_id" : "volume_id"
    },
    "container_dir" : "container_dir"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * get a service binding
 *
 * xBrokerAPIVersion String version number of the Service Broker API that the Platform will use
 * instance_id String instance id of instance associated with the binding
 * binding_id String binding id of binding to fetch
 * xBrokerAPIOriginatingIdentity String identity of the user that initiated the request from the Platform (optional)
 * service_id String id of the service associated with the instance (optional)
 * plan_id String id of the plan associated with the instance (optional)
 * returns ServiceBindingResource
 **/
exports.serviceBinding.get = function(xBrokerAPIVersion,instance_id,binding_id,xBrokerAPIOriginatingIdentity,service_id,plan_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "metadata" : {
    "expires_at" : "expires_at",
    "renew_before" : "renew_before"
  },
  "route_service_url" : "route_service_url",
  "endpoints" : [ {
    "protocol" : "tcp",
    "host" : "host",
    "ports" : [ "ports", "ports" ]
  }, {
    "protocol" : "tcp",
    "host" : "host",
    "ports" : [ "ports", "ports" ]
  } ],
  "credentials" : { },
  "syslog_drain_url" : "syslog_drain_url",
  "volume_mounts" : [ {
    "mode" : "r",
    "driver" : "driver",
    "device_type" : "shared",
    "device" : {
      "volume_id" : "volume_id"
    },
    "container_dir" : "container_dir"
  }, {
    "mode" : "r",
    "driver" : "driver",
    "device_type" : "shared",
    "device" : {
      "volume_id" : "volume_id"
    },
    "container_dir" : "container_dir"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * get the last requested operation state for service binding
 *
 * xBrokerAPIVersion String version number of the Service Broker API that the Platform will use
 * instance_id String instance id of instance to find last operation applied to it
 * binding_id String binding id of service binding to find last operation applied to it
 * service_id String id of the service associated with the instance (optional)
 * plan_id String id of the plan associated with the instance (optional)
 * operation String a provided identifier for the operation (optional)
 * returns LastOperationResource
 **/
exports.serviceBinding.lastOperation.get = function(xBrokerAPIVersion,instance_id,binding_id,service_id,plan_id,operation) {
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
 * deprovision a service binding
 *
 * xBrokerAPIVersion String version number of the Service Broker API that the Platform will use
 * instance_id String id of the instance associated with the binding being deleted
 * binding_id String id of the binding being deleted
 * service_id String id of the service associated with the instance for which a binding is being deleted
 * plan_id String id of the plan associated with the instance for which a binding is being deleted
 * xBrokerAPIOriginatingIdentity String identity of the user that initiated the request from the Platform (optional)
 * accepts_incomplete Boolean asynchronous operations supported (optional)
 * returns Object
 **/
exports.serviceBinding.unbinding = function(xBrokerAPIVersion,instance_id,binding_id,service_id,plan_id,xBrokerAPIOriginatingIdentity,accepts_incomplete) {
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

