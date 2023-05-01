/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import joinBg from "@assets/joinBg.svg";
import { theme } from "@styles/theme";
import { ReactComponent as ModamLogo } from "@assets/logo.svg";
import { Link } from "react-router-dom";
export const Join = () => {
    return (
        <div css={container}>
            <article css={overlay}>
                <aside css={messageWrapper}>
                    <h1 css={message}>
                        모담에 가입하고
                        <br />
                        기억할 것들을
                        <br />
                        분류하기
                    </h1>
                </aside>
                <section css={modalWrapper}>
                    <div css={modal}>
                        <ModamLogo css={logo} />
                        <h3 css={introText}>
                            MODAM에 오신 것을
                            <br />
                            환영합니다.
                        </h3>
                        <form css={joinForm}>
                            <label css={label} htmlFor="name">
                                이름
                            </label>
                            <input css={input} name="name" type="text" />
                            <label css={label} htmlFor="email">
                                이메일
                            </label>
                            <input css={input} name="email" type="email" />
                            <label css={label} htmlFor="password">
                                비밀번호
                            </label>
                            <input css={input} name="password" type="password" />
                            <label css={label} htmlFor="pwConfirm">
                                비밀번호 확인
                            </label>
                            <input css={input} name="pwConfirm" type="password" />
                            <input css={submitBtn} name="signup" type="submit" value="가입하기" />
                        </form>
                        <div css={loginWrapper}>
                            <span css={loginLabel}>이미 회원이신가요? </span>
                            <Link to="/login" preventScrollReset={true} css={loginLink}>
                                로그인
                            </Link>
                        </div>
                    </div>
                </section>
            </article>
        </div>
    );
};

const container = css`
    width: 100vw;
    height: 100vh;
    background: url(${joinBg}) repeat left;
`;
const overlay = css`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const messageWrapper = css`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const message = css`
    font-size: 56px;
    color: ${theme.color.white};
    margin: 10%;
`;

const modalWrapper = css`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const modal = css`
    width: 527px;
    height: 684px;
    background-color: ${theme.color.white};
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const logo = css`
    width: 50px;
    height: 50px;
`;

const introText = css`
    font-size: 1.75rem;
    color: ${theme.color.primary};
    text-align: center;
    margin-top: 15px;
`;

const joinForm = css`
    display: flex;
    flex-direction: column;
`;

const label = css`
    font-size: 1rem;
    font-weight: 700;
    color: ${theme.color.primary};
`;

const input = css`
    width: 364px;
    height: 48px;
    border-radius: 2px;
    border: 1px solid ${theme.color.primary_light};
    margin-bottom: 15px;
`;

const submitBtn = css`
    width: 364px;
    height: 48px;
    border-radius: 2px;
    border: 1px solid ${theme.color.primary};
    background-color: ${theme.color.primary};
    color: ${theme.color.white};
    font-size: 1rem;
    font-weight: 700;
    &:hover {
        cursor: pointer;
    }
`;

const loginWrapper = css`
    margin-top: 15px;
`;
const loginLabel = css`
    font-size: 0.875rem;
    font-weight: 700;
    color: ${theme.color.primary_light};
`;

const loginLink = css`
    font-size: 0.875rem;
    font-weight: 700;
    color: ${theme.color.primary};
`;
