exports.handler = function(event, context, callback) {
    console.log(aaa);
    callback(null, {"message": "Successfully executed"});
}