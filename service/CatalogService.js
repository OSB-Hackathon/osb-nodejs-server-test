'use strict';


/**
 * get the catalog of services that the service broker offers
 *
 * xBrokerAPIVersion String version number of the Service Broker API that the Platform will use
 * returns Catalog
 **/
exports.catalog.get = function(xBrokerAPIVersion) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "services" : [ {
    "bindable" : true,
    "metadata" : { },
    "plan_updateable" : true,
    "plans" : [ {
      "bindable" : true,
      "maintenance_info" : {
        "description" : "description",
        "version" : "version"
      },
      "plan_updateable" : true,
      "schemas" : {
        "service_binding" : { },
        "service_instance" : {
          "create" : {
            "parameters" : { }
          }
        }
      },
      "name" : "name",
      "binding_rotatable" : false,
      "description" : "description",
      "id" : "id",
      "free" : true,
      "maximum_polling_duration" : 0
    }, {
      "bindable" : true,
      "maintenance_info" : {
        "description" : "description",
        "version" : "version"
      },
      "plan_updateable" : true,
      "schemas" : {
        "service_binding" : { },
        "service_instance" : {
          "create" : {
            "parameters" : { }
          }
        }
      },
      "name" : "name",
      "binding_rotatable" : false,
      "description" : "description",
      "id" : "id",
      "free" : true,
      "maximum_polling_duration" : 0
    } ],
    "name" : "name",
    "binding_rotatable" : true,
    "description" : "description",
    "id" : "id",
    "dashboard_client" : {
      "id" : "id",
      "secret" : "secret",
      "redirect_uri" : "redirect_uri"
    },
    "tags" : [ "tags", "tags" ],
    "requires" : [ "syslog_drain", "syslog_drain" ]
  }, {
    "bindable" : true,
    "metadata" : { },
    "plan_updateable" : true,
    "plans" : [ {
      "bindable" : true,
      "maintenance_info" : {
        "description" : "description",
        "version" : "version"
      },
      "plan_updateable" : true,
      "schemas" : {
        "service_binding" : { },
        "service_instance" : {
          "create" : {
            "parameters" : { }
          }
        }
      },
      "name" : "name",
      "binding_rotatable" : false,
      "description" : "description",
      "id" : "id",
      "free" : true,
      "maximum_polling_duration" : 0
    }, {
      "bindable" : true,
      "maintenance_info" : {
        "description" : "description",
        "version" : "version"
      },
      "plan_updateable" : true,
      "schemas" : {
        "service_binding" : { },
        "service_instance" : {
          "create" : {
            "parameters" : { }
          }
        }
      },
      "name" : "name",
      "binding_rotatable" : false,
      "description" : "description",
      "id" : "id",
      "free" : true,
      "maximum_polling_duration" : 0
    } ],
    "name" : "name",
    "binding_rotatable" : true,
    "description" : "description",
    "id" : "id",
    "dashboard_client" : {
      "id" : "id",
      "secret" : "secret",
      "redirect_uri" : "redirect_uri"
    },
    "tags" : [ "tags", "tags" ],
    "requires" : [ "syslog_drain", "syslog_drain" ]
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

