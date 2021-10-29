import React, { Component } from "react";

import ReactFullpage from '@fullpage/react-fullpage';

const LoadBadges = () => {
    return (
        <>
            {['bootstrap','html','java','javascript','python','react','vsc','vue'].sort().map(name => (
                <img alt={`${name}_img`} src={`${process.env.PUBLIC_URL}/badges/${name}.svg`} key={name} className="badge" />
            ))}
        </>
    )
}

class Main extends Component {
    render() {
        return (
            <ReactFullpage 
            licenseKey={'asdf'}
            scrollingSpeed={1000}
            navigation={true}
            navigationTooltips={['이름 및 소개', '사용중인 언어/배우고있는 언어', '깃헙 상태', 'Projects']}
            render={({ state, fullpageApi }) => {
                return (
                    <>
                        <div id="fullpage-wrapper">
                            <div className="box section">
                                <div id="user_">
                                    <img src={`${process.env.PUBLIC_URL}/profile.png`} className="img" alt="pulto_profile" />
                                    <h1 id="username">! 플토</h1>
                                </div>
                                <p style={{ fontSize: '100%' }} id="desc">평범한 인간</p>
                                <br />
                            </div>

                            <div className="skills section">
                                <h1>Used Language</h1>
                                <LoadBadges/>
                            </div>
                            <div className="github section">
                                <h1>Github</h1>
                                <p>My Github: <a href="https://github.com/turtle85917" style={{ textDecoration:'none', color: 'black' }}>turtle85917</a></p>
                                <iframe title="status" width={400} height={300} src="https://github-readme-stats.vercel.app/api?username=turtle85917&show_icons=true&theme=radical" frameBorder={0} />
                                <br />
                                <iframe title="langCode" width={400} height={300} src="https://github-readme-stats.vercel.app/api/top-langs?username=turtle85917&layout=compact" frameBorder={0} />
                            </div>
                            <div className="projects section">
                                <h1 id="text-pro">Projects (1개)</h1>
                                <div>
                                    <div className="card">
                                        <img alt="zonbie" className="card-img" src="https://cdn.discordapp.com/attachments/901989787865595944/903073958738423828/058731951d31dcb3.png" />
                                        <h4 className="card-text">존비봇</h4>
                                        <p className="card-p">엄청나게 많은 기능과 많은 API가 사용이 되었던 봇.</p>
                                        <iframe title="zonbie" width={400} height={120} src="https://github-readme-stats.vercel.app/api/pin/?username=turtle85917&repo=zonbiebot" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }} />
        )
    }
}

export default Main;