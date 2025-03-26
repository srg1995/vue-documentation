export const getUser = async (email, password) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (email === 'prueba@prueba.com' && password === '123456') {
        resolve({
          status: 200,
          data: {
            name: 'Sergio',
            email: 'prueba@prueba.com',
            password: '123456',
            token:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjM0NTYiLCJlbWFpbCI6ImV4YW1wbGVAZW1haWwuY29tIiwiaWF0IjoxNjgwMTM4MjAwLCJleHAiOjE2ODAxNDE4MDB9.QzX8cG',
          },
        })
      } else {
        resolve({ status: 400, error: 'fallo en la autenticacion' })
      }
    }, 500)
  })
}
