/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#button1").addEventListener("click", () => {
    document.querySelector("#domaingenerator").innerHTML = generateDomain();
  });

  let generateDomain = () => {
    let pronoun = ["our", "the", "a"];
    let adj = ["best", "great", "amazing"];
    let subject = ["jogger", "mailman", "artist"];
    let extensions = [".com", ".io", ".ext"];
    let domain = [];

    for (let i = 0; i < pronoun.length; i++) {
      for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < subject.length; k++) {
          for (let l = 0; l < extensions.length; l++) {
            domain.push(
              "www." + pronoun[i] + adj[j] + subject[k] + extensions[l]
            );
          }
        }
      }
    }
    return domain;
  };
};
