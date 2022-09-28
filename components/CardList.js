import CardBusiness from "./CardBusiness";

export default function CardList() {
    return (
        <div className="m-16">
            <p className="text-xs text-start pl-8 text-gray-500">Resultados - 18</p>
            <CardBusiness />
            <CardBusiness />
            <p className="text-center text-xs">Página 1 de 3</p>
        </div>
    );
}