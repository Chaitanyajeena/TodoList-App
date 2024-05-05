function Home() {
  return (
    <>
      <div className='home' id='home'>
        <main>
          <h1>Welcome To TodoList</h1>
          <p>Become focused, organized, and calm with TodoList.The World's #1 task manager and TodoList-App.</p>
        </main>
      </div>
      <div className='home2' id='about'>
        <div>
          <h1>About this project?</h1>
          <p>Welcome to our TodoList App, a beginner project designed to help you master the basic of  web development  and this project is created using Reactjs. </p>
        </div>
      </div>
      <div className="home3" id="contact">
        <div>
          <h1>Contact Us</h1>
          <form>
            <div>
              <label>Name</label>
              <input type='text' required placeholder='Enter Your Name'></input>
            </div>
            <div>
              <label>Email</label>
              <input type='email' required placeholder='Enter Your Email'></input>
            </div>
            <div>
              <label>Message</label>
              <input type='text' required placeholder='Write Your Message'></input>
            </div>
            <button type='submit'>Send</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Home
