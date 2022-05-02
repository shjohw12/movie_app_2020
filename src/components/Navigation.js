import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
    return (
        <div className='nav'>
            {/* a 엘리먼트의 href 속성은 페이지 전체를 다시 그림, 필요한 부분만 그리는 리액트의 장점을 활용할 수 없다 */}
            {/* <a href="/">Home</a> */}
            {/* <a href="/about">About</a> */}

            <Link to="/">Home</Link>
            <Link to="/about">About</Link>

            {/* props에 데이터 전달하기 */}
            {/* <Link to={{ pathname: '/about', state: { fromNavigation: true } }}>About</Link> */}
        </div>
    );
}

export default Navigation;