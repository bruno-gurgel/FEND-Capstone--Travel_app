/* eslint-disable no-unused-vars */
// Import the js file to test
import { getTravelResults } from "../src/client/js/app";

// A test suite may contain one or more related tests
describe("Testing the app functionality", () => {
  // The test() function has two arguments - a string description, and an actual test as a callback function.
  test("Testing the getTravelResults() function", () => {
    // Simulating DOM environment for testing
    document.body.innerHTML = `
    <form class="form">
        <label for="location">Where do you want to go?</label>
        <input type="text" name="location" id="location" class="location__input"
          placeholder="Put the desired location here" required>
        <label for="start-date">When are you going?</label>
        <input type="date" id="start-date" class="dates__input" required>
        <label for="end-date">Until when?</label>
        <input type="date" id="end-date" class="dates__input" required>
        <button type="submit" id="button">Send</button>
      </form>
    </div>
    <div id="results" class="main__results"></div>`;

    const form = document.querySelector(".form");
    const locationInput = document.getElementById("location").value;
    const startDate = document.getElementById("start-date").value;
    const endDate = document.getElementById("end-date").value;

    // If returns undefined, with no errors, it is working
    expect(getTravelResults).toBeUndefined();
  });
});
