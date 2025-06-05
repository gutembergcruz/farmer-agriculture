import { FiEdit, FiTrash } from "react-icons/fi";
import { TableContainer } from "./styles";
import datas from "./datas.json";

export default function Table() {
  return (
    <TableContainer>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>CPF/CNPJ</th>
            <th>Área total</th>
            <th>Cidade/Estado</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((data, index) => (
            <tr key={index}>
              <td>{data.nome}</td>
              <td>{data.cpf_cnpj}</td>
              <td>{data.area_total}</td>
              <td>{data.cidade_estado}</td>
              <td>
                <button>
                  <button>
                    <FiEdit color="#6D4C41" />
                  </button>
                  <button>
                    <FiTrash color="red" />
                  </button>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </TableContainer>
  );
}
