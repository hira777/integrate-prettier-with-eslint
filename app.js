class Person {
  constructor(name) {
    this.name = name;
  }
}

const profile = {
  name: 'soarflat',
  sex: 'male',
  location: 'Tokyo',
};

const hoge = (message) => {
  console.log(message);
};

hoge(new Person('Person').name);

const fooBar = (a, b, c) => {
  console.log(a);
  console.log(b);
  console.log(c);
};

fooBar(
  111,
  {
    hoge: 'hoge!',
  },
  profile
);
