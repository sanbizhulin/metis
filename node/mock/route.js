var express = require('express');
var router = express.Router();

// 通用列表
var serviceLst = require('./data/serviceLst');

var requestGatherLst = [
    serviceLst
];

var getRequestCache = {};
var createGetRequest = function (requestObj) {
    router.get(requestObj.url, function (req, res) {
        res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});

        var paramTmp = '';
        for (var key in req.query) {
            paramTmp += '&' + key + '=' + req.query[key];
        }
        var paramStr = '?' + paramTmp.slice(1);
        var requestUrl = requestObj.url + paramStr;
        if (getRequestCache[requestUrl]) {
            res.end(JSON.stringify(getRequestCache[requestUrl]));
        } else {
            var responseData = requestObj.data();
            getRequestCache[requestUrl] = responseData;
            res.end(JSON.stringify(responseData));
        }
    });
};
var createPostRequest = function (requestObj) {
    console.log(requestObj);
};

for (var requestGatherLstI in requestGatherLst) {
    var requestGather = requestGatherLst[requestGatherLstI];
    for (var requestGatherI in requestGather) {
        var requestObj = requestGather[requestGatherI];
        var requestObjType = requestObj.type;
        switch (requestObjType) {
            case 'GET':
                createGetRequest(requestObj);
                break;
            case 'POST':
                createPostRequest(requestObj);
                break;
        }
    }
}

module.exports = router;
