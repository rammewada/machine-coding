import useAuth from "../../context/userContext";

export default function Context() {
  const { user } = useAuth();

  return (
    <div>
      {user.name}
      <h1>Hurrey! Context is working 😎</h1>
    </div>
  );
}
