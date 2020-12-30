import styled from "styled-components";
import { waveAni } from "../lib/Animation";

export const ContainerBlock = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
`;

export const FlexRowBlock = styled.div`
    flex: 1;

    display: flex;
    background: linear-gradient(to left, rgba(0,0,0,.7),  transparent), url(${props => props.mainBackground});
    background-repeat: no-repeat;
    background-size: cover;

    transition: 1s ease-in;

    & > a {
        flex: 3;

        display: flex;
    }

    a > div {
        width: 100%;
        height: 100%;

        position: relative;
        color: #fff;

        & > .wave {
            position:absolute;

            right: 0px;
            top: 0px;

            height: 100%;

            opacity: .2;

            z-index: 1;
        }

        & > .content {
            position: absolute;
            display: flex;

            flex-direction: column;

            width: 100%;
            height: 100%;

            top: 0px;
            left: 0px;

            justify-content: center;
            align-items: center;

            z-index: 2;

            & > h2 {
                font-size: 1rem;
                line-height: 2.5rem;

                & > em {
                    color: #666;
                }
                color: #999;
            }

            & > h1 {
                font-size: 1.25rem;
            }

            & > h1 > em {
                font-weight: 700;
            }
        }

        & > .red {
            background-color: #ff004f;
        }

        & > .green {
            background-color: #25b7a7;
        }

        & > .blue {
            background-color: #3d6ea4;
        }

        & > .yellow {
            background-color: #f8a505;
        }
    }

    a:first-child {
        flex: 1.75;

        display: block;
    }

    a:last-child {
        flex: 1;
        
        display: block;
    }

    a:hover .wave {
        animation: ${waveAni} 1.5s ease-in forwards;
    }
`;

export const MainBlock = styled.main`
    flex: 3;
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    & > .content {
        & > h1 {
            font-size: 3rem;
            font-weight: 700;
            color: #fff;

            margin-bottom: 5rem;
        }
    }
`;

export const SideBlock = styled.div`
    flex: 1.5;
    
    display: flex;
    flex-direction: column;

    & > a > div {
        box-sizing: border-box;
    }
`;

export const SideHeadItem = styled.div`

`;

export const SideBottomItem = styled.div`

`;

export const MainFooter = styled.div`
    position: absolute;
    bottom: 0px;

    width: 100%;
    height: 3rem;
    z-index: 2;

    background-color: #777;

    background-color: rgba(70,70,70,.7);

    & > h1 {
        color: #fff;

        display: block;
        line-height: 3rem;

        text-align: center;

        font-size: 1.5rem;
    }
`;