1. 컴포넌트란 무엇인가

- 데이터를 입력받아 DOM Node를 출력하는 함수, 이 때 입력받는 데이터란 State나 Props

2. Uncontrolled Component와 Controlled Component

- Uncontrolled Component는 사용자가 상태를 제어하지 않는 Component
- Controlled Component는 사용자가 상태를 제어할 수 있는 컴포넌트

3. PureComponent

- render를 최적화하기 위해 사용
- PureComponent는 Props와 State를 얕은 비교하여 이전과 같으면 render를 실행시키지 않는다.
- 상위 컴포넌트에서 PureComponent를 사용하는 하위 컴포넌트를 호출할 때, Props에 Inline 함수나 render 메소드 내에서 새로운 ReactNode를 생성하면서 호출하면
  어차피 이전과 다른 인스턴스이기 때문에 항상 re-rendering 한다.

4. Portal Component

- 논리적으로는 하위 컴포넌트여야 하는데, 시각적으로는 상위 컴포넌트를 덮어야 할 때 사용한다.

5. Component Composition

- React에서는 합성, Composition을 통해 컴포넌트를 재사용할 수 있다.
- Composition을 지원하는 컴포넌트의 경우 PureComponent를 사용하면 성능이 나쁠 수 있다.
- Composition을 지원하는 컴포넌트를 최적화 하고 싶으면 특수화를 적용한다.
- 특수화란 PureComponent로 컴포넌트를 생성하고 그 컴포넌트에 Props를 전달하지 않는다면, 해당 컴포넌트는 다시 render 될 수 없다는 것이다.

6. Functional Component Hooks

- React.memo

  - PureComponent의 함수형 버전이다. Props와 State를 얕은 비교하여 같은 값이면 re-render 하지 않는다.

- useState

  - 함수형 컴포넌트에서 State를 사용할 수 있게끔 하는 기능이다.

- useCallback

  - 함수형 컴포넌트는 그 자체가 render 함수이기 때문에 이벤트 핸들러(Props로 넘기는 함수등...)를 어디서 만들던 간에 새로운 인스턴스를 만들게 된다. 이 때, 사용하고자 하는
    이벤트 핸들러를 useCallback으로 감싸고 두번째 인자(Dependency List)에 [] 빈 배열을 할당하면 해당 함수는 항상 같은 인스턴스이다.
  - 두번째 인자에 useState으로 만든 State나 Props를 넘기면 해당 값이 변경되었을 때, 얕은 비교를하여 다르면 새로운 인스턴스를 반환한다.

- useMemo

  - Props로 ReactNode를 넘기면 항상 re-render되는 것을 막기위해 사용한다. useCallback과 마찬가지로 첫번쨰 인자에는 사용하고자 하는 함수(조건에 따른 ReactNode를 반환하는 함수)를 넣는다. 두번째 인자로 넣어준 값이 변경되면 새로운 인스턴스를 반환하는 것도 useCallback과 같다.

- useRef

  - 각 노드 인스턴스별로 값은 다르지만 이 값이 변경 될 때마다 render가 실행될 필요가 없을 때 사용한다.

- useEffect

  - render가 완료된 후에 호출되는 콜백이다.
  - componentDidMount와 componentDidUpdate가 실행되는 시점을 합하면 useEffect가 실행되는 시점이라고 볼 수 있다.
  - useEffect는 Data Fetching과 같은 Side Effect를 발생시킬 때 쓰는 hook이다.
  - useEffect에 넘겨준 callback에 다시 callback 함수를 리턴하면 Unmount되면서 실행된다. (componentWillUnmount)

- Custom Hook

  - 기존의 Hook으로 Custom Hook을 만들 수 있다.
  - 중복되는 로직을 묶어서 추상화하고 재사용할 수 있다.

- Rules of Hooks

  - Hook을 사용하기 위해서는 다음과 같이 반드시 지켜야 할 규칙이 있다.

  - Hook은 항상 컴포넌트 render 로직의 Top Level 스코프에서 호출되어야만 한다.
    즉, Hook을 if, for문 혹은 다른 함수의 callback에서 사용하면 안된다.
    이것은 모든 render에 hook 호출 순서가 항상 같아야 하기 때문이다.

  - Hook을 React 함수(Functional Component, Custom Hooks)가 아닌 곳에서 호출하면 안된다.
