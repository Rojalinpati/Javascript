//stack(primitive)
//heap(non-primitive)
let myyoutubename="rojalindotcom"

let anothername=myyoutubename
anothername="rojalin"

console.log(anothername); //rojalin
console.log(myyoutubename); //rojalindotcom

let user={
    email:"rojalin@example.com",
    upi:"rojalin@okhdfcbank"
}
let user2=user
user2.email="user2@example.com"
console.log(user.email); //user2@example.com
console.log(user2.email); //user2@example.com