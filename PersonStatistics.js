class PersonStatistics {
   
    #people = []
    constructor(){
        this.#people = people = new Person(1,"Teszt Elek", 20, true, 90)
    }
    people = new Person(1,"Teszt Elek", 20, true, 90)

    /**
     * @param {Person} people
     */
    set people(people){
        this.#people.push(people);
    }

    getAvargeAge(){
        let osszEletkor = 0;
        let atlagEletkor = 0;
        for (let index = 0; index < this.#people.length; index++) {
            const element = this.#people[index];
            osszEletkor += element.age;
            
        }
        atlagEletkor = osszEletkor / this.#people.length;
        console.log(atlagEletkor)
    }

    
}