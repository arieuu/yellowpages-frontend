import CardBusiness from "./CardBusiness";

export default function CardList(props) {

    let bizIdList = props.business;

    return (
            <div className="m-16">
                <p className="text-xs text-start text-gray-500">Resultados - 18</p>
                {bizIdList.length > 0  && bizIdList.map((item, index) => {
                    return <CardBusiness businessItem={item}/>
                })}
                <p className="text-center text-xs">Página 1 de 3</p>
            </div>
    );
}