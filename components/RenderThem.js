import loadable from "@loadable/component";

const CompOne = loadable(() => import("./CompOne"));
const CompTwo = loadable(() => import("./CompTwo"));
const CompThree = loadable(() => import("./CompThree"));
const CompFour = loadable(() => import("./CompFour"));
const CompFive = loadable(() => import("./CompFive"));
const CompSix = loadable(() => import("./CompSix"));
const CompSeven = loadable(() => import("./CompSeven"));
const CompEight = loadable(() => import("./CompEight"));
const CompNine = loadable(() => import("./CompNine"));
const CompTen = loadable(() => import("./CompTen"));

export default function RenderThem() {
  return (
    <div>
      <CompOne />
      <CompTwo />
      <CompThree />
      <CompFour />
      <CompFive />
      <CompSix />
      <CompSeven />
      <CompEight />
      <CompNine />
      <CompTen />
    </div>
  );
}
