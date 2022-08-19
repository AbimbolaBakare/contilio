import { Component, ReactNode } from "react";
import styles from "./table.module.scss";

type TableProps = {
  children?: ReactNode;
  minWidth?: string;
};

type TableMain = {
  children?: ReactNode;
  onClick?: Function;
  rest?: any;
};

class Table extends Component<TableProps> {
  static Td: typeof Td;
  static Tr: typeof Tr;
  static Th: typeof Th;
  static Thead: typeof TableHead;
  static TBody: typeof TableBody;

  render() {
    return (
      <div className={styles.tableContainer} data-testid="table">
        <table
          className={styles.table}
          style={{
            minWidth: this.props.minWidth ? this.props.minWidth : "1000px",
          }}
        >
          {this.props.children}
        </table>
      </div>
    );
  }
}
export default Table;

class TableHead extends Component<TableMain> {
  render() {
    return (
      <thead className={styles.tablehead} data-testid="table-head">
        {this.props.children}
      </thead>
    );
  }
}

class TableBody extends Component<TableMain> {
  render() {
    return (
      <tbody className={styles.tablebody} data-testid="table-body">
        {this.props.children}
      </tbody>
    );
  }
}

class Tr extends Component<TableMain> {
  render() {
    return (
      <tr
        className={styles.tr}
        onClick={this.props.onClick ? this.props.onClick : null}
        style={this.props.onClick ? { cursor: "pointer" } : {}}
        {...this.props.rest}
      >
        {this.props.children}
      </tr>
    );
  }
}

class Td extends Component<TableMain> {
  render() {
    return <td className={styles.td}>{this.props.children}</td>;
  }
}

class Th extends Component<TableMain> {
  render() {
    return <td className={styles.th}>{this.props.children}</td>;
  }
}

Table.Td = Td;
Table.Tr = Tr;
Table.Th = Th;
Table.Thead = TableHead;
Table.TBody = TableBody;
