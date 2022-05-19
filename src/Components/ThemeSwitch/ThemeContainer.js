import { Form } from 'react-bootstrap'
import styled from 'styled-components'

export const ThemeContainer = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  .dark{
      filter: invert(1);
  }
`;