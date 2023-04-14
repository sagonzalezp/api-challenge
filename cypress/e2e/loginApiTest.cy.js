describe('sign up and log in a user via API', () => {
  it("sign up new user", ()=>{
    cy.request("POST", "https://api.demoblaze.com/signup", {
      username: "testUser2023041310", 
      password: "pass2023041310"
    }).should((response)=>{
      expect(response.status).to.eq(200)
    })
  })

  it("sign up existing user", ()=>{
    cy.request("POST", "https://api.demoblaze.com/signup", {
      username: "testUser2023041310", 
      password: "pass2023041310"
    }).should((response)=>{
      expect(response.status).to.eq(401)
    })
  })

  it("login in new user", ()=>{
    cy.request("POST", "https://api.demoblaze.com/login", {
      username: "testUser2023041310", 
      password: "pass2023041310"
    }).should((response)=>{
      expect(response.status).to.eq(200)
    })
  })

  it("login in new user", ()=>{
    cy.request("POST", "https://api.demoblaze.com/login", {
      username: "testUser2023041310", 
      password: "pass2023041305"
    }).should((response)=>{
      expect(response.status).to.eq(401)
    })
  })

})
