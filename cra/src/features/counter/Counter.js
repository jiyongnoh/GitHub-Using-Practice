import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './counterSlice';
import styled from 'styled-components';

const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  width: 4rem;
  height: 4rem;
  border: 0;
  border-radius: 50%;
  margin: 1rem;

  font-size: 36px;

  background-color: #61dafb;
`;

const ButtonWrapper = styled.div`
  margin: 1rem;
`;

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <span>{count}</span>
      <ButtonWrapper>
        <Button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </Button>
        <Button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </Button>
      </ButtonWrapper>
    </div>
  );
}
