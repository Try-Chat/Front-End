import { FiPlus } from 'react-icons/fi';
import Toggle from '../common/Toggle';
import styled from 'styled-components';

const Pung = () => {
  return (
    <PungWrapper>
      <Toggle title="펑" />
      <PungBox>
        <PungIconBox>
          <PlusIcon />
        </PungIconBox>
        <p>나의 펑을 만들어보세요!</p>
      </PungBox>
    </PungWrapper>
  );
};

export default Pung;

const PungWrapper = styled.div`
  margin: 0 1rem;

  border-bottom: 1px solid ${({ theme }) => theme.colors.gray200};
`;

const PungIconBox = styled.div`
  width: 2.5rem;
  height: 2.5rem;

  border: 1px solid ${({ theme }) => theme.colors.gray200};
  border-radius: 41%;

  background-color: ${({ theme }) => theme.colors.gray100};
  color: ${({ theme }) => theme.colors.gray300};

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;

const PungBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  margin-bottom: 0.7rem;

  p {
    font-size: ${({ theme }) => theme.fontSize.base};
  }
`;

const PlusIcon = styled(FiPlus)`
  font-size: ${({ theme }) => theme.fontSize.md};
`;
