export class Person {

   /* Attributes */
   private _name: string;
   private _surname: string;
   private _age: number;
   private _dni: string;
   private _birth: Date;
   private _color: string;
   private _sex: string;
 
   constructor(name: string, surname: string, age: number, dni: string,
      birthday: Date, color: string, sex: string) {
      
      this._name = name;
      this._surname = surname;
      this._age = age;
      this._dni = dni;
      this._birth = birthday;
      this._color = color;
      this._sex = sex;
   }
 
   /* Getters & Setters */
   public get name(): string {
     return this._name;
   }
 
   public get surname(): string {
     return this._surname;
   }
 
   public get age(): number {
     return this._age;
   }
 
   public get dni(): string {
     return this._dni;
   }
 
   public get birthday(): Date {
     return this._birth;
   }
 
   public get color(): string {
     return this._color;
   }
 
   public get sex(): string {
     return this._sex;
   }
}
