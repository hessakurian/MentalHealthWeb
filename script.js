var factList= [
  "Low-income families are less likely to receive treatment from qualified mental health centers, and 53% of people who did not go for help were from low-income households.",  

  "The American Psychiatric Association issued a 2022 national poll that revealed that mental health stigma is still a major problem in many workplaces. Only 48% of workers say they can openly discuss their mental health problems in front of supervisors and others. The percentage has been declining over the years.", 

  "A research study by Collins et al. found that campaigns against social stigma effectively increased the number of people who started to understand their symptoms and that help is always available.",

  "One of the most common public stigma is that people who have mental health issues are dangerous and violent." ,

  "A 2020 study by Scarf et. al found a positive link between viewing the movie Joker and having a prejudice towards people with mental health issues.", 

  "According to Lin & Cheung (1999), Asian patients are more likely to report their physical symptoms, more than emotional symptoms. But when questioned further, they will admit to having emotional struggles.",  

  "A study conducted in Great Britain found that patients with schizophrenia who returned home from treatment and were met with family member’s criticism or hostility were more likely to relapse.", 

];

var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count= 0;

if (myButton) {
  myButton.addEventListener("click", displayFact);
}

function displayFact () {
  fact.innerHTML= factList [count];
  count++;
  if (count== factList.length) {
    count=0;
  }
}
