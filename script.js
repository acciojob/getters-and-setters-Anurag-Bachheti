class Person {
	constructor(name, age){
		this._name = name;
		this._age = age;
	}

	get name(){
		return this._name;
	}

    set name(newName){
        if(newName.length > 0){
            this._name = newName;
        } else {
            console.log("Name cannot be empty!");     
        }
    }

    get age(){
        return this._age;
    }

	set age(newAge){
        if(newAge > 0){
            this._age = newAge;
        } else {
            console.log("Age must be positive number!")
        }
	}
}

class Student extends Person {
	constructor(name, age){
		super(name,age)
	}
	study(){
		console.log(`${this._name} is studying`);
	}
}

class Teacher extends Person {
	constructor(name, age){
		super(name, age)
	}
	teach(){
		console.log(`${this.name} is teaching`);
	}
}


// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
