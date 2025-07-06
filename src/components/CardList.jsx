//CardList는 개별 카드를 출력해야 하므로, Card컴포넌트 불러오기.
import Card from './Card';

//props로 받은 data를 기반으로 여러 개의 카드(card컴포넌트)를 화면에 렌더링 해주는 역할.
//data는 상위컴포넌트 App.jsx에서 props로 전달받는 카드 목록 배열.
export default function CardList({ data }) {
   
    return (
        <div className="card-grid"> {/* 카드들을 그리드(격자)형식으로 보여주기 위함 */}

            {/* 전달받은 카드 배열을 하나씩 반복해서 처리함. 
            (item): 반복 중인 현재 카드 데이터 객체 */}
            {data.map((item) => (    
                <Card key={item.id} item={item} />
                //item하나를 Card컴포넌트에 넘김 -> 카드 하나 생성
                //항상 map을 돌릴 때는 고유 key 필수!
            ))}
        </div>
    );
}
