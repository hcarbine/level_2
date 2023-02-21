function sum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Both arguments must be numbers");
  }
  return a + b;
}

try {
  const result = sum("1", "2");
  console.log(result);
} catch (error) {
  console.log(error.message);
}


function login(user, username, password) {
  if (user.username !== username || user.password !== password) {
    throw new Error("Invalid username or password");
  }
  console.log("Login successful!");
}

const user = {
  username: "johndoe",
  password: "password123"
};

try {
  login(user, "johndoe", "password123"); // correct credentials
} catch (error) {
  console.log(error.message);
}

try {
  login(user, "janedoe", "wrongpassword"); // incorrect credentials
} catch (error) {
  console.log(error.message);
}