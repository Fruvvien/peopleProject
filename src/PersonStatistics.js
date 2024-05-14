export class PersonStatistics {
    #people = []


    /* id: id,
    name: name,
    age: age,
    isStudent: isStudent,
    score: score */
    

    constructor(personList){
       this.#people = personList
    }

    set people(personList){
        this.#people = personList;
    }
   
    
    
    

    getAvargeAge(){
        let osszEletkor = 0;
        let atlagEletkor = 0;
        
        for (let index = 0; index < this.#people.length; index++) {
            let element = this.#people[index];
            if(element.age != null && element.age != ""){
                osszEletkor += parseInt(element.age) ;
            }else{
                return false;
            }
        }
        if(this.#people.length != 0){
            atlagEletkor = osszEletkor / this.#people.length;
            return atlagEletkor;
        }

        return atlagEletkor;
       
    }

    getNumberOfStudents(){
        let count = 0;
        this.#people.forEach(element => {
            if(element.isStudent == true){
                count ++;
            }
            
        });
        return count;

    }

    getPersonWithHighestScore(){
        let biggestScore = 0;
        let personName = "";
        this.#people.forEach(element => {
            if(biggestScore < element.score){
                biggestScore = element.score;
                personName = element.name;
            }
        
        });
        return personName;
    }

    getAvargeScoreOfStudents(){
        let osszPontSzam = 0;
        let atlagPontSzam = 0;
        this.#people.forEach(element => {
            osszPontSzam += element.score;
        });
        atlagPontSzam = osszPontSzam / this.#people.length;
        return atlagPontSzam;
    }

    getOldestStudent(){
        let biggestAge = 0;
        let personName = "";
        this.#people.forEach(element => {
            if(biggestAge < element.age){
                biggestAge = element.age;
                personName = element.name;
            }
        
        });
        return personName;
    }

    isAnyoneFailin(){
        let personName = "";
        this.#people.forEach(element => {
            if(element.score < 40){
                let personName = element.name;
            }
        });
        return personName;
    }

    
}


