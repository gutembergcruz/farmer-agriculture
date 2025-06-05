import { FiEdit, FiTrash } from "react-icons/fi";
import { TableContainer } from "./styles";

export default function Table() {
  return (
    <TableContainer>
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
        <tr>
          <td>Lorem Ipsum</td>
          <td>000.000.000-00</td>
          <td>124 hc</td>
          <td>Manaus/AM</td>
          <td>
            <button>
              <FiEdit color="#6D4C41" />
            </button>
            <button>
              <FiTrash color="red" />
            </button>
          </td>
        </tr>
        <tr>
          <td>Lorem Ipsum</td>
          <td>000.000.000-00</td>
          <td>124 hc</td>
          <td>Manaus/AM</td>
          <td>
            <button>
              <FiEdit color="#6D4C41" />
            </button>
            <button>
              <FiTrash color="red" />
            </button>
          </td>
        </tr>
        <tr>
          <td>Lorem Ipsum</td>
          <td>000.000.000-00</td>
          <td>124 hc</td>
          <td>Manaus/AM</td>
          <td>
            <button>
              <FiEdit color="#6D4C41" />
            </button>
            <button>
              <FiTrash color="red" />
            </button>
          </td>
        </tr>
        <tr>
          <td>Lorem Ipsum</td>
          <td>000.000.000-00</td>
          <td>124 hc</td>
          <td>Manaus/AM</td>
          <td>
            <button>
              <FiEdit color="#6D4C41" />
            </button>
            <button>
              <FiTrash color="red" />
            </button>
          </td>
        </tr>
        <tr>
          <td>Lorem Ipsum</td>
          <td>000.000.000-00</td>
          <td>124 hc</td>
          <td>Manaus/AM</td>
          <td>
            <button>
              <FiEdit color="#6D4C41" />
            </button>
            <button>
              <FiTrash color="red" />
            </button>
          </td>
        </tr>
      </tbody>
    </TableContainer>
  );
}
