interface Observer {
    updateInfo(courseNo:String, topicName: String, teacherName: String, time: String): void
}

interface Course{
    registerObserver(o: Observer): void;
    removeObserver(o: Observer): void;
    update(): void;
}


abstract class DisplayObserver implements Observer {
    courseNo!:String
    topicName!:String
    teacherName!:String
    time!:String
    updateInfo(courseNo:String, topicName: String, teacherName: String, time: String): void {
        this.courseNo = courseNo
        this.topicName = topicName
        this.teacherName = teacherName
        this.time = time
        this.displayInfo()
    }
    abstract displayInfo():void 
}


class StudentDisplay extends DisplayObserver{
    displayInfo(): void {

        console.log("Student display: ")
        console.log("Course No: " + this.courseNo)
        console.log("Topic Name: " + this.topicName)
        console.log("Teacher: " + this.teacherName)
        console.log("Time: " + this.time)
        console.log("\n")
    }
}


class TeacherDisplay extends DisplayObserver {
    displayInfo(): void {
        console.log("Teacher display: ")
        console.log("Course No: " + this.courseNo)
        console.log("Topic Name: " + this.topicName)
        console.log("Teacher: " + this.teacherName)
        console.log("Time: " + this.time)
        console.log("\n")
    }
}
 
 
class ClassData implements Course{
    courseNo!:String
    topicName!:String
    teacherName!:String
    time!:String
    observers:Array<Observer> = []

    registerObserver(o: Observer): void{
        this.observers.push(o)
    }

    removeObserver(o: Observer): void{
        this.observers = this.observers.filter(observer => observer !== o)
    }

    update(): void{
        this.observers.map(observer => {
            observer. updateInfo(this.courseNo,this.time, this.topicName, this.teacherName)
        })
    }

    measuredChanged(courseNo:String, time: String, topicName: String, teacherName: String): void{
        this.courseNo = courseNo
        this.topicName = topicName
        this.teacherName = teacherName
        this.time = time
        this.update()
    }
}
 
 
let classData = new ClassData()
let s1:Observer = new StudentDisplay()
classData.registerObserver(s1)
classData.measuredChanged("SWE-4501", "10.07.2021, 23:54", "Observer Pattern", "ABC")
 
 
let s2:Observer = new StudentDisplay()
classData.registerObserver(s2)
classData.measuredChanged("SWE-4501", "10.07.2021, 23:55", "Observer Pattern", "ABC")
classData.removeObserver(s2)
classData.measuredChanged("SWE-4501", "10.07.2021, 23:56", "Observer Pattern", "ABC");
 
 
let t1:Observer = new TeacherDisplay()
classData.registerObserver(t1)
classData.measuredChanged("SWE-4501", "10.07.2021, 23:57", "Observer Pattern", "ABC");