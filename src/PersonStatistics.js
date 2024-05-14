class PersonStatistics {
    #people = []

    #id;
    #name;
    #age;
    #isStudent;
    #score;

    constructor(id, name, age, isStudent, score){
        this.#id = id;
        this.#name = name;
        this.#age = age;
        this.#isStudent = isStudent;
        this.#score = score;
        this.#people.push(this.#id, this.#name, this.#age,   this.#isStudent,this.#score);
    }
   
    set id(id){
        this.#id = id;
    }

    set name(name){
        this.#name = name;
    }
    
    set age(age){
        this.#age = age;
    }

    set isStudent(isStudent){
        this.#isStudent = isStudent;
    }

    set score(score){
        this.#score = score;
    }
    
    

    getAvargeAge(){
        let osszEletkor = 0;
        let atlagEletkor = 0;
        for (let index = 0; index < this.#people.length; index++) {
            const element = this.#people[index];
            osszEletkor += element.age;
            
        }
        atlagEletkor = osszEletkor / this.#people.length;
        console.log(atlagEletkor);
    }

    
}


