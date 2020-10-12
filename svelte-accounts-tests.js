// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by svelte-accounts.js.
import { name as packageName } from "meteor/tylerthompson:svelte-accounts";

// Write your tests here!
// Here is an example.
Tinytest.add('svelte-accounts - example', (test) => {
  test.equal(packageName, "svelte-accounts");
});
