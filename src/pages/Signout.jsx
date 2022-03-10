const SignOut = () => {
  const queryClient = useQueryClient();
  queryClient.invalidateQueries("currentUser");
  window.localStorage.removeItem("token");
  return <Redirect to="/" />;
};

export default SignOut;
