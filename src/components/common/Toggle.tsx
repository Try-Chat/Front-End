import { MdKeyboardArrowDown } from 'react-icons/md';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  styled,
} from '@mui/material';
import { ReactNode } from 'react';

interface ToggleProps {
  title: string;
  num?: number;
  children: ReactNode;
}

const Toggle = ({ children, title, num }: ToggleProps) => {
  return (
    <MuiAccodion defaultExpanded>
      <MuiMuiAccordionSummary expandIcon={<MdKeyboardArrowDown />}>
        <AccordionDetails>
          <span>
            {title} {num}
          </span>
        </AccordionDetails>
      </MuiMuiAccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </MuiAccodion>
  );
};

export default Toggle;

const MuiAccodion = styled(Accordion)({
  boxShadow: 'none',
  border: 'none',
  borderTop: '1px solid #f1f3f5',

  '& .MuiAccordionDetails-root': {
    margin: '0',
    padding: '0',
  },
  span: {
    color: '#868e96',
    marginRight: '0.2rem',
  },

  svg: {
    color: '#ced4da',
    fontSize: '1.4rem',
  },

  fontSize: '0.8rem',
});

const MuiMuiAccordionSummary = styled(AccordionSummary)({
  margin: '0',
  padding: '0',
});
