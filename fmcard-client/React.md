<h1 align=center  style="font-weight:bold;"> REACT MEMO </h1>

# **1. JSX**
JSX - JavaScript XML

# **2.REACT createElement**

- Element type :
  - Function
  - Class
- Props
  - React Element
    - using props like html tags do
    - for => htmlFor, class => className
  - React component
    -  prop used as function arrgument
    - Tu do dat ten props
    - Using destructuring (JS)
  - Prop in JSX
- State and Lifecycle  
- Form
- List and Keys

# **3. Deeper Guide**
## **Acessibility** 

- **React Fragment**
  - Đôi khi chúng ta sử dụng thẻ `div` để React hoạt động được. Tuy nhiên nên dùng `<Fragment></Fragment>` để chứa các element khác
  - Cũng cần có prop `key`
  - Fragment short syntax: `<></>`

## **Code-splitting**

- **Webpack**
- **React.lazy**
  - Cho phép render 1 dynamic import như 1 component thoogn thường
    ```javascript
    const OtherComponent = React.lazy(() => import('./OtherComponent'));
    ```
  - Nên được đặt trong component `<Suspense></Suspense>`, qua đó cho phép chúng ta show ra các nội dung dự phòng (loading, progress, etc) trong khi lazy component đang được tải 
  ```javascript
  function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
      </Suspense>
    </div>
  );
  }
  ```
  - Prop `fallback` trong component Suspense nhận bất cứ React element nào để render trong khi chờ lazy component được tải 
  - Chú ý: React.lazy và Suspense chưa có sẵn cho các ứng dụng SSR. Để có thể code-splitting trên các ưng dụng SSR chúng ta sử dụng [Loadable Component](https://github.com/gregberge/loadable-components)
- **Error Boundaries**
  - Trong trường hợp lazy component không thể được tải(do lỗi mạng,...) cần hiển thị thông báo lỗi
  - Dùng để gói tất cả các lazy component
  ```javascript
    <MyErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <section>
          <OtherComponent />
          <AnotherComponent />
        </section>
      </Suspense>
    </MyErrorBoundary>
  ``` 
- **Route-based code splitting**
  - Tùy chọn code splitting ở route nào cho hợp lí, tránh gián đoạn trải nghiệm người dùng
  - Sử dụng [React Router](https://reactrouter.com/en/main) để thực hiện
  ```javascript
    import React, { Suspense, lazy } from 'react';
    import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

    const Home = lazy(() => import('./routes/Home'));
    const About = lazy(() => import('./routes/About'));

    const App = () => (
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Suspense>
      </Router>
    );
  ```
- **Named Exports**
  - React.lazy hiện chỉ hỗ trợ default exports. Để sử dụng React.lazy cho named exports, cần phải 1 module trung gian và export default các component đó trước
  ```javascript
  // ManyComponents.js
  export const MyComponent = /* ... */;
  export const MyUnusedComponent = /* ... */;
  ```

  ```javascript
  // MyComponent.js
  export { MyComponent as default } from "./ManyComponents.js";
  ```

  ```javascript
  // MyApp.js
  import React, { lazy } from 'react';
  const MyComponent = lazy(() => import("./MyComponent.js"));
  ```
## **Context** : 
- Cung cấp một cách để truyền dữ liệu qua cây thành phần mà không cần phải chuyển các props xuống theo cách thủ công ở mọi cấp độ
- **Khi nào sử dụng Context?**
  - Context được thiết kế để giúp chia sẻ dữ lieuj global đối với cây component trong React, ví dụ như currentUser, theme, preferred language. Ví dụ dưới đấy về theme của button
  - Sử dụng Context ta có thế tránh được việc truyền prop qua các element trung gian
    ```javascript
    const ThemeContext = React.createContext('light');
    ```
  - Sau đó, sử dụng Provider để truyền theme hiện tại tới các componet dưới(trong cây component). Mọi components đều có thể đọc được theme dù có ở độ sâu ntn trong cây. 
    ```javascript
    class App extends React.Component {
      render() {
        return (
          <ThemeContext.Provider value="dark">
            <Toolbar />
          </ThemeContext.Provider>
        );
      }
    }
    ```
  - Component trung gian không cần phải truyền theme xuống 
    ```javascript
    function Toolbar() {
      return (
        <div>
          <ThemedButton />
        </div>
      );
    }
    ```
- Gán biến contextType để đọc theme context hiện tại. React sẽ tìm Provider gần nhất phía trên component này và sử dụng giá trị của nó(Ở đây là `ToolBar`)
  ```javascript
    class ThemedButton extends React.Component {
      static contextType = ThemeContext;
      render() {
        return <Button theme={this.context} />;
      }
    }
  ```

- **Before Using Context**



## **HOOKS**
1. ### ***useState()***
  - Dùng khi nào
    Khi data thay đổi thì giao diện tụ động được cập nhật
  - Cách sử dụng
    ```javascript
    import {useState} from 'react';
    function Component(){
      const [state,setState ]= useState(initialState)
    }
    ```
  - `useState()` với callback. ví dụ:
    ```javascript
      useState(prevState => prevState+1)
    ```
  - `initialState` với callback. ví dụ:
    ```javascript
      const [state,setState]= useState(() => {
        array.reduce((total, current) => current+total)
      })
    ```

2. ### ***useEffect()***

- Dùng để thực hiện side effect trong các function components: set title, fetch data,...
- sử dụng `useEffect()` , cta thông báo cho React rằng component này cần phải làm gì đó sau khi render thông qua callback mà ta truyền vào.
- Tại sao sử dụng `useEffect()` bên trong 1 component? 
  
  => Giúp việc truy cập các state hoặc props mà không cần có 1 api khác để đọc state hay props đó. 
- `useEffect()` được thực hiện sau mỗi lần render ?

  => Mặc định `useEffect()` chạy sau lần render đầu tiên và sau mỗi lần update
  - callback của `useEffect()` chỉ được thực hiện sau khi element được render  vào DOM
- đối số thứ 2 của `useEffect()` ?
  - Để cải thiện performance, chúng ta có thể bỏ qua effect nếu giá trị cụ thể không thay đổi sau khi re-render => Truyền đối số thứ 2 là 1 mảng 
  ```javascript
    useEffect(() => {
      document.title = `You clicked ${count} times`;
    }, [count]);
  ```
  - Trong trương hợp truyền vào array trống(`[]`), effect sẽ được thực thi và loại bỏ chỉ 1 lần khi comp được mount và unmount. => Effect này không phụ thuộc vào bất cứ giá trị nào từ props hoặc state
  - Trong trương hợp truyền vào array có dependencies (`[deps]`), effect sẽ được thực thi khi deps thay đổi
- Cleanup function : là function được return trong callback của `useEffect()`, được gọi trước khi component được unmounte
  ```javascript
  // ...
  useEffect(() => {
    // ...
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });
  ```
- Khác nhau giữa `useEffect` và `useLayoutEffect` :
  - `useEffect`
    - Cập nhật lại state
    - Cập nhật DOM(mutated)
    - Render lại UI
    - Thực hiện cleanup function của `useEffect()` nếu `deps` thay đổi
    - Gọi callback function của `useEffect()`
    
  - `useLayoutEffect`
    - Cập nhật lại state
    - Cập nhật DOM(mutated)
    - Thực hiện cleanup function của `useEffect()` nếu `deps` thay đổi (sync)
    - Gọi callback function của `useEffect()` (sync)
    - Render lại UI
3. ### ***useRef()***
- Lưu giá trị qua 1 tham chiếu bên ngoài function components
- Cách sử dụng 
  ```javascript
  const ref = useRef(initialValue); // return 1 object { current : initialValue}  
  console.log(ref.current);
  
  ```
- `useRef` cũng được dùng để truy cập đến DOM Element
4. ### ***useCallback()***
  - Tránh tạo ra function mới không cần thiết
  - Sử dụng
    ```javascript
      const handleFunction = useCallback(()={

      },[]) 
      // đối số thứ 2 của useCallback có thể là [deps], cách sử dụng giống useEffect()
    ```
  - Thường sử dụng kết hợp với `React.memo` để tránh components con bị re-render.
  - Ví dụ:
    ```jsx
    //Page.js
    import React from 'react';
     function Page({onIncrease}) {
      console.log('re-render';)
      return (
        <div>
          <button onClick={onIncrease}>Incresae</button>
        </div>
      )
    }
    export default React.memo(Page)
    ```
    ```jsx
    //App.js
    import React from 'react';
    import Page from './Page'
    export default function App({onIncrease}) {
      const [count, setCount] = useState();
      const handleIncrease = () =>{
        setCount((prev)=> prev + 1 );
      }
      return (
        <div>
          <Page onIncrease={handleIncrease}>Incresae</Page>
        </div>
      )
    }
    ```
      - Trường hợp chưa sử dụng `useCallback()`, mỗi lần nhấn nút Increase, `Page` sẽ được render lại mặc dù đã dùng memo. 
      => Lí do là bởi prop được truyền vào `Page` là 1 hàm. Khi click increase, hàm `handleIncrease()` được tạo với 1 tham chiếu mới. Khi `memo` so sánh tham chiếu này với tham chiếu của hàm  nhận được trong lần render trước(với so sánh ===) nó sẽ thấy là prop `onIncrease` đã thay đổi và cho component render lại.

      => để tránh re-render nhiều lần ta sử dụng `useCallback`
      ```javascript
        //...
        const handleIncrease = useCallback(() =>{
          setCount((prev)=> prev + 1 );
        },[])
        //...
        // Lúc này, useCallback() sẽ lưu tham chiếu của hàm ra ngoài component . vì thế sau mỗi lần click increase, cùng 1 tham chiếu hàm được truyền vào qua đó tránh gây ra re-render
      ```
5. ### ***useMemo()***
   - Tránh thực hiện lại 1 logic nào đó không cần thiết 
   - Sử dụng
    ```javascript
    const total = useMemo(()=> {
      numbers.reduce((res,number)=>{
        res+= number
      })
    },[numbers]);
    // Trong trường hợp component re-render, chỉ được tính toán lại trong trường hợp mảng numbers thay đổi
    ```
6. ### ***useReducer()***
   - Gấn giống với `useState`, `useReducer` cho phép thay đổi `state`.
   - `useREducer` nhận 2 tham số:
      ```javascript
        useReducer(<reducer>, <initialState>)
      ```
   - `reducer` là hàm xử lý logic các state, `initialState` thường là 1 object.
   - `useReducer ` trả về state hiện tại và 1 hàm `dispatch`
      ```javascript
        const [todos, dispatch] = useReducer(reducer, initialTodos);

        const handleComplete = (todo) => {
          dispatch({ type: "COMPLETE", id: todo.id });
        };
      ```
    - Trong trường hợp state phức tạp, nên định nghĩa action là một hàm trả về object 
    - ```javascript
        const ACTION_CREATE = 'ACTION_CREATE'
        const actionCreate = (payload) => {
          return {
            type : ACTION_CREATE,
            payload
          }
        }
        //....
        dispatch(actionCreate({
          id:1,
          name:'No Name'
        }))
      ```
7. ### ***useContext()***
  - React Context là 1 cách để quản lí state ở global
  - Trước tiên cần tạo context 
    ```javascript
    import { useState, createContext } from "react";
    import ReactDOM from "react-dom/client";

    const UserContext = createContext()
    ```
  - Context Provider : Gói component con trong 1 context provider và cung câp value của state
    ```jsx
    function Component1() {
    const [user, setUser] = useState("Jesse Hall");

    return (
      <UserContext.Provider value={user}>
        <h1>{`Hello ${user}!`}</h1>
        <Component2 user={user} />
      </UserContext.Provider>
    );
    }
    ```
    Lúc này mọi component con trong cây components đều có thể truy cập đến `user`
  - Để sử dụng context ở comp con, sử dụng hook `useContext`
    ```jsx
    import { useState, createContext, useContext } from "react";
    function Component5() {
      const user = useContext(UserContext);

      return (
        <>
          <h1>Component 5</h1>
          <h2>{`Hello ${user} again!`}</h2>
        </>
      );
    }
    ```

8.  ### ***useState()***
## **React.memo - HOC**
1.  ### **memo**
  - Ghi nhớ component, tránh re-render ảnh hưởng đến  performance
  - Sử dụng : Gói component cần sử dụng memo lại 
    ```javascript
      import {memo} from 'react'
      function Content(){
        return <h2>Hello</h2>
      }
      export default memo(App)
    ```
  - memo kiểm tra xem it nhất 1 prop của component thay đổi (sủ dụng ===) thì sẽ để component render lại
  - Nên sử dụng với những component nhiều props, hay phải re-render ảnh hưởng đến perfomance