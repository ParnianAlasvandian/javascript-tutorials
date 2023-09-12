const users = [
    {id:1, name:"Parnian Alasvandian", job:"developer", skill:"java script"},
    {id:2, name:"Aria Alasvand", job:"coach", skill:"sport"},
    {id:3, name:"Parvin AhmadiNia", job:"translator", skill:"english"},
    {id:4, name:"Gholam Alasvandian Shokri", job:"CEO", skill:"managing"},
    {id:5, name:"Yasmin Torki", job:"backend", skill:"nodeJS"},
    {id:6, name:"Papal Alas", job:"student", skill:"comp"},
] ;
/*
const x = 10 ;
let y = 20 ; 
*/

export function getUsersFromDB() {
    return new Promise ((resolve , reject) => {
        if (users.length > 0) resolve(users) ;
        else reject(new Error("not found any users"))
    })
}
export const systemMessage = "Hello user, welcome to my website." 