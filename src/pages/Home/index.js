import React from 'react'
import './style.css';

import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="home">
            
            <div className="home__header">

                <div className="home__headerLeft">

                    <Link to="about">
                        About
                    </Link>

                    <Link to="about">
                        Store
                    </Link>

                </div>

                <div className="home__headerRight">

                    <Link to="about">
                        Gmail
                    </Link>

                    <Link to="about">
                        Images
                    </Link>

                </div>

            </div>

            <div className="home__body">

            </div>

        </div>
    )
}

export default Home
