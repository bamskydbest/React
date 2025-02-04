import "./App.css";
import First from "./components/First";
import Button from "./components/Button";
import Second from "./components/Second";
import Reigion from "./components/Reigion";
import Last from "./components/Last";

function App() {
  // Trying out Module5 classes
  // Array Methods

  const oneInnovationHubStaffs = [
    "Lawal Kolawole",
    "Oyewale Feranmi",
    "Sanusi Sanusi",
    "Mahmoud Abdulmajeed",
    "Oluwaseun Olanipekun",
    "Abayomi Abdulafeez",
    "Bakare Rukayat",
  ];

  // Push Method
  // Push Method add to the back of the array

  oneInnovationHubStaffs.push("Taoeek Olatinwo");
  oneInnovationHubStaffs.push("Olatinwo Rofiat");
  oneInnovationHubStaffs.push("Olatinwo Saidat");

  // Pop Method
  // Pop Method removes from the back of an array

  oneInnovationHubStaffs.pop();
  oneInnovationHubStaffs.pop();

  // Shift Method
  // Shift Method will remove the front of an array

  oneInnovationHubStaffs.shift();
  oneInnovationHubStaffs.shift();

  // Unshift Method
  // Unshift Method will add to the front of an array

  oneInnovationHubStaffs.unshift("Kolade Zainab");
  oneInnovationHubStaffs.unshift("Olasunkanmi Uswat");

  // Slice Method
  //

  const slicer = oneInnovationHubStaffs.slice(1);
  const sliced = oneInnovationHubStaffs.slice(4, 6);

  // Object and Dot Notation

  const myInformation = {
    name: "Mahmoud Abdulmajeed Taiye",
    skills: "UI/UX Designer , Front-End Web Developer , Screen Writer",
    twitter: "Aladagbangba",
    hobbies: "Football , Video Games ",
    religion: "Islam",
    race: "Black",
    height: "6ft8",
    gender: true,
  };

  let sex;

  if (myInformation.gender === true) {
    sex = "Male";
  } else {
    sex = "Female";
  }

  // Array Object

  const webResults = [
    {
      id: 1,
      name: "Slowburnah",
      number: "34",
    },
    {
      id: 56,
      name: "Abayomi",
      number: "100",
    },
    {
      id: 40,
      name: "Bamsky_dbest",
      number: "1000",
    },
  ];

  return (
    <div className="cont">
      <First />
      <Button />
      <Second />
      <Reigion />
      <Last />
      <div>
        <p>
          Check the array of One Innovation Hub , Offa Staffs{" "}
          {oneInnovationHubStaffs}
        </p>
        <p>
          This is the part we check the slice method with slicer variabe , now
          let us see the staffs we have for duty today : {slicer}
        </p>
        <p>
          Now let us have double command in the slice method to see the outcome
          : {sliced}
        </p>
      </div>
      <div>
        <p>My name is {myInformation.name}</p>
        <p>My twitter handle is @{myInformation.twitter}</p>
        <p>My skillsets are {myInformation.skills}</p>
        <p>
          My religion is {myInformation.religion} and i love to play{" "}
          {myInformation.hobbies}
        </p>
        <p>
          My race is {myInformation.race} and i am {myInformation.height} tall.
        </p>
        <p>My gender is {sex}</p>
        <p>
          {" "}
          This data was extracted from the server database and this should show
          the name {webResults[2].name} with number {webResults[2].number}
        </p>
      </div>
    </div>
  );
}

export default App;
