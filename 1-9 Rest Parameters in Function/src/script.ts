const addTwo = (a : number,b: number) =>{
    return a+b;
}
console.log(addTwo(10,202));

// Array and Tuple an readonly modifier

//string[] =array of string
const arr : string[] = ['programming', 'Hero']
const arrNum : number[] = [1,2,3]

// অক্ষাংশ (Latitude) এবং দ্রাঘিমাংশ (Longitude) হলো ভূপৃষ্ঠে যেকোনো স্থানের সঠিক অবস্থান নির্ণয় করার কাল্পনিক রেখা। -2ta akshate dite hoi bole ata aivabe pasapasi number hisabe dicche ata holo tuple

// Tuple-akta array te 2 ta number use kore
const dhakaLatLong: [number, number]=[23.8103, 90.4125]

// readonly modifier dea array te push off rakha
const gonLatLong:readonly [number, number]=[23.8103, 90.4125]

// optional,Default and rest parameters (...args) ata function e kivabe kaj kore

const concatName = (firstName: string, lastName?: string) => {
    if (!lastName) {
        return firstName;
    }

    return firstName + " " + lastName;
}

// '?' ai optional sign er dara 1ta string dea jabe porer ta optional dile hobe na dile vul nai (parameter) lastName: string | undefined
console.log(concatName("mir"));

// first type looks undefined 

// const greetings = (fullName:string, greeting:string='hello')=> {
// console.log(greeting+" "+fullName);

// }
// greetings('mir',undefined);

// secound type looks  
//undefined na delao ata optional parameter '?' pass kore
//kono kisu na pathano= undefind jabe

const greetings = (fullName:string, greeting =250)=> {
console.log(greeting+" "+fullName);

}
greetings('mir');
