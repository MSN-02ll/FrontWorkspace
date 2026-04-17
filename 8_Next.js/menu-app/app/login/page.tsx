'use client'

import { useState } from 'react';
import styles from './login.module.css'
import { api } from '../api/clientAxios';

export default function login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [ loading, setLoading] = useState(false);
    const [error, setError] = useState<string|null>(null);

    const handleLogin = async (e:React.SubmitEvent) =>{
        e.preventDefault();

        if(!email.trim() || !password.trim()){
            setError("이메일과 비밀번호를 모두 입력하세요");
            return;
        }

        setLoading(true);
        setError("");

        api.post("/auth/login",{email,password})
        .then(reponse => {
            // 로그인 성공시 실행할 로직.
        })
        .catch(err => {
            // 로그인 실패시 실행할 로직.
        })
        .finally(()=> setLoading(false));
    }

    const handleKakaoLogin = () =>{

    }

    return (
        <div className={styles.page}>
            <section className={styles.card}>
                <h2 className={styles.title}>로그인</h2>
                <form onSubmit={handleLogin} className={styles.form}>
                    <label htmlFor="email" className={styles.label}>이메일</label>
                    <input
                        id="email"
                        type="email"
                        className={styles.input}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="email"
                    />
                    <label htmlFor="password" className={styles.label}>비밀번호</label>
                    <input
                        id="password"
                        type="password"
                        className={styles.input}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="current-password"
                    />
                    <button type="submit" className={styles.primaryBtn} disabled={loading}>
                        {loading ? "로그인 중…" : "로그인"}
                    </button>
                    {error && <p className={styles.error}>{error}</p>}
                </form>
                 <div className={styles.dividerWrap}>
                    <div className={styles.divider} />
                    <span className={styles.dividerText}>또는</span>
                    <div className={styles.divider} />
                </div>

                <div className={styles.socialGroup}>
                    <button className={`${styles.socialBtn} ${styles.kakao}`} onClick={handleKakaoLogin}>
                        카카오로 로그인
                    </button>
                    {/* <button className={`${styles.socialBtn} ${styles.naver}`} onClick={handleNaverLogin}>
                        네이버로 로그인
                    </button> */}
                </div>
            </section>
        </div>
    )
}