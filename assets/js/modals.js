const contentTarget = document.querySelector(".project_modal")
const eventHub = document.querySelector(".landing")

eventHub.addEventListener("click", e => {
  if (e.target.id === "riggingLoft"){
    console.log("click")
    contentTarget.innerHTML = `
      <div id="about__modal" class="modal--parent">
        <div id="about__content" class="modal--content">
          <h2 class="modalTitle">The Rigging Loft</h2>
          <section>FAA parachute riggers are required by law to keep detailed records
          about the work they perform and who they are doing the work for. I wanted to relieve parachute
          riggers from some of the enormous amount of repetitive data entry required to complete
          each job while giving them better access to their records.</section><br>
          <div class="modalLinks">
            <section class="modalLink"><a target="_blank" href="https://github.com/calebsjames/theRiggingLoft">Code</a></section>
            <section class="modalLink"><a target="_blank" href="https://github.com/calebsjames/theRiggingLoft">Application</a></section>
            </div>
            <br>
            <h3 class="modalSubTitle">Landing Page</h3>
            <img src="assets/gifs/landingPage.gif">
            <br>
            <br>
            <h3 class="modalSubTitle">New Inspection</h3>
            <img src="assets/gifs/demo.gif"></img>
            <button id="modal--close">Close</button>
          <div class="modal__message"></div>
        </div>
      </div>
    `
  } else if (e.target.id === "nutshell"){
    console.log("click")
    contentTarget.innerHTML = `
      <div id="about__modal" class="modal--parent">
        <div id="about__content" class="modal--content">
          <section>In a 6 day React sprint, our team created "Nutshell", a social media style dashboard for a user to organize daily tasks, events, news article, friends, and chat messages.</section><br>
          <section><a target="_blank" href="https://github.com/calebsjames/theRiggingLoft">GitHub</a></section>
          <button id="modal--close">Close</button>
          <div class="modal__message"></div>
        </div>
      </div>
    `
  }
})



eventHub.addEventListener("click", e => {
  // debugger
  if (e.target.id === "modal--close"){
    console.log("click")

    closeModal()
  }
})

const closeModal = () => {
  contentTarget.innerHTML = ""
}