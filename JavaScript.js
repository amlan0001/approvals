(function () {
    var data = [{ id: 1, name: "java fundamentals", track: "java", studentid: 528852, teamid: 2, status:"pending" },
    { id: 2, name: "dot net fundamentals", track: "web development", studentid: 528852, teamid: 1, status: "pending" },
    { id: 3, name: "c fundamentals", track: "programming", studentid: 528852, teamid: 3, status: "pending" },
    { id: 4, name: "c++ fundamentals", track: "programming", studentid: 528852, teamid: 2, status: "pending" },
    { id: 5, name: "php fundamentals", track: "web development", studentid: 528852, teamid: 4, status: "pending" },
    { id: 6, name: "c# fundamentals", track: "programming", studentid: 528852, teamid: 5, status: "pending" },
    { id: 7, name: "python fundamentals", track: "web development", studentid: 528852, teamid: 2, status: "pending" },
    { id: 8, name: "ruby fundamentals", track: "web development", studentid: 528852, teamid: 2, status: "pending" },
    { id: 9, name: "angular fundamentals", track: "web design", studentid: 528852, teamid: 1, status: "pending" },
    { id: 10, name: "javascript fundamentals", track: "programming", studentid: 528852, teamid: 1, status: "pending" },
    { id: 11, name: "css fundamentals", track: "web design", studentid: 528852, teamid: 5, status: "pending" },
    { id: 12, name: "html fundamentals", track: "web design", studentid: 528852, teamid: 4, status: "pending" },
    { id: 13, name: "nodejs fundamentals", track: "web development", studentid: 528852, teamid: 4, status: "pending" },
    { id: 14, name: "mvc fundamentals", track: "programming", studentid: 528852, teamid: 3, status: "pending" }];
    var tobeapproved = [];
    var app = angular.module("myApp", []);
    var mycontroll = function ($scope) {

        $scope.course_data = data;
        $scope.checkboxvalue = "checked";




        $scope.myfunc = function (obj) {
            var dataValue = obj.target.attributes.data.nodeValue;
            tobeapproved.push(dataValue);
        };

        
        $scope.approve = function () {
            
            for (var i = 0; i < tobeapproved.length; i++) {
                var pos = tobeapproved[i];
                
                data[pos - 1].status = "approved";
            }
        };
    };

    app.controller("mycontroller", mycontroll);


}());