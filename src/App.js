import styled from "styled-components";
import { ReactComponent as SiteLogo } from "./images/logo.svg";
import { ReactComponent as CloseIcon } from "./images/icon-menu-close.svg";
import { ReactComponent as MenuIcon } from "./images/icon-menu.svg";
import { useState } from "react";
import { slidePopUp } from "./keyframes";
import TopicArticleMobileImage from "./images/image-web-3-mobile.jpg";
import TopicArticleDesktopImage from "./images/image-web-3-desktop.jpg";
import popluarArticleImage01 from "./images/image-retro-pcs.jpg";
import popluarArticleImage02 from "./images/image-top-laptops.jpg";
import popluarArticleImage03 from "./images/image-gaming-growth.jpg";
import { useEffect } from "react";

function App() {
  const [menuState, setMenuState] = useState(false);
  const [viewWidth, setViewWidth] = useState(window.innerWidth);

  // window width resize check
  useEffect(() => {
    const setWindowWidthResize = () => {
      setViewWidth(window.innerWidth);
    };

    window.addEventListener("resize", setWindowWidthResize);

    return () => {
      window.removeEventListener("resize", setWindowWidthResize);
    };
  }, []);

  // open/close menu bar when the screen is mobile size
  const changeToAsideMenuBarState = () => {
    setMenuState(!menuState);
  };

  // no refresh when user clicked button
  const clickToMovePage = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <section className="App">
        <Header>
          <SiteLogo />
          <MenuBtn onClick={changeToAsideMenuBarState}>
            <MenuIcon />
          </MenuBtn>
          <HeaderNav>
            <a
              href="#Home"
              target="_blank"
              rel="noopener noreferrer"
              onClick={clickToMovePage}>
              Home
            </a>
            <a
              href="#New"
              target="_blank"
              rel="noopener noreferrer"
              onClick={clickToMovePage}>
              New
            </a>
            <a
              href="#Popular"
              target="_blank"
              rel="noopener noreferrer"
              onClick={clickToMovePage}>
              Popular
            </a>
            <a
              href="#Trending"
              target="_blank"
              rel="noopener noreferrer"
              onClick={clickToMovePage}>
              Trending
            </a>
            <a
              href="#Categories"
              target="_blank"
              rel="noopener noreferrer"
              onClick={clickToMovePage}>
              Categories
            </a>
          </HeaderNav>
        </Header>
        <AsideMenuBar display={menuState === true ? "flex" : "none"}>
          <AsideMenuBackground onClick={changeToAsideMenuBarState} />
          <AsideNav>
            <CloseBtn onClick={changeToAsideMenuBarState}>
              <CloseIcon />
            </CloseBtn>
            <a
              href="#Home"
              target="_blank"
              rel="noopener noreferrer"
              onClick={clickToMovePage}>
              Home
            </a>
            <a
              href="#New"
              target="_blank"
              rel="noopener noreferrer"
              onClick={clickToMovePage}>
              New
            </a>
            <a
              href="#Popular"
              target="_blank"
              rel="noopener noreferrer"
              onClick={clickToMovePage}>
              Popular
            </a>
            <a
              href="#Trending"
              target="_blank"
              rel="noopener noreferrer"
              onClick={clickToMovePage}>
              Trending
            </a>
            <a
              href="#Categories"
              target="_blank"
              rel="noopener noreferrer"
              onClick={clickToMovePage}>
              Categories
            </a>
          </AsideNav>
        </AsideMenuBar>
        <ArticleSection>
          <TopicArticle>
            <figure>
              <img
                src={
                  viewWidth < 640
                    ? TopicArticleMobileImage
                    : TopicArticleDesktopImage
                }
                alt=""
              />
            </figure>
            <div>
              <h1>The Bright Future of Web 3.0?</h1>
              <div>
                <p>
                  We dive into the next evolution of the web that claims to put
                  the power of the platforms back into the hands of the people.
                  But is it really fulfilling its promise?
                </p>
                <button>Read more</button>
              </div>
            </div>
          </TopicArticle>
          <NewestArticle>
            <h2>New</h2>
            <div>
              <h3>Hydrogen VS Electric Cars</h3>
              <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
            </div>
            <div>
              <h3>The Downsides of AI Artistry</h3>
              <p>
                What are the possible adverse effects of on-demand AI image
                generation?
              </p>
            </div>
            <div>
              <h3>Is VC Funding Drying Up?</h3>
              <p>
                Private funding by VC firms is down 50% YOY. We take a look at
                what that means.
              </p>
            </div>
          </NewestArticle>
          <PoplularArticle>
            <div>
              <figure>
                <PoplularArticleImg src={popluarArticleImage01} alt="" />
              </figure>
              <div>
                <span>01</span>
                <h3>Reviving Retro PCs</h3>
                <p>What happens when old PCs are given modern upgrades?</p>
              </div>
            </div>
            <div>
              <figure>
                <PoplularArticleImg src={popluarArticleImage02} alt="" />
              </figure>
              <div>
                <span>02</span>
                <h3>Top 10 Laptops of 2022</h3>
                <p>Our best picks for various needs and budgets.</p>
              </div>
            </div>
            <div>
              <figure>
                <PoplularArticleImg src={popluarArticleImage03} alt="" />
              </figure>
              <div>
                <span>03</span>
                <h3>The Growth of Gaming</h3>
                <p>How the pandemic has sparked fresh opportunities.</p>
              </div>
            </div>
          </PoplularArticle>
        </ArticleSection>
      </section>
      <Attribution>
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noopener noreferrer">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://github.com/DrunkenNeoguri"
          target="_blank"
          rel="noopener noreferrer">
          Develop Neoguri
        </a>
        .
      </Attribution>
    </>
  );
}

