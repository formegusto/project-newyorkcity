import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function DesignSolutionStartComponent() {
    return (
        <Wrap>
            <Link to={"/designsolution/route"}>
                <div>
                    <h1><em>BRAND RESOURCE CONSULTING</em></h1>
                    <h1><em>DESIGN</em>Solution</h1>
                </div>
            </Link>
        </Wrap>
    );
}

const Wrap = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    & > a > div {
        text-align: center;

        color: white;
    }

    & > a > div > h1 > em {
        font-weight: 700;
    }

    & > a > div > h1:first-child {
        font-size: 1.25rem;

        margin-bottom: 1rem;
    }

    & > a > div > h1:last-child {
        font-size: 2.5rem;
    }
`;

export default DesignSolutionStartComponent;