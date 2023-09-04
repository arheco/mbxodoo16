odoo.define('pos_posagent.pos_posagent', function (require) {
    "use strict";
    var devices = require('point_of_sale.devices');
    var ProxyDevice = devices.ProxyDevice;

    var pos_env = require('@point_of_sale/js/pos_env')[Symbol.for("default")];

    var PosAgentProxyDevice = ProxyDevice.extend({
        keepalive : function () {
            var self = this;
            function status() {
                var always = function () {
                    setTimeout(status, 5000);
                };
                self.connection.rpc('/hw_proxy/status_json', {
                    data: {
                        posagent: true,
                    }
                },
                    {
                        shadow: true, timeout: 2500
                    })
                    .then(function (driver_status) {
                        self.set_connection_status('connected', driver_status);
                    }, function () {
                        if (self.get('status').status !== 'connecting') {
                            self.set_connection_status('disconnected');
                        }
                    }).then(always, always);
            }
            if (!this.keptalive) {
                this.keptalive = true;
                status();
            }
        }
    });

    devices.ProxyDevice = PosAgentProxyDevice;
    pos_env.proxy = new devices.ProxyDevice({ env: pos_env }); // used to communicate to the hardware devices via a local proxy
});