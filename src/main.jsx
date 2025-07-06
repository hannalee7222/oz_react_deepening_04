//React 18부터는 react-dom 대신 react-dom/client에서 
//createRoot를 가져와야 함.
//리액트 앱을 화면에 렌더링(그려주기)위해 필요한 함수
import { createRoot } from 'react-dom/client';

//App.jsx를 불러오는 부분
//App.jsx는 이 프로젝트의 최상위 컴포넌트 역할을 한다.
import App from './App.jsx';

//index.html에 있던 <div id="root"></div>를 찾아서 그 안에
//<App />을 렌더링(화면에 출력)하는 코드이다.
createRoot(document.getElementById('root')).render(<App />);
