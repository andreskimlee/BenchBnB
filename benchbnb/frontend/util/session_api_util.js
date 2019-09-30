export const Signup = user => {
  return $.ajax({
    url: "/api/users",
    method: "POST",
    data: { user }
  });
};

export const Login = user => {
  return $.ajax({
    url: "/api/sessions",
    method: "POST",
    data: { user }
  });
};

export const Logout = () => {
  return $.ajax({
    url: "/api/sessions",
    method: "DELETE"
  });
};
