import styles from './Home.module.css'


import { Splide, SplideSlide } from '@splidejs/react-splide';
import type { Splide as SplideCore } from '@splidejs/splide';
import '@splidejs/splide/css'


function Home() {

    const BREAKPOINT = 768;
    const updateControls = (splide: SplideCore) => {
        requestAnimationFrame(() => { // 描画前の調整
            const width = window.innerWidth;
            const slideCount = splide.length;

            const isPC = (width >= BREAKPOINT);

            if (isPC) {
                // PC
                const perPage = 2;
                const shouldHide = (slideCount <= perPage);

                splide.options = {
                    ...splide.options,
                    perPage,
                    arrows: !shouldHide,
                    pagination: !shouldHide,
                };
            } else {
                // SP
                splide.options = {
                    ...splide.options,
                    perPage: 1,
                    arrows: true,
                    pagination: true,
                };
            }
        });
    };

    return (
        <div className={styles.Home}>
            <section className={styles.Home__Firstview} id="firstview">
                <div className={styles.Home__Firstview__Inner}>
                    <div className={styles.Home__Firstview__Heading}>
                        <h1>KANDA AIKA</h1>
                        <p className="lead">Frontend Engineer / Web Developer</p>
                        <ul className={styles.Home__Firstview__List}>
                            <li><a href="https://github.com/kanda-aries" target="_blank"><img src="/portfolio-1215/icon/github.svg" alt="" /></a></li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className={styles.Home__Profile} id="profile">
                <div className={styles.Home__Profile__Inner}>
                    <div className={styles.Home__Profile__Heading}>
                        <h2>Profile</h2>
                    </div>

                    <div className={`p-list-discrption ${styles.Home__Profile__List}`}>
                        <dl>
                            <dt>生年月日</dt>
                            <dd>1996年04月03日</dd>
                        </dl>
                        <dl>
                            <dt>経歴</dt>
                            <dd>
                                <dl>
                                    <dt>城星学園高等学校</dt>
                                    <dd>2012〜2015年</dd>
                                </dl>
                                <dl>
                                    <dt>福岡工業大学 情報工学部 情報通信工学科</dt>
                                    <dd>2015〜2019年</dd>
                                </dl>
                                <dl>
                                    <dt>株式会社ペンシル</dt>
                                    <dd>2019年〜</dd>
                                </dl>
                            </dd>
                        </dl>
                    </div>
                </div>
            </section>

            <section className={styles.Home__Skill} id="skill">
                <div className={styles.Home__Skill__Inner}>
                    <div className={styles.Home__Skill__Heading}>
                        <h2>Skills</h2>
                    </div>

                    <Splide
                        className={styles.Home__Skill__Layout}
                        options={{
                            perPage: 2,
                            gap: '1.5rem',
                            arrows: true,
                            pagination: true,
                        }}
                        onMounted={updateControls}
                        onUpdated={updateControls}
                        onResize={updateControls}
                    >
                        <SplideSlide>
                        <div className={`p-list-discrption ${styles.Home__Skill__List}`}>
                            <dl>
                                <dt>実務経験</dt>
                                <dd>
                                    <p>HTML</p>
                                    <p>CSS (Sass/SCSS)</p>
                                    <p>JavaScript</p>
                                    <p>jQuery</p>
                                    <p>PHP（当込み程度）</p>
                                    <p>Node.js(ライブラリ使用)</p>
                                </dd>
                            </dl>
                            <dl>
                                <dt>学習中</dt>
                                <dd>
                                    <p>React</p>
                                    <p>TypeScript</p>
                                </dd>
                            </dl>
                            <dl>
                                <dt>在学時使用</dt>
                                <dd>
                                    <p>C,C+</p>
                                    <p>MySQL</p>
                                </dd>
                            </dl>
                        </div>
                        </SplideSlide>

                        <SplideSlide>
                        <div className={`p-list-discrption ${styles.Home__Skill__List}`}>
                            <dl>
                                <dt>バージョン管理</dt>
                                <dd>
                                    <p>Git（SourceTree）</p>
                                    <p>Github（勉強中）</p>
                                </dd>
                            </dl>
                            <dl>
                                <dt>タスク管理</dt>
                                <dd>
                                    <p>Backlog</p>
                                    <p>Box</p>
                                </dd>
                            </dl>
                            <dl>
                                <dt>エディタ</dt>
                                <dd>
                                    <p>VSCode</p>
                                    <p>Antigravity</p>
                                    <p>Cursor（勉強中）</p>
                                </dd>
                            </dl>
                            <dl>
                                <dt>デザイン確認</dt>
                                <dd>
                                    <p>Photoshop</p>
                                    <p>Figma</p>
                                </dd>
                            </dl>
                        </div>
                        </SplideSlide>
                    </Splide>
                </div>
            </section>

            <section className={styles.Home__Record} id="record">
                <div className={styles.Home__Record__Inner}>
                    <div className={styles.Home__Record__Heading}>
                        <h2>Records</h2>
                    </div>
                    <div className={styles.Home__Record__List}>
                        <article className={styles.Home__Record__ListItem}>
                            <div className={styles.Home__Record__ListItem__Img}><img src="/portfolio-1215/icon/car.svg" className={styles.img_icon} alt="" /></div>
                            <h3>法人向け予約導線再構築</h3>
                            <div className={styles.Home__Record__ListItem__Content}>
                                <p>フロントエンドリーダーとしてディレクションとモック制作を行いました。</p>
                                <p>HTML,SCSS,JavaScript</p>
                            </div>
                        </article>
                        <article className={styles.Home__Record__ListItem}>
                            <div className={styles.Home__Record__ListItem__Img}><img src="/portfolio-1215/icon/carry.svg" className={styles.img_icon} alt="" /></div>
                            <h3>運用・制作</h3>
                            <div className={styles.Home__Record__ListItem__Content}>
                                <p>フロントエンドリーダーとしてサイト運用とページ制作を行っています。</p>
                                <p>HTML,SCSS,JavaScript,WordPress,TeamSite</p>
                            </div>
                        </article>
                        <article className={styles.Home__Record__ListItem}>
                            <div className={styles.Home__Record__ListItem__Img}><img src="/portfolio-1215/icon/health.svg" className={styles.img_icon} alt="" /></div>
                            <h3>運用・制作</h3>
                            <div className={styles.Home__Record__ListItem__Content}>
                                <p>フロントエンドリーダーとしてサイト運用とページ制作を行っています。</p>
                                <p>HTML,SCSS,JavaScript,CakePHP</p>
                            </div>
                        </article>
                        <article className={styles.Home__Record__ListItem}>
                            <div className={styles.Home__Record__ListItem__Img}><img src="/portfolio-1215/icon/candy.svg" className={styles.img_icon} alt="" /></div>
                            <h3>JavaScriptを使った表示切替え</h3>
                            <div className={styles.Home__Record__ListItem__Content}>
                                <p>ボタン押下後に特定確率が定義された商品をランダムに選定して表示する機能を実装しました。</p>
                                <p>JavaScript</p>
                            </div>
                        </article>
                        <article className={styles.Home__Record__ListItem}>
                            <div className={styles.Home__Record__ListItem__Img}><img src="/portfolio-1215/icon/health.svg" className={styles.img_icon} alt="" /></div>
                            <h3>Reactを使った表示切替え</h3>
                            <div className={styles.Home__Record__ListItem__Content}>
                                <p>設問に答えた結果、適切なページを表示する機能を実装しました。</p>
                                <p>React</p>
                            </div>
                        </article>
                        <article className={styles.Home__Record__ListItem}>
                            <div className={styles.Home__Record__ListItem__Img}><img src="/portfolio-1215/icon/plane.svg" className={styles.img_icon} alt="" /></div>
                            <h3>制作・法人向け再構築</h3>
                            <div className={styles.Home__Record__ListItem__Content}>
                                <p>法人向け再構築では、フロントエンドリーダーとしてディレクションとモック作成を行いました。</p>
                                <p>HTML,SCSS,JavaScript</p>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Home
