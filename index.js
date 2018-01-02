'use strict';

import {
    Platform,
} from 'react-native';

var XG=require('./index.android');

if(Platform.OS == 'ios') {
    XG=require('./index.ios');
}

module.exports = XG;