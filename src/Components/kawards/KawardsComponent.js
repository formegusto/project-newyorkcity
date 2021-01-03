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
                                <li>
                                    <a href="#">COMPETITION INFO</a>
                                    <ul className="submenu" style={{
                                        width: "178.28px"
                                    }}>
                                        <li><a href="#">RULES</a></li>
                                        <li><a href="#">CATEGORIES</a></li>
                                        <li><a href="#">FAQ</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">ENTER NOW</a></li>
                                <li>
                                    <a href="#">NBA WINNERS</a>
                                    <ul className="submenu">
                                        <li><a href="#">2021 WINNERS</a></li>
                                        <li><a href="#">2020 WINNERS</a></li>
                                        <li><a href="#">2019 WINNERS</a></li>
                                        <li><a href="#">2018 WINNERS</a></li>
                                        <li><a href="#">2017 WINNERS</a></li>
                                        <li><a href="#">2016 WINNERS</a></li>
                                        <li><a href="#">2015 WINNERS</a></li>
                                        <li><a href="#">2014 WINNERS</a></li>
                                        <li><a href="#">2013 WINNERS</a></li>
                                        <li><a href="#">2012 WINNERS</a></li>
                                        <li><a href="#">2011 WINNERS</a></li>
                                        <li><a href="#">2010 WINNERS</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">2021 JURY</a>
                                    <ul className="submenu" style={{
                                        right: "70px"
                                    }}>
                                        <li><a href="#">Grand Jury</a></li>
                                        <li><a href="#">Jury Career</a></li>
                                        <li><a href="#">Advisory Board</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">ABOUT</a>
                                    <ul className="submenu" style={{
                                        right: "0"
                                    }}>
                                        <li><a href="#">CONTACT US</a></li>
                                        <li><a href="#">NEWS & EVENTS</a></li>
                                        <li><a href="#">DOWNLOADS</a></li>
                                        <li><a href="#">SPONSORS</a></li>
                                    </ul>
                                </li>
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
            <RowContentBlock>
                    <div>
                        <p>
                            Since 1957, the NYF Advertising Awards has been one of the most respected and competitive international competitions around. Singularly focused on and dedicated to honoring excellence in impactful messaging and effective execution. The mission statement is simple; to facilitate a fair competition where “the work” is placed in front of an extraordinary jury of cutting edge and highly accomplished industry peers. They decide what had the impact and execution worthy of an NYFA Tower: an industry acknowledged imprimatur of excellence in craft, creativity and execution.
                        </p>
                    </div>
                    <div>
                    </div>
            </RowContentBlock>
            <Footer>
                <div>
                    <h1>브랜드리소스컨설팅</h1>
                    <h2>Brand Resource Consulting</h2>
                </div>
                <div>
                    <h1>07241 서울특별시 영등포구 은행로58(여의도동)</h1>
                    <h1>삼도빌딩 1105호</h1>
                    <br/>
                    <h1>TEL 02-786-2112</h1>
                    <h1>FAX 02-786-2131</h1>
                    <h1>e-mail rrrr@rrrr.net</h1>
                </div>
            </Footer>
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

    /* width: calc(100% - 220px);
    margin: 0 auto; */
`;

const NavTop = styled.nav`

    font-size: 2rem;
    line-height: 100px;

    & > h1 {
        margin-left: 5px; 
        display: inline-block;

        & > em {
            font-weight: 700;
        }
    }
`;

const NavBottom = styled.nav`
    flex: 1;
    position: relative;
    & > div {
        text-align: right;

        & > ul {
            display: inline-block;

            z-index: 1;
        }

        & > ul > li{
            list-style-type: none;
            float: left;
        }

        & > ul > li:hover {
            & > .submenu {
                display: block;
            }

            .submenu-background {
                display: block;
            }
        }

        & > ul > li > .submenu {
            position: absolute;
            top: 100%;
            display: none;

            color: #333;

            background-color: rgba(255,255,255,.7);
        }

        & > ul > li > .submenu:hover {
            display: block;
        }

        & > ul > li > .submenu > li {
            list-style-type: none;
            
            margin: 17px 18px 17px;

            text-align: center;
        }

        & > ul > li > .submenu > li > a {
            color: #333;

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

            font-size: 1rem;

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
    padding: 80px 60px;

    display: flex;

    & > div {
        flex: 1;
    }

    & > div:first-child {
        margin-right: 16px;
        text-align: justify;
        word-break: break-all;
        line-height: 1.5;
    }

    & > div:last-child {
        background-color: #DDD;
    }
`;

const Footer = styled.footer`
    background-color: #2B2E31;

    padding: 40px 60px;

    display: flex;

    & > div {
        flex: 1;
    }

    & > div:first-child {
        color: #FFF;
        & > h1 {
            font-size: 1.75rem;
            font-weight: 700;
        }

        & > h2 {
            font-size: 1rem;
        }
    }

    & > div:last-child {
        color: #8e9192;
        line-height:1.5;
    }
`;

export default KawardsComponent;