import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import styled from 'styled-components';
import DesignSolutionRouteComponent from './DesignSolutionRouteComponent';
import DesignSolutionStartComponent from './DesignSolutionStartComponent';

function DesignSolutionComponent() {
    return (
        <DesignSolutionWrap>
            <BrowserRouter>
                <Route path="/designsolution" component={DesignSolutionStartComponent} exact/>
                <Route path="/designsolution/route" component={DesignSolutionRouteComponent}/>
            </BrowserRouter>
        </DesignSolutionWrap>
    );
}

const DesignSolutionWrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: black;

    color: white;
`;

export default DesignSolutionComponent;