import { clearConfigCache } from "prettier";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styles from "./styles";

/*--------------Day 2-----------------
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

//-----------------Day 4-----------------
/* Interface method 
Similar to Type Alias way to name an object type 
*/
/* interface Game {
  id: string;
  name: string;
  genre: string;
  price: number;
  audience_rating: string;
}

//using arrow function and union types
const gameDetails = (game:Game): string|number => {
  return `Welcome to my Game Database! \n
  Game Name: ${game.name},\n 
  Game ID: ${game.id},\n
  Genre: ${game.genre},\n
  Price: $${game.price}0,\n
  Suitable for ${game.audience_rating}`
};
console.log(gameDetails({name: 'March of the Devils', id: '3010', genre:'Adventure', price:39.90, audience_rating:'PG13'}));
//try creating a new game instance object
const game1: Game = {name: 'Devils May Rest', id: '3020', genre:'Adventure',price:39.90, audience_rating:'PG-13'};
console.log(gameDetails(game1));//also works

// using Types Alias
type GameType = {
  id: string;
  name: string;
  genre: string;
  price: number;
  audience_rating: string;
}
const gameDetailsType = (gameType: GameType): string|number =>{
  return `Welcome to my Type Alias Game Database!\n
  Game Name: ${gameType.name},\n
  Game ID: ${gameType.id},\n
  Genre: ${gameType.genre},\n
  Price: $${gameType.price}0,\n
  Suitable for ${gameType.audience_rating}`
};
const gameType1: GameType = {name:'Breath of the Fire', id: '4010', genre:'JRPG', price: 49.90,audience_rating:'PG-13'};
console.log(gameDetailsType(gameType1));

//testing function
//let i = 0;
const testFunction = () => 
{ let i:number;
  for (i = 0; i < 5; i++) {
    console.log('Logging: '+ i);}

  console.log('Now i is: '+ i);
}
testFunction();

//type assertion using unknown properties
let messageA: unknown = 'Hello World';
let alternativeWay = (messageA as string).endsWith('D');//boolean return value
console.log(alternativeWay);//will return true if it ends with d

//arrow function structure
//let function = (param):Type => {block of codes here}
let arrowFunction = (message:string):string => {return "Hello! This is an arrow function!" + message}

console.log(arrowFunction("Open your eyes!"));
//class
class Point {
  x: number;
  y: number;

  constructor(x: number, y: number){
    this.x = x;
    this.y = y;
  }
}
const pt = new Point(1,2);//instance object
console.log(`the point of this coordinate is ${pt.x}, ${pt.y}.`);

//---------Day 5------------
/**
 * 
 * @returns commenting method for typescript
 */

/* const arrayA = [1,2,3];
const arrayB = [4,5,6];
arrayB.push(...arrayA);
console.log(arrayB); */

const Info: React.FC = () => {
  /*const a: string = "a"
  const num: number = 1
  */
  return (
    <View style={styles.container}>
      <Text style={infoStyle.headerText}>
        Hey Hey! I am getting Started with React Native
      </Text>
      <Text style={infoStyle.smallText}>My Name is Alvin!</Text>
    </View>
  );
};

const infoStyle = StyleSheet.create({
  headerText: {
    fontFamily: 'IowanOldStyle-Bold',
    fontSize: 40,
    color: '#daa520',
    fontWeight: 'bold',
    textAlign:'center',
    paddingBottom: 20,
    
  },
  smallText:{
    fontFamily: 'IowanOldStyle-Bold',
    fontSize: 30,
    color: '#cd5c5c'
  }
});

export default Info;
