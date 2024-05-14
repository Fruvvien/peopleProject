import {beforeEach, it, expect, describe} from 'vitest'
import { PersonStatistics } from "./PersonStatistics";


let personList = [];
let persons = {};
let persons2 = {};
let persons3 = {}
let personStatistics = new PersonStatistics(personList);

beforeEach(() =>{
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
        score: 80
    }
    persons3 = {
        id: 3, 
        name: "Dsa Elek", 
        age: 25, 
        isStudent: false, 
        score: 35
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

    it('ha az életkor szöveges, akkor is térjen vissza a megfelelő értékkel', () =>{
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
    it('ha az életkor üres, akkor false', () =>{
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
    it('ha az életkor null, akkor false', () =>{
        persons = {
            id: 1, 
            name: "Teszt Elek", 
            age: null,
            isStudent: false, 
            score: 90
        }
        personList = [];
        personList.push(persons);
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



