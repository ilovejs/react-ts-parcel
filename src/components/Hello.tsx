import React from 'react'
import Icon from '../icon/Icon.svg'

export interface HelloProps {
  compiler: string;
  framework: number;
}

export const Hello: React.FC<HelloProps> = ({
  compiler,
  framework
}: HelloProps) => (
  <h1>
    Hellos from <Icon style={{ width: '23px' }}/>
    {' '}
    {compiler}
    {' '}
    and
    {' '}
    {framework}
    !
  </h1>
)
