import { keyframes } from "styled-components";

export const waveAni = keyframes`
    from {
        width: 0;
        opacity: .2;
    } to {
        width: 100%;
        opacity: .6;
    }
`;

export const imageAni = keyframes`
    from {
        background-size: 120% 120%;
    } to {
        background-size: 100% 100%;
    }
`;