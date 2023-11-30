import Heading from "../ui/Heading.jsx";
import Row from "../ui/Row.jsx";
import CabinTable from "../features/cabins/CabinTable.jsx";
import { useState } from "react";
import CreateCabinForm from "../features/cabins/CreateCabinForm.jsx";
import Button from "../ui/Button.jsx";

function Cabins() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>filter/sort</p>
      </Row>
      <Row>
        <CabinTable />
        <Button
          variation="primary"
          onClick={() => setShowForm((show) => !show)}
        >
          Add New Cabin
        </Button>
        {showForm && <CreateCabinForm />}
      </Row>
    </>
  );
}

export default Cabins;
