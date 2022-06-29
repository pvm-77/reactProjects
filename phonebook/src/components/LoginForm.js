import React from 'react'

const LoginForm = () => {
  return (
    <>
    <form onSubmit={handleLogin}>
            <div className="form-group">
              <input 
              type="text"
              className="form-control my-1" 
              name="Username" 
              value={username}
              onChange={({target})=>setUserName(target.value)}
              placeholder="enter user name" 
              
              />
            </div>
            <div className="form-group">
              <input 
              type="password"
              className="form-control my-1" 
              name="Password" 
              value={password}
              onChange={({target})=>setPassword(target.value)}
              placeholder="enter password" 
              
              />
            </div>
            <button type="submit" className="btn btn-success w-100">Login</button>
          </form>
    </>
  )
}

export default LoginForm