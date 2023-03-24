import Table from 'react-bootstrap/Table';
import "../styles/BoardList.css";

function BoardList() {
    return (
        <Table id="board-list-table" striped bordered hover size="sm">
            <tbody>
                <tr>
                    <td className="first-td">1</td>
                    <td>Larry the Bird</td>
                    <td className="last-td">@mdo</td>
                </tr>
                <tr>
                    <td className="first-td">2</td>
                    <td>Larry the Bird</td>
                    <td className="last-td">@fat</td>
                </tr>
                <tr>
                    <td className="first-td">3</td>
                    <td>Larry the Bird</td>
                    <td className="last-td">@twitter</td>
                </tr>
            </tbody>
            </Table>
    );
}

export default BoardList;