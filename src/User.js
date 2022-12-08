import { Counter } from './App';

export function User({ pic, name }) {

  return (
    <section>
      <img className="user-profile-pic" src={pic} alt={name} />
      <h1 className="user-name">
        Hello, <span className="user-iname">{name}</span>
      </h1>
      <Counter />
    </section>
  );
}
