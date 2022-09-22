const TableRow = (props) => {
  return (
    <tr>
      <th scope="row">{props.index + 1}</th>
      <td>{props.name}</td>
      <td>{props.lastName}</td>
    </tr>
  );
};

const Friends = (props) => {
  let users = props.fuu();
  let userAmount = Object.keys(users).length;
  let userRow = [];
  for (let i = 0; i < userAmount; i++) {
    userRow.push(<TableRow key={i} index={i} name={users[i].name} lastName={users[i].lastName} />);
  }
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Имя</th>
          <th scope="col">Фамилия</th>
        </tr>
      </thead>
      <tbody>{userRow}</tbody>
    </table>
  );
};

export default Friends;
