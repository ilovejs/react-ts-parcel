import React from 'react'

export interface HelloProps {
  compiler: string;
  framework: number;
}

export const Hello: React.FC<HelloProps> = ({
  compiler,
  framework
}: HelloProps) => (
  <h1>
    Hellos from
    {' '}
    {compiler}
    {' '}
    and
    {' '}
    {framework}
    !
  </h1>
)
