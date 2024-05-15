import {beforeEach, it, expect, describe} from 'vitest'
import { PersonStatistics } from "./PersonStatistics";

/* id: id,
    name: name,
    age: age,
    isStudent: isStudent,
    score: score */

let personList = [];
let persons = {};
let persons2 = {};
let persons3 = {}
let personStatistics = new PersonStatistics(personList);

beforeEach(() =>{
    personList = [];
    persons = {
        id: 1, 
        name: "Teszt Elek", 
        age: 20, 
        isStudent: false, 
        score: 90
    }
    persons2 = {
        id: 2, 
        name: "Asd Elek", 
        age: 30, 
        isStudent: true, 
        score: 95
    }
    persons3 = {
        id: 3, 
        name: "Dsa Elek", 
        age: 25, 
        isStudent: false, 
        score: 25
    }
    personList.push(persons);
    personList.push(persons2);
    personList.push(persons3);
    personStatistics = new PersonStatistics(personList);
    
})

describe('getAvargeAge', ()=>{
    it('ha a list üres, akkor térjen vissza 0-val', () => {
        personStatistics.people = [];
        expect(personStatistics.getAvargeAge()).toEqual(0);
    })

    it('ha a list nem üres, akkor térjen vissza a megfelelő értékkel', () =>{
        expect(personStatistics.getAvargeAge()).toEqual(25);
    })

    it('ha az age szöveges, akkor is térjen vissza a megfelelő értékkel', () =>{
        persons = {
            id: 1, 
            name: "Teszt Elek", 
            age: "20", 
            isStudent: false, 
            score: 90
        }
        personList = [];
        personList.push(persons);
        personStatistics.people= personList;
        expect(personStatistics.getAvargeAge()).toEqual(20);
    })
    it('ha az age üres, akkor false', () =>{
        persons = {
            id: 1, 
            name: "Teszt Elek", 
            age: '',
            isStudent: false, 
            score: 90
        }
        personList = [];
        personList.push(persons);
        personStatistics.people= personList;
        expect(personStatistics.getAvargeAge()).toBeFalsy()
    })
    it('ha az age null, akkor false', () =>{
        persons = {
            id: 1, 
            name: "Teszt Elek", 
            age: null,
            isStudent: false, 
            score: 90
        }
        personList = [];
        personList.push(persons);
        personStatistics.people= personList;
        expect(personStatistics.getAvargeAge()).toBeFalsy()
    })
    it('ha az age 0, akkor false', () =>{
        persons = {
            id: 1, 
            name: "Teszt Elek", 
            age: 0,
            isStudent: false, 
            score: 90
        }
        personList = [];
        personList.push(persons);
        personStatistics.people= personList;
        expect(personStatistics.getAvargeAge()).toBeFalsy()
    })
})

describe('getNumberOfStudents', () =>{
    it('ha a lista üres, akkor térjen vissza 0-val', () => {
        personStatistics.people = [];
        expect(personStatistics.getNumberOfStudents()).toEqual(0);
    })
    it('ha a lista nem üres, akkor térjen vissza a megfelelő értékkel', () =>{
        expect(personStatistics.getNumberOfStudents()).toEqual(1);
    })
})

describe('getPersonWithHighestScore', ()=>{
    it('ha a lista üres, akkor térjen vissza üres stringgel', () =>{
        personStatistics.people = [];
        expect(personStatistics.getPersonWithHighestScore()).toEqual("");
    })
    it('ha a lista nem üres, akkor térjen vissza a megfelelő névvel', () =>{
        expect(personStatistics.getPersonWithHighestScore()).toEqual("Asd Elek");
    })
    it('ha a score szöveges, akkor is térjen vissza a megfelelő névvel', () =>{
        persons = {
            id: 1, 
            name: "Teszt Elek", 
            age: 20, 
            isStudent: false, 
            score: "90"
        } 
        persons2 = {
            id: 2, 
            name: "Asd Elek", 
            age: 20, 
            isStudent: false, 
            score: "80"
        }
        personList = [];
        personList.push(persons);
        personList.push(persons2);
        personStatistics.people= personList;
        expect(personStatistics.getPersonWithHighestScore()).toEqual("Teszt Elek");
    })
    it('ha az score üres, akkor false', () =>{
        persons = {
            id: 1, 
            name: "Teszt Elek", 
            age: 20,
            isStudent: false, 
            score: ''
        }
        personList = [];
        personList.push(persons);
        personStatistics.people= personList;
        expect(personStatistics.getPersonWithHighestScore()).toBeFalsy()
    })
    it('ha az score null, akkor false', () =>{
        persons = {
            id: 1, 
            name: "Teszt Elek", 
            age: 20,
            isStudent: false, 
            score: null
        }
        personList = [];
        personList.push(persons);
        personStatistics.people= personList;
        expect(personStatistics.getPersonWithHighestScore()).toBeFalsy()
    })
    
    it('ha az score megvan adva, de a név üres akkor false', () =>{
        persons = {
            id: 1, 
            name: "", 
            age: 20,
            isStudent: false, 
            score: 90
        }
        personList = [];
        personList.push(persons);
        personStatistics.people= personList;
        expect(personStatistics.getPersonWithHighestScore()).toBeFalsy()
    })
    
})

