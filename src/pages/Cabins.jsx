import Heading from "../ui/Heading.jsx";
import Row from "../ui/Row.jsx";
import CabinTable from "../features/cabins/CabinTable.jsx";

function Cabins() {


    return (
        <>
            <Row type="horizontal">
                <Heading as="h1">All cabins</Heading>
                <p>filter/sort</p>
            </Row>
            <Row>
                <CabinTable/>
            </Row>
        </>
    );
}

export default Cabins;
