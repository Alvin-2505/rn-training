import { clearConfigCache } from "prettier";
import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

//--------------Day 2-----------------
//My first TypeScript message to the world
console.log("Hello World!");

//trying out to form an array
//1. using the normal method
let arrayA:string[] = ['a', 'b', 'c', 'd'];
console.log('I am using the normal way to create an array')
console.log(`${arrayA[0]}, ${arrayA[1]}, ${arrayA[2]}, ${arrayA[3]}`);

//2. using generic method
let arrayB: Array<string> = ['a','b','c','d'];
console.log('I am trying to form an array using generic method');
console.log (`${arrayB[0]}, ${arrayB[1]}, ${arrayB[2]}, ${arrayB[3]}`);

//Functions
//Basic function construction
function greet(name: string){
  console.log(`Hey, ${name}! Welcome to my first TypeScript function!`);
}
greet('Alvin');

//Union Types
//Union Types allow u to specify multiple types to your values using |
function printMe(id: number|string)
{
  console.log(`Your ID is as follows: ${id}!`);
  console.log(typeof id);
}
printMe(1);
printMe('00001');

//Object Types - specifying the object properties type
function godMachine(human:{height:number; weight?:number; name:string})
{
  console.log(`Congrats, god. You have created a human. Name is ${human.name}`);
  console.log(`The height and weight is ${human.height} and ${human.weight}`);
}
godMachine({height:155,weight:70,name:'KingKong'});
godMachine({height:155,name:'KingKong'});

//testing out enum

//testing 1
enum Direction {
  Up=1,
  Down,
  Left,
  Right,
}
console.log(Direction);
//testing 2
enum Direction1{ 
  //if no physical value set for the first value, 
  //initialiser will start from 0
  Up,
  Down,
  Left,
  Right,
}
console.log(Direction1);

enum TrafficLight{
  Red = "RED",
  Orange = "ORANGE",
  Green = "GREEN",
}

console.log(TrafficLight.Green);

enum Weekdays {
  Monday = 1,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}
console.log(Weekdays.Saturday);
//--------------Day 3-----------------
// testing normal function
function minimal (a:number, b:number): number {
  return a < b ? a : b;
}
console.log(`The value is: ${minimal(1,2)}!`);
//console.log(minimal('12', '2')); //error!

//testing arrow function
const testingFunction = (a:number, b:number): number =>
{
  return a<b?a:b;
}
console.log(`testing arrow function value: ${testingFunction(57,56)}`);

const Info: React.FC = () => {
  const a: string = "a"
  const num: number = 1

  return (
    <View style={styles.container}>
      <Text>
        Info Page: You don't need to login to view this page
      </Text>
    </View>
  );
};

export default Info;
