'use strict';

function IDGenerator (uuid) {

    function _getV1 () {
        return uuid.v1();
    }

    function _getV4 () {
        return uuid.v4();
    }

    return {
        getV1 : _getV1,
        getV4 : _getV4
    };
}

module.exports = IDGenerator;