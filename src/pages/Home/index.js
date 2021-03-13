import React from 'react'
import './style.css';

import { Link } from 'react-router-dom';

// Icons
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';

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

                    <AppsIcon/>
                    <Avatar style={{ width: '25px', height: '25px' }} />

                </div>

            </div>

            <div className="home__body">

            </div>

        </div>
    )
}

export default Home
