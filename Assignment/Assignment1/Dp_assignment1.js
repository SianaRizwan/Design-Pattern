var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DisplayObserver = /** @class */ (function () {
    function DisplayObserver() {
    }
    DisplayObserver.prototype.updateInfo = function (courseNo, topicName, teacherName, time) {
        this.courseNo = courseNo;
        this.topicName = topicName;
        this.teacherName = teacherName;
        this.time = time;
        this.displayInfo();
    };
    return DisplayObserver;
}());
var StudentDisplay = /** @class */ (function (_super) {
    __extends(StudentDisplay, _super);
    function StudentDisplay() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StudentDisplay.prototype.displayInfo = function () {
        console.log("Student display: ");
        console.log("Course No: " + this.courseNo);
        console.log("Topic Name: " + this.topicName);
        console.log("Teacher: " + this.teacherName);
        console.log("Time: " + this.time);
        console.log("\n");
    };
    return StudentDisplay;
}(DisplayObserver));
var TeacherDisplay = /** @class */ (function (_super) {
    __extends(TeacherDisplay, _super);
    function TeacherDisplay() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TeacherDisplay.prototype.displayInfo = function () {
        console.log("Teacher display: ");
        console.log("Course No: " + this.courseNo);
        console.log("Topic Name: " + this.topicName);
        console.log("Teacher: " + this.teacherName);
        console.log("Time: " + this.time);
        console.log("\n");
    };
    return TeacherDisplay;
}(DisplayObserver));
var ClassData = /** @class */ (function () {
    function ClassData() {
        this.observers = [];
    }
    ClassData.prototype.registerObserver = function (o) {
        this.observers.push(o);
    };
    ClassData.prototype.removeObserver = function (o) {
        this.observers = this.observers.filter(function (observer) { return observer !== o; });
    };
    ClassData.prototype.update = function () {
        var _this = this;
        this.observers.map(function (observer) {
            observer.updateInfo(_this.courseNo, _this.time, _this.topicName, _this.teacherName);
        });
    };
    ClassData.prototype.measuredChanged = function (courseNo, time, topicName, teacherName) {
        this.courseNo = courseNo;
        this.topicName = topicName;
        this.teacherName = teacherName;
        this.time = time;
        this.update();
    };
    return ClassData;
}());
var classData = new ClassData();
var s1 = new StudentDisplay();
classData.registerObserver(s1);
classData.measuredChanged("SWE-4501", "10.07.2021, 23:54", "Observer Pattern", "ABC");
var s2 = new StudentDisplay();
classData.registerObserver(s2);
classData.measuredChanged("SWE-4501", "10.07.2021, 23:55", "Observer Pattern", "ABC");
classData.removeObserver(s2);
classData.measuredChanged("SWE-4501", "10.07.2021, 23:56", "Observer Pattern", "ABC");
var t1 = new TeacherDisplay();
classData.registerObserver(t1);
classData.measuredChanged("SWE-4501", "10.07.2021, 23:57", "Observer Pattern", "ABC");