export default App;

// website innerwidth check

// styled-components

// header

const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 2rem 1rem;
  box-sizing: border-box;

  @media screen and (min-width: 1124px) {
    max-width: 1110px;
    padding: 2rem 0;
    margin: 0 auto;
  }
`;

const MenuBtn = styled.button`
  background: none;

  display: inline-block;

  border: none;
  outline: none;
  padding: 0;
  margin: 0;

  cursor: pointer;

  transition: 0.05s ease;
  &:hover {
    & > svg > g {
      fill: var(--soft--red);
    }
  }

  @media screen and (min-width: 1124px) {
    display: none;
  }
`;

const HeaderNav = styled.nav`
  display: none;

  @media screen and (min-width: 1124px) {
    display: flex;
    gap: 2rem;
    & > a {
      display: inline-block;

      font-size: 1rem;
      font-weight: 400;
      text-decoration: none;
      color: var(--dark--grayish--blue);

      margin: 1rem;
      margin-right: auto;

      cursor: pointer;

      transition: 0.05s ease;
    }
    & > a:hover {
      color: var(--soft--red);
    }
  }
`;

// aside menu bar

const AsideMenuBar = styled.aside`
  display: ${(props) => props.display};
  flex-direction: column;
  align-items: flex-start;
  position: fixed;

  width: 100vw;

  top: 0;
  z-index: 3;

  @media screen and (min-width: 1124px) {
    display: none;
  }
`;

const AsideMenuBackground = styled.div`
  background: hsla(0, 0%, 0%, 0.2);

  display: block;

  height: 100vh;
  width: 100vw;

  cursor: pointer;
`;

const AsideNav = styled.nav`
  background: var(--off--white);

  display: flex;
  flex-direction: column;
  position: absolute;

  right: 0;
  width: 70vw;
  height: 100vh;
  z-index: 4;

  animation: ${slidePopUp} 0.4s ease-out;

  & > a {
    display: inline-block;

    font-size: 1rem;
    font-weight: 400;
    text-decoration: none;
    color: var(--very--dark--blue);

    margin: 1rem;
    margin-right: auto;

    cursor: pointer;

    transition: 0.05s ease;
  }

  & > a:hover {
    color: var(--soft--red);
  }
`;

const CloseBtn = styled.button`
  background: none;

  display: block;

  border: none;
  outline: none;
  padding: 0;
  margin: 1.5rem;
  margin-left: auto;

  cursor: pointer;

  transition: 0.05s ease;
  &:hover {
    & > svg > g {
      fill: var(--soft--red);
    }
  }
