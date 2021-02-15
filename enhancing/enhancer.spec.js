const enhancer = require("./enhancer.js");
// test away!
describe("Testing the Enhancer system", () => {
  it("Test the repair function...", () => {
    const inputItem = {
      name: "Stargazer",
      durability: 10,
      enhancement: 17,
    };

    const expectedItem = {
      name: "Stargazer",
      durability: 100,
      enhancement: 17,
    };

    const actualItem = enhancer.repair(inputItem);

    expect(actualItem.durability).toBe(expectedItem.durability);
    expect(actualItem.enhancement).toBe(expectedItem.enhancement);
    expect(actualItem.name).toBe(expectedItem.name);
  });
  it("Test the success function #1...", () => {
    const inputItem = {
      name: "Stargazer",
      durability: 10,
      enhancement: 17,
    };

    const expectedItem = {
      name: "Stargazer",
      durability: 10,
      enhancement: 18,
    };

    const actualItem = enhancer.success(inputItem);

    expect(actualItem.durability).toBe(expectedItem.durability);
    expect(actualItem.enhancement).toBe(expectedItem.enhancement);
    expect(actualItem.name).toBe(expectedItem.name);
  });
  it("Test the success function #2...", () => {
    const inputItem = {
      name: "Stargazer",
      durability: 65,
      enhancement: 20,
    };

    const expectedItem = {
      name: "Stargazer",
      durability: 65,
      enhancement: 20,
    };

    const actualItem = enhancer.success(inputItem);

    expect(actualItem.durability).toBe(expectedItem.durability);
    expect(actualItem.enhancement).toBe(expectedItem.enhancement);
    expect(actualItem.name).toBe(expectedItem.name);
  });
  it("Test the success function #3...", () => {
    const inputItem = {
      name: "Stargazer",
      durability: 40,
      enhancement: 0,
    };

    const expectedItem = {
      name: "Stargazer",
      durability: 40,
      enhancement: 1,
    };

    const actualItem = enhancer.success(inputItem);

    expect(actualItem.durability).toBe(expectedItem.durability);
    expect(actualItem.enhancement).toBe(expectedItem.enhancement);
    expect(actualItem.name).toBe(expectedItem.name);
  });
  it("Test the fail function #1...", () => {
    const inputItem = {
      name: "Stargazer",
      durability: 55,
      enhancement: 18,
    };

    const expectedItem = {
      name: "Stargazer",
      durability: 45,
      enhancement: 17,
    };

    const actualItem = enhancer.fail(inputItem);

    expect(actualItem.durability).toBe(expectedItem.durability);
    expect(actualItem.enhancement).toBe(expectedItem.enhancement);
    expect(actualItem.name).toBe(expectedItem.name);
  });
  it("Test the fail function #2...", () => {
    const inputItem = {
      name: "Stargazer",
      durability: 55,
      enhancement: 14,
    };

    const expectedItem = {
      name: "Stargazer",
      durability: 50,
      enhancement: 14,
    };

    const actualItem = enhancer.fail(inputItem);

    expect(actualItem.durability).toBe(expectedItem.durability);
    expect(actualItem.enhancement).toBe(expectedItem.enhancement);
    expect(actualItem.name).toBe(expectedItem.name);
  });
  it("Test the fail function #3...", () => {
    const inputItem = {
      name: "Stargazer",
      durability: 55,
      enhancement: 17,
    };

    const expectedItem = {
      name: "Stargazer",
      durability: 45,
      enhancement: 16,
    };

    const actualItem = enhancer.fail(inputItem);

    expect(actualItem.durability).toBe(expectedItem.durability);
    expect(actualItem.enhancement).toBe(expectedItem.enhancement);
    expect(actualItem.name).toBe(expectedItem.name);
  });
  it("Test the fail function #4...", () => {
    const inputItem = {
      name: "Stargazer",
      durability: 0,
      enhancement: 5,
    };

    const expectedItem = {
      name: "Stargazer",
      durability: 0,
      enhancement: 5,
    };

    const actualItem = enhancer.fail(inputItem);

    expect(actualItem.durability).toBe(expectedItem.durability);
    expect(actualItem.enhancement).toBe(expectedItem.enhancement);
    expect(actualItem.name).toBe(expectedItem.name);
  });
});
