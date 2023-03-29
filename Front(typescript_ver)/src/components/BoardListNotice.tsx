import React from "react";
import Table from "react-bootstrap/Table";
import { useGetData} from "../pages/UseGetData";
import "../styles/BoardList.css";
import { Link } from "react-router-dom";
export default function BoardList() {
  const text = useGetData("http://127.0.0.1:8000/api/v1/commu/posts/")

  return (
    
    <Table id="board-list-table" striped bordered hover size="sm">
                      <tbody>
                        <>
                    {text.filter((e) => {
                                return e.kind === "posts"; // posts(자유게시판)인 경우만
                                }).map((e) => (
                        
                            <tr>
                                
                                        <td className="first-td">{e.id}</td>
                                        <td><Link to={`/commu-detail/${e.id}`}>{e.title}</Link></td>  
                                        <td className="last-td">{e.create_at}</td>
                        

                                    
                            </tr>
                    ))}
                    </>
           
        </tbody>
    </Table>
  );
}
