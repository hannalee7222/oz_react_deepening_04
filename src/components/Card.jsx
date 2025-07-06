//Card 컴포넌트 : CardList.jsx에서 item이라는 props를 받아서 하나의 카드 UI를 보여주는 역할
export default function Card({ item: {title, description, category} }) {
   

    return (
        <div className="card">
            <div className="card-image">
                <img src={`https://placehold.co/600x400`} />
            </div>
            <div className="card-content">
                {/* 일반적인 리액트 패턴으로 {item.category} 해도 되지만
                비구조화 할당으로 꺼내서 쓰면 더 간결하다. */}
                <span className="card-category">{category}</span>
                <h2 className="card-title">{title}</h2>
                <p className="card-description">{description}</p>
            </div>
        </div>
    );
}
