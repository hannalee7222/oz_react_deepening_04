//프로젝트의 메인 화면 컴포넌트
//리스트 필터링 기능이 있는 카드 렌더링 앱을 구성하는 중심 컴포넌트.

//필요한 CSS와 컴포넌트를 불러오고, useState로 상태관리 준비
import './main.css'; //전체 페이지에 적용할 스타일
import Filter from './components/Filter'; //필터 선택 UI
import CardList from './components/CardList'; //카드 목록 출력 컴포넌트
import { useState } from 'react'; //React Hook -> 상태를 저장할 수 있게 함

//카드 각각의 정보가 들어있는 배열 -> 카드에 출력할 정보
const DATA = [
    { id: 1, title: '기술 카드 1', description: '이것은 첫 번째 카드의 설명입니다.', category: '기술' },
    { id: 2, title: '디자인 카드 1', description: '이것은 두 번째 카드의 설명입니다.', category: '디자인' },
    { id: 3, title: '기술 카드 2', description: '이것은 세 번째 카드의 설명입니다.', category: '기술' },
    { id: 4, title: '마케팅 카드 1', description: '이것은 네 번째 카드의 설명입니다.', category: '마케팅' },
    { id: 5, title: '디자인 카드 2', description: '이것은 다섯 번째 카드의 설명입니다.', category: '디자인' },
    { id: 6, title: '기술 카드 3', description: '이것은 여섯 번째 카드의 설명입니다.', category: '기술' },
];

export default function Home() {
    //사용자가 선택한 필터 카테고리 상태를 관리함
    //'전체'로 설정되어 있어 처음엔 모든 카드가 보임.
    const [filterCategory, setFilterCategory] = useState('전체');

    //DATA에서 모든 카테고리 값을 뽑아내고, new Set()으로 중복을 제거해서 하나씩만 남김.
    //예: ['전체', '기술', '디자인', '마케팅']
    const categories = ['전체', ...new Set(DATA.map((item)=> item.category))];

    //선택된 필터(filterCategory)에 따라 카드를 필터링함.
    const filteredData = filterCategory === '전체' 
    ? DATA  //"전체"일 땐 모든 카드, 아니면 선택한 카테고리만 남음.
    : DATA.filter((item) => item.category === filterCategory);

    //컴포넌트 렌더링
    return (
        <main className="container">
            <h1>카드 렌더링</h1>
            <Filter     //Filter컴포넌트 : 필터 버튼 선택 -> 상태 변경
                categories={categories} 
                currentFilter={filterCategory} 
                onFilterChange={setFilterCategory} 
            />
            {/* 필터링된 데이터를 받아서 카드들을 화면에 렌더링 */}
            <CardList data={filteredData} />
        </main>
    );
}
