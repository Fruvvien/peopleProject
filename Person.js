class Person{
    #id;
    #name;
    #age;
    #isStudent
    #score;

    

    constructor(id,name,age,isStudent, score){
        this.#id = id,
        this.#name = name,
        this.#age = age,
        this.isStudent = isStudent,
        this.score = score
    }

    get id(){
        return this.#id
    }

    get name(){
        return this.#name
    }

    get age(){
        return this.#age
    }

    get isStudent(){
        return this.#isStudent
    }

    get score(){
        return this.#score
    }


}