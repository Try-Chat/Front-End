import styled from 'styled-components';
import { MdKeyboardArrowDown } from 'react-icons/md';

interface ToggleProps {
  title: string;
  num?: number;
}

const Toggle = (props: ToggleProps) => {
  return (
    <ToggleWrapper>
      <div>
        <span>{props.title}</span>
        <span>{props?.num}</span>
      </div>
      <StyledArrowDown />
    </ToggleWrapper>
  );
};

export default Toggle;

const ToggleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.gray300};

  height: 2.2rem;

  border-top: 1px solid ${({ theme }) => theme.colors.gray100};
  span {
    margin-right: 0.3rem;
  }
`;

const StyledArrowDown = styled(MdKeyboardArrowDown)`
  font-size: ${({ theme }) => theme.fontSize.lg};
  color: ${({ theme }) => theme.colors.gray200};
`;
