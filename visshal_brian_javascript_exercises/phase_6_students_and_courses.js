function Student (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.courses = [];
}

Student.prototype.name = function () {
    return `${this.firstName} ${this.lastName}`
}

Student.prototype.enroll = function (course) {
    if (!this.courses.includes(course)) {
        for(let i=0 ; i < this.courses.length; i++) {
            if(this.courses[i].conflictsWith(course)){
                throw 'Course Conflict';
            }
        }
        this.courses.push(course);
        course.addStudent(this);
    }
}

Student.prototype.courseLoad = function () {
    let result = {};
    for(let i = 0; i < this.courses.length; i++) {
        if (this.courses[i].department in result) {
            result[this.courses[i].department] += this.courses[i].credits
        } else {
            result[this.courses[i].department] = this.courses[i].credits
        }
    }
    return result;
}



function Course (name, department, credits, days, block) {
    this.name = name;
    this.department = department;
    this.credits = credits;
    this.students = [];
    this.days = days;
    this.block = block;
}

Course.prototype.addStudent = function (student) {
    if (!this.students.includes(student)) {
        this.students.push(student);
        student.enroll(this);
    }
}

Course.prototype.conflictsWith = function (course) {
    if (this.block !== course.block) {
        return false;
    }

    for (let i=0; i < this.days.length; i++) {
        if (course.days.includes(this.days[i])) {
            return true;
        }
    }
    return false;
}



let student1 = new Student("vish", "sureh");
let student2 = new Student("brian", "lin");
// name, department, credits, days, block
let course1 = new Course("ruby", "cs", 4, ["mon", "fri"], 1)
let course2 = new Course("js", "cs", 4, ["tues", "fri"], 1)
let course3 = new Course("rails", "cs", 3, ["weds", "fri"], 2)
let course4 = new Course("english", "humanities", 3, ["weds", "thrus"], 3)

student1.enroll(course1);
console.log(student1.courses);
console.log(course1.students);
console.log(course1.conflictsWith(course2));
// student1.enroll(course2);
student1.enroll(course3);
console.log(student1.courses);
console.log(course1.students);
student1.enroll(course4);
console.log(student1.courseLoad());