import React from 'react';
import styled from 'styled-components';
import banner1 from '../../Assets/image/kawards-banner.png';

function KawardsComponent() {
    return (
        <>
            <Header>
                <NavWrap>
                    <NavTop>
                        <h1><em>대한민국</em> 국가브랜드대상</h1>
                    </NavTop>
                    <NavBottom>
                        <div>
                            <ul>
                                <li><a href="#">CART</a></li>
                                <li><a href="#">SIGN IN</a></li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li><a href="#">COMPETITION INFO</a></li>
                                <li><a href="#">ENTER NOW</a></li>
                                <li><a href="#">NBA WINNERS</a></li>
                                <li><a href="#">2021 JURY</a></li>
                                <li><a href="#">ABOUT</a></li>
                            </ul>
                        </div>
                    </NavBottom>
                </NavWrap>
            </Header>
            <BannerBlock>
                <a href="#"> 
                    <img src={banner1} alt="" />
                </a>
            </BannerBlock>
        </>
    );
}

const Header = styled.header`
    background-color: black;
    color: white;
`;

const NavWrap = styled.div`
    display: flex;
    flex-direction: row;

    width: calc(100% - 220px);
    margin: 0 auto;
`;

const NavTop = styled.nav`
    height: 120px;

    font-size: 3rem;
    line-height: 120px;

    & > h1 { 
        display: inline-block;

        & > em {
            font-weight: 700;
        }
    }
`;

const NavBottom = styled.nav`
    flex: 1;
    & > div {
        text-align: right;

        & > ul {
            display: inline-block;
        }

        & > ul > li{
            list-style-type: none;
            float: left;
        }
    }

    & > div:first-child {
        & > ul > li > a {
            color: #fff;

            display: inline-block;
            text-align: center;

            padding: 16px 18px 23px;

            font-weight: 100;

            font-size: 1rem;
        }
    }
    & > div:last-child {
        & > ul > li > a {
            color: #fff;

            display: inline-block;
            text-align: center;

            padding: 17px 18px 19px;

            font-weight: 300;

            font-size: 1.25rem;

            padding: 11px 18px 15px;
        }
    }
`;

const BannerBlock = styled.section`
    & > a > img {
        width: 100%;
        max-height: 700px;

        object-fit: cover;
    }
`;

const RowContentBlock = styled.article`

`;

export default KawardsComponent;