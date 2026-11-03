// object type,type alias and interface 

// 1st system: object type
const User:{
    name:string
    age:number;
    isActive:boolean;
    action: ()=> void;
    badges:string[];
}={
    name:'mir',
    age:123,
    isActive:true,
    action:()=>console.log('hello'),
    badges:['abc', 'def'],
}

// 2nd system: type alias
 
//akber user object er property set korle,joto iccha user object er value set kore deoa jai

type TUser= {
    name: string;
    age: number;
    action : () => void;
    isActive:boolean;
    badges: string[];

}

const user: TUser={
    name:'mir',
    age:123,
    isActive:true,
    action:()=>console.log('hello'),
    badges:['abc', 'def'],
}
// type alias er akta subidha holo notun 'alise' property hisabe add kora jai

type Address={
    streetName:string;
    holdingNumber:number;

}
type TUser2= {
    name: string;
    age: number;
    action : () => void;
    isActive:boolean;
    badges: string[];
    address:Address;

}

const user2: TUser2={
    name:'mir',
    age:123,
    isActive:true,
    action:()=>console.log('hello'),
    badges:['abc', 'def'],
    address:{
        holdingNumber:123,
        streetName:'abcd'
    }
}

// 3rd system: interface
 
//akber user object er property set korle,joto iccha user object er value set kore deoa jai

//importent:'interface' obj hisabe age use korba jodi na hoi tobe type 'alias' 
interface IUser{
    name: string;
    age: number;
    action : () => void;
    isActive:boolean;
    badges: string[];
}

const iuser: IUser={
    name:'mir',
    age:123,
    isActive:true,
    action:()=>console.log('hello'),
    badges:['abc', 'def'],
}