`;

// Article Section

const ArticleSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1rem;

  @media screen and (min-width: 1124px) {
    max-width: 1110px;
    display: grid;
    grid-template-columns: 730px 350px;
    gap: 2rem;
    margin: 0 auto;
    & > article:nth-child(3) {
      grid-column: -1 / -3;
    }
  }
`;

// Topic Article

const TopicArticle = styled.article`
  margin: 0 0 1rem 0;

  & > figure {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    width: 100%;
    margin: 0;
  }

  & > figure > img {
    width: 100%;
  }

  h1 {
    font-size: 2.8rem;
    font-weight: 800;
    margin: 1rem 0;
    line-height: 1;
  }

  p {
    color: var(--dark--grayish--blue);
    margin: 1rem 0;
    line-height: 1.8rem;
  }

  button {
    background: var(--soft--red);

    color: var(--off--white);
    letter-spacing: 0.3rem;
    text-transform: uppercase;
    font-weight: 700;

    border: none;
    outline: none;
    padding: 1rem 2rem;
    margin: 0;

    cursor: pointer;

    transition: 0.1s ease-in-out;
    &:hover {
      background: var(--very--dark--blue);
    }
  }

  @media screen and (min-width: 1124px) {
    margin: 0;
    & > div {
      display: flex;
      flex-direction: row;
      width: 100%;
      justify-content: space-around;
      margin-top: 1rem;
      gap: 1rem;
    }

    h1 {
      font-size: 4rem;
    }

    & > div > div {
      display: flex;
      flex-direction: column;
      max-width: 350px;
      height: 210px;
    }

    button {
      margin-top: auto;
      margin-right: auto;
    }
  }
`;

// Newest Article

const NewestArticle = styled.article`
  background: var(--very--dark--blue);
  margin: 3rem 0;
  padding: 1.5rem 1.2rem 1rem 1.2rem;

  & > h2 {
    color: var(--soft--orange);
    font-size: 2rem;
    margin: 0;
    padding: 0;
  }

  & > div {
    border-bottom: 1px solid var(--dark--grayish--blue);
    padding: 1rem 0;
  }

  & > div:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }

  & > div > h3 {
    color: var(--off--white);
    font-size: 1.3rem;
  }

  & > div > p {
    color: var(--grayish--blue);
    font-size: 1rem;
    line-height: 1.8rem;
  }

  @media screen and (min-width: 1124px) {
    margin: 0;
    padding: 2rem 1.75rem 0.5rem 1.75rem;

    & > h2 {
      font-size: 2.5rem;
    }
    & > div {
      padding: 0.5rem 0;
    }
  }
`;

// Poplular Article

const PoplularArticle = styled.article`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin: 1rem 0;

  & > div {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 1rem;

    margin: 1rem 0;

    & > figure {
      margin: 0;

      width: 30vw;
      height: 100%;
      & > img {
        height: 100%;
        width: 30vw;
        vertical-align: bottom;
      }
    }

    & > div {
      & > span {
        font-weight: 700;
        font-size: 2rem;
        color: var(--grayish--blue);
      }
      & > h3 {
        font-weight: 800;
        color: var(--very--dark--blue);

        margin: 1rem 0;
      }

      & > p {
        color: var(--dark--grayish--blue);
        font-size: 0.9rem;
        line-height: 1.8rem;

        padding-right: 1rem;

        margin: 0;
      }
    }
  }

  @media screen and (min-width: 1124px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1.5rem;
    max-width: 75rem;

    & > div {
      gap: 1.5rem;
      & > figure {
        margin: 0;
        width: 100px;
        & > img {
          width: 100px;
          height: 100%;
          vertical-align: bottom;
        }
      }
      & > div {
        max-width: 15rem;
        & > p {
          padding-right: 1.5rem;
        }
      }
    }
  }
`;

const PoplularArticleImg = styled.img`
  width: 100%;
  height: 100%;
`;

//footer

const Attribution = styled.footer`
  font-size: 11px;
  text-align: center;

  & > a {
    color: hsl(228, 45%, 44%);
  }
`;
