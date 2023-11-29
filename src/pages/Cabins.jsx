import Heading from "../ui/Heading.jsx";
import Row from "../ui/Row.jsx";
import {useEffect} from "react";
import {getCabins} from "../services/apiCabins.js";

function Cabins() {

    useEffect(() => {
        getCabins().then(data =>console.log(data));
    }, []);

  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>TEST</p>
    </Row>
  );
}

export default Cabins;
