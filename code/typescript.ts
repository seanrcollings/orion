import fs from "fs";

class Thing {
  get foo() {
    return "hi";
  }

  doThing() {}
}

const thing = new Thing();
thing.doThing();

export default function foo() {
  console.log("hi there");
}
