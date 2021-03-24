document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded! 🚀");
  
  init();

  // Function to check if there is a workout to continue
  async function init() {
    if (location.search.split("=")[1] === undefined) {
      const workout = await API.getLastWorkout();
      if (workout) {
        location.search = "?id=" + workout._id;
      } else {
        document.querySelector("#continue-btn").classList.add("d-none");
      }
    }
  }
});
