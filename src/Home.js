import React, { Component } from "react";

import { Parallax } from 'react-parallax';
import './App.css'
import Mail from 'react-icons/lib/md/mail'
import Face from 'react-icons/lib/md/face'
import Box from 'react-icons/lib/md/account-box'
import Scanner from 'react-icons/lib/md/scanner'

class Home extends Component {
    render() {
        return (
            <div className=' animated  fadeIn '>


                <div id="section-1" className='HomeDivs'>
                    <div className="container-fluid">
                        <div>                           <div >
                                <div className="feature-item">
                                    <Mail />
                                    <h3>Device Mockups</h3>
                                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet magni minima quisquam, ratione repellendus sunt.</p>
                                </div>
                            </div>
                            <div >
                                <div className="feature-item">
                                    <Face/>
                                    <h3>Flexible Use</h3>
                                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consequuntur dolorem laboriosam.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div >
                                <div className="feature-item">
                                        <Scanner/>
                                    <h3>Free to Use</h3>
                                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos iste obcaecati tempore vitae!</p>
                                </div>
                            </div>
                            <div >
                                <div className="feature-item">
                                            <Box/>
                                    <h3>Open Source</h3>
                                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea hic quae rerum unde veniam.</p>
                                </div>
                            </div>
                        </div>

                </div></div>
                <Parallax
                    blur={{ min: -23, max: 15 }}
                    bgImage={require('./images/bg3.jpg')}
                    bgImageAlt="first"
                    strength={200}
                >

                    <div style={{ height: '400px' }} />
                </Parallax>



                <div id="section-2" className='HomeDivs'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid atque itaque odit! Accusamus,
                    autem, eius? Iure labore nisi optio, quas velit voluptas? Et impedit incidunt iste odio quos
                    tempora veniam.
                </div>
                <Parallax
                    blur={{ min: -23, max: 15 }}
                    bgImage={require('./images/bg2.jpg')}
                    bgImageAlt="second"
                    strength={200}
                >
                    Blur transition from min to max
                    <div style={{ height: '400px' }} />
                </Parallax>

                <div id="section-3" className='footer' > portfolio © Norbert  Brzeski
                    <p>        <a href='https://www.linkedin.com/in/norbert-brzeski/'>Linkedin</a> </p>
                    <p>    <a href='https://github.com/norbertbrzeski/'>Repozytorium github</a></p>
                </div>

                <Parallax
                    blur={{ min: -23, max: 15 }}
                    bgImage={require('./images/bg1.jpg')}
                    bgImageAlt="third"
                    strength={200}
                >
                    Blur transition from min to max
                    <div style={{ height: '400px' }} />
                </Parallax>


</div>

        );
    }
}

export default Home;