describe('getAvargeScoreOfStudents', ()=>{
    it('ha a list üres, akkor térjen vissza 0-val', () => {
        personStatistics.people = [];
        expect(personStatistics.getAvargeScoreOfStudents()).toEqual(0);
    })

    it('ha a list nem üres, akkor térjen vissza a megfelelő értékkel', () =>{
        expect(personStatistics.getAvargeScoreOfStudents()).toEqual(70);
    })

    it('ha a score szöveges, akkor is térjen vissza a megfelelő értékkel', () =>{
        persons = {
            id: 1, 
            name: "Teszt Elek", 
            age: 20, 
            isStudent: false, 
            score: "90"
        }
        personList = [];
        personList.push(persons);
        personStatistics.people= personList;
        expect(personStatistics.getAvargeScoreOfStudents()).toEqual(90);
    })
    it('ha a score üres, akkor false', () =>{
        persons = {
            id: 1, 
            name: "Teszt Elek", 
            age: 20,
            isStudent: false, 
            score: ''
        }
        personList = [];
        personList.push(persons);
        personStatistics.people= personList;
        expect(personStatistics.getAvargeScoreOfStudents()).toBeFalsy()
    })
    it('ha a score null, akkor false', () =>{
        persons = {
            id: 1, 
            name: "Teszt Elek", 
            age: 20,
            isStudent: false, 
            score: null
        }
        personList = [];
        personList.push(persons);
        personStatistics.people= personList;
        expect(personStatistics.getAvargeScoreOfStudents()).toBeFalsy()
    })

    
})

describe('getOldestStudent', ()=>{
    it('ha a lista üres, akkor térjen vissza üres stringgel', () =>{
        personStatistics.people = [];
        expect(personStatistics.getOldestStudent()).toEqual("");
    })
    it('ha a lista nem üres, akkor térjen vissza a megfelelő névvel', () =>{
        expect(personStatistics.getOldestStudent()).toEqual("Asd Elek");
    })
    it('ha az age szöveges, akkor is térjen vissza a megfelelő névvel', () =>{
        persons = {
            id: 1, 
            name: "Teszt Elek", 
            age: "20", 
            isStudent: false, 
            score: 90
        } 
        persons2 = {
            id: 2, 
            name: "Asd Elek", 
            age: "30", 
            isStudent: false, 
            score: 80
        }
        personList = [];
        personList.push(persons);
        personList.push(persons2);
        personStatistics.people= personList;
        expect(personStatistics.getOldestStudent()).toEqual("Asd Elek");
    })
    it('ha az age üres, akkor false', () =>{
        persons = {
            id: 1, 
            name: "Teszt Elek", 
            age: '',
            isStudent: false, 
            score: 90
        }
        personList = [];
        personList.push(persons);
        personStatistics.people= personList;
        expect(personStatistics.getOldestStudent()).toBeFalsy()
    })
    it('ha az age null, akkor false', () =>{
        persons = {
            id: 1, 
            name: "Teszt Elek", 
            age: null,
            isStudent: false, 
            score: 90
        }
        personList = [];
        personList.push(persons);
        personStatistics.people= personList;
        expect(personStatistics.getOldestStudent()).toBeFalsy()
    })
    it('ha az age 0, akkor false', () =>{
        persons = {
            id: 1, 
            name: "Teszt Elek", 
            age: 0,
            isStudent: false, 
            score: 90
        }
        personList = [];
        personList.push(persons);
        personStatistics.people= personList;
        expect(personStatistics.getOldestStudent()).toBeFalsy()
    })
    it('ha az age megvan adva, de a név üres akkor false', () =>{
        persons = {
            id: 1, 
            name: "", 
            age: 20,
            isStudent: false, 
            score: 90
        }
        personList = [];
        personList.push(persons);
        personStatistics.people= personList;
        expect(personStatistics.getOldestStudent()).toBeFalsy()
    })
})

describe('isAnyoneFailin', ()=>{
    it('ha a list üres, akkor térjen vissza 0-val', () => {
        personStatistics.people = [];
        expect(personStatistics.isAnyoneFailin()).toEqual('');
    })

    it('ha a list nem üres, akkor térjen vissza a megfelelő névvel', () =>{
        expect(personStatistics.isAnyoneFailin()).toEqual("Dsa Elek");
    })

    it('ha az score szöveges, akkor is térjen vissza a megfelelő értékkel', () =>{
        persons = {
            id: 1, 
            name: "Teszt Elek", 
            age: 20, 
            isStudent: false, 
            score: "90"
        }
        persons2 = {
            id: 2, 
            name: "Asd Elek", 
            age: 25, 
            isStudent: false, 
            score: "25"
        }
        personList = [];
        personList.push(persons);
        personList.push(persons2);
        personStatistics.people= personList;
        expect(personStatistics.isAnyoneFailin()).toEqual("Asd Elek");
    })
    it('ha az score üres, akkor false', () =>{
        persons = {
            id: 1, 
            name: "Teszt Elek", 
            age: 20,
            isStudent: false, 
            score: ''
        }
        personList = [];
        personList.push(persons);
        personStatistics.people= personList;
        expect(personStatistics.isAnyoneFailin()).toBeFalsy()
    })
    it('ha az score null, akkor false', () =>{
        persons = {
            id: 1, 
            name: "Teszt Elek", 
            age: 20,
            isStudent: false, 
            score: null
        }
        personList = [];
        personList.push(persons);
        personStatistics.people= personList;
        expect(personStatistics.isAnyoneFailin()).toBeFalsy()
    })
    it('ha az score megvan adva, de a név üres akkor false', () =>{
        persons = {
            id: 1, 
            name: "", 
            age: 20,
            isStudent: false, 
            score: 90
        }
        personList = [];
        personList.push(persons);
        personStatistics.people= personList;
        expect(personStatistics.isAnyoneFailin()).toBeFalsy()
    })
})





