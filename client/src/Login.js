const login = (email='dan', password='password') => {
  return new Promise((resolve, reject) => {
    let endpoint = `http://localhost:3000/sessions`;
    fetch(endpoint, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        email: "email", 
        password: "password", 
      }) 
    })
      .then(e => {
        if (e.ok) {
          resolve(e);
        } else {
          reject(e);
        }
      })
      .catch(e => console.log("error::", e));
  });
};

const logOut = (userId) => {
  return new Promise((resolve, reject) => {
    let endpoint = `http://localhost:3000/sessions/${userId}`;
    fetch(endpoint, {
      method: "DELETE",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
    })
      .then(e => {
        if (e.ok) {
          resolve(e);
        } else {
          reject(e);
        }
      })
      .catch(e => console.log("error::", e));
  });
};

const handleCheck = () => {
  let endpoint = `http://localhost:3000/sessions`;
  return fetch(endpoint, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    }
  })
    .then(e => {
      if (e.ok) {
        return e
      } else {
        return e
      }
    })
    .catch(e => console.log("error::", e));
}

export default () => {
  const handleClick = () => {
    console.log('handl;eClick')
    login()
  }
  return (
    <div>
      <button onClick={handleClick}>Login</button>
      <button onClick={handleCheck}>Check</button>
    </div>
  )
}