import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { SideBarDropDown } from '../../lib/DropDown';
import CeoMessageComponent from './about/CeoMessageComponent';
import ContactComponent from './contact/ContactComponent';
import AdComponent from './works/AdComponent';
import ClientComponent from './works/ClientComponent';
import EditorialComponent from './works/EditorialComponent';
import EtcComponent from './works/EtcComponent';
import IdentiesComponent from './works/IdentiesComponent';
import PostersComponent from './works/PostersComponent';
import PromotionComponent from './works/PromotionComponent';
import PublicationsComponent from './works/PublicationsComponent';

function DesignSolutionRouteComponent() {
    return (
        <Wrap>
            <Header>
                <h1>BRAND RESOURCE CONSULTING</h1>
            </Header>
            <MainWrap>
                <SideBar>
                    <h1><em>DESIGN</em>Solution</h1>
                    <ul>
                        <li>
                            <p onClick={ (e) => SideBarDropDown(e)}>ABOUT</p>
                            <ul>
                                <li>
                                    <NavLink to={"/designsolution/route/about/ceo"}>CEO MESSAGE</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <p onClick={ (e) => SideBarDropDown(e)}>WORKS</p>
                            <ul>
                                <li>
                                    <NavLink to={"/designsolution/route/works/ad"}>AD</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/designsolution/route/works/editorial"}>EDITORIAL</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/designsolution/route/works/promotion"}>PROMOTION</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/designsolution/route/works/posters"}>POSTERS</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/designsolution/route/works/identies"}>IDENTIES</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/designsolution/route/works/etc"}>ETC</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/designsolution/route/works/publications"}>PUBLICATIONS</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/designsolution/route/works/client"}>CLIENT</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <p onClick={ (e) => SideBarDropDown(e)}>CONTACT</p>
                            <ul>
                                <li>
                                    <NavLink to={"/designsolution/route/contact"}>CONTACT</NavLink>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </SideBar>
                <Contents>
                    <Switch>
                        {/* about */}
                        <Route path={"/designsolution/route/about/ceo"} component={CeoMessageComponent} exact/>

                        {/* works */}
                        <Route path={"/designsolution/route/works/ad"} component={AdComponent} exact/>
                        <Route path={"/designsolution/route/works/editorial"} component={EditorialComponent} exact/>
                        <Route path={"/designsolution/route/works/promotion"} component={PromotionComponent} exact/>
                        <Route path={"/designsolution/route/works/posters"} component={PostersComponent} exact/>
                        <Route path={"/designsolution/route/works/identies"} component={IdentiesComponent} exact/>
                        <Route path={"/designsolution/route/works/etc"} component={EtcComponent} exact/>
                        <Route path={"/designsolution/route/works/publications"} component={PublicationsComponent} exact/>
                        <Route path={"/designsolution/route/works/client"} component={ClientComponent} exact/>

                        {/* contact */}
                        <Route path={"/designsolution/route/contact"} component={ContactComponent} exact/>
                    </Switch>
                </Contents>
            </MainWrap>

        </Wrap>
    );
}

const Wrap = styled.div`
    width: 100%;
    height: 100%;

    display: flex;

    flex-direction: column;
`;

const Header = styled.header`
    height: 120px;

    border-bottom: 1px solid #fff;
    margin: 0px 5%;
    padding: 0px 0px 1rem;

    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    & > h1 {
        font-weight: 700;
    }
`;

const MainWrap = styled.main`
    margin: 0px 5%;

    display: flex;
    flex: 1;

    padding: 1.5rem 0px;
`;


const SideBar = styled.nav`
    width: 20rem;

    & > h1 {
        font-size: 1.5rem;
        font-weight: 100;

        & > em {
            font-weight: 700;
        }

        margin-bottom: 1.5rem;
    }

    & > ul > li > ul {
        display: none;
    }

    & > ul > li {
        margin-bottom: 1.5rem;
        font-weight: 500;
    }

    & > ul > li > ul {
        margin-top: 1.5rem;
    }

    & > ul > li > ul > li > a {
        padding: 0 0 0 7rem;
        font-weight: 100;

        color: rgba(255,255,255,0.7);
    }

    & > ul > li > ul > li > a.active {
        font-weight: 500;

        color: rgb(255,255,255);
    }

    & > ul > li > ul > li:not(:last-child) {
        margin-bottom: 0.75rem;
    }
`;

const Contents = styled.article`
    flex: 1;

    border: 1px solid #fff;
`;

export default DesignSolutionRouteComponent;