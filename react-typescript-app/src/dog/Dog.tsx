import React from 'react'

type DogProps = {
  name: string
  age: number
  weight: string
}

const Dog: React.FunctionComponent<DogProps> = ({ name, age, weight }) => (
  <dl>
    <dt>Name</dt>
    <dd>{name}</dd>

    <dt>Age</dt>
    <dd>{age}</dd>

    <dt>Weight</dt>
    <dd>{weight}</dd>
  </dl>
);

export default Dog;
