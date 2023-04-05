import styled from 'styled-components';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

const StyledSwitch = styled(Switch)`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledBrowserRouter = styled(Router)`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export {
  StyledSwitch,
  StyledBrowserRouter,
};
