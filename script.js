// class Blogger {
//   constructor({ email, age, numberOfPosts, topics }) {
//     this.email = email;
//     this.age = age;
//     this.numberOfPosts = numberOfPosts;
//     this.topics = topics;
//   }
//     getInfo() {
//         return `User ${this.email} is ${this.age} years old and has ${this.numberOfPosts} posts`
//     }
//     updatePostCount(value) {
//         this.numberOfPosts += value;
//     }
// }

// const mango = new Blogger({ email: 'mango@mail.com', age: 24, numberOfPosts: 20, topics: ['tech','cooking'] });
// console.log(mango.getInfo());
// mango.updatePostCount(5);
// console.log(mango.getInfo());

// const poly = new Blogger({ email: 'poly@mail.com', age: 19, numberOfPosts: 17, topics: ['sport', 'gaming', 'helth'] })
// console.log(poly.getInfo());
// poly.updatePostCount(4);
// console.log(poly.getInfo());

// class Storage {
//   constructor(items) {
//     this.items = items;
//   }
//   getItems() {
//     return this.items;
//   }
//   addItem(item) {
//     if (!this.items.includes(item)) {
//       this.items.push(item);
//       return;
//     }
//     return console.log("Такий товар вже є");
//   }
//   removeItem(item) {
//     const idx = this.items.indexOf(item);
//     if (!!~idx) {
//       this.items.splice(idx,1);
//     }
//   }
// }

// const storage = new Storage(["apple", "lemon", "grape", "peach"]);

// const items = storage.getItems();
// console.table([items]);
// storage.addItem("banana");
// console.table([items]);
// storage.addItem("lemon");
// storage.removeItem("lemon");
// console.table([items]);

// class User {
//   #login;
//   #email;
//   constructor({ login, email }) {
//     this.#login = login;
//     this.#email = email;
//   }
//   get login() {
//     return this.#login;
//   }
//   set login(newLogin) {
//     if (this.#login !== newLogin) {
//       this.#login = newLogin;
//     }
//   }

//   get email() {
//     return this.#email;
//   }
//   set email(newEmail) {
//     if (this.#email !== newEmail) {
//       this.#email = newEmail;
//     }
//   }
// }

// const mango = new User({ login: 'Mango', email: 'mango@mail.com' });
// console.log(mango.login);
// mango.login = 'Mangodog';
// console.log(mango.login);

// class Notes{
//     static Priority = {
//         LOW: 'low',
//         NORMAL: 'normal',
//         HIGH:'high'
//     }
//     constructor(notes) {
//         this.items = notes;
//     }
//     addNote(note) {
//         const isIncludeText=this.items.some(({text})=>text===note.text)
//         if (!isIncludeText) {
//             this.items.push(note)
//         }
//     }
//     removeItem(text) {
//         const idx = this.items.findIndex(({ text: noteText }) => noteText === text);
//         if (!!~idx) {
//             console.log(idx)
//             this.items.splice(idx,1)
//         }
//     }
//     updateNote(text, newPriority) {
//         const idx = this.items.findIndex(({ text: noteText }) => noteText === text);
//         if (!!~idx) {
//             this.items[idx].priority = newPriority;
//         }
//     }
// };

// const myNotes = new Notes([]);
// myNotes.addNote({
//     text: 'My first note',
//     priority: Notes.Priority.LOW
// });
// console.log(myNotes.items);
// myNotes.addNote({
//     text: 'My second note',
//     priority: Notes.Priority.HIGH
// });
// console.log(myNotes.items);
// myNotes.removeItem('My first note');
// console.log(myNotes.items);
// myNotes.updateNote('My second note', Notes.Priority.NORMAL);
// console.log(myNotes.items);

