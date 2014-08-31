var Firebase = require("firebase");
var rootRef = new Firebase('jetfire.firebaseio.com/web/data');
rootRef.child('users/mchen/name');