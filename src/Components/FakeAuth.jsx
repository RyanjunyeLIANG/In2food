const FakeAuth = {
  isAuthenticated: false,
  username: "",
  authenticate(uname) {
    FakeAuth.isAuthenticated = true;
    FakeAuth.username = uname;
  },
  signout() {
    FakeAuth.isAuthenticated = false;
    FakeAuth.username = "";
  }
};

export default FakeAuth;
