import CardBusiness from "./CardBusiness";

export default function CardList(props) {

    let bizIdList = props.business;
    let bizLength = props.length;

    return (
            <div className="m-16">
                <p className="text-xs text-start text-gray-500">Resultados - {bizLength}</p>
                {bizIdList.length > 0  && bizIdList.map((item, index) => {
                    return <CardBusiness key={index} businessItem={item} />
                })}
                <p className="text-center text-xs">Página 1 de 3</p>
            </div>
    );
}