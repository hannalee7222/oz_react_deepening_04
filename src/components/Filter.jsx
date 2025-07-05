//React 17부터는 JSX를 쓸 때 이 부분은 꼭 할 필요 없다.
//그래도 넣는 이유는 예전 프로젝트 호환이나, ESLint설정이 이전 방식에 맞춰 있는 경우
//또는 JSX외에 React객체를 직접 쓸 수도 있기 때문에 미리 넣은 것
import React from 'react';

//Filter라는 이름의 함수형 컴포넌트
//이 컴포넌트는 props를 세 개를 받는다.
const Filter = ({ categories, currentCategory, onFilterChange }) => {
    //categories : 버튼으로 표시할 카테고리 배열
    //currentCategory : 현재 선택된 카테고리
    //onFilterChange : 선택된 카테고리를 바꾸는 함수 (상위 컴포넌트에서 내려줌)
    return (
        //컴포넌트를 감싸는 최상위 div. 클래스 이름은 CSS에서 스타일 지정할 때 씀.
        <div className="filter-container">
            <span>카테고리 필터:</span>  {/* 필터를 안내하는 문구 */}
            <div className="filter-buttons">    {/* 버튼들을 감싸는 div */}
                {/* categories 배열을 순회하면서 각 카테고리마다 버튼 생성 */}
                {categories.map((category) => (
                    <button
                        key={category}  //각 버튼은 고유한 key가 필요함 -> 리액트 내부 최적화를 위해
                        //currentCategory(선택된 카테고리)와 현재 버튼의 category가 같으면
                        //active클래스 추가 -> 스타일 강조, 같지 않다면 아무것도 하지 않음 ''
                        className={`filter-button ${currentCategory === category ? 'active' : ''}`}
                        //버튼 클릭 시, onFilterChange(category) 실행됨. -> 현재 선택 카테고리를 바꿔줌.
                        onClick={() => onFilterChange(category)}
                    >
                        {category} {/* 버튼 텍스트로 표시될 내용 -> 예: '기술' */}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Filter;
