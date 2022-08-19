import { Component } from "react";
import Table from "../../components/Table";

type DashboardTableProps = {
    currentAttributes: string[];
};

class DashboardTable extends Component<DashboardTableProps> {
  render() {
    return (
      <Table minWidth="100px">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Name</Table.Th>
            <Table.Th>Value</Table.Th>
          </Table.Tr>
        </Table.Thead>
        
        <Table.TBody>
          {this.props.currentAttributes.map((row: any, i: number) => (
            <Table.Tr key={i}>
              <Table.Td>{row.text}</Table.Td>
              <Table.Td>{row.value}</Table.Td>
            </Table.Tr>
          ))}
        </Table.TBody>
      </Table>
    );
  }
}

export default DashboardTable;
