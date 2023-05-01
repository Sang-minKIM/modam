import { css } from "@emotion/react";
import joinBg from "@assets/joinBg.svg";
import { theme } from "@styles/theme";
import { ReactComponent as ModamLogo } from "@assets/logo.svg";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const Login = () => {
    useEffect(() => {
        window.scrollTo(0, document.body.scrollHeight);
    }, []);
    return (
        <div key="loginModal" css={container}>
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
                            <span>MODAM</span>에 오신 것을
                            <br />
                            환영합니다.
                            <h4>북마크를 효과적으로 기록하기</h4>
                        </h3>
                        <form css={joinForm}>
                            <label css={label} htmlFor="email">
                                이메일
                            </label>
                            <input css={input} name="email" type="email" />
                            <label css={label} htmlFor="password">
                                비밀번호
                            </label>
                            <input css={input} name="password" type="password" />

                            <input css={submitBtn} name="signup" type="submit" value="로그인" />
                        </form>
                        <div css={joinWrapper}>
                            <span css={joinLabel}>아직 모담을 사용하고 있지 않으신가요? </span>

                            <Link to="/join" preventScrollReset={true} css={joinLink}>
                                회원가입
                            </Link>
                        </div>
                        <div css={joinWrapper}>
                            <Link to="/join" preventScrollReset={true} css={joinLink}>
                                비밀번호를 잊으셨나요?
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
    width: 500px;
    height: 600px;
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
    color: ${theme.color.primary_light};
    text-align: center;
    margin-top: 15px;
    span {
        color: ${theme.color.primary};
    }
    h4 {
        font-size: 1rem;
        margin: 0.75rem 0;
    }
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

const joinWrapper = css`
    margin-top: 15px;
`;
const joinLabel = css`
    font-size: 0.875rem;
    font-weight: 700;
    color: ${theme.color.primary_light};
`;

const joinLink = css`
    font-size: 0.875rem;
    font-weight: 700;
    color: ${theme.color.primary};
`;
