function App() {
  const users = [
    { id: 1, name: "홍길동" },
    { id: 2, name: "이순신" }
  ];

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default App