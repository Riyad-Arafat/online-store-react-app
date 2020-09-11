import React, {Component, Fragment } from 'react';


class NotFound extends Component{
    render()
    {
        return(
            <Fragment>
                <div className="container mb-5">
                    <div className="d-flex flex-column text-center bg-white p-5 mb-2">
                        <h1>Page not found</h1>
                        <span>The page you are looking for is temporarily unavailable or has been removed.</span>
                    </div>
                    <div className="text-center bg-white p-5">
                        <h4>
                            You can check out the great deals below or go back to our <a style={{color:"blue"}} href="/">Home Page</a>.
                        </h4>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default NotFound;