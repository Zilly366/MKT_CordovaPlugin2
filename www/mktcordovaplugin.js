/**
 * @license
 * Copyright 2018 Salesforce, Inc
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice,
 * this list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. Neither the name of the copyright holder nor the names of its contributors
 * may be used to endorse or promote products derived from this software without
 * specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */

var exec = require('cordova/exec');
var argsCheck = require('cordova/argscheck');

var PLUGIN_NAME = 'MKT_CordovaPlugin';

var onNotificationOpened;
var onUrlAction;

function registerEvents() {
    var onEventsCallback = function(event) {
        switch (event.type) {
            case 'notificationOpened':
                if (onNotificationOpened !== undefined) {
                    onNotificationOpened(event);
                }
                break;
            case 'urlAction':
                if (onUrlAction !== undefined) {
                    onUrlAction(event);
                }
        }
    };

    _exec(onEventsCallback, null, 'registerEventsChannel');
}

document.addEventListener('deviceready', registerEvents);

function _exec(successCallback, errorCallback, methodName, args) {
    args = args || [];
    exec(successCallback, errorCallback, PLUGIN_NAME, methodName, args);
}

/**
 * @exports MKT_CordovaPlugin
 */
var MKT_CordovaPlugin = {
    initialize: function(){
        PLUGIN_NAME.initialize();
        //_exec(successCallback,errorCallback,'initialize');
    },

    isPushEnabled: function(successCallback, errorCallback = undefined) {
        argsCheck.checkArgs('fF', `${PLUGIN_NAME}.isPushEnabled`, arguments);
        _exec(successCallback, errorCallback, 'isPushEnabled');
    },
    
    enablePush: function(successCallback = undefined, errorCallback = undefined) {
        argsCheck.checkArgs('FF', `${PLUGIN_NAME}.enablePush`, arguments);
        _exec(successCallback, errorCallback, 'enablePush');
    },
    
    disablePush: function(successCallback, errorCallback) {
        argsCheck.checkArgs('FF', `${PLUGIN_NAME}.disablePush`, arguments);
        _exec(successCallback, errorCallback, 'disablePush');
    },
    
    getSystemToken: function(successCallback, errorCallback) {
        argsCheck.checkArgs('fF', `${PLUGIN_NAME}.getSystemToken`, arguments);
        _exec(successCallback, errorCallback, 'getSystemToken');
    },
    
    getDeviceId: function(successCallback, errorCallback) {
        argsCheck.checkArgs('fF', `${PLUGIN_NAME}.getDeviceId`, arguments);
        _exec(successCallback, errorCallback, 'getDeviceId');
    },
    
    getAttributes: function(successCallback, errorCallback) {
        argsCheck.checkArgs('fF', `${PLUGIN_NAME}.getAttributes`, arguments);
        _exec(successCallback, errorCallback, 'getAttributes');
    },
    
    setAttribute: function(key, value, successCallback, errorCallback) {
        argsCheck.checkArgs('ssFF', `${PLUGIN_NAME}.setAttribute`, arguments);
        _exec(successCallback, errorCallback, 'setAttribute', [key, value]);
    },
    
    clearAttribute: function(key, successCallback, errorCallback) {
        argsCheck.checkArgs('sFF', `${PLUGIN_NAME}.clearAttribute`, arguments);
        _exec(successCallback, errorCallback, 'clearAttribute', [key]);
    },
    
    addTag: function(tag, successCallback, errorCallback) {
        argsCheck.checkArgs('sFF', `${PLUGIN_NAME}.addTag`, arguments);
        _exec(successCallback, errorCallback, 'addTag', [tag]);
    },
    
    removeTag: function(tag, successCallback, errorCallback) {
        argsCheck.checkArgs('sFF', `${PLUGIN_NAME}.removeTag`, arguments);
        _exec(successCallback, errorCallback, 'removeTag', [tag]);
    },
    
    getTags: function(successCallback, errorCallback) {
        argsCheck.checkArgs('fF', `${PLUGIN_NAME}.getTags`, arguments);
        _exec(successCallback, errorCallback, 'getTags');
    },
    
    setContactKey: function(contactKey, successCallback, errorCallback) {
        argsCheck.checkArgs('sFF', `${PLUGIN_NAME}.setContactKey`, arguments);
        _exec(successCallback, errorCallback, 'setContactKey', [contactKey]);
    },
    
    getContactKey: function(successCallback, errorCallback) {
        argsCheck.checkArgs('fF', `${PLUGIN_NAME}.getContactKey`, arguments);
        _exec(successCallback, errorCallback, 'getContactKey');
    },
    
    enableLogging: function(successCallback, errorCallback) {
        argsCheck.checkArgs('FF', `${PLUGIN_NAME}.enableLogging`, arguments);
        _exec(successCallback, errorCallback, 'enableLogging');
    },
    
    disableLogging: function(successCallback, errorCallback) {
        argsCheck.checkArgs('FF', `${PLUGIN_NAME}.disableLogging`, arguments);
        _exec(successCallback, errorCallback, 'disableLogging');
    },
    
    setOnNotificationOpenedListener: function(notificationOpenedListener) {
        argsCheck.checkArgs('f', `${PLUGIN_NAME}.setOnNotificationOpenedListener`, arguments);
        onNotificationOpened = notificationOpenedListener;
        _exec(undefined, undefined, 'subscribe', ['notificationOpened']);
    },

    
    setOnUrlActionListener: function(urlActionListener) {
        argsCheck.checkArgs('f', `${PLUGIN_NAME}.setOnUrlActionListener`, arguments);
        onUrlAction = urlActionListener;
        _exec(undefined, undefined, 'subscribe', ['urlAction']);
    },

    
    logSdkState: function(successCallback, errorCallback) {
        argsCheck.checkArgs('FF', `${PLUGIN_NAME}.logSdkState`, arguments);
        _exec(successCallback, errorCallback, 'logSdkState');
    },

    
    track: function(event) {
        argsCheck.checkArgs('oFF', `${PLUGIN_NAME}.track`, arguments);
        _exec(undefined, undefined, 'track', [event]);
    },

    
    setAnalyticsEnabled: function(enabled, successCallback, errorCallback) {
        argsCheck.checkArgs('*FF', `${PLUGIN_NAME}.setAnalyticsEnabled`, arguments);
        _exec(successCallback, errorCallback, 'setAnalyticsEnabled', [enabled]);
    },

    
    isAnalyticsEnabled: function(successCallback, errorCallback) {
        argsCheck.checkArgs('fF', `${PLUGIN_NAME}.isAnalyticsEnabled`, arguments);
        _exec(successCallback, errorCallback, 'isAnalyticsEnabled');
    },

    
    setPiAnalyticsEnabled: function(enabled, successCallback, errorCallback) {
        argsCheck.checkArgs('*FF', `${PLUGIN_NAME}.setPiAnalyticsEnabled`, arguments);
        _exec(successCallback, errorCallback, 'setPiAnalyticsEnabled', [enabled]);
    },

    
    isPiAnalyticsEnabled: function(successCallback, errorCallback) {
        argsCheck.checkArgs('fF', `${PLUGIN_NAME}.isPiAnalyticsEnabled`, arguments);
        _exec(successCallback, errorCallback, 'isPiAnalyticsEnabled');
    },
};

module.exports = MKT_CordovaPlugin;
