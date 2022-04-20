import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import './App.css';

// import PropTypes from 'prop-types';

// // function Food(props) {
// //   // console.log(props)
// //   // 객체에 있는 값은 점 연산자를 사용
// //   return <h1>I like {props.fav}</h1>;
// // }

// // ES6 문법 중 구조 분해 할당을 이용하여 점 연산자 사용하지 않기

// // function Food(props) {
// //   { fav } = props;
// //   return <h1>I like {fav}</h1>;
// // }

// // function Food({ fav }) {
// //   return <h1>I like {fav}</h1>;
// // }




// function Food({ name, picture, rating }) {
//   // return <h1>I like {name}</h1>;
//   return (
//     <div>
//       <h2>I like {name}</h2>
//       <h4>{rating}/5.0</h4>
//       <img src={picture} alt={name} />
//     </div>
//   );
// }

// Food.propTypes = {
//   name: PropTypes.string.isRequired,
//   picture: PropTypes.string.isRequired,
//   // rating: PropTypes.number.isRequired,

//   // 이런식으로 하면 rating props 필수는 아님, isRequired를 필요에 따라 추가할 수 있다
//   rating: PropTypes.number,
// };

// // 서버에서 넘어온 데이터를 저장할 수 있도록 배열 할당
// const foodILike = [
//   {
//     id: 1,
//     name: 'Kimchi',
//     image: 'https://www.bgw.kr/wp-content/uploads/2019/12/%ED%8F%AC%EA%B8%B0%EA%B9%80%EC%B9%98-1200x1200.png',
//     rating: 5,
//   },
//   {
//     id: 2,
//     name: 'Samgyeopsal',
//     image: 'https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201702/27/117f5b49-1d09-4550-8ab7-87c0d82614de.jpg',
//     rating: 4.9,
//   },
//   {
//     id: 3,
//     name: 'Bibimbap',
//     image: 'https://health.chosun.com/site/data/img_dir/2021/01/27/2021012702508_0.jpg',
//     rating: 1.2,
//   }
// ];



// function App() {
//   // return <div className="App" />;
//   // return <div>Hello!!!!!</div>;
//   // props를 이용하여 Food 컴포넌트에 데이터를 보내는 방법
//   // props의 이름은 fav이고 "kimchi" 값을 담은 것
//   // * 주의할 점
//   // props에 있는 데이터는 문자열인 경우를 제외하면 모두 중괄호로 감싸야 한다

//   // console.log(foodILike.map(renderFood));

//   return (
//     <div>
//       {/* <h1>Hello</h1> */}
//       {/* <Food fav="kimchi" something={true} papapapa={['hello', 1, 2, 3, 4, true]} /> */}
//       {/* props에 있는 데이터를 객체로 변환하여 Food 컴포넌트(함수)에 전달 */}

//       {/* 여러 개의 컴포넌트에 props 사용하기 */}
//       {/* 같은 컴포넌트를 사용해도 props 값이 다르므로 다른 문장이 출력됨 */}
//       {/* 컴포넌트 재사용 */}
//       {/* <Food fav="kimchi" /> */}
//       {/* <Food fav="ramen" /> */}
//       {/* <Food fav="samgiopsal" /> */}
//       {/* <Food fav="chukumi" /> */}

//       {/* map을 통해 dish에 foodILike 원소가 하나씩 넘어가고, 객체 형태이므로 dish.name 과 같이 음식 이름을 props로 넘겨줌 */}

//       {/* {foodILike.map(dish => (<Food name={dish.name} picture={dish.image} />))} */}

//       {/* picture 을 image로 바꾸면 사진이 나오지 않는다. picture props를 요구하는데 존재하지 않기 때문 */}

//       {foodILike.map(dish => (
//         <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
//       ))}

//     </div>
//   );
// }

// // function renderFood(dish) {
// //   return <Food name={dish.name} picture={dish.image} />;
// // }



// 마운트 생명주기 함수
// constructor() -> render() -> componentDidMount()


// 업데이트 생명주기 함수
// setState() -> render() -> componentDidUpdate()

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log('hello');
//   }

//   state = {
//     count: 0,
//   }

//   add = () => {
//     // 성능상 안좋음
//     // this.setState({ count: this.state.count + 1 });

//     // current 에는 현재 state가 넘어온다
//     // setState() 의 인자로 state를 전달하면 바뀐 데이터만 업데이트 한다 -> 성능상 좋음
//     this.setState(current => (
//       { count: current.count + 1 }
//     ))
//   };

//   minus = () => {
//     // this.setState({ count: this.state.count - 1 });
//     this.setState(currrent => (
//       { count: currrent.count - 1 }
//     ));
//   };

//   componentDidMount() {
//     console.log('component rendered');
//   }

//   componentDidUpdate() {
//     console.log('I just updated');
//   }


//   componentWillUnmount() {
//     console.log('Goodbye, cruel world');
//   }

//   // 클래스형 컴포넌트는 render() 메소드가 JSX를 반환한다
//   // 리액트가 render()를 자동으로 실행시켜 줌
//   render() {
//     console.log("I'm rendering");
//     return (
//       <div>
//         <h1>The number is: {this.state.count}</h1>
//         <button onClick={this.add}>Add</button>
//         <button onClick={this.minus}>Minus</button>
//       </div>
//     );
//   }



// }






class App extends React.Component {
  state = {
    isLoading: true,
    // 로딩된 영화 데이터를 저장하는 배열, 객체 원소가 쭉 들어올 것임.
    movie: [],
  };

  // axios는 네트워크를 사용하므로 느리게 동작한다
  // axios.get()를 포함하고 있는 함수의 실행이 끝날 때까지 기다려야 함
  // async를 () 앞에 붙이고 실제 시간이 필요한 대상인 axios.get 앞에 await 붙인다
  getMovies = async () => {

    const {
      data: {
        data: { movies },
      },
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    // 평점 순으로 정렬된 데이터

    // console.log(movies.data.data.movies);


    // this.setState({ movies: movies });
    // 왼쪽 movies는 state이고, 오른쪽 movies 는 axios.get()의 결과
    // ES6 에서는 객체의 키와 대입할 변수의 이름이 같다면 다음과 같이 축약할 수 있다

    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    // 첫번째 인자로 전달한 함수를 두번째 인자로 전달한 값(밀리초) 후에 실행한다
    // setTimeout(() => {
    // this.setState({ isLoading: false });
    // }, 6000);

    // axios.get('https://yts-proxy.now.sh/list_movies.json');

    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;

    // HTML의 class 와 이름이 겹치므로
    // 리액트에서는 className으로 쓴다
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {
              movies.map(movie => (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              ))
            }
          </div>
        )}
      </section>
    );

  }
}




export default App;
