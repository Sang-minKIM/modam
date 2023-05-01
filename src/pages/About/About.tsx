import { css } from "@emotion/react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as ModamLogo } from "@assets/logo.svg";
import { theme } from "@styles/theme";
import preview from "@assets/preview.svg";
import { ReactComponent as ChevronDown } from "@assets/chevron-down-double.svg";

export const About = () => {
    return (
        <div css={container}>
            <header css={header}>
                <div css={logoWrapper}>
                    <ModamLogo css={logoImg} />
                    <h3 css={logoText}>MODAM</h3>
                </div>
                <Link css={loginBtn} to="/login">
                    로그인
                </Link>
            </header>
            <article css={contentsWrapper}>
                <section css={sloganBox}>
                    <h1 css={slogan}>
                        관심있는
                        <br />
                        <span>모</span>든 것을
                        <br />
                        <span>담</span>아보세요
                    </h1>
                    <Link css={joinBtn} to="/join">
                        시작하기
                    </Link>
                </section>
                <img css={previewImg} src={preview} alt="preview" />
                <span css={scrollDownIcon}>
                    <ChevronDown stroke="#ffffff" />
                </span>
            </article>
            <Outlet />
        </div>
    );
};

const container = css`
    width: 100vw;

    background-color: ${theme.color.white};
`;

const header = css`
    width: 100vw;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
`;

const logoWrapper = css`
    display: flex;
    align-items: center;
`;

const logoImg = css`
    width: 40px;
    height: 40px;
`;

const logoText = css`
    font-size: 1.75rem;
    color: ${theme.color.primary};
    margin-left: 0.5rem;
`;

const loginBtn = css`
    height: 40px;
    width: 65px;
    background-color: ${theme.color.primary};
    color: white;
    font-size: 1rem;
    font-weight: 700;
    border: none;
    border-radius: 4px;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const contentsWrapper = css`
    width: 100vw;
    height: calc(100vh - 80px);
    display: flex;
    justify-content: space-between;
`;

const sloganBox = css`
    width: fit-content;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-left: 10%;
`;

const slogan = css`
    font-size: 56px;
    color: ${theme.color.primary_light};
    span {
        color: ${theme.color.primary};
    }
`;

const joinBtn = css`
    height: 50px;
    width: 110px;
    background-color: ${theme.color.primary};
    color: white;
    font-size: 1.25rem;
    font-weight: 700;
    border: none;
    border-radius: 4px;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
`;

const previewImg = css`
    margin-right: 50px;
`;

const scrollDownIcon = css`
    width: 48px;
    height: 48px;
    position: absolute;
    bottom: 1rem;
    border-radius: 50%;
    right: calc(50vw - 48px);
    background-color: ${theme.color.primary};
    display: flex;
    align-items: center;
    justify-content: center;
`;
