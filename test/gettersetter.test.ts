describe("Getters and Setters", () => {
  class Category {
    _name?: string;
    get name(): string {
      if (this._name) {
        return this._name;
      } else {
        return "empty";
      }
    }

    set name(value: string) {
      if (value !== "") {
        this._name = value;
      }
    }
  }
  it("should support in class", () => {
    const category = new Category();
    category.name = "Food";
    console.info(category.name);
    category.name = "";
  });
});
