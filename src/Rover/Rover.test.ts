import { Commands } from '../Shared/Enums/Commands';
import { Rover } from './Rover';

describe('Rover', () => {
  it('Have 0,0,N position on landing', () => {
    const rover = new Rover();
    expect(rover.position).toBe('0,0,N');
  });

  test.each([
    [ Commands.Empty, '0,0,N' ],
    [ Commands.Left, '0,0,W' ],
    [ Commands.Right, '0,0,E' ],
    [ Commands.Forward, '0,1,N' ],
    [ Commands.Backward, '0,-1,N' ]
  ])
  ('Command moves Rover to the proper position',
    (command: Commands, position: string) => {
      const rover = new Rover();
      rover.executeCommand(command);
      expect(rover.position).toBe(position);
    },
  );
});
