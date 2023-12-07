const student = {
    name: 'Max',
    age: 15,
    greet() {
        console.log('Hi, I am '+this.name+ ' and I am '+this.age+' years old');
    }
}

student.greet();