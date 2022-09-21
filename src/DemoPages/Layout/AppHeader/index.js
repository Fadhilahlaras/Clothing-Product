import React, {Fragment} from 'react';
import cx from 'classnames';

import {connect} from 'react-redux';

import CSSTransition from 'react-transition-group';

// import HeaderLogo from '../AppLogo';

// import SearchBox from './Components/SearchBox';
// import MegaMenu from './Components/MegaMenu';
// import UserBox from './Components/UserBox';

// import HeaderDots from "./Components/HeaderDots";

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    // const username = localStorage.getItem("username")
    //
    // const logout = (e) => {
    //     localStorage.clear()
    // }

    render() {
        let {
            headerBackgroundColor,
            enableMobileMenuSmall,
            enableHeaderShadow
        } = this.props;
        return (
            <Fragment>
                <CSSTransition
                    component="div"
                    className={cx("app-header", headerBackgroundColor, {'header-shadow': enableHeaderShadow})}
                    transitionName="HeaderAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={1500}
                    transitionEnter={false}
                    transitionLeave={false}>

                    {/* <HeaderLogo/> */}


                    <div className={cx(
                        "app-header__content",
                        {'header-mobile-open': enableMobileMenuSmall},
                    )}>


                        {/*<div className="app-header-left">*/}
                        {/*    <MegaMenu/>*/}
                        {/*</div>*/}

                        <div className="app-header-right">
                            {/* <MegaMenu/> */}

                            {/* <HeaderDots/> */}
                            {/* <UserBox/> */}
                        </div>
                    </div>
                </CSSTransition>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    enableHeaderShadow: state.ThemeOptions.enableHeaderShadow,
    closedSmallerSidebar: state.ThemeOptions.closedSmallerSidebar,
    headerBackgroundColor: state.ThemeOptions.headerBackgroundColor,
    enableMobileMenuSmall: state.ThemeOptions.enableMobileMenuSmall,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Header);