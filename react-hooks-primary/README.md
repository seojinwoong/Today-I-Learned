# useState
 
- setState로 값을 변경하면, 해당 컴포넌트는 '리랜더링' 된다.
- setState로 값을 변경할때, 그 이전값과 연관이 있다면 setState의 인자로 곧바로 값을 넣는 것이 아니라!
  콜백함수로 넣어준다. 콜백함수의 인자에는 기존의 state 값이 들어가 있다.

```js
    const handleUpload = () => {
        setNames((prev) => {
            return [input, ...prev]
        })
    }
```

- map 함수로 배열의 값들을 출력해 줄때에는 꼭 key속성을 부여해 주어야 한다.

- useState에서는 초기 값을 넣어주는데, 무거운 작업을 하고 초기 값을 세팅하는 경우에는 컴포넌트가 리랜더링 될때마다 계속해서 useState도 실행되기 때문에 성능상에 이슈가 생길 수 있다. 컴포넌트가 처음에 렌더링 될때만 실행하고 이후의 렌더링에서는 실행안되게 함수를 만들고 싶다면,,,

```js
const heavyWork = () => {
    console.log('엄청 무거운 작업');
    return ['홍길동', '고길동'];
}

function App() {
    const [names, setNames] = useState(() => {
        return heavyWork();
    })
}
```
이런식으로 useState 초기값을 작성하는 부분에 '콜백함수'로 작성해 주면된다.

