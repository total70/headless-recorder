export default class Action {
  constructor(name, selector, value) {
    this._name = name;
    this._selector = selector;
    this._value = value;
  }

  getAction() {
    const step = {
        action: this._name,
        selector: this._selector,
      };

      if (this._value) {
        step['value'] = this._value;
      }
      return JSON.stringify(step);
  }
}