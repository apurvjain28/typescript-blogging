import { User } from './models/User';

const user = new User({ id: 1 });

console.log(user.get('name'));

user.on('change', () => {
  console.log(user);
});

user.fetch();
