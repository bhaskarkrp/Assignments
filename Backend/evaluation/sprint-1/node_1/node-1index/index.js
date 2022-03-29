const readline = require("readline");
// const fetch = require("node-fetch");
// import fetch from "node-fetch";
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const { stdin: input, stdout: output } = require("process");

const rl = readline.createInterface({ input, output });

let k = 0;
const getInput = () => {
  rl.question("Please enter 1, 2 or 3: ", (entered) => {
    console.log("Your response: ", entered);
    if (entered == 1) {
      fetch("http://localhost:8000/")
        .then((response) => response.json())
        .then((res) => console.log(res));

      // rl.close();
    } else if (entered == 2) {
      rl.question("please enter name: ", (name) => {
        rl.question("please enter genre: ", (genre) => {
          rl.question("please enter production year: ", (year) => {
            rl.question("please enter budget: ", (bud) => {
              const data = fetch("http://localhost:8000/", {
                method: "POST",
                body: {
                  movie_name: name,
                  movie_genre: genre,
                  production_year: year,
                  budget: bud,
                },
              });
              console.log(data.json());
            });
          });
        });
      });
      rl.close();
    } else if (entered == 3) {
    } else {
      console.log("Invalid Reponse");
    }
  });
};

// let k = 3;
// while (k > 0) {
//   console.log(k);
getInput();
//   k--;
// }
