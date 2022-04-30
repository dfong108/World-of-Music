class Member {
    constructor(name, roles) {
        this.name = name;
        this.roles = roles;
    }
}
const dummyArray = ['a', 'b', 'c'];
let bandMember = new Member("Charlie", dummyArray);

let name1 = "Charlie";
let name2 = "Alex";
let name3 = "Marcos";
let name4 = "Victor";

let str1 = "Every, dog, four, excite, fudge"
let str2 = "Whoah, Good, Boy, relax, black"
let str3 = "no, crack, you, Deserves, red"
let str4 = "Envy, where, Boy, Deserves, get"

let rolesArray = []
let namesArray = []
let membersArray = []

rolesArray.push(Array.from(str1), Array.from(str2), Array.from(str3), Array.from(str4))
namesArray.push(name1, name2, name3, name4)

console.log(rolesArray)
// console.log(namesArray)

let member;

for (let i = 0; i < rolesArray.length; i++) {
    member = new Member(namesArray[i], rolesArray[i])
    membersArray.push(membersArray)
}

// console.log(membersArray)


// console.log(bandMember.roles)

// for (i = 0; i < 30; i++) {
//     member.name = req.body.memberName
//     member.roles = []
// }


// req.body.members = [ `${ { name : req.body.memberName ,  roles: [ req.body.memberRole ] } }` ]
// // req.body.images = { main :  }
