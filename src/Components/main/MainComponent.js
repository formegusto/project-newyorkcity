import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { ContainerBlock, FlexRowBlock, MainBlock, MainFooter, SideBlock, SideBottomItem, SideHeadItem } from '../../Atom/Block';
import mainBackground from '../../Assets/image/main-background.png';
import background1 from '../../Assets/image/background-1.png';
import background2 from '../../Assets/image/background-2.png';
import background3 from '../../Assets/image/background-3.png';
import background4 from '../../Assets/image/background-4.png';

function MainComponent() {
    const [backgroundImg, setBackgroundImg] = useState(mainBackground);

    const changeBackground = useCallback((img) => {
        setBackgroundImg(img);
    }, [])

    return (
        <ContainerBlock>
            <FlexRowBlock mainBackground={backgroundImg}>
                <SideBlock>
                    <Link 
                        to={"/kawards"} 
                        onMouseEnter={() => changeBackground(background1)}
                        onMouseLeave={() => changeBackground(mainBackground)}
                    >
                        <SideHeadItem
                            style={{
                            "borderRight": "1px solid #999",
                            "borderBottom": "1px solid #999"
                            }}>
                                <div className="content">
                                    <h2><em>BRAND</em>AWARDS</h2>
                                    <h1><em>대한민국 국가브랜드대상</em></h1>
                                </div>
                                <span className="wave red"></span>
                                
                        </SideHeadItem>
                    </Link>
                    <Link 
                        to={"/festivalplus"}
                        onMouseEnter={() => changeBackground(background2)}
                        onMouseLeave={() => changeBackground(mainBackground)}
                    >
                        <SideBottomItem
                            style={{
                            "borderRight": "1px solid #999",
                            }}>
                                <div className="content">
                                    <h1>Festival Plus</h1>
                                </div>
                                <span className="wave green"></span>
                                <MainFooter>
                                    <h1>중앙일보</h1>
                                </MainFooter>
                        </SideBottomItem>
                    </Link>
                </SideBlock>
                <a href="http://nba.cgcr.net" target="_blank" rel="noreferrer">
                    <MainBlock>
                            <div className="content">
                                <h1><em>KOREA</em>AWARDS</h1>
                            </div>
                            <MainFooter>
                                    <h1>NEWYORKFESTIVALS</h1>
                            </MainFooter>
                    </MainBlock>
                </a>
                <SideBlock>
                <Link 
                    to={"/kexcellence"}
                    onMouseEnter={() => changeBackground(background3)}
                    onMouseLeave={() => changeBackground(mainBackground)}
                    >
                        <SideHeadItem
                            style={{
                            "borderLeft": "1px solid #999",
                            "borderBottom": "1px solid #999"
                            }}>
                                <div className="content">
                                    <h2><em>PRODUCT</em>AWARDS</h2>
                                    <h1>KoreanExcellence</h1>
                                </div>
                                <span className="wave blue"></span>
                        </SideHeadItem>
                    </Link>
                    <Link 
                        to={"/designsolution"}
                        onMouseEnter={() => changeBackground(background4)}
                        onMouseLeave={() => changeBackground(mainBackground)}
                    >
                        <SideBottomItem
                            style={{
                            "borderLeft": "1px solid #999",
                            }}>
                                <div className="content">
                                    <h1><em>DESIGN</em>Solution</h1>
                                </div>
                                <span className="wave yellow"></span>
                                <MainFooter>
                                    <h1>이코노미스트</h1>
                                </MainFooter>
                        </SideBottomItem>
                    </Link>
                </SideBlock>
            </FlexRowBlock>
        </ContainerBlock>
    );
}

export default MainComponent;