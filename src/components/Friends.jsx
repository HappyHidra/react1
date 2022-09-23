import { NavLink } from "react-router-dom";

const TableRow = (props) => {
  return (
    <tr>
      <th scope="row">{props.index + 1}</th>
      <td>
        <NavLink to={"profile/" + props.id}>
          {props.name}
          {props.lastName}
        </NavLink>
      </td>
    </tr>
  );
};

const Friends = (props) => {
  let users = props.fuu();
  let userAmount = users.length;
  let userRow = [];
  for (let i = 0; i < userAmount; i++) {
    userRow.push(
      <TableRow key={i} id={users[i].id} index={i} name={users[i].name} lastName={users[i].lastName} />
    );
  }
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Имя и Фамилия</th>
        </tr>
      </thead>
      <tbody>{userRow}</tbody>
    </table>
  );
};

export default Friends;
