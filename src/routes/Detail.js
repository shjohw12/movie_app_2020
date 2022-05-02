import React from 'react';

class Detail extends React.Component {

    // render() -> componentDidMount() 순서로 실행

    componentDidMount() {
        const { location, history } = this.props;

        // location.state가 없는 경우
        if (location.state === undefined) {
            // home 으로 이동
            history.push('/');
        }
    }

    render() {
        const { location } = this.props;


        if (location.state) {
            return <span>{location.state.title}</span>
        }
        else {
            return null;
        }
    }
}

export default Detail;