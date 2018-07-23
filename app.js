class Person {
  constructor(name) {
    this.name = name;
  }
}

new Person('soarflat');

const profile = {
  name: 'soarflat',
  sex: 'male',
  location: 'Tokyo',
};

console.log(profile.name);

// const hoge = () => console.log('hoge');

const fooBar = (foo, bar) => {
  console.log(foo);
  console.log(bar);
};

fooBar(111, {
  hoge: 'hoge!',
});
